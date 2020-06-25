import React ,{Component} from 'react';
// fazer o nosso componente estucar os reducers e actions
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as todosActions from './actions/todos'

class TodoList extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }

    addNewTodo =()=>{

    }

    state = {
        newTodoText: '',
    }


    render(){
        return(

         <div>
            <ul>
                <li>
                    Item do Todo
                </li>
            </ul>

            <input type ="text" value ={this.state.newTodoText} onChange={this.setState({newTodoText: e.target.value})} />
            <button onClick={this.addNewTodo}>Novo todo</button>
            </div>
        )
         
    }
}


// fazer as actions virar uma propriedade 
const mapDispatchToProps = dispatch => bindActionCreators(todosActions,dispatch)

export default  connect(null , mapDispatchToProps)(TodoList);


