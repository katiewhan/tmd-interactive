import '../styles/Tips.css';

function Tips() {
  return (
    <div className='tips'>
        <div className='tips-title bold'>Quick Tips To Become a Smarter WhatsApp User</div>
        <a href='#pause'><div className='tips-button'><img src='./ellipse-pause.png'></img><div>PAUSE</div></div></a>
        <a href='#verify'><div className='tips-button'><img src='./ellipse-verify.png'></img><div>VERIFY</div></div></a>
        <a href='#flag'><div className='tips-button'><img src='./ellipse-flag.png'></img><div>FLAG</div></div></a>
        <br></br><br></br><br></br>

        <div className='tips-heading' id='pause'>
            <img src='./ellipse-pause.png'></img>
            <div className='bold'>1. PAUSE</div>
        </div>
        <div className='tips-subheading'>Think Twice Before Forwarding</div>
        <div className='tips-text'>As the creators of WhatsApp remind us, "think twice before forwarding"! You may find yourself forwarding content to your WhatsApp groups without thinking much about it (or at all), only to realize that the image, message, or video you sent was either fact checked and debunked or removed. Take two minutes to think before you pass any media onto others, it will spare everyone from potential confusion, chaos, or offense! Be weary of content that has been "forwarded many times" as WhatsApp notes on messages now, as it may be inaccurate even if it has been viewed and shared by many users.</div>
        <div className='tips-subheading'>Take a Break</div>
        <div className='tips-text'>It is OK to take a break from WhatsApp. Although many of us rely on it to stay connected to our friends, family, and colleagues living nearby or afar, it can be exhausting to read or stay up to date with every message that comes our way. Many of us face a steady stream of media that flows our way daily — we all know that person in a group chat that sends "good morning" messages everyday without fail. It is healthy to set a limit on the amount of time you spend on WhatsApp or other social media platforms everyday, especially if you consume content without thinking frequently or scroll through media endlessly. If you find yourself using WhatsApp too much, you can change your status to idle or busy, mute your notifications, or let others know you will get back to them soon!</div>
        <div className='tips-subheading'>Check In With Yourself</div>
        <div className='tips-text'>Check in with yourself about how the content makes you feel. Does it evoke any extreme emotions or strong reactions? Most "click bait" is content designed to capture the attention of users with a sensational or scandalous headline or tag, encouraging them to keep looking at similar content. If you find that a piece of content is trying to influence you, compelling you to change your views (about health, science, politics, religion, or culture), or selling you a cure (non-medical or medical) or access to one, try to ground your judgement by doing your own research, thinking critically, and finding scientifically or medically-backed information before making any decisions.</div>

        <div className='tips-heading' id='verify'>
            <img src='./ellipse-verify.png'></img>
            <div className='bold'>2. VERIFY</div>
        </div>
        <div className='tips-subheading'>Be Curious</div>
        <div className='tips-text'>Anyone can upload content to WhatsApp and it can be forwarded thousands of times before it is ever fact checked, if it is verified at all. It is healthy and wise to verify content on WhatsApp, even if your mother, sister, niece, uncle, cousin, or best friend sent it to you!</div>
        <div className='tips-text'>Ask yourself these questions when you encounter a forwarded message on WhatsApp:</div>
        <ul>
            <li className='tips-text'>Who was the content created by? Does the source have a good reputation? Do they (the organization, company, or inliidual) have the authority and expertise to publish it?</li>
            <li className='tips-text'>When was the content created? Is it outdated or current?</li>
            <li className='tips-text'>Do the logo and message seem authentic or edited?</li>
            <li className='tips-text'>Where was the content created? How did it spread online (does it appear on social media or other websites)?</li>
            <li className='tips-text'>What are the motivations of the creator (sales or views)?</li>
        </ul>
        <div className='tips-subheading'>When In Doubt, Double Check — Fact Check!</div>
        <div className='tips-text'>While debunking false or misleading information can take a lot of time and energy, it is still important to fact check content on WhatsApp, especially if it seems suspicious or promises to improve your health. The quickest way to do a fact check is a Google or YouTube search to see if any other details about the content are available online. However, these search results can also lead you further down a rabbit hole of misinformation and forwarded content. The fact checking resources shared on this website are good places to start — all you have to do is double check when in doubt!</div>
        <div className='tips-subheading'>Reverse Image Search</div>
        <div className='tips-text'>You can use a reverse image search tool such as TinEye to find where else an image appears online. This can be helpful in tracing the source of an image that has been forwarded many times, and reveal whether it has been debunked or removed by other platforms.</div>
    
        <div className='tips-heading' id='flag'>
            <img src='./ellipse-flag.png'></img>
            <div className='bold'>3. FLAG</div>
        </div>
        <div className='tips-text'>If you notice that a user (any individual, company, or organization) is using WhatsApp to spread misinformation, you can report them to the app by opening the chat, tapping on the contact to open their profile information, and scrolling to the bottom and tapping "Report Contact" or "Report Group." WhatsApp will receive the most recent messages sent to you by the user or group, as well as information about your recent interactions with the user. You can also save and share the content with fact checkers or local law enforcement.</div>
    </div>
  );
}

export default Tips;
