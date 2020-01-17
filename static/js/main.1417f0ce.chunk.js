(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){e.exports=a(48)},37:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),o=a(23),c=(a(37),a(3)),l=a(4),m=a(6),u=a(5),p=a(7),h=(a(12),a(13),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"contacts",id:"contacts"},r.a.createElement("h3",null," Get in touch "),r.a.createElement("section",{className:"contactsList"},r.a.createElement("a",{href:"mailto: kkwsin@gmail.com"},"kkwsin@gmail.com"),r.a.createElement("a",{href:"https://www.linkedin.com/in/karensin94/"},"Linkedin"),r.a.createElement("a",{href:"https://github.com/karensin"},"Github"),r.a.createElement("a",{href:"https://angel.co/karen-kaweng-sin"},"Angel.co"))),r.a.createElement("footer",null,"Karen Sin 2019"))}}]),t}(n.Component)),d=a(11),b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.HashLink,{to:"/#contacts"},"Contact")),r.a.createElement("li",null,r.a.createElement(d.HashLink,{to:"/about"},"About Me")),r.a.createElement("li",null,r.a.createElement(d.HashLink,{to:"/#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(d.HashLink,{to:"/#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement(d.HashLink,{to:"/"}," Home ")," "))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:this.props.className+" intro-header"},r.a.createElement("div",{className:"headerBG",style:{background:'url("'.concat("/portfolio2019/images/header.jpeg",'") no-repeat fixed center / cover')}},r.a.createElement("div",{className:"headerShadow"})),r.a.createElement(b,null),this.props.children)}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{className:"about-header intro-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"KAREN SIN"),r.a.createElement("h4",null,"Developer | Web Designer | Data Analyst"),r.a.createElement("h2",{className:"pageTitle"},"About Me")))),r.a.createElement("section",{className:"aboutmeSection"},r.a.createElement("h3",{className:"titleName"},"Experience... "),r.a.createElement("p",{className:"aboutme"},"I am a web designer/ developer /former data analyst based in San Francisco, California. I am passionate in frontend development and technology. My goals are to focus on typography and create simple and user friendly UI/UX experience. My experience at Apple allowed me to work and improve as a team player. I worked closely with designers on new map features which included planning out workflows on the delivery of the features to maximize discoverability, interface behaviors, and how information is being navigated and displayed. I built analytics dashboards with PostgreSQL, ArcGIS, and QGIS to report on traffic and road alterations via large datasets."),r.a.createElement("h3",{className:"titleName"},"Values... "),r.a.createElement("p",{className:"aboutme "},"Growing up from a traditional Chinese family, my parents taught me to be someone that is responsible, empathic and respect others. With the morals and values they taught me, it has helped me in growing to be a great team player and a leader. I was the president of an animal welfare club and led a group 35 students to learn and educate others on animal rights and welfare, rehabilitating strays / abandoned companion animals back to the society. I am also an active lead in both Solano animal shelter and San Francisco SPCA in rehabilitating companion animals.")))}}]),t}(n.Component),g=a(51),j=a(52),v=a(53),y=(a(26),a(30)),k=a.n(y),N=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"square"},r.a.createElement("a",{href:this.props.linkSrc,className:this.props.className,style:{width:"300px",height:"300px",backgroundImage:"url("+this.props.imgSrc+")"}},r.a.createElement("div",{className:"projectName"},this.props.projName)),this.props.children)}}]),t}(n.Component),w=k()()(N),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"projectsWrapper"},r.a.createElement("section",{className:"projects",id:"projects"},r.a.createElement(g.a,{fluid:!0},r.a.createElement(j.a,{className:"projectsBox"},r.a.createElement(v.a,null,r.a.createElement(w,{className:"projectBox",imgSrc:"/portfolio2019/images/MeeseeksBox.jpg",linkSrc:"https://www.facebook.com/meeseeksBox2019",projName:"Meeseeks Bot"},r.a.createElement("p",{className:"description"},"Meeseeks bot is a messenger bot that is designed to perform automated voice and text message responses. This technology required webhooks for token verification and special features to make the user experience more entertaining and exciting."))),r.a.createElement(v.a,null,r.a.createElement(w,{className:"projectBox",imgSrc:"/portfolio2019/images/bloccit.jpg",linkSrc:"https://karensin-bloccit.herokuapp.com/",projName:"Bloccit"},r.a.createElement("p",{className:"description"},"An Application that uses the Model-View-Controller Pattern (MVC) to handle a seperation of concerns, allowing easier manipulation in sections and functionality. Application utilizes ExpressJS - Middleware to perform authentication and validation which allows users to sign up, sign in and create topics, posts, comments and votes amongst others."))),r.a.createElement(v.a,null,r.a.createElement(w,{className:"projectBox",imgSrc:"/portfolio2019/images/Chatty.png",linkSrc:"https://chat-ty.herokuapp.com/",projName:"Chatty"},r.a.createElement("p",{className:"description"},"An application based on Firebase (BaaS) that authenticate users using Google sign-in, sends and recieves messages in real time"))),r.a.createElement(v.a,null,r.a.createElement(w,{className:"projectBox",imgSrc:"/portfolio2019/images/musicPlayer.jpg",linkSrc:"https://jams-ksin.herokuapp.com/",projName:"MusicPlayer"},r.a.createElement("p",{className:"description"},"A music player made using React Router to create a Single-Page Application to handle client-side page transitions")))))))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume",id:"resume"},r.a.createElement("article",null,r.a.createElement("img",{alt:"resume page 1",className:"resumePage",src:"/portfolio2019/images/KarenResume1.jpg"}),r.a.createElement("img",{alt:"resume page 2",className:"resumePage",src:"/portfolio2019/images/KarenResume2.jpg"})))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(f,{className:"home-header intro-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null," KAREN SIN "),r.a.createElement("h4",null," Developer | Web Designer | Data Analyst "),r.a.createElement(d.HashLink,{to:"/#contacts",className:"btn"},"Let's Collab!")))),r.a.createElement("div",{className:"projBGBG",style:{background:'url("'.concat("/portfolio2019/images/projects_background.jpg",'") no-repeat center / cover')}},r.a.createElement("div",{className:"projBGShadow"},r.a.createElement("img",{className:"projBG",src:"/portfolio2019/images/projects_background.jpg"}))),r.a.createElement(O,null),r.a.createElement(S,null))}}]),t}(n.Component),B=(a(46),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bubble",style:{left:this.props.x,top:this.props.y,transform:"scale("+this.props.size+")"}})}}]),t}(n.Component)),M=a(27),C=a(21);function A(e,t){return Math.random()*(t-e)+e}var I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={x:0,y:0,bubbles:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"_onMouseMove",value:function(e){var t=+new Date;if(t>this.state.lastBubbleStamp+A(50,1e3)){var a=Math.random()>.5?-1:1;this.state.bubbles.push({x:e.clientX,y:e.clientY,size:A(.02,.14),direction:a,lastTurnTime:t,lastGrowTime:t}),this.setState({lastBubbleStamp:t})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateBubbles",value:function(){if(this.state){var e=+new Date,t=this.state.bubbles.map(function(t){var a=t.direction,n=t.lastTurnTime,r=t.lastGrowTime,s=t.size;return e>n+A(2e3,6e3)&&(a=-a,n=e),e>r+A(100,200)&&(r=e,s+=A(.001,.003)),t.y<0?null:{x:t.x+.3*a,y:t.y-2.5,size:s,direction:a,lastTurnTime:n,lastGrowTime:r}}).filter(function(e){return null!==e});this.setState({bubbles:t})}}},{key:"componentDidMount",value:function(){this.setState({lastBubbleStamp:+new Date}),this.interval=setInterval(this.updateBubbles.bind(this),20)}},{key:"render",value:function(){var e=this.state.bubbles.map(function(e,t){return r.a.createElement(B,{x:e.x,y:e.y,size:e.size,key:t})});return r.a.createElement("div",{className:"App",onMouseMove:this._onMouseMove.bind(this)},r.a.createElement("div",{className:"bob"},e),r.a.createElement(o.a,{basename:"/portfolio2019"},r.a.createElement(M.a,null,r.a.createElement(C.a,{path:"/about",component:E}),r.a.createElement(C.a,{path:"/resume",component:S}),r.a.createElement(C.a,{path:"/",component:x}))),r.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,{basename:"/portfolio2019"},r.a.createElement(M.a,null,r.a.createElement(C.a,{path:"/",component:I}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.1417f0ce.chunk.js.map