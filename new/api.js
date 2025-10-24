let arr = "karthik nayak";
let arr2 = [arr];
console.log(arr2)

arr2.forEach((data)=>{
   console.log(data[0])

   if(data[0]== "k"){
    arr2 = "karthik".toUpperCase()
    console.log(arr2[5])
   }
   else{
    console.log("try the name onces more");
   }
})