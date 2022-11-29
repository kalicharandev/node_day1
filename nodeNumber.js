let Orange = 100;
      console.log(`Orange ${Orange}`);
 let  Apple = 100;
      console.log(`Apple ${Apple}`);
let Grapes = 50;
       console.log(`Grapes ${Grapes}`);
let blueBerry = 150;
        console.log(`blueBerry ${blueBerry}`);
let fruits = Orange + Apple + Grapes + blueBerry;
console.log("fruits" + fruits)

if(fruits > 0 && fruits <= 200){
    console.log(`The price ${fruits} Cheap`);
}else if(fruits > 201 && fruits <= 300){
    console.log(`The price ${fruits} Affortable`);
}else if(fruits > 301){
    console.log(`The price ${fruits} Expensive`);
}
        
      //   $("#dispaly").html(fruits);
      //  console.log(fruits);

      //  if (fruits > 0 && fruits <= 200){
      //   $("#display").html(`The price ${fruits} Cheap`);
      //  }else if(fruits > 200 && fruits <= 300){
      //   $("#display").html(`The price ${fruits} Affordable`);
      //  }else if(fruits > 300){
      //   $("#display").html(`The price ${fruits} Expensive`);
      //  }
