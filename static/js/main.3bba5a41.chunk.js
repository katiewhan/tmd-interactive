(this["webpackJsonptmd-website"]=this["webpackJsonptmd-website"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(3),r=s.n(n),c=(s(13),s(6)),o=(s(14),s(4)),l=s(5),h=s(8),d=s(7),u=(s(15),s(0)),b=[{src:"./images/rasam.jpg",credible:!1,explanation:'This is a false and misleading forwarded message advertising an "Antidote For Wuhan Virus." \n        It claims a popular herbal soup of South Indian origin (called rasam) protected Indians living in Malaysia against COVID-19. \n        A Google search reveals that he has a bias against modern-day medicine and does not have the authority or expertise to offer a cure for COVID-19. \n        Always ask yourself whether the source is reputable or not, and what the motivations of the author might be?'},{src:"./images/lungs.gif",credible:!1,explanation:'This is a false and misleading forwarded message that suggests that holding your breath for 30 seconds is an indicator that you do not have COVID-19. \n        A Google search for "The Sage Group India" reveals that the creator is actually a conglomerate based in Bhopal that has enterprises in construction, education, and power. \n        This is not a reputable or trustworthy source for information on preventing COVID-19, and the message is not scientifically or medically-backed.'},{src:"./images/transmission-slide11.png",credible:!0,explanation:"The WHO is a reputable source to turn to for accurate information about COVID-19. Before you follow any advice from this type of content, check to see that it came from a source with the authority and expertise to make decisions about the subject, in this case the WHO about international public health. This type of file can be downloaded and edited by anyone easily, so be careful to note if the logo or message looks altered."},{src:"./images/survival.png",credible:!1,explanation:'Although at first glance this forwarded message may seem factual since it includes percentages (%), \n        the figures are inaccurate and this content has been debunked. A reverse image search leads to an article in thejournal.ie, \n        a reputable internet publication in Ireland that also runs a fact checking operation.\n        A "survival rate" for Covid-19 did not exist when the Tweet was initially published.'},{src:"./images/wuhan-garlic.jpg",credible:!1,explanation:"This forwarded message is false and misleading. It claims that an anonymous doctor in China has proven that boiled garlic water can cure COVID-19, \n        and urges users to try it and pass the word on. It has been widely debunked as a hoax by several news and fact checking organizations, \n        including The Times of India and The BBC."}],m=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={state:0,currentIndex:0,correctGuesses:0,guessed:!1,currentGuess:null},e}return Object(l.a)(s,[{key:"guessOnClick",value:function(e){var t=this.state.correctGuesses;b[this.state.currentIndex].credible===e&&t++,this.setState({guessed:!0,currentGuess:e,correctGuesses:t})}},{key:"continueOnClick",value:function(){this.state.currentIndex+1<b.length?this.setState({currentIndex:this.state.currentIndex+1,guessed:!1}):this.setState({state:2})}},{key:"shareOnClick",value:function(){navigator.clipboard.writeText("I got ".concat(this.state.correctGuesses," out of ").concat(b.length," correct on this misinformation quiz! Check it out here: https://katiewhan.github.io/tmd-interactive/"))}},{key:"renderStartPage",value:function(){var e=this;return Object(u.jsxs)("div",{className:"start-page",children:[Object(u.jsx)("div",{className:"interactive-title background",children:"Can you tell credible content apart from others on WhatsApp?"}),Object(u.jsx)("div",{className:"interactive-text",children:"We're going to show you a series of photos that had been spread on WhatsApp and see if you can recognize what information is true and false."}),Object(u.jsx)("div",{className:"interactive-button",onClick:function(){return e.setState({state:1})},children:"OK. Let's Do This."})]})}},{key:"renderTopBar",value:function(){for(var e=[],t=0;t<b.length;t++)t<this.state.currentIndex+1?e.push(Object(u.jsx)("div",{className:"bar solid"},t)):e.push(Object(u.jsx)("div",{className:"bar"},t));return Object(u.jsx)("div",{className:"top-bar",children:e})}},{key:"renderHeading",value:function(){return this.state.guessed?b[this.state.currentIndex].credible===this.state.currentGuess?Object(u.jsx)("div",{className:"interactive-text bold right",children:"Nice, that's right!"}):Object(u.jsx)("div",{className:"interactive-text bold wrong",children:"Oops, that's wrong!"}):Object(u.jsx)("div",{className:"interactive-text bold",children:"Is this information credible?"})}},{key:"renderGuessButtons",value:function(){return this.state.guessed?Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("div",{className:"interactive-button",onClick:this.continueOnClick.bind(this),children:"Continue"})}):Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("div",{className:"guess-button credible",onClick:this.guessOnClick.bind(this,!0),children:"CREDIBLE"}),Object(u.jsx)("div",{className:"guess-button not-credible",onClick:this.guessOnClick.bind(this,!1),children:"NOT CREDIBLE"})]})}},{key:"renderGuess",value:function(){return Object(u.jsxs)("div",{className:"quiz-guess",children:[this.renderTopBar(),this.renderHeading(),Object(u.jsx)("div",{className:"image-wrapper",children:Object(u.jsxs)("div",{className:"guess-image ".concat(this.state.guessed?"flip-image":""),children:[Object(u.jsx)("img",{src:b[this.state.currentIndex].src}),Object(u.jsxs)("div",{className:"image-back",children:[Object(u.jsx)("img",{src:b[this.state.currentIndex].src}),Object(u.jsx)("div",{className:"description",children:b[this.state.currentIndex].explanation})]})]})}),this.renderGuessButtons()]})}},{key:"renderScore",value:function(){var e=(this.state.correctGuesses/b.length*100).toFixed(0);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"interactive-title",children:["Congrats!",Object(u.jsx)("br",{}),"You guessed ",Object(u.jsx)("mark",{children:b.length})," times and got ",Object(u.jsx)("mark",{children:this.state.correctGuesses})," correct, for a score of ",Object(u.jsx)("mark",{children:e})," percent."]}),Object(u.jsx)("div",{className:"interactive-button",onClick:this.shareOnClick.bind(this),children:"Share My Result"})]})}},{key:"render",value:function(){switch(this.state.state){case 0:return this.renderStartPage();case 1:return this.renderGuess();case 2:return this.renderScore();default:return}}}]),s}(i.a.Component);s(17);var j=function(){return Object(u.jsxs)("div",{className:"tips",children:[Object(u.jsx)("div",{className:"tips-title bold",children:"Quick Tips To Become a Smarter WhatsApp User"}),Object(u.jsx)("a",{href:"#pause",children:Object(u.jsxs)("div",{className:"tips-button",children:[Object(u.jsx)("img",{src:"./ellipse-pause.png"}),Object(u.jsx)("div",{children:"PAUSE"})]})}),Object(u.jsx)("a",{href:"#verify",children:Object(u.jsxs)("div",{className:"tips-button",children:[Object(u.jsx)("img",{src:"./ellipse-verify.png"}),Object(u.jsx)("div",{children:"VERIFY"})]})}),Object(u.jsx)("a",{href:"#flag",children:Object(u.jsxs)("div",{className:"tips-button",children:[Object(u.jsx)("img",{src:"./ellipse-flag.png"}),Object(u.jsx)("div",{children:"FLAG"})]})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"tips-heading",id:"pause",children:[Object(u.jsx)("img",{src:"./ellipse-pause.png"}),Object(u.jsx)("div",{className:"bold",children:"1. PAUSE"})]}),Object(u.jsx)("div",{className:"tips-subheading",children:"Think Twice Before Forwarding"}),Object(u.jsx)("div",{className:"tips-text",children:'As the creators of WhatsApp remind us, "think twice before forwarding"! You may find yourself forwarding content to your WhatsApp groups without thinking much about it (or at all), only to realize that the image, message, or video you sent was either fact checked and debunked or removed. Take two minutes to think before you pass any media onto others, it will spare everyone from potential confusion, chaos, or offense! Be weary of content that has been "forwarded many times" as WhatsApp notes on messages now, as it may be inaccurate even if it has been viewed and shared by many users.'}),Object(u.jsx)("div",{className:"tips-subheading",children:"Take a Break"}),Object(u.jsx)("div",{className:"tips-text",children:'It is OK to take a break from WhatsApp. Although many of us rely on it to stay connected to our friends, family, and colleagues living nearby or afar, it can be exhausting to read or stay up to date with every message that comes our way. Many of us face a steady stream of media that flows our way daily \u2014 we all know that person in a group chat that sends "good morning" messages everyday without fail. It is healthy to set a limit on the amount of time you spend on WhatsApp or other social media platforms everyday, especially if you consume content without thinking frequently or scroll through media endlessly. If you find yourself using WhatsApp too much, you can change your status to idle or busy, mute your notifications, or let others know you will get back to them soon!'}),Object(u.jsx)("div",{className:"tips-subheading",children:"Check In With Yourself"}),Object(u.jsx)("div",{className:"tips-text",children:'Check in with yourself about how the content makes you feel. Does it evoke any extreme emotions or strong reactions? Most "click bait" is content designed to capture the attention of users with a sensational or scandalous headline or tag, encouraging them to keep looking at similar content. If you find that a piece of content is trying to influence you, compelling you to change your views (about health, science, politics, religion, or culture), or selling you a cure (non-medical or medical) or access to one, try to ground your judgement by doing your own research, thinking critically, and finding scientifically or medically-backed information before making any decisions.'}),Object(u.jsxs)("div",{className:"tips-heading",id:"verify",children:[Object(u.jsx)("img",{src:"./ellipse-verify.png"}),Object(u.jsx)("div",{className:"bold",children:"2. VERIFY"})]}),Object(u.jsx)("div",{className:"tips-subheading",children:"Be Curious"}),Object(u.jsx)("div",{className:"tips-text",children:"Anyone can upload content to WhatsApp and it can be forwarded thousands of times before it is ever fact checked, if it is verified at all. It is healthy and wise to verify content on WhatsApp, even if your mother, sister, niece, uncle, cousin, or best friend sent it to you!"}),Object(u.jsx)("div",{className:"tips-text",children:"Ask yourself these questions when you encounter a forwarded message on WhatsApp:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"tips-text",children:"Who was the content created by? Does the source have a good reputation? Do they (the organization, company, or inliidual) have the authority and expertise to publish it?"}),Object(u.jsx)("li",{className:"tips-text",children:"When was the content created? Is it outdated or current?"}),Object(u.jsx)("li",{className:"tips-text",children:"Do the logo and message seem authentic or edited?"}),Object(u.jsx)("li",{className:"tips-text",children:"Where was the content created? How did it spread online (does it appear on social media or other websites)?"}),Object(u.jsx)("li",{className:"tips-text",children:"What are the motivations of the creator (sales or views)?"})]}),Object(u.jsx)("div",{className:"tips-subheading",children:"When In Doubt, Double Check \u2014 Fact Check!"}),Object(u.jsx)("div",{className:"tips-text",children:"While debunking false or misleading information can take a lot of time and energy, it is still important to fact check content on WhatsApp, especially if it seems suspicious or promises to improve your health. The quickest way to do a fact check is a Google or YouTube search to see if any other details about the content are available online. However, these search results can also lead you further down a rabbit hole of misinformation and forwarded content. The fact checking resources shared on this website are good places to start \u2014 all you have to do is double check when in doubt!"}),Object(u.jsx)("div",{className:"tips-subheading",children:"Reverse Image Search"}),Object(u.jsx)("div",{className:"tips-text",children:"You can use a reverse image search tool such as TinEye to find where else an image appears online. This can be helpful in tracing the source of an image that has been forwarded many times, and reveal whether it has been debunked or removed by other platforms."}),Object(u.jsxs)("div",{className:"tips-heading",id:"flag",children:[Object(u.jsx)("img",{src:"./ellipse-flag.png"}),Object(u.jsx)("div",{className:"bold",children:"3. FLAG"})]}),Object(u.jsx)("div",{className:"tips-text",children:'If you notice that a user (any individual, company, or organization) is using WhatsApp to spread misinformation, you can report them to the app by opening the chat, tapping on the contact to open their profile information, and scrolling to the bottom and tapping "Report Contact" or "Report Group." WhatsApp will receive the most recent messages sent to you by the user or group, as well as information about your recent interactions with the user. You can also save and share the content with fact checkers or local law enforcement.'})]})};s(18);var p=function(){return Object(u.jsxs)("div",{className:"resources",children:[Object(u.jsx)("div",{className:"resources-title bold",children:"Resources for Fact Checking and More"}),Object(u.jsx)("div",{className:"resources-text",children:"While WhatsApp has announced plans to introduce a fact checking feature that would let users know if a piece of forwarded content has been debunked, it has yet to roll it out at scale."}),Object(u.jsx)("div",{className:"resources-text",children:"Did you know that there are organizations accredited by The International Fact-Checking Network that are dedicated to verifying information around the world? Below you can find a list of resources in your region that can help you verify content on WhatsApp in a number of languages. In addition, AFP Fact Check keeps track of misinformation by country."}),Object(u.jsx)("div",{className:"resources-heading",children:"India"}),Object(u.jsx)("a",{href:"https://www.thip.media/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"THIP Media: The Healthy Indian Project"})}),Object(u.jsx)("div",{className:"resources-text",children:"THIP Media is a fact checking website that focuses on trending health news, claims, and myths in India."}),Object(u.jsx)("a",{href:"https://newschecker.in/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"Newschecker"})}),Object(u.jsx)("div",{className:"resources-text",children:"Newschecker is fact checking website that exposes bias and agendas."}),Object(u.jsx)("a",{href:"https://factcheck.afp.com/fact-checking-search-results?keywords=india",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"AFP Fact Check - India"})}),Object(u.jsx)("div",{className:"resources-heading",children:"Israel"}),Object(u.jsx)("a",{href:"https://thewhistle.globes.co.il/feed",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"The Whistle"})}),Object(u.jsx)("div",{className:"resources-text",children:"The Whistle is Israel's only internationally-accredited fact checking website (as of April 2019)."}),Object(u.jsx)("a",{href:"https://factcheck.afp.com/fact-checking-search-results?keywords=israel",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"AFP Fact Check - Israel"})}),Object(u.jsx)("div",{className:"resources-heading",children:"Singapore"}),Object(u.jsx)("a",{href:"https://blackdotresearch.sg/covid-watch/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"Black Dot Research"})}),Object(u.jsx)("div",{className:"resources-heading",children:"Japan"}),Object(u.jsx)("a",{href:"https://en.fij.info/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"Fact Check Initiative Japan"})}),Object(u.jsx)("div",{className:"resources-heading",children:"Digital Literacy"}),Object(u.jsx)("div",{className:"resources-text",children:"Below is a compilation of online resources geared towards improving digital literacy and combating misinformation spread."}),Object(u.jsx)("a",{href:"https://mediamanipulation.org/definitions",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"The Media Manipulation Casebook"})}),Object(u.jsx)("a",{href:"https://tineye.com/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"Reverse Image Search"})}),Object(u.jsx)("div",{className:"resources-text",children:"TinEye is an easy-to-use reverse image search tool."}),Object(u.jsx)("a",{href:"https://haveibeenpwned.com/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"Data Breach"})}),Object(u.jsx)("div",{className:"resources-text",children:"You can use haveibeenpwned.com to check if your email or phone has been involved in a data breach."}),Object(u.jsx)("a",{href:"https://www.digitalliteracyassessment.org/",target:"_blank",children:Object(u.jsx)("div",{className:"resources-link",children:"Computer, Software, and Using Technology in Daily Life Skills"})})]})};s(19);var g=function(){return Object(u.jsxs)("div",{className:"about",children:[Object(u.jsx)("div",{className:"about-title",children:"A WhatsApp Digital Literacy Guide For Immigrant & Diasporic Communities"}),Object(u.jsx)("div",{className:"about-text",children:"We live in an age of constant connectivity and transnational media flows. This website was designed with an ethnographic approach in mind to help immigrant and diasporic communities deal with increasing misinformation spread on popular encrypted chat apps such as WhatsApp."}),Object(u.jsx)("div",{className:"about-text",children:"While WhatsApp and other private messaging platforms have been powerful in enabling people to maintain relationships overseas and shaping mutual aid efforts prior to and during the COVID-19 crisis, they have also been misused to promote scams, conspiracy theories, digital surveillance, mob violence, and other types of abuse that sow confusion and chaos in the real world."}),Object(u.jsx)("div",{className:"about-text",children:"The problem of misinformation spread on WhatsApp only accelerated with the pandemic, and it is difficult for researchers and organizations to keep track of inaccurate content circulating online, back-and-forth in multiple languages across countries with varying rates of digital literacy."}),Object(u.jsx)("div",{className:"about-text",children:"We hope the activities, tips, and resources provided here empower users to detect false or misleading content on WhatsApp within their personal networks, and to take easy steps to ensure that the information they exchange with friends, family, or strangers is accurate and trustworthy \u2014 ultimately contributing to a healthier public sphere in the long run."}),Object(u.jsx)("div",{className:"about-text",children:Object(u.jsxs)("i",{children:["The website and survey are part of a research project by graduate students at NYU's Interactive Telecommunications Program for Tech, Media, and Democracy. Team members include Katie Han, Aditya Jain, Ami Mehta, and Shira Seri Levi. ",Object(u.jsx)("a",{className:"about-link",href:"https://www.youtube.com/watch?v=fo6wmocSSW0",target:"_blank",children:"Check out the original design prototype for this website here."})]})})]})},f="About",v="Interactive",x="Tips",y="Resources";var O=function(){var e,t=Object(a.useState)(f),s=Object(c.a)(t,2),i=s[0],n=s[1];switch(i){case f:e=Object(u.jsx)(g,{});break;case v:e=Object(u.jsx)(m,{});break;case x:e=Object(u.jsx)(j,{});break;case y:e=Object(u.jsx)(p,{});break;default:e=Object(u.jsx)(g,{})}return Object(u.jsxs)("div",{className:"App ".concat(i),children:[Object(u.jsx)("div",{className:"content ".concat(i),children:e}),Object(u.jsxs)("nav",{className:"nav-bar",children:[Object(u.jsx)("div",{className:"nav-section",onClick:function(){return n(f)},children:f}),Object(u.jsx)("a",{href:"https://4t4yanofw3n.typeform.com/to/lEi6co95",target:"_blank",children:Object(u.jsx)("div",{className:"nav-section",children:"Survey"})}),Object(u.jsx)("div",{className:"nav-section",onClick:function(){return n(v)},children:v}),Object(u.jsx)("div",{className:"nav-section",onClick:function(){return n(x)},children:x}),Object(u.jsx)("div",{className:"nav-section",onClick:function(){return n(y)},children:y})]})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.3bba5a41.chunk.js.map