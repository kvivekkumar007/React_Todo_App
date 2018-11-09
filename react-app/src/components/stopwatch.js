import React, { Component } from 'react';

class Stopwatch extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: 'vivek',
            age:24,
        }
    }


    clickHandler=() =>{
        console.log("clicked");
        this.setState({age: this.state.age +1})
    }

    render() {
        return(

            <div>
                <p>My name is : {this.state.name}</p>
                <p>age is : {this.state.age}</p>

                <button onClick={this.clickHandler}>Click To update state</button>
            </div>

        );
    };
    
};

export default Stopwatch