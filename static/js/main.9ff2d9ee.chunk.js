(this["webpackJsonptmd-website"]=this["webpackJsonptmd-website"]||[]).push([[0],{12:function(e,s,t){},13:function(e,s,t){},15:function(e,s,t){"use strict";t.r(s);var i=t(1),c=t.n(i),a=t(3),r=t.n(a),n=(t(12),t(13),t(4)),u=t(5),l=t(7),o=t(6),d=t(0),m=[{src:"./images/transmission-slide11.png",credible:!0},{src:"./images/rasam.jpg",credible:!1},{src:"./images/lungs.gif",credible:!1},{src:"./images/covid-garlic.jpg",credible:!0},{src:"./images/survival.png",credible:!1},{src:"./images/wuhan-garlic.jpg",credible:!1},{src:"./images/lemon.png",credible:!1},{src:"./images/fatality-rate.png",credible:!0}],b=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){var e;return Object(n.a)(this,t),(e=s.call(this)).state={currentIndex:0,totalGuesses:0,correctGuesses:0,guessed:!1},e}return Object(u.a)(t,[{key:"guessOnClick",value:function(e){var s=this;this.setState({guessed:!0});var t=this.state.correctGuesses;m[this.state.currentIndex]&&m[this.state.currentIndex].credible==e&&t++,setTimeout((function(){s.setState({correctGuesses:t,totalGuesses:s.state.totalGuesses+1,currentIndex:s.state.currentIndex+1,guessed:!1})}),3e3)}},{key:"renderImage",value:function(){return this.state.currentIndex<m.length?Object(d.jsxs)("div",{className:"image-wrapper",children:[Object(d.jsxs)("div",{className:"guess-image ".concat(this.state.guessed?"flip-image":""),children:[Object(d.jsx)("img",{src:m[this.state.currentIndex].src}),Object(d.jsx)("div",{className:"image-back",children:m[this.state.currentIndex].credible?"CREDIBLE!":"NOT CREDIBLE!"})]}),Object(d.jsxs)("div",{className:"buttons ".concat(this.state.guessed?"hide-buttons":""),children:[Object(d.jsx)("div",{className:"guess-button credible",onClick:this.guessOnClick.bind(this,!0),children:"CREDIBLE"}),Object(d.jsx)("div",{className:"guess-button not-credible",onClick:this.guessOnClick.bind(this,!1),children:"NOT CREDIBLE"})]})]}):Object(d.jsx)("div",{className:"image-wrapper",children:"That's all we have!"})}},{key:"renderScore",value:function(){return this.state.totalGuesses>0?Object(d.jsxs)("div",{children:["You guessed ",this.state.correctGuesses," correctly out of ",this.state.totalGuesses," total images!"]}):null}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"interactive",children:[this.renderImage(),this.renderScore()]})}}]),t}(c.a.Component);var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h2",{children:"Can you tell credible content apart from others?"}),Object(d.jsx)(b,{})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h2",{children:"How to be a smarter WhatsApp User"}),Object(d.jsx)("div",{className:"info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(d.jsx)("div",{className:"info",children:"Nascetur ridiculus mus mauris vitae. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet justo donec enim. Justo donec enim diam vulputate ut pharetra. Purus ut faucibus pulvinar elementum. Non tellus orci ac auctor. Et sollicitudin ac orci phasellus egestas tellus rutrum. Duis at consectetur lorem donec massa. Lectus arcu bibendum at varius. Sed faucibus turpis in eu mi bibendum. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Gravida dictum fusce ut placerat orci. Sed arcu non odio euismod lacinia. Tempus iaculis urna id volutpat lacus. Eu facilisis sed odio morbi. Porttitor eget dolor morbi non. Accumsan lacus vel facilisis volutpat est velit egestas dui. Nullam vehicula ipsum a arcu cursus vitae congue."})]})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(s){var t=s.getCLS,i=s.getFID,c=s.getFCP,a=s.getLCP,r=s.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.9ff2d9ee.chunk.js.map