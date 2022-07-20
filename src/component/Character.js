import React from 'react'

class Character extends React.Component {
	
	render() {
		return(
			<>
				<div className='card_got'>
					<h2 className='card_title'>{this.props.title}</h2>	
					<img src={this.props.image} className='card_img'/>
					<h3 className='card_name'>{this.props.name}</h3>
					<button className='favorite' onClick={this.props.favoriteClick}>Favorite</button>
				</div>

			</>

		)
	}
}

export default Character