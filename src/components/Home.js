import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reset } from '../actions/fetchActions'
import { Link } from 'react-router-dom'

export class Home extends Component {

    componentDidMount() {
        this.props.reset()
    }

    render() {
        return (
            <div className="game container text-center">
                <br /><br /><h2>Select a category</h2><br />
                <div className="card-holder row">
                    <div className="col-md-6">
                        <div className="card-container">
                            <Link to='game/people' className="card-head"><h4>People</h4></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-container">
                            <Link to='game/planet' className="card-head"><h4>Planet</h4></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(reset())
})

export default connect(null, mapDispatchToProps)(Home);

