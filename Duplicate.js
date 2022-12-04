//console.log("hi");
//
let array =[1,2,2,3,4,5,5,7,8,6,1]
let newarray = [];
for(let i=1; i < array.length; i++){
    for( let j=0; j < i; j++){
        if(array[i] == array[j]){
            console.log("print dupliacte" + array[i]);
            console.log("print dupliactes" + array[j]);
 
        }
         else if(array[i] !== array[j])
            {
                console.log(array[i] !== array[j]);
                return array[i] != array[j];
         }
        
             
        }
        //  console.log(newarray);  
}


/* var arr = [1,2,2,3,4,5,5,7,8,6,1,7];
//console.log(arr.indexOf(9));
const another =  arr.filter(
    (element, index) => 
       // console.log(index);
        //console.log(arr.indexOf(element));
        index !== arr.indexOf(element)
    
    
);

const non_Duplicate =   arr.filter((element,index)=>
    index === arr.indexOf(element)); 
    console.log("duplicate: " + another);
    console.log("non_Duplicate" +non_Duplicate); */