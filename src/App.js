import React from 'react'
import Character from './component/Character';
import Continent from './component/Continent';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      continents: [],
      favorites: [],
      currentView: "Characters" 

    }
  }

  async componentDidMount() {
    const request = await fetch('https://thronesapi.com/api/v2/Characters')
    const response = await request.json()

    // /api/v2/Continents
    const requestContinents = await fetch(
      'https://thronesapi.com/api/v2/Continents'
    )
    const responseContinents = await requestContinents.json()

    this.setState({
      characters: response,
      continents: responseContinents
    })
  }



  handleFavoriteClick = character => {
    const { favorites } = this.state

    const existingFavorite = favorites.find(
      favorite => favorite.id === character.id
    )

    if (!existingFavorite) {
      const clonedFavorites = [...favorites, character]

      this.setState({
        favorites: clonedFavorites
      })
    }
  }

  handleCurrentViewChange = tab => {
    this.setState({
      currentView: tab
    })
  }
  
	render() {
    console.log(this);
    return(
      <>
			<h1 className='title'>Game Of Thrones</h1>

      <div className='btn_cont'>
       <button onClick={() => this.handleCurrentViewChange("Continents")} className='btn_menu'>Continents</button>
      <button onClick={() => this.handleCurrentViewChange("Characters")} className='btn_menu'>Characters</button>
      <button onClick={() => this.handleCurrentViewChange("Favorites")} className='btn_menu'>Favorites</button> 
      </div>
      

      <div className='row justify-content-center align-items-center'>
      {this.state.currentView === "Continents" && (
         <>
         <h2 className='cont_title'>Continents</h2>
         <div className='conts_cont'>
          {this.state.continents.map(continent => (
             <Continent 
             name={continent.name} />
           ))}
         </div>
           
           <img className='carte' src="https://i0.wp.com/www.urbanews.fr/wp-content/uploads/2013/03/Game_of_Thrones_-_World_Map.jpg" alt="map" />
       </>
      )}
     

      {this.state.currentView === "Characters" && (
          <>
            {this.state.characters.map((character) => (
            <Character
              key={`${character.fullName}${character.id}`}
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              favoriteClick={() => this.handleFavoriteClick(character)}
              />       
          ))}
          </>
      )}
     
          {this.state.currentView === "Favorites" && ( 
            <>
          {this.state.favorites.map((favorite) => (
            <Character
            key={`${favorite.fullName}${favorite.id}`}
            name={favorite.fullName}
            title={favorite.title}
            image={favorite.imageUrl}
            />
        ))}
           </>
          )}


      </div> 
      </>
		)
	}
}

export default App