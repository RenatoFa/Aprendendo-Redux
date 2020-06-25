export function addTodo(text){
 // disparar minhas action para o reducer ouvir
 return{
     type: 'ADD_TODO',
     text,
 }
}