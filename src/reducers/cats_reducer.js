export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CATS':
      return action.cats;
    case 'LOADING_CATS':
      //const pet = Object.assign({}, action.pet, { id: state.length + 1} );
      //return [ ...state, pet ];
    default:
      return state;
  }
};
