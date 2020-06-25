import React ,{Component} from 'react';

class TodoList extends Component{
    render(){
        return(

         <div>
            <ul>
                <li>
                    Item do Todo
                </li>
            </ul>

            <input type ="text"/>
            <button>Novo todo</button>
            </div>
        )
         
    }
}

export default TodoList;


