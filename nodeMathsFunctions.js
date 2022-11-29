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






//     let regex = /^[A-Za-z]+$/;

//     let fname = ;
//     console.log(`fname: ${fname}`);

//     let firstname = regex.test(fname);
//     console.log(`firstname: ${firstname}`);

//     var lname = $("#lname").val();
//     console.log(`lname: ${lname}`);

//     let lastname = regex.test(lname);
//     console.log(`lastname: ${lastname}`);

//     var pword = $("#pword").val();
//     console.log(`password-: ${pword}`);

//     let isValidPassword = false ;
//     if(pword.length > 10){
//         isValidPassword = true;
        
//     }

//       console.log(`isValidPassword:${isValidPassword}`);

//      if(firstname && lastname && isValidPassword ){
//         $("#displayer").html("Success");
//         console.log(`firstname : ${firstname} lastname: ${lastname} password: ${isValidPassword}`);
//     }else{
//         $("#displayer").html("Failed");
//         console.log("failed");
//     }
// });    