import React from 'react';

const QuizImages = [
    {
        src: './images/transmission-slide11.png',
        credible: true,
    },
    {
        src: './images/rasam.jpg',
        credible: false
    },
    {
        src: './images/lungs.gif',
        credible: false
    },
    {
        src: './images/covid-garlic.jpg',
        credible: true
    },
    {
        src: './images/survival.png',
        credible: false
    },
    {
        src: './images/wuhan-garlic.jpg',
        credible: false
    },
    {
        src: './images/lemon.png',
        credible: false
    },
    {
        src: './images/fatality-rate.png',
        credible: true
    }
];

class Interactive extends React.Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            totalGuesses: 0,
            correctGuesses: 0,
            guessed: false
        };
    }

    guessOnClick(credible) {
        this.setState({ guessed: true });

        let correctGuesses = this.state.correctGuesses;
        if (QuizImages[this.state.currentIndex] && QuizImages[this.state.currentIndex].credible == credible) {
            correctGuesses++;
        }

        setTimeout(() => {
            this.setState({
                correctGuesses: correctGuesses,
                totalGuesses: this.state.totalGuesses + 1,
                currentIndex: this.state.currentIndex + 1,
                guessed: false
            });
        }, 3000);
    }

    renderImage() {
        return ( this.state.currentIndex < QuizImages.length ?
            <div className='image-wrapper'>
                <div className={`guess-image ${this.state.guessed ? 'flip-image' : ''}`}>
                    <img src={QuizImages[this.state.currentIndex].src}></img>
                    <div className='image-back'>{QuizImages[this.state.currentIndex].credible ? 'CREDIBLE!' : 'NOT CREDIBLE!'}</div>
                </div>
                <div className={`buttons ${this.state.guessed ? 'hide-buttons' : ''}`}>
                    <div className='guess-button credible' onClick={this.guessOnClick.bind(this, true)}>CREDIBLE</div>
                    <div className='guess-button not-credible' onClick={this.guessOnClick.bind(this, false)}>NOT CREDIBLE</div>
                </div>
            </div> :
            <div className='image-wrapper'>That's all we have!</div>
        );
    }

    renderScore() {
        return ( this.state.totalGuesses > 0 ? 
            <div>You guessed {this.state.correctGuesses} correctly out of {this.state.totalGuesses} total images!</div> : null
        );
    }

    render() {
      return <div className='interactive'>
          {this.renderImage()}
          {this.renderScore()}
      </div>
    }
}

export default Interactive;