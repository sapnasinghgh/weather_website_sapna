// const  apikey = "0400c1954ac1e6d848d49a108e12882a"
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid=0400c1954ac1e6d848d49a108e12882a&units=metric"

async function checkweather (city){
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0400c1954ac1e6d848d49a108e12882a&units=metric`
      
    const response = await fetch(apiurl);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block"
    document.querySelector("#weather").style.display = "none"

    }
    else{
         const data = await response.json();
          

     search.value =""

         document.querySelector("h2").innerHTML =  data.name;
    document.querySelector("h3").innerHTML = Math.round(data.main.temp)+"℃";
    document.querySelector("h4").innerHTML =  data.weather[0].main
    document.querySelector("#weather").style.display = "block"
        document.querySelector(".error").style.display = "none"



    }
    

  
}

const form = document.querySelector("form")
const search = document.querySelector("#search")
 form.addEventListener("submit", function(e){
    e.preventDefault();
    checkweather(search.value);

       
})












// const url = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}&unit=metric"

// const getweather = async(city)=>{
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&unit=metric`

//     const response = await fetch(url)
//     const data = await response.json();
//     console.log(data);
//     // return showweather(data)
      
   
// }
// getweather()

// const showweather = (data) =>{
//       document.querySelector("h1").innerHTML = data.name;
//     document.querySelector("h2").innerHTML = data.main.temp+"℃"; 

// }

// const form = document.querySelector("form")
// const search = document.querySelector("#search")


// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     getweather(search.value);

       
// })


