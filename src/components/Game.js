import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPeople, fetchPlanet, playerLog } from '../actions/fetchActions'
import DisplayNameCard from './subComponents/DisplayNameCard';
import DisplayResultCard from './subComponents/DisplayResultCard';

export class Game extends Component {

    generateRandomNumber() {
        const noOfRandomNumber = Number(this.props.players);
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


    render() {
        const { selectedPerson, selectedPlanet } = this.props;
        let selected;

        if (this.props.match.params.id === 'people')
            selected = selectedPerson
        else if (this.props.match.params.id === 'planet')
            selected = selectedPlanet

        return (
            <div className="game container text-center"><br /><br />
                {selected === '' ?
                    <DisplayNameCard param={this.props.match.params.id} /> :
                    <DisplayResultCard param={this.props.match.params.id} />}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    people: state.fetch.people,
    planets: state.fetch.planets,
    log: state.fetch.log,
    players: state.set.players,
    selectedPlanet: state.set.selectedPlanet,
    selectedPerson: state.set.selectedPerson,

})

const mapDispatchToProps = dispatch => ({
    fetchPeople: (id) => dispatch(fetchPeople(id)),
    fetchPlanet: (id) => dispatch(fetchPlanet(id)),
    playerLog: (data) => dispatch(playerLog(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);