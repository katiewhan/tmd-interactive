import '../styles/Resources.css';

function Resources() {
  return (
    <div className='resources'>
        <div className='resources-title bold'>Resources for Fact Checking and More</div>
        <div className='resources-text'>While WhatsApp has announced plans to introduce a fact checking feature that would let users know if a piece of forwarded content has been debunked, it has yet to roll it out at scale.</div>
        <div className='resources-text'>Did you know that there are organizations accredited by The International Fact-Checking Network that are dedicated to verifying information around the world? Below you can find a list of resources in your region that can help you verify content on WhatsApp in a number of languages. In addition, AFP Fact Check keeps track of misinformation by country.</div>
        
        <div className='resources-heading'>India</div>
        <a href='https://www.thip.media/' target='_blank'><div className='resources-link'>THIP Media: The Healthy Indian Project</div></a>
        <div className='resources-text'>THIP Media is a fact checking website that focuses on trending health news, claims, and myths in India.</div>
        <a href='https://newschecker.in/' target='_blank'><div className='resources-link'>Newschecker</div></a>
        <div className='resources-text'>Newschecker is fact checking website that exposes bias and agendas.</div>
        <a href='https://factcheck.afp.com/fact-checking-search-results?keywords=india' target='_blank'><div className='resources-link'>AFP Fact Check - India</div></a>

        <div className='resources-heading'>Israel</div>
        <a href='https://thewhistle.globes.co.il/feed' target='_blank'><div className='resources-link'>The Whistle</div></a>
        <div className='resources-text'>The Whistle is Israel's only internationally-accredited fact checking website (as of April 2019).</div>
        <a href='https://factcheck.afp.com/fact-checking-search-results?keywords=israel' target='_blank'><div className='resources-link'>AFP Fact Check - Israel</div></a>

        <div className='resources-heading'>Singapore</div>
        <a href='https://blackdotresearch.sg/covid-watch/' target='_blank'><div className='resources-link'>Black Dot Research</div></a>

        <div className='resources-heading'>Japan</div>
        <a href='https://en.fij.info/' target='_blank'><div className='resources-link'>Fact Check Initiative Japan</div></a>

        <div className='resources-heading'>Digital Literacy</div>
        <div className='resources-text'>Below is a compilation of online resources geared towards improving digital literacy and combating misinformation spread.</div>
        <a href='https://mediamanipulation.org/definitions' target='_blank'><div className='resources-link'>The Media Manipulation Casebook</div></a>
        <a href='https://tineye.com/' target='_blank'><div className='resources-link'>Reverse Image Search</div></a>
        <div className='resources-text'>TinEye is an easy-to-use reverse image search tool.</div>
        <a href='https://haveibeenpwned.com/' target='_blank'><div className='resources-link'>Data Breach</div></a>
        <div className='resources-text'>You can use haveibeenpwned.com to check if your email or phone has been involved in a data breach.</div>
        <a href='https://www.digitalliteracyassessment.org/' target='_blank'><div className='resources-link'>Computer, Software, and Using Technology in Daily Life Skills</div></a>
    </div>
  );
}

export default Resources;
