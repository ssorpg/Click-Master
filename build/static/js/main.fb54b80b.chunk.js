(window["webpackJsonpclick-master"]=window["webpackJsonpclick-master"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){var a={"./Alfonse.png":20,"./Alm Saint-King.png":21,"./Alm.png":22,"./Amelia.png":23,"./Anna.png":24,"./Arvis.png":25,"./Azura Performing Arts.png":26,"./Bartre.png":27,"./Celica Fallen Heroes.png":28,"./Ike Brave Heroes.png":29,"./Lucina Brave Heroes.png":30,"./Takumi Fallen Heroes.png":31};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=19},function(e,t,n){e.exports=n.p+"static/media/Alfonse.950b1c35.png"},function(e,t,n){e.exports=n.p+"static/media/Alm Saint-King.d2deb780.png"},function(e,t,n){e.exports=n.p+"static/media/Alm.d34e7378.png"},function(e,t,n){e.exports=n.p+"static/media/Amelia.916b4dd9.png"},function(e,t,n){e.exports=n.p+"static/media/Anna.3cef0e13.png"},function(e,t,n){e.exports=n.p+"static/media/Arvis.343770db.png"},function(e,t,n){e.exports=n.p+"static/media/Azura Performing Arts.322f8b9d.png"},function(e,t,n){e.exports=n.p+"static/media/Bartre.0042cb51.png"},function(e,t,n){e.exports=n.p+"static/media/Celica Fallen Heroes.0c4378a0.png"},function(e,t,n){e.exports=n.p+"static/media/Ike Brave Heroes.1f4841e4.png"},function(e,t,n){e.exports=n.p+"static/media/Lucina Brave Heroes.62148529.png"},function(e,t,n){e.exports=n.p+"static/media/Takumi Fallen Heroes.6bb5fd4e.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),s=n.n(c),o=(n(16),n(1)),i=n.n(o),u=n(8),l=n(4),p=n(5),m=n(6),d=n(9),f=n(7),g=n(10);n(18);var v=function(e){var t=e.guessResult,n=e.curScore,a=e.topScore;return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"Header-size"},r.a.createElement("h1",{className:"Header-text"},"Click Master"),r.a.createElement("h2",null,t?"You guessed ":"Click an image to start guessing",r.a.createElement("span",{className:"Header-"+t},t?t+"ly":t)),r.a.createElement("h2",{className:"Header-score"},"Current score: ",n," | Top score: ",a)))};var h,k=(h=n(19)).keys().map(h),x=k=k.map(function(e,t){return{src:e,id:t}});n(32);var b=function(e){var t=e.id,n=e.src,a=e.onClick;return r.a.createElement("div",{className:"Image-div",id:t,onClick:a},r.a.createElement("img",{className:"Image-size",src:n,alt:"",id:t}))};n(33);var S=function(e){var t=e.handleGuess,n=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}return e}(x);return r.a.createElement("section",{className:"Section"},n.map(function(e,n){return r.a.createElement(b,{id:e.id,src:e.src,onClick:t,key:n})}))};n(34);var E=function(e){return r.a.createElement("footer",{className:"Footer"})},A=(n(35),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={guessResult:"",curScore:0,topScore:0,clicked:[]},n.handleGuess=function(){var e=Object(l.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,console.log(a.id),-1===n.state.clicked.indexOf(a.id)){e.next=7;break}return e.next=5,n.setState({guessResult:"incorrect",curScore:0,clicked:[]});case 5:e.next=9;break;case 7:return e.next=9,n.setState({guessResult:"correct",curScore:n.state.curScore+1,clicked:[].concat(Object(u.a)(n.state.clicked),[a.id])});case 9:if(!(n.state.topScore<n.state.curScore)){e.next=12;break}return e.next=12,n.setState({topScore:n.state.curScore});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{guessResult:this.state.guessResult,curScore:this.state.curScore,topScore:this.state.topScore}),r.a.createElement(S,{handleGuess:this.handleGuess}),r.a.createElement(E,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.fb54b80b.chunk.js.map