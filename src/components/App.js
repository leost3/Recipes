import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import RecipeList from './RecipeList';
import axios from 'axios';

class App extends React.Component{
  
  state = {
      recipes: [],
      term: ''
    }
// export const key = '39db77182b993b7eb2f3ff7981a60b45'; //leost3
// export const key = '52ac8fe51914f04bb72dac3a9da13ec3 '; // leomontreala2
// export const key = 'ef637c6941e34e3e23e7390dc027a7f7'; //webdevlasalle
// export const key = 'db635e4fa5e8116059c1c517e33858b6 '; //ls fusion



  async componentDidMount() {
      const res = await axios.get('https://www.food2fork.com/api/search?key=52ac8fe51914f04bb72dac3a9da13ec3');
      const data = res.data.recipes;
      this.setState({recipes: data});
  }

  setTermState = (term) => {
    this.setState({term});
  }
  
  render() {
    const filteredRobots = this.state.recipes.filter( recipe => {
      return recipe.title.toLowerCase().includes(this.state.term.toLowerCase());
    });

    return (
      <div>
        <Header />
        <Search setTermState={this.setTermState} setValue={this.state.term} />
        <RecipeList recipes={filteredRobots} />
      </div>
    );
  }
}

export default App;
