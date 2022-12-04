// function check(){
//     console.log("hi");
// }



function add (number1, number2){
    console.log(`Total : ${number1 + number2}`)
}

function square(value) {
    const result = value * value;
    console.log(result)
}


module.exports.square = square;
module.exports = {
    addFunction : add
}






