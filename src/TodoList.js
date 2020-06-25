import React , {Component} from 'react';
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
       this.props.addTodo(this.state.newTodoText);

       this.setState({newTodoText: ''})
    }

    state = {
        newTodoText: '',
    }


    render(){
        return(

         <div>
            <ul>
                {/* Atualizar a lista dos Todos*/}
                    {this.props.todos.map(todo=>(
                        <li key={todo.id} >{/* Todo interação no React Precisa de uma key */}
                            {todo.text}


                            </li>
                    ))}
                
            </ul>

            <input type ="text" value ={this.state.newTodoText} onChange={(e)=>this.setState({newTodoText: e.target.value})} />
            <button onClick={this.addNewTodo}>Novo todo</button>
            </div>
        )
         
    }
}
// fazer uma nova atualização do Todo na interface

const mapStateToProps = state => ({
    todos: state.todos 
})


// fazer as actions virar uma propriedade 
const mapDispatchToProps = dispatch => bindActionCreators(todosActions,dispatch)

export default  connect(mapStateToProps , mapDispatchToProps)(TodoList);


