async function getdata(){
    let fetchdata = await fetch('https://randomuser.me/api/?results=5')
    let responsedata = await fetchdata.json();
    console.log(responsedata.results[0].location.state)

   responsedata.results.foreach(function (data){
        console.log(data[0].gender)
    })
}
getdata()


