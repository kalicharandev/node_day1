    console.log("hi");
    
    let regex = /^[A-Za-z]+$/;


    let fname = "KALICHARAN";
    console.log(`fname: ${fname}`);

    let firstname = regex.test(fname);
    console.log(`firstname: ${firstname}`);

    var lname = "kalKALI";
    console.log(`lname: ${lname}`);

    let lastname = regex.test(lname);
    console.log(`lastname: ${lastname}`);

    var pword = "nodejs12345";
    console.log(`password-: ${pword}`);

    let isValidPassword = false ;
    if(pword.length > 10){
        isValidPassword = true;
        
    }

       console.log(`isValidPassword:${isValidPassword}`);

      if(firstname && lastname && isValidPassword ){
        console.log(`firstname : ${firstname} lastname: ${lastname}  password: ${isValidPassword}`);
    }else{
        console.log("failed");
}