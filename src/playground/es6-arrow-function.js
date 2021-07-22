function square(x) {
    return x * x;
};

//const squareArrow = (x) => {
 //   return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const fullName = "Jeff Gore"

const getFirstName = (name) =>{
    return name.split(' ')[0];   
};

console.log(getFirstName(fullName));

const getLastNameArrowStyle = (name) => name.split(' ')[1];

console.log(getLastNameArrowStyle(fullName));