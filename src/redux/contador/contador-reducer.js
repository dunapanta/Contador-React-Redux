const contador = (previousState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(previousState);
      return previousState + 1;
    
    case "DECREMENT":
      console.log(previousState);
      return previousState -1;
    
    case "RESET":
      console.log(previousState);
      return previousState * 0;

    case "INCREMENT2":
      console.log(previousState);
      return previousState +2;

    case "DECREMENT2":
      console.log(previousState);
      return previousState -2;

    default:
      return previousState;
  }
};

export default contador;
