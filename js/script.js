      
// contact us function
$(document).ready(function(){
   

class Orderpizza {
    constructor(size, crust, topping, numberOfPizza,) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.numberOfPizza = numberOfPizza;
        
    }
};



//  all inputs from user
$(document).ready(function(){
    $(".form").submit(function (event){
        event.preventDefault();    
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        let pizzaTopping = $("#topping option:selected").val();
        let numberOfPizza = parseInt($("#number").val());
        let userDelivery = $("#delivery").val();  
        let totalPrice  = 0;
        
    if(pizzaSize === "regular") {
        totalPrice += 550;
    } else if(pizzaSize === "medium")  {
        totalPrice += 800;
    } else if(pizzaSize === "large") {
        totalPrice += 1200;
    } 
 //pizza crusts

    if(pizzaCrust === "custom-crust") {
        totalPrice += 200;
    } else if(pizzaCrust === "thin-crust"){
        totalPrice += 100;
    } else if(pizzaCrust === "thick-crust"){
        totalPrice += 150;   
    }

// toppings
 
     if(pizzaTopping === "mushrooms") {
         totalPrice += 80;
     }else if(pizzaTopping === "onions") {
         totalPrice += 80;
     } else if(pizzaTopping === "tomato") {
         totalPrice += 80;
     } else if(pizzaTopping === "chilli-pepper") {
         totalPrice += 80;
     } 
     
      

     let grandtotal = totalPrice * numberOfPizza
     let deliveryTotal = grandtotal + 150;
     if(userDelivery !=""){
         alert("total bill will be ${deliveryTotal}")
     }else{
     alert(" ${numberOfPizza} ${pizzaSize} pizza with ${pizzaCrust} crust and ${pizzaTopping} topping,your total bill will be ${grandtotal} ")

     }

    })
})

})