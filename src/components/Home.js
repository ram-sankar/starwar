import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="home container">
            <h3>Select a category</h3><br /><br />
            <div className="card-holder row">
                <div className="col-md-6">
                    <div className="card-container">
                        <Link to='game/people' className="card-head"><h4>People</h4></Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-container">
                        <Link to='game/starship' className="card-head"><h4>Star Ship</h4></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
