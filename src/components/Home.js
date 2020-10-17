import React, { Component } from 'react'
import { connect } from 'react-redux';
import { resetFetchAction } from '../actions/fetchActions'
import { resetSetActions } from '../actions/setActions'
import { setPlayers } from '../actions/setActions'

export class Home extends Component {
    constructor() {
        super();
        this.state = { players: 2 }
    }
    componentDidMount() {
        this.props.resetFetchAction()
        this.props.resetSetActions()
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
                <form className="players-form text-center" onSubmit={this.handleSubmit} >
                    <select value={this.state.value} id="players" onChange={this.handleChange}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br /><br />
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Play</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setPlayers: (num) => dispatch(setPlayers(num)),
    resetFetchAction: () => dispatch(resetFetchAction()),
    resetSetActions: () => dispatch(resetSetActions())
})

export default connect(null, mapDispatchToProps)(Home);