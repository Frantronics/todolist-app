import React, { Component } from 'react';
import './home.css';
/**
 * Name: Frank Agyekum
 * Assignment: Todo List Application
 */

class Home extends Component {

    constructor() {
        super()

        this.state = {
            list: ''
        }

    }

    // event handler for submit button
    submitHandler = (props) => {
        props.preventDefault();
        var inputTask = document.getElementById("input").innerHTML = "<input type='checkbox' id='taskcheck'/>" + this.state.list;
        var li = document.createElement("li");
        li.innerHTML = inputTask;
        document.getElementById("list").appendChild(li);


    }

    // handler for state change
    changeHandler = (props) => {
        this.setState({ list: props.target.value });
    }

    render() {

        return (
            <div>
                <h1>Todo List</h1>
                <p id="title"></p>
                <h4 id="task"></h4>
                <ul id='list'>
                </ul>
                <input type="text" id="input" placeholder="Enter a task"
                    onChange={this.changeHandler} />
                <input type="submit"
                    onClick={this.submitHandler} />

            </div>
        )
    }
}

export default Home;