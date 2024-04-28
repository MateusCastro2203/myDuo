const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: {type: string}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    default:
      return state;
  }
};

export default counterReducer;
