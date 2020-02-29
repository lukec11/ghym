require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const WorkerSchema = require("./schema/Worker")
const JobScheme = require("./schema/Job")
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.json())
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true ,useUnifiedTopology: true})
var Worker = mongoose.model('Workers', WorkerSchema);
var Job = mongoose.model('Jobs', JobScheme);

const JobWatch = Job.watch().on('change', data => {
    if (data.fullDocument) {
        Worker.findOne({ram: {$gte : data.fullDocument.ram}}).exec((err,res) => {
            if (res) {
                io.to(res.peer_id).emit("job",{code:data.fullDocument.code})
            }
        })
    }
});

const WorkerWatch = Worker.watch().on('change', data => {
    if (data.fullDocument) {
        Job.findOne({ram: {$lt : data.fullDocument.ram}}).exec((err,res) => {
            if (res) {
                io.to(data.fullDocument.peer_id).emit("job",{code:res.code})
                console.log("hi")
            }
        })
    }
});

io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        Worker.find({peer_id:socket.id}).remove().exec()
        Job.find({peer_id:socket.id}).remove().exec()
    })
})

app.get("/", (req,res) => {
    res.send('Heyo! Server is up and running! Be sure to check Ghym out soon!')
})

app.post("/new_node", (req, res) => {
    var new_worker = new Worker({name:req.body.name,ram:req.body.ram,is_running:false,peer_id:req.body.peer_id})
    new_worker.save();
    res.send({id:new_worker.id})
})

app.post("/deactivate_node", (req, res) => {
    Worker.findById(req.body.id).remove().exec()
    res.sendStatus(200)
})

app.post("/queue_job", (req, res) => {
    Job.create({job_name:req.body.name,peer_id:req.body.id,is_running:false,ram:req.body.ram,code:req.body.code,peer_id:req.body.peer_id})
    res.sendStatus(200)
})
http.listen(3000, () => console.log("Up and running on port 3000!!!"))