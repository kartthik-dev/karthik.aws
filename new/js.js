let fruit = ["mango","banana","guava","watermelon","pineapple"];

fruit.forEach(function(data,index){
    if(index == 2)
   console.log("the data was",`${data}`.toUpperCase());
})


let data1 = [{
    name:"karthik nayak",
    roll:"AT",
     course:"CSE",
},{
   name:"kiran nayak",
    roll:"AB",
     course:"CSE", 
},
{
    name:"namitha nayak",
    roll:"AA",
     course:"CSE", 
}];

data1.forEach(function (dets,ind){
    if(ind== 0){
        console.log("the first priority for:",`${dets.name}`.toUpperCase())
    }
    
    else{
        ind != 0
        }
})

async function fetchAndLoopUsers() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();

    const users = data.results;  
    console.log(users)

    users.forEach((user, index) => {
      console.log(`User ${index + 1}:`);
      console.log(`Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
      console.log(`Email: ${user.email}`);
      console.log(`Location: ${user.location.city}, ${user.location.country}`);
      console.log('---');
    });

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchAndLoopUsers();


