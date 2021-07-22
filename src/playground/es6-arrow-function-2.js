//argument objects - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments); -- no longer accessable with arrow
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound 

const user = {
    name: 'Jeff', cities: ['Brooklyn', 'Stratford', 'Bridgeport'],
    printPlacesLived() { //Don't want to use arrow function if there is a this inside function
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5, 10, 20],
    multipyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multipyBy);
    }  
};

console.log(multiplier.multiply());