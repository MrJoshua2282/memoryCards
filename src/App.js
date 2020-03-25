import React, {Component} from 'react';
import './App.scss';

import cardBack3 from './assets/img/CardBack3.svg';
import AceClub from './assets/img/AC.svg';
import AceDiamond from './assets/img/AD.svg';
import AceHeart from './assets/img/AH.svg';
import AceSpade from './assets/img/AS.svg';
import TwoClub from './assets/img/2C.svg';
import TwoDiamond from './assets/img/2D.svg';
import TwoHeart from './assets/img/2H.svg';
import TwoSpade from './assets/img/2S.svg';
import ThreeClub from './assets/img/3C.svg';
import ThreeDiamond from './assets/img/3D.svg';
import ThreeHeart from './assets/img/3H.svg';
import ThreeSpade from './assets/img/3S.svg';
import FourClub from './assets/img/4C.svg';
import FourDiamond from './assets/img/4D.svg';
import FourHeart from './assets/img/4H.svg';
import FourSpade from './assets/img/4S.svg';
import FiveClub from './assets/img/5C.svg';
import FiveDiamond from './assets/img/5D.svg';
import FiveHeart from './assets/img/5H.svg';
import FiveSpade from './assets/img/5S.svg';
import SixClub from './assets/img/6C.svg';
import SixDiamond from './assets/img/6D.svg';
import SixHeart from './assets/img/6H.svg';
import SixSpade from './assets/img/6S.svg';
import SevenClub from './assets/img/7C.svg';
import SevenDiamond from './assets/img/7D.svg';
import SevenHeart from './assets/img/7H.svg';
import SevenSpade from './assets/img/7S.svg';
import EightClub from './assets/img/8C.svg';
import EightDiamond from './assets/img/8D.svg';
import EightHeart from './assets/img/8H.svg';
import EightSpade from './assets/img/8S.svg';
import NineClub from './assets/img/9C.svg';
import NineDiamond from './assets/img/9D.svg';
import NineHeart from './assets/img/9H.svg';
import NineSpade from './assets/img/9S.svg';
import TenClub from './assets/img/10C.svg';
import TenDiamond from './assets/img/10D.svg';
import TenHeart from './assets/img/10H.svg';
import TenSpade from './assets/img/10S.svg';
import JackClub from './assets/img/JC.svg';
import JackDiamond from './assets/img/JD.svg';
import JackHeart from './assets/img/JH.svg';
import JackSpade from './assets/img/JS.svg';
import QueenClub from './assets/img/QC.svg';
import QueenDiamond from './assets/img/QD.svg';
import QueenHeart from './assets/img/QH.svg';
import QueenSpade from './assets/img/QS.svg';
import KingClub from './assets/img/KC.svg';
import KingDiamond from './assets/img/KD.svg';
import KingHeart from './assets/img/KH.svg';
import KingSpade from './assets/img/KS.svg';

const cardList = [
  {id:'CAC', pair: 'blackAce', suit: 'ace', src: AceClub},
  {id:'CAD', pair: 'redAce', suit: 'ace', src: AceDiamond},
  {id:'CAH', pair: 'redAce', suit: 'ace', src: AceHeart},
  {id:'CAS', pair: 'blackAce', suit: 'ace', src: AceSpade},
  {id:'C2C', pair: 'blackTwo', suit: 'two', src: TwoClub},
  {id:'C2D', pair: 'redTwo', suit: 'two', src: TwoDiamond},
  {id:'C2H', pair: 'redTwo', suit: 'two', src: TwoHeart},
  {id:'C2S', pair: 'blackTwo', suit: 'two', src: TwoSpade},
  {id:'C3C', pair: 'blackThree', suit: 'three', src: ThreeClub},
  {id:'C3D', pair: 'redThree', suit: 'three', src: ThreeDiamond},
  {id:'C3H', pair: 'redThree', suit: 'three', src: ThreeHeart},
  {id:'C3S', pair: 'blackThree', suit: 'three', src: ThreeSpade},
  {id:'C4C', pair: 'blackFour', suit: 'four', src: FourClub},
  {id:'C4D', pair: 'redFour', suit: 'four', src: FourDiamond},
  {id:'C4H', pair: 'redFour', suit: 'four', src: FourHeart},
  {id:'C4S', pair: 'blackFour', suit: 'four', src: FourSpade},
  {id:'C5C', pair: 'blackFive', suit: 'five', src: FiveClub},
  {id:'C5D', pair: 'redFive', suit: 'five', src: FiveDiamond},
  {id:'C5H', pair: 'redFive', suit: 'five', src: FiveHeart},
  {id:'C5S', pair: 'blackFive', suit: 'five', src: FiveSpade},
  {id:'C6C', pair: 'blackSix', suit: 'six', src: SixClub},
  {id:'C6D', pair: 'redSix', suit: 'six', src: SixDiamond},
  {id:'C6H', pair: 'redSix', suit: 'six', src: SixHeart},
  {id:'C6S', pair: 'blackSix', suit: 'six', src: SixSpade},
  {id:'C7C', pair: 'blackSeven', suit: 'seven', src: SevenClub},
  {id:'C7D', pair: 'redSeven', suit: 'seven', src: SevenDiamond},
  {id:'C7H', pair: 'redSeven', suit: 'seven', src: SevenHeart},
  {id:'C7S', pair: 'blackSeven', suit: 'seven', src: SevenSpade},
  {id:'C8C', pair: 'blackEight', suit: 'eight', src: EightClub},
  {id:'C8D', pair: 'redEight', suit: 'eight', src: EightDiamond},
  {id:'C8H', pair: 'redEight', suit: 'eight', src: EightHeart},
  {id:'C8S', pair: 'blackEight', suit: 'eight', src: EightSpade},
  {id:'C9C', pair: 'blackNine', suit: 'nine', src: NineClub},
  {id:'C9D', pair: 'redNine', suit: 'nine', src: NineDiamond},
  {id:'C9H', pair: 'redNine', suit: 'nine', src: NineHeart},
  {id:'C9S', pair: 'blackNine', suit: 'nine', src: NineSpade},
  {id:'C10C', pair: 'blackTen', suit: 'ten', src: TenClub},
  {id:'C10D', pair: 'redTen', suit: 'ten', src: TenDiamond},
  {id:'C10H', pair: 'redTen', suit: 'ten', src: TenHeart},
  {id:'C10S', pair: 'blackTen', suit: 'ten', src: TenSpade},
  {id:'CJC', pair: 'blackJack', suit: 'jack', src: JackClub},
  {id:'CJD', pair: 'redJack', suit: 'jack', src: JackDiamond},
  {id:'CJH', pair: 'redJack', suit: 'jack', src: JackHeart},
  {id:'CJS', pair: 'blackJack', suit: 'jack', src: JackSpade},
  {id:'CQC', pair: 'blackQueen', suit: 'queen', src: QueenClub},
  {id:'CQD', pair: 'redQueen', suit: 'queen', src: QueenDiamond},
  {id:'CQH', pair: 'redQueen', suit: 'queen', src: QueenHeart},
  {id:'CQS', pair: 'blackQueen', suit: 'queen', src: QueenSpade},
  {id:'CKC', pair: 'blackKing', suit: 'king', src: KingClub},
  {id:'CKD', pair: 'redKing', suit: 'king', src: KingDiamond},
  {id:'CKH', pair: 'redKing', suit: 'king', src: KingHeart},
  {id:'CKS', pair: 'blackKing', suit: 'king', src: KingSpade}
];


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
      cardListCopy.splice(cardListCopy.indexOf(deckArr[deckArr.length-1]), 1);
    }

    for (let i = 0; i < cardList.length; i++) {
      randomizer();
    }

    this.setState({deckArr: deckArr});
  }

  togglePlayer = () => {
    let active;
    this.state.activePlayer === 0 ? active = 1 : active = 0;
    this.setState({activePlayer: active});
    document.querySelector('.player1').classList.toggle('activePlayer');
    document.querySelector('.player2').classList.toggle('activePlayer');

  }

  pickCardHandler = (item) => {
    let pickCopy = [...this.state.pick];

    // this is the first pick, its added to the array
    if (this.state.pick.length === 0) {
      document.querySelector(`#${item.id}`).style.opacity = 0;
        pickCopy.push(item);
        this.setState({pick: pickCopy});
    }

  // this is the second pick
  if (this.state.pick.length === 1) {

  // if they have a different src but share the same pair property, its a pair!
    if (item.src !== this.state.pick[0].src && item.pair === this.state.pick[0].pair) {
      document.querySelector(`#${item.id}`).style.opacity = 0;
      pickCopy.push(item);
      this.setState({pick: pickCopy});

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
      this.setState({pick: pickCopy});
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
        this.setState({pick: []});
          
      } else if (this.state.pick[0].src !== this.state.pick[1].src && this.state.pick[0].pair !== this.state.pick[1].pair) {
        // two cards are not a pair, pause briefly before resetting
        setTimeout(() => {
          document.querySelector(`#${this.state.pick[0].id}`).style.opacity = 1;
          document.querySelector(`#${this.state.pick[1].id}`).style.opacity = 1;

          // pick array is reset
          this.setState({pick: []});
          // next player
          this.togglePlayer();
        }, 1500);
      }
  }
  }

  checkForWinner = (player) => {
    //check for winner
    if (this.state.score0 + this.state.score1 === this.state.deckArr.length/2) {

      // if player 2 has more points than player 1
      if (player === this.state.player1 && this.state.score0 < this.state.score1) {
        // document.querySelector('.player2').style.color = 'orangered';
        return player = 'Winner';
  
        // if player 1 has more points than player 2
      } else if (player === this.state.player0 && this.state.score0 > this.state.score1) {
        // document.querySelector('.player1').style.color = 'orangered';
        return player = 'Winner';
  
        // if its a tie
      } else if ((player === this.state.player0 || player === this.state.player1) && this.state.score0 === this.state.score1){
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
    this.setState({score0: 0, score1: 0, player0: 'Player 1', player1: 'Player 2'});
    //shuffle the cards
    this.random();

    document.querySelector('.player1').classList.remove('activePlayer');
    document.querySelector('.player2').classList.remove('activePlayer');
    document.querySelector('.player1').classList.add('activePlayer');
  }

  render() {
    let cards = this.state.deckArr.map(cur => {
      let otherId = cur.id+cur.pair;
      return (
        <span  key={cur.src} className='card' >
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
