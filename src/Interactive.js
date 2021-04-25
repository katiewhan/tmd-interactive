import React from 'react';

const QuizImages = [
    {
        src: '/images/transmission-slide11.png',
        credible: true
    },
    {
        src: '/images/covid-drzhong.jpg',
        credible: false
    },
    {
        src: '/images/covid-garlic.jpg',
        credible: true
    }
];

class Interactive extends React.Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            totalGuesses: 0,
            correctGuesses: 0
        };
    }

    guessOnClick(credible) {
        let correctGuesses = this.state.correctGuesses;
        if (QuizImages[this.state.currentIndex] && QuizImages[this.state.currentIndex].credible == credible) {
            correctGuesses++;
        }
        this.setState({
            correctGuesses: correctGuesses,
            totalGuesses: this.state.totalGuesses + 1,
            currentIndex: this.state.currentIndex + 1
        });
    }

    renderImage() {
        return ( this.state.currentIndex < QuizImages.length ?
            <>
                <img className='guess-image' src={QuizImages[this.state.currentIndex].src}></img>
                <div className='buttons'>
                    <div className='guess-button credible' onClick={this.guessOnClick.bind(this, true)}>CREDIBLE</div>
                    <div className='guess-button not-credible' onClick={this.guessOnClick.bind(this, false)}>NOT CREDIBLE</div>
                </div>
            </> :
            <div>That's all we have!</div>
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