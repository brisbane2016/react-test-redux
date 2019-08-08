export default (state = {}, action) => {
    switch (action.type) {
     case 'SET_LIST':
      return   action.list

    case 'ADD_LIST':
      return   [...state,action.list]
    case 'REMOVE_LIST':
        return  state.filter(list => state.indexOf(list) !== action.id);
     default:
      return state
    }
   }