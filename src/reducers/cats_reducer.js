export default (state = {loading: false, pictures: []}, action) => {
  switch (action.type) {

    case 'LOADING_CATS':
    console.log("loading")
      return {loading: true, pictures: []};

    case 'FETCH_CATS':
    console.log("getting")
    const newState = {loading: false, pictures: action.payload}
    console.log(newState)
      return {loading: false, pictures: action.payload};

    default:
      return state;
  }
};
