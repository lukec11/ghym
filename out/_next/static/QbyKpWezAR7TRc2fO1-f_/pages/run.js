(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{IzwJ:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return g}));var t=o("0iUn"),c=o("sLSF"),a=o("MI3g"),r=o("a7VT"),i=o("AT/M"),u=o("Tit0"),d=o("vYYK"),l=o("q1tI"),s=o.n(l),m=o("VdAu"),p=(o("YFqc"),o("vDqi")),v=o.n(p),f=o("gFX4"),h=o.n(f),w=o("NYw1"),b=s.a.createElement,g=function(e){function n(){var e,o;Object(t.a)(this,n);for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];return o=Object(a.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(u))),Object(d.a)(Object(i.a)(o),"state",{connect:b(m.f,{fontSize:"3",m:"10px",color:"red"},"Disconnected \ud83d\udc80"),id:"",console:""}),o}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this;return b(m.c,{flexDirection:"column",textAlign:"center"},this.state.connect,b(m.d,{fontSize:[5,6]},"Create A Job!"),b(m.c,{action:"javascript:void(0);",flexDirection:"column",width:["80vw","75vw"],m:"auto",as:"form",id:"form"},b(w.b,{for:"name"},"Name"),b(w.a,{id:"name",name:"name",css:{borderRadius:"3px"},placeholder:"My Job 123"}),b(w.b,{for:"ram"},"Memory"),b(w.c,{id:"ram",name:"ram"},b("option",{value:"1"},"1 GB"),b("option",{value:"2"},"2 GB"),b("option",{value:"3"},"3 GB"),b("option",{value:"4"},"4 GB"),b("option",{value:"5"},"5 GB"),b("option",{value:"6"},"6 GB"),b("option",{value:"7"},"7 GB"),b("option",{value:"8"},"8 GB"),b("option",{value:"9"},"9 GB")),b(w.b,{for:"code"},"Code"),b(w.d,{css:{borderRadius:"3px"},id:"code",name:"code",placeholder:'print("Hello World!")'}),b(m.b,{onClick:function(){v.a.post("https://ghym-server.now.sh/queue_job",{is_running:!1,name:document.getElementById("name").value,id:e.state.id,ram:document.getElementById("ram").value,code:document.getElementById("code").value}),document.getElementById("form").reset()},m:"10px",sx:{":hover":{cursor:"pointer"}}},"Send Away!")),b(w.d,{sx:{bg:"grey",color:"green"},id:"console",placeholder:"Your console!",readOnly:!0}))}},{key:"componentDidMount",value:function(){var e=this,n=h()("https://ghym-server.now.sh/");n.on("connect",(function(){e.setState({connect:b(m.f,{m:"10px",fontSize:"3",color:"green"},"Connected \ud83d\udd0c"),id:n.id})})),n.on("done",(function(e){document.getElementById("console").value="".concat(e.name," has finished with the output: ").concat(e.out.replace(/,/g,"\n"))}))}}]),n}(s.a.Component)},JTUt:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/run",function(){return o("IzwJ")}])}},[["JTUt",1,2,0,3,4,5,6]]]);