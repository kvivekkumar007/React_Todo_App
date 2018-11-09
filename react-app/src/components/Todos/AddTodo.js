import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({ content: "" })
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>

                <div className="label">
                    <label>Add New Todo :</label>
                </div>

                <br />

                <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.content}></input>

            </form>
        )
    }
}

export default AddTodo