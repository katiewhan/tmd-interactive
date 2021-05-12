import React from 'react';

import '../styles/Interactive.css';

const QuizImages = [
    {
        src: './images/rasam.jpg',
        credible: false,
        explanation: `This is a false and misleading forwarded message advertising an "Antidote For Wuhan Virus." 
        It claims a popular herbal soup of South Indian origin (called rasam) protected Indians living in Malaysia against COVID-19. 
        A Google search reveals that he has a bias against modern-day medicine and does not have the authority or expertise to offer a cure for COVID-19. 
        Always ask yourself whether the source is reputable or not, and what the motivations of the author might be?`
    },
    {
        src: './images/lungs.gif',
        credible: false,
        explanation: `This is a false and misleading forwarded message that suggests that holding your breath for 30 seconds is an indicator that you do not have COVID-19. 
        A Google search for "The Sage Group India" reveals that the creator is actually a conglomerate based in Bhopal that has enterprises in construction, education, and power. 
        This is not a reputable or trustworthy source for information on preventing COVID-19, and the message is not scientifically or medically-backed.`
    },
    {
        src: './images/transmission-slide11.png',
        credible: true,
        explanation: 'The WHO is a reputable source to turn to for accurate information about COVID-19. Before you follow any advice from this type of content, check to see that it came from a source with the authority and expertise to make decisions about the subject, in this case the WHO about international public health. This type of file can be downloaded and edited by anyone easily, so be careful to note if the logo or message looks altered.',
    },
    {
        src: './images/survival.png',
        credible: false,
        explanation: `Although at first glance this forwarded message may seem factual since it includes percentages (%), 
        the figures are inaccurate and this content has been debunked. A reverse image search leads to an article in thejournal.ie, 
        a reputable internet publication in Ireland that also runs a fact checking operation.
        A "survival rate" for Covid-19 did not exist when the Tweet was initially published.`
    },
    {
        src: './images/wuhan-garlic.jpg',
        credible: false,
        explanation: `This forwarded message is false and misleading. It claims that an anonymous doctor in China has proven that boiled garlic water can cure COVID-19, 
        and urges users to try it and pass the word on. It has been widely debunked as a hoax by several news and fact checking organizations, 
        including The Times of India and The BBC.`
    },
    // {
    //     src: './images/covid-garlic.jpg',
    //     credible: true,
    // },
    // {
    //     src: './images/lemon.png',
    //     credible: false
    // },
    // {
    //     src: './images/fatality-rate.png',
    //     credible: true
    // }
];

const STARTPAGE = 0;
const GUESSPAGE = 1;
const SCOREPAGE = 2;

class Interactive extends React.Component {
    constructor() {
        super()
        this.state = {
            state: STARTPAGE,
            currentIndex: 0,
            correctGuesses: 0,
            guessed: false,
            currentGuess: null,
        };
    }

    guessOnClick(credible) {
        let correctGuesses = this.state.correctGuesses;
        if (QuizImages[this.state.currentIndex].credible === credible) {
            correctGuesses++;
        }

        this.setState({ guessed: true, currentGuess: credible, correctGuesses: correctGuesses });
    }

    continueOnClick() {
        if (this.state.currentIndex + 1 < QuizImages.length) {
            this.setState({ currentIndex: this.state.currentIndex + 1, guessed: false });
        } else {
            this.setState({ state: SCOREPAGE });
        }
    }

    shareOnClick() {
        navigator.clipboard.writeText(`I got ${this.state.correctGuesses} out of ${QuizImages.length} correct on this misinformation quiz! Check it out here: https://katiewhan.github.io/tmd-interactive/`);
    }

    renderStartPage() {
        return (
            <div className='start-page'>
                <div className='interactive-title background'>Can you tell credible content apart from others on WhatsApp?</div>
                <div className='interactive-text'>We're going to show you a series of photos that had been spread on WhatsApp and see if you can recognize what information is true and false.</div>
                <div className='interactive-button' onClick={() => this.setState({ state: GUESSPAGE })}>OK. Let's Do This.</div>
            </div>
        );
    }

    renderTopBar() {
        const bars = [];
        for (let i = 0; i < QuizImages.length; i++) {
            if (i < this.state.currentIndex + 1) {
                bars.push(<div key={i} className='bar solid'></div>);
            } else {
                bars.push(<div key={i} className='bar'></div>);
            }
        }
        return (
            <div className='top-bar'>
                {bars}
            </div>
        );
    }

    renderHeading() {
        if (!this.state.guessed) {
            return <div className='interactive-text bold'>Is this information credible?</div>
        } else if (QuizImages[this.state.currentIndex].credible === this.state.currentGuess) {
            return <div className='interactive-text bold right'>Nice, that's right!</div>
        } else {
            return <div className='interactive-text bold wrong'>Oops, that's wrong!</div>
        }
    }

    renderGuessButtons() {
        if (!this.state.guessed) {
            return (
                <div className='buttons'>
                    <div className='guess-button credible' onClick={this.guessOnClick.bind(this, true)}>CREDIBLE</div>
                    <div className='guess-button not-credible' onClick={this.guessOnClick.bind(this, false)}>NOT CREDIBLE</div>
                </div>
            );
        } else {
            return (
                <div className='buttons'>
                    <div className='interactive-button' onClick={this.continueOnClick.bind(this)}>Continue</div>
                </div>
            );
        }
    }

    renderGuess() {
        return (
            <div className='quiz-guess'>
                {this.renderTopBar()}
                {this.renderHeading()}
                <div className='image-wrapper'>
                    <div className={`guess-image ${this.state.guessed ? 'flip-image' : ''}`}>
                        <img src={QuizImages[this.state.currentIndex].src}></img>
                        <div className='image-back'>
                            <img src={QuizImages[this.state.currentIndex].src}></img>
                            <div className='description'>{QuizImages[this.state.currentIndex].explanation}</div>
                        </div>
                    </div>
                </div>
                {this.renderGuessButtons()}
            </div>
        );
    }

    renderScore() {
        const score = ((this.state.correctGuesses / QuizImages.length) * 100).toFixed(0);
        return (
            <div>
                <div className='interactive-title'>
                    Congrats!<br></br>You guessed <mark>{QuizImages.length}</mark> times and got <mark>{this.state.correctGuesses}</mark> correct, for a score of <mark>{score}</mark> percent.
                </div>
                <div className='interactive-button' onClick={this.shareOnClick.bind(this)}>Share My Result</div>
            </div>
        );
    }

    render() {
        switch(this.state.state) {
            case STARTPAGE:
                return this.renderStartPage();
            case GUESSPAGE:
                return this.renderGuess();
            case SCOREPAGE:
                return this.renderScore();
            default:
                return;
        }
    }
}

export default Interactive;