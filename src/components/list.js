import React, { Component } from 'react';
import './list.css';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { todoList } = this.props;
        console.log('todoList', todoList)
        return (
            <div className='ListsDiv'>
                {
                    todoList.map((item) => {
                        return (<div key={item} className='List'>
                        <div className='ListText'>
                            {item}
                        </div>
                        <div>
                            <button className='EditBtn'>Edit</button>
                            <button className='DeleteBtn'>Delete</button>
                        </div>
                    </div>)
                    })
                }
            </div>
        )
    }
}
export default List;
