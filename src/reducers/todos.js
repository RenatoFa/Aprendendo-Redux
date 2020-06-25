// Criação do reducer : ouvir minha action criaada
// So uma função 
export default  function todos (state=[],action){
// action={type='ADD_TODO , text: 'Fazer cafe''}
switch(action.type){

    case 'ADD_TODO':
        
            return [...state , {id: Math.random(), text: action.text }]
        


    default: 
            return state;

}
}
