import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setPlayers } from '../actions/fetchActions'

export class Home extends Component {
    constructor() {
        super();
        this.state = { players: 1 }
    }

    handleChange = e => this.setState({ [e.target.id]: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        this.props.setPlayers(this.state.players)
        this.props.history.push('/category')
    }

    render() {
        return (
            <div className="multi-player text-center"><br /><br />
                <h2 className="text-center">Select Number of player</h2><br /><br />
                <form className="players-form text-center">
                    <input id="players" value={this.state.players} onChange={this.handleChange} className="form-control mr-4" type="number" placeholder="Enter number of players" /><br />
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Play</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setPlayers: (num) => dispatch(setPlayers(num))
})

export default connect(null, mapDispatchToProps)(Home);