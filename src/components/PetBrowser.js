import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
		const petsToRender = this.props.petsArray.map(petObj => <Pet petObj={petObj} key={petObj.id} onAdoptPet={this.props.onAdoptPet} />)
    return (
		<div className="ui cards">
			{petsToRender}
		</div>
		)
  }
}

export default PetBrowser
