import React from 'react'
import Character from './component/Character';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: []
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


  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevState);
    console.log(this.state);
  }
  
  
  
	render() {
    console.log(this.state);
    return(
      <>
			<h1>Game of thrones</h1>
      <Character
      />

      </>
		)
	}
}

export default App