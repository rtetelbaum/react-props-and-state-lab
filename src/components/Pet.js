import React from 'react'

class Pet extends React.Component {

	localHandleClick = () => {
		this.props.onAdoptPet(this.props.petObj.id)
	}

	isAdopted = () => {
		if (this.props.petObj.isAdopted) {
			return (
				<div className="extra content">
					<button className="ui button">Already adopted</button>
					<button className="ui primary disabled button">Adopt pet</button>
        </div>
			)
		} else {
			return (
				<div className="extra content">
					<button className="ui disabled button">Already adopted</button>
					<button className="ui primary button" onClick={this.localHandleClick}>Adopt pet</button>
        </div>
			)
		}
	}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petObj.gender === "female" ? '♀ ' : '♂ '}
            {this.props.petObj.name}
          </a>
          <div className="meta">
						<span className="date">PET TYPE: {this.props.petObj.type}</span>
          </div>
          <div className="description">
						<p>Age: {this.props.petObj.age}</p>
            <p>Weight: {this.props.petObj.weight} lbs.</p>
          </div>
        </div>
        {this.isAdopted()}
      </div>
    )
  }
}

export default Pet
