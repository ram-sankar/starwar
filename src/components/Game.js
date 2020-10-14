import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/fetchActions'

export class MultiPlayer extends Component {

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
    }


    render() {
        const { people } = this.props;
        const nameCard = people.length <= 1 ? <div>loading</div> :
            <div className="card-holder row">
                <div className="col-md-6">
                    <div className="card-container">
                        <h4>{people[0].data.name}</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-container">
                        <h4>{people[1].data.name}</h4>
                    </div>
                </div>
            </div>


        return (
            <div className="game container text-center"><br /><br />
                <h2 className="text-center">Select a Person</h2><br />
                {nameCard}
            </div>
        )
    }
}



const mapStateToProps = state => ({
    people: state.posts.people
})

const mapDispatchToProps = dispatch => ({
    fetchPeople: (id) => dispatch(fetchPeople(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayer);
// connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)