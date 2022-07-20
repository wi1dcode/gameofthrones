import React from 'react'
import Character from './component/Character';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: []
    }
  }

  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    const response = await request.json();
    // console.log(response);
    
    this.setState({
      characters: response
    });
    
  }


  handleFavoriteClick = () => {
    
  }
  
  
	render() {
    console.log(this);
    return(
      <>
			<h1 className='title'>Game Of Thrones</h1>
      <div className='row justify-content-center align-items-center'>
      {this.state.characters.map((character) => (
            <Character
            name={character.fullName}
            title={character.title}
            image={character.imageUrl}
            />  
        ))}
      </div>
      </>
		)
	}
}

export default App