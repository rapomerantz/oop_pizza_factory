let empty = []; 
let cheesePizza = {}; 
let pepPizza = {ing1: 'cheese', ing2 : "pep"}; 
let meatPizza = {ing1: 'cheese', ing2: "pepp", ing3: "sausage", ing4: "bacon"}; 
let alfredoPizza = {ing1: 'alfredo sauce', ing2: 'fresh tomato', ing3:'olives', ing4: 'grilled chicken'}; 



class Pizza {
    constructor({ing1 = "cheese", 
                    ing2 = undefined, 
                    ing3 = undefined, 
                    ing4 = undefined, 
                    ing5 = undefined, 
                    ing6 = undefined}) {
        this.ing1 = ing1; 
        this.ing2 = ing2; 
        this.ing3 = ing3; 
        this.ing4 = ing4; 
        this.ing5 = ing5; 
        this.ing6 = ing6; 
    }
    findCost() {
        let cost = 10; 
            if (this.ing2 !== undefined) {cost += 0.99}; 
            if (this.ing3 !== undefined) {cost += 0.99}; 
            if (this.ing4 !== undefined) {cost += 0.99}; 
            if (this.ing5 !== undefined) {cost += 0.99}; 
            if (this.ing6 !== undefined) {cost += 0.99}; 
        return '$' + cost.toFixed(2); 
    }
}; 

// class Order extends Pizza {
//     constructor() {
//         super(); 
//         // this.pizza1 = pizza1; 
//         // this.pizza2 = pizza2; 
//     }
//     addPizza(pizza) {
//         return new Pizza(pizza); 

//     }
// }




// let firstOrder = new Order (pepPizza); 
// console.log(firstOrder.addPizza(pepPizza));










let firstPizza = new Pizza (cheesePizza); 
let secondPizza = new Pizza (pepPizza);
let thirdPizza = new Pizza (meatPizza);
let fourthPizza = new Pizza (alfredoPizza);

console.log('firstPizza', firstPizza);
console.log('firstPizza.cost', firstPizza.findCost());
console.log('secondPizza', secondPizza);
console.log('secondPizza.cost',secondPizza.findCost());
console.log('thirdPizza', thirdPizza);
console.log('thirdPizza.cost',thirdPizza.findCost());
console.log('forthPizza', fourthPizza);
console.log('forthPizza.cost',fourthPizza.findCost());



