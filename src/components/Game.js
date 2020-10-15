import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPeople, fetchPlanet } from '../actions/fetchActions'

export class Game extends Component {

    state = {
        selectedPerson: '',
        selectedPlanet: ''
    }

    generateRandomNumber() {
        const noOfRandomNumber = 2;
        let arr = []
        while (arr.length <= noOfRandomNumber - 1) {
            var i = Math.floor((Math.random() * (50)) + 1);
            if (!arr.includes(i) && i !== 17) // api/people/17 - it returns 404 
                arr.push(i)
        }
        return arr;
    }

    async componentDidMount() {
        const arr = this.generateRandomNumber();
        const param = this.props.match.params.id;
        if (param === 'people') {
            for (let i in arr) {
                await this.props.fetchPeople(arr[i]);
            }
        }
        else if (param === 'planet') {
            for (let i in arr) {
                await this.props.fetchPlanet(arr[i]);
            }
        }
    }

    displayNameCard = () => {
        let nameCard, len, title, description;
        if (this.props.match.params.id === 'people') {
            nameCard = this.props.people.map(person =>
                <div key={person.data.name} className="col-md-6">
                    <div className="card-container" onClick={() => this.selectPerson(person.data.name)}>
                        <h4>{person.data.name}</h4>
                    </div>
                </div>
            )
            len = this.props.people.length
            title = "Person"
            description = "Person with larger height wins"
        }
        else if (this.props.match.params.id === 'planet') {
            nameCard = this.props.planets.map(planet =>
                <div key={planet.data.name} className="col-md-6">
                    <div className="card-container" onClick={() => this.selectPlanet(planet.data.name)}>
                        <h4>{planet.data.name}</h4>
                    </div>
                </div>
            )
            len = this.props.planets.length
            title = "Planet"
            description = "(Planet with larger diameter wins)"
        }

        return len <= 1 ? <div>loading...</div> :
            <React.Fragment>
                <h2 className="text-center">Select a {title}</h2>
                <p className="text-center">{description}</p><br />
                <div className="card-holder row">
                    {nameCard}
                </div>
            </React.Fragment>
    }

    indexOfMaxHeight = () => {
        const { people } = this.props;
        let index, max = 0;
        for (let i in people) {
            if (Number(people[i].data.height) > max) {
                max = Number(people[i].data.height)
                index = i
            }
        }
        return index;
    }

    indexOfMaxDiameter = () => {
        const { planets } = this.props;
        let index, max = 0;
        for (let i in planets) {
            if (Number(planets[i].data.diameter) > max) {
                max = Number(planets[i].data.diameter)
                index = i
            }
        }
        return index;
    }

    displayResultCard = () => {
        let result, bgClass, resultCard;
        if (this.props.match.params.id === 'people') {
            if (this.props.people[this.indexOfMaxHeight()].data.name === this.state.selectedPerson)
                result = "You won"
            else
                result = "You Lost"

            resultCard = this.props.people.map(person => {
                if (person.data.name === this.state.selectedPerson)
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
        if (this.props.match.params.id === 'planet') {
            if (this.props.planets[this.indexOfMaxDiameter()].data.name === this.state.selectedPlanet)
                result = "You won"
            else
                result = "You Lost"

            resultCard = this.props.planets.map(planet => {
                if (planet.data.name === this.state.selectedPlanet)
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



    selectPerson = name => {
        this.setState({ selectedPerson: name })
    }

    selectPlanet = name => {
        this.setState({ selectedPlanet: name })
    }

    render() {
        const { selectedPerson, selectedPlanet } = this.state;
        let selected;

        if (this.props.match.params.id === 'people')
            selected = selectedPerson
        else if (this.props.match.params.id === 'planet')
            selected = selectedPlanet

        return (
            <div className="game container text-center"><br /><br />
                {selected === '' ? this.displayNameCard() : this.displayResultCard()}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    people: state.posts.people,
    planets: state.posts.planets
})

const mapDispatchToProps = dispatch => ({
    fetchPeople: (id) => dispatch(fetchPeople(id)),
    fetchPlanet: (id) => dispatch(fetchPlanet(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);