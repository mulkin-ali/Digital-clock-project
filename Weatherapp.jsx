import React, { useState } from 'react'
import './Wetherapp.css'
import serchhimg from './Image/search.png'
import cloudimg from './Image/cloud.jpg'
import humidityimg from './Image/humidity.jpg'
import windimg from './Image/wind.jpg'
import drizzleumg from'./Image/drizzle.jpg'
import rainicon from './Image/rain.jpg'
import clearcloud from './Image/clear.jpg'
import snowimg from './Image/snow.png'
function Wetherapp() {
  let api_key="7d638fb0473aad1365caa9bb563e2b3e";
  const [wicon,setwicon]=useState(cloudimg);
 
  const search= async ()=>{
    const element=document.getElementsByClassName("cityinput")
    if(element[0].value===0){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response=await fetch(url);
    let data= await response.json();
    const humidity=document.getElementsByClassName("humidity_percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temprature=document.getElementsByClassName("weather_temp");
    const location=document.getElementsByClassName("weather_location");

    humidity[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML= Math.floor(data.wind.speed)+"km/h";
    temprature[0].innerHTML=Math.floor(data.main.temp)+"°c";
    location[0].innerHTML=data.name;
      
    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
        setwicon(clearcloud);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setwicon(cloudimg);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setwicon(drizzleumg);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setwicon(drizzleumg);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setwicon(rainicon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setwicon(rainicon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setwicon(snowimg);
    }
    else{
      setwicon(clearcloud);
    }
  
  }
  return (
    
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityinput" placeholder="search"/>
        <div className='search-icon' onClick={()=>{search()}}>
      <img src={serchhimg}alt=""/>
       </div>
        </div>
        <div className='wether_image'>
          <img src={wicon}  width="100px" alt=''/>
        </div>
        <div className='weather_temp'>24°C </div>

        <div className='weather_location'>LONDON</div>
        <div className='data_contanier'>
          <div className='element'>
            <img src={humidityimg} alt='' className='icon'/>
            <div className='data'>
              <div className='humidity_percent'>64%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={windimg} alt='' className='icon'/>
            <div className='data'>
              <div className='wind-rate'>18 km/hr</div>
              <div className='text'>Wind speed</div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Wetherapp