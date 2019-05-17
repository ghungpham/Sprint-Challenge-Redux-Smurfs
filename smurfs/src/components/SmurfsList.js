import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import './App.css';

class SmurfsList extends Component {
    state={
        
            name: '',
            age: '',
            height: '',
        
    }

    componentDidmount(){
        this.props.getSmurfs();
    }

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value 
        })
        };
    
    handleSubmit = e => {
        e.preventDefault();
        const { name, age, height } =this.state;
        this.props.addSmurf({name,age,height})
        this.setState({name: '', age:'', height: ''})
    }

    render(){
        return(
            <div className ="village">
            <h1>Smurfs Village</h1>
            {this.props.smurfs.map(smurf => { return(
                <div className="eachsmurf" key={smurf.id}>
                <p>Name: {smurf.name} </p>
                <p>Age: {smurf.age} years old</p>
                <p>Height: {smurf.height} </p>
                </div>
            ) })}

                <div className="form">
                <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
                />
                <input
                 onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
                />
                <input
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
                />
          <button type="submit" className="button-add">Add to the village</button>
        </form>
                </div>

            </div>

        
        )}

}


const mapStateToProps = (state) => {
    return{
smurfs: state.smurfs,
fetchingSmurfs: state.fetching,
addingSmurf: state.addingSmurf,
error: state.error
}}


export default connect(mapStateToProps, 
    {getSmurfs, addSmurf}
    )(SmurfsList);