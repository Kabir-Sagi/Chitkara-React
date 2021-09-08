const Information = {
  pizza: 1500,
  burger: 3000,
};
//  action =
//     {
//         type:"PIZZA",
//         payload:storeData.pizzaReducer.pizza -  1
//     }

const myReducer = (state = Information, action) => {
  switch (action.type) {
    case "PIZZA":
      state = {
        ...state,
        pizza: action.payload,
      };
      break;
    case "BURGER":
      state = {
        ...state,

        burger: action.payload,
      };
      break;
  }

  return state;
};

export default myReducer;
