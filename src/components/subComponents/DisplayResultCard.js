import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DisplayResultCard = (props) => {

    const indexOfMaxHeight = () => {
        const { people } = props;
        let index, max = 0;
        for (let i in people) {
            if (Number(people[i].data.height) > max) {
                max = Number(people[i].data.height)
                index = i
            }
        }
        return index;
    }

    const indexOfMaxDiameter = () => {
        const { planets } = props;
        let index, max = 0;
        for (let i in planets) {
            if (Number(planets[i].data.diameter) > max) {
                max = Number(planets[i].data.diameter)
                index = i
            }
        }
        return index;
    }

    let result, bgClass, resultCard;
    if (props.param === 'people') {
        const selected = props.people[indexOfMaxHeight()]
        if (selected.data.name === props.selectedPerson) {
            result = "You won"
            // const log = {
            //     result: "won",
            //     selectedPerson: selected.data.name,
            //     selectedPlanet: "",
            //     category: "people"
            // }
            // props.playerLog(log)
        }
        else {
            result = "You Lost"
            // const log = {
            //     result: "lost",
            //     selectedPerson: selected.data.name,
            //     selectedPlanet: "",
            //     category: "people"
            // }
            // props.playerLog(log)
        }

        resultCard = props.people.map(person => {
            if (person.data.name === props.selectedPerson)
                bgClass = "card-container selected"
            else
                bgClass = "card-container"
            return <div key={person.data.name} className="col-md-6">
                <div className={bgClass}>
                    <h4>Name: {person.data.name}</h4>
                    <h4>Height: {person.data.height}</h4>
                    <h4>Mass: {person.data.mass}</h4>
                    <h4>Gender: {person.data.gender}</h4>
                </div>
            </div>
        })
    }
    if (props.param === 'planet') {
        if (props.planets[indexOfMaxDiameter()].data.name === props.selectedPlanet)
            result = "You won"
        else
            result = "You Lost"

        resultCard = props.planets.map(planet => {
            if (planet.data.name === props.selectedPlanet)
                bgClass = "card-container selected"
            else
                bgClass = "card-container"
            return <div key={planet.data.name} className="col-md-6">
                <div className={bgClass}>
                    <h4>Name: {planet.data.name}</h4>
                    <h4>Diameter: {planet.data.diameter}</h4>
                    <h4>Mass: {planet.data.rotation_period}</h4>
                    <h4>Gender: {planet.data.orbital_period}</h4>
                </div>
            </div>
        })
    }

    return <React.Fragment>
        <h2 className="text-center">{result}</h2><br />
        <div className="card-holder row">
            {resultCard}
        </div>
        <Link to='/home' className="btn btn-primary">Play Again</Link>
    </React.Fragment>
}


const mapStateToProps = state => ({
    people: state.fetch.people,
    planets: state.fetch.planets,
    selectedPerson: state.set.selectedPerson,
    selectedPlanet: state.set.selectedPlanet
})
export default connect(mapStateToProps)(DisplayResultCard);