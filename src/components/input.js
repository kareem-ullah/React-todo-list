import React, { Component } from 'react';
import './input.css';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }



    render() {
        const { text } = this.state;
        const { addTodo } = this.props;
        console.log('Text', text);
        return (
            <div className='InputDiv'>
                <input
                    className='TodoInput'
                    type="text"
                    placeholder="Enter list..."
                    onChange={(e) => this.setState({ text: e.target.value })}
                />
                <div className='TodoInputBtnDiv'>
                    <button
                        className='AddBtn'
                        onClick={() => addTodo(text)}
                    >
                        Add todo
                    </button>
                    {/* <button className='DeleteAllBtn'>All Delete</button> */}
                </div>
            </div>
        )
    }
}
export default Input;
