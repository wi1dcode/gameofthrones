import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import Character from './component/Character';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      continents: [],
      favorites: [],
      currentView: "Continents"

    }
  }

  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    const response = await request.json();
    // console.log(response);
    
    const requestContinents = await fetch("https://thronesapi.com/api/v2/Continents");
    const responseContinents = await responseContinents.json();

    
    this.setState({
      characters: response, continents: responseContinents
    });
    
  }


  handleFavoriteClick = (character) => {
      const clonedFavorites = [...this.state.favorites, character];
      this.setState({
          favorites: clonedFavorites,
      });
  }
  
  
	render() {
    console.log(this);
    return(
      <>
			<h1 className='title'>Game Of Thrones</h1>
      <div className='row justify-content-center align-items-center'>

      <button onClick={() => this.handleCurrentViewChange("continents")} className='btn btn-success'>Continents</button>
      <button onClick={() => this.handleCurrentViewChange("characters")} className='btn btn-success'>Characters</button>
      <button onClick={() => this.handleCurrentViewChange("favorites")} className='btn btn-success'>Favorites</button>

      {this.state.currentView === "continents" && (
        <>
           <h2>Continents</h2>
            <div>
              sd
            </div>
        </>
      )}
     

      {this.state.currentView === "characters" && (
          <>{this.state.characters.map((character) => (
            <Character
              key={`${character.fullName}${character.id}`}
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              favoriteClick={() => this.handleFavoriteClick(character)}
              />  
              </>
                       
          ))}
      )}
     
          {this.state.currentView === "favorites" && ( 
            <div>
          {this.state.favorites.map((favorite) => (
            <Character
            key={`${favorite.fullName}${favorite.id}`}
            name={favorite.fullName}
            title={favorite.title}
            image={favorite.imageUrl}
            />
        ))}
        </div>
          )}


      </div>
      </>
		)
	}
}

export default App