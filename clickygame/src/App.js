import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MemoryCard from "./components/MemoryCard";
import cards from "./cards.json";

function randomizeCards(cardSet) {
  for (var i = 0; i < cardSet.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (cardSet.length - i));

    var temp = cardSet[j];
    cardSet[j] = cardSet[i];
    cardSet[i] = temp;
  }
  console.log(cardSet);
  return cardSet;
}

let pickedCards = [];

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    navbarMessage: "Click a Person to Begin",
    cards: cards,
    randomCards: cards
  };

  randomCards = randomizeCards(cards);

  pickCard = id => {
    console.log(id);
    if (pickedCards.indexOf(id) === -1) {
      pickedCards.push(id);
      this.setState({
        score: this.state.score + 1,
        navbarMessage: "You Guessed Correctly!"
      });
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
      this.setState({
        randomCards: randomizeCards(cards)
      });
    } else {
      this.setState({
        score: 0,
        randomCards: randomizeCards(cards),
        navbarMessage: "You Guessed Incorrectly!"
      });
      pickedCards = [];
    }
    console.log(pickedCards);
  };

  render() {
    return (
      <div>
        <Navbar
          navbarMessage={this.state.navbarMessage}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        {this.state.cards.map(card => (
          <MemoryCard
            image={card.image}
            id={card.id}
            key={card.id}
            name={card.id}
            pickCard={this.pickCard}
          />
        ))}
      </div>
    );
  }
}
export default App;
