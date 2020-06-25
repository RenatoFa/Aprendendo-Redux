export function addTodo(text){
 // disparar minhas action para o reducer ouvir
 // sempre é uma função 
 return{
     type: 'ADD_TODO',
     text,
 }
}