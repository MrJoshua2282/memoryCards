import React, { Component } from 'react';

import './App.scss';
import cardBack3 from './assets/img/CardBack3.svg';
import { cardList } from './shared';

class App extends Component {
  state = {
    activePlayer: 0,
    score0: 0,
    score1: 0,
    player0: 'Player 1',
    player1: 'Player 2',
    deckArr: [],
    pick: []
  }

  componentDidMount() {
    //shuffle the cards
    this.random();

    document.querySelector('.player1').classList.add('activePlayer');
  }

  random = () => {
    let cardListCopy = [...cardList];
    let deckArr = [];

    let randomizer = () => {
      let n = Math.floor(Math.random() * cardListCopy.length);
      deckArr.push(cardListCopy[n]);

      //the last card in the deckArr, remove that card from cardListCopy
      cardListCopy.splice(cardListCopy.indexOf(deckArr[deckArr.length - 1]), 1);
    }

    for (let i = 0; i < cardList.length; i++) {
      randomizer();
    }

    this.setState({ deckArr: deckArr });
  }

  togglePlayer = () => {
    let active;
    this.state.activePlayer === 0 ? active = 1 : active = 0;
    this.setState({ activePlayer: active });
    document.querySelector('.player1').classList.toggle('activePlayer');
    document.querySelector('.player2').classList.toggle('activePlayer');

  }

  pickCardHandler = (item) => {
    let pickCopy = [...this.state.pick];

    // this is the first pick, its added to the array
    if (this.state.pick.length === 0) {
      document.querySelector(`#${item.id}`).style.opacity = 0;
      pickCopy.push(item);
      this.setState({ pick: pickCopy });
    }

    // this is the second pick
    if (this.state.pick.length === 1) {

      // if they have a different src but share the same pair property, its a pair!
      if (item.src !== this.state.pick[0].src && item.pair === this.state.pick[0].pair) {
        document.querySelector(`#${item.id}`).style.opacity = 0;
        pickCopy.push(item);
        this.setState({ pick: pickCopy });

        // the back of the card value is set to none and the face side of the card is transparent to hold the space on the UI
        let newPick = [...this.state.pick]
        setTimeout(() => {
          document.querySelector(`#${newPick[0].id}`).style.display = 'none';
          document.querySelector(`#${item.id}`).style.display = 'none';
          document.querySelector(`#${newPick[0].id}${newPick[0].pair}`).style.opacity = 0;
          document.querySelector(`#${item.id}${item.pair}`).style.opacity = 0;
          this.checkForWinner();

        }, 1500);
      } else if (item.src !== this.state.pick[0].src && item.pair !== this.state.pick[0].pair) {
        // its not a pair
        document.querySelector(`#${item.id}`).style.opacity = 0;
        pickCopy.push(item);
        this.setState({ pick: pickCopy });
      }

    }
  }

  componentDidUpdate() {
    //if two picks have been made
    if (this.state.pick.length === 2) {

      // if they have a different src but share the same pair property, its a pair!
      if (this.state.pick[0].src !== this.state.pick[1].src && this.state.pick[0].pair === this.state.pick[1].pair) {
        setTimeout(() => {
          this.setState((prevState) => {
            if (this.state.activePlayer === 0) {
              return {
                score0: prevState.score0 + 1
              }
            } else {
              return {
                score1: prevState.score1 + 1
              }
            }
          })

        }, 1500);
        // pick array is reset
        this.setState({ pick: [] });

      } else if (this.state.pick[0].src !== this.state.pick[1].src && this.state.pick[0].pair !== this.state.pick[1].pair) {
        // two cards are not a pair, pause briefly before resetting
        setTimeout(() => {
          document.querySelector(`#${this.state.pick[0].id}`).style.opacity = 1;
          document.querySelector(`#${this.state.pick[1].id}`).style.opacity = 1;

          // pick array is reset
          this.setState({ pick: [] });
          // next player
          this.togglePlayer();
        }, 1500);
      }
    }
  }

  checkForWinner = (player) => {
    //check for winner
    if (this.state.score0 + this.state.score1 === this.state.deckArr.length / 2) {

      // if player 2 has more points than player 1
      if (player === this.state.player1 && this.state.score0 < this.state.score1) {
        // document.querySelector('.player2').style.color = 'orangered';
        return player = 'Winner';

        // if player 1 has more points than player 2
      } else if (player === this.state.player0 && this.state.score0 > this.state.score1) {
        // document.querySelector('.player1').style.color = 'orangered';
        return player = 'Winner';

        // if its a tie
      } else if ((player === this.state.player0 || player === this.state.player1) && this.state.score0 === this.state.score1) {
        // document.querySelector('.player1').style.color = 'orangered';
        // document.querySelector('.player2').style.color = 'orangered';
        return player = 'Tie';
      } else {
        return player;
      }
    } else {
      return player;
    }
  }

  gameReset = () => {
    for (let i = 0; i < this.state.deckArr.length; i++) {
      // reset cards
      document.querySelector(`#${this.state.deckArr[i].id}`).style.display = 'block';
      document.querySelector(`#${this.state.deckArr[i].id}`).style.opacity = 1;
      document.querySelector(`#${this.state.deckArr[i].id}${this.state.deckArr[i].pair}`).style.opacity = 1;
    }

    //reset scores
    this.setState({ score0: 0, score1: 0, player0: 'Player 1', player1: 'Player 2' });
    //shuffle the cards
    this.random();

    document.querySelector('.player1').classList.remove('activePlayer');
    document.querySelector('.player2').classList.remove('activePlayer');
    document.querySelector('.player1').classList.add('activePlayer');
  }

  render() {
    let cards = this.state.deckArr.map(cur => {
      let otherId = cur.id + cur.pair;
      return (
        <span key={cur.src} className='card' >
          <img className='card__front' src={cur.src} alt='playing cards' id={otherId}></img>
          <img disabled className='card__back' src={cardBack3} alt='back of card' id={cur.id} value={cur.suit} onClick={() => this.pickCardHandler(cur)}></img>
        </span>
      )
    })

    return (
      <div className="App">
        <div className='top-section'>
          <div className='left'>
            <div className='player1'>{this.checkForWinner(this.state.player0)}</div>
            <br></br>
            <i className='players__score'>{this.state.score0}</i>
          </div>
          <div className='top-middle'>
            {/* <span className='options'>options</span> */}
            <button className='newGame' onClick={this.gameReset}>New Game</button>
          </div>
          <div className='right'>
            <div className='player2'>{this.checkForWinner(this.state.player1)}</div>
            <br></br>
            <i className='players__score'>{this.state.score1}</i>
          </div>
        </div>
        <div className='bottom'>
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
