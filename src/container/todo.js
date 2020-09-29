import React, { Component } from 'react';
import './todo.css';
import logo from './image/images.png';
import '../components/input.css';
import '../components/list.css';
import Input from '../components/input';
import List from '../components/list';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todoList: [],
            todoIndex: null
        }
    }

    addTodo = () => {
        const { text, todoList } = this.state;
        this.setState({ todoList: [...todoList, text], text: '' })
    }

    DeleteAll = () => {
        const { todoList } = this.state;
        this.setState({ todoList: [] })
    }

    Delete = (index) => {
        const { todoList } = this.state;
        todoList.splice(index, 1);
        this.setState({ todoList: todoList });
    }

    Edit = (item, index) => {
        this.setState({ text: item, todoIndex: index });
        console.log(item, index)
    }

    Update = () => {
        const { todoList, text, todoIndex } = this.state;
        todoList.splice(todoIndex, 1, text);
        this.setState({ todoList: todoList, todoIndex: null, text: '' })
    }

    Cancel = () => {
        const { todoList, text, todoIndex } = this.state;
        this.setState({ todoList: todoList, todoIndex: null, text: '' })
    }

    render() {
        const { todoList, text, todoIndex } = this.state;
        return (
            <div>

                {/* Input Work */}
                <div className='InputDiv'>
                    <input
                        className='TodoInput'
                        type="text"
                        placeholder="Enter list..."
                        value={text}
                        onChange={(e) => this.setState({ text: e.target.value })}
                    />
                    <div className='TodoInputBtnDiv'>
                        {
                            todoIndex === null ?
                                <button className='AddBtn' onClick={() => this.addTodo()}>Add todo
                                </button>
                                :
                                <button className='AddBtn' onClick={() => this.Update()}>Save
                                </button>
                        }

                        {
                            todoIndex === null ?
                                <button className='DeleteAllBtn' onClick={() => this.DeleteAll()}>All Delete
                            </button>
                                :
                                <button className='DeleteAllBtn' onClick={() => this.Cancel()}>Cancel
                            </button>
                        }
                    </div>
                </div>


                {/* List Work */}
                <div className='ListsDiv'>

                    {
                        todoList.length ?
                            null
                            :
                           <div className="image"> <img src={logo} className="logo"  alt="logo" /></div>
                    }
                    {
                        todoList.map((item, index) => {
                            return (<div key={index} className='List'>
                                <div className='ListText'>
                                    {item}
                                </div>
                                <div>
                                    <button className='EditBtn' onClick={() => this.Edit(item, index)}>Edit</button>
                                    <button className='DeleteBtn' onClick={() => this.Delete(index)}>Delete</button>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </div>
        )
    }
}
export default Todo;
