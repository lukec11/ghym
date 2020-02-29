require("dotenv").config();
const url = require("url");
const path = require("path")
const {shell, app, BrowserWindow, protocol } = require("electron")
const express = require("express")
const server = express();
const {PythonShell} = require("python-shell");

server.use(express.json())

server.post("/python",(req, res) => {
	console.log(req.body)
	var output;
	PythonShell.runString(req.body.code,null, (err,out) => {
		output = out ? out : err;
		res.send({out:output})
	})
})

server.listen(7838, () => console.log("Listening"))

let win
function createWindow () {

	win = new BrowserWindow({
		width: 800,
		height: 600,
		minHeight:300,
		minWidth:300,
		webPreferences: {
			nodeIntegration: true
		}
	})
	if (process.env.NODE_ENV !== "dev") {
				win.loadURL(url.format({
				pathname: 'index.html',    
				protocol: 'file',
				slashes: true
		}))
	 } else {
			 win.loadURL("http://localhost:3000");
			 win.webContents.openDevTools();
	 }

	win.on('closed', () => {
		win = null
	})
}
app.on('ready', () => {
		protocol.interceptFileProtocol('file', (request, callback) => {
				const url = request.url.substr(7)
				callback({ path: path.normalize(`${__dirname}/out/${url}`) })
		}, (err) => {
				if (err) console.error('Failed to register protocol')
		})
		createWindow();
		var wc = win.webContents;

		wc.on('will-navigate', function(e, url) {
				e.preventDefault();
				shell.openExternal(url);
		})
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})