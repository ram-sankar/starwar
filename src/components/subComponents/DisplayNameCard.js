import React from 'react';
import { connect } from 'react-redux';
import { setSelectedPerson, setSelectedPlanet } from '../../actions/setActions'

const DisplayNameCard = (props) => {

    // console.log(props.players)
    let nameCard, len, title, description;
    if (props.param === 'people') {
        nameCard = props.people.map(person =>
            <div key={person.data.name} className="col-md-6">
                <div className="card-container" onClick={() => props.setSelectedPerson(person.data.name)}>
                    <h4>{person.data.name}</h4>
                </div>
            </div>
        )
        len = props.people.length
        title = "Person"
        description = "Person with larger height wins"
    }
    else if (props.param === 'planet') {
        nameCard = props.planets.map(planet =>
            <div key={planet.data.name} className="col-md-6">
                <div className="card-container" onClick={() => props.setSelectedPlanet(planet.data.name)}>
                    <h4>{planet.data.name}</h4>
                </div>
            </div>
        )
        len = props.planets.length
        title = "Planet"
        description = "(Planet with larger diameter wins)"
    }

    return len <= props.players - 1 ? <div>loading...</div> :
        <React.Fragment>
            <h2 className="text-center">Select a {title}</h2>
            <p className="text-center">{description}</p><br />
            <div className="card-holder row">
                {nameCard}
            </div>
        </React.Fragment>
}

const mapStateToProps = state => ({
    people: state.fetch.people,
    planets: state.fetch.planets,
    players: state.set.players
})

const mapDispatchToProps = dispatch => ({
    setSelectedPlanet: (id) => dispatch(setSelectedPlanet(id)),
    setSelectedPerson: (id) => dispatch(setSelectedPerson(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNameCard);