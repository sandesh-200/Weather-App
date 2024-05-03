import React, { useState, useEffect } from 'react';
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { MdPlace } from "react-icons/md";
import './Box.css';

const Box = ({ onCityChange }) => {
    const [city, setCity] = useState("london");
    const [info, setInfo] = useState({});

    const sendCity = () => {
        const place_city = city;
        onCityChange(place_city);
    };

    let handleOnChange = (e) => {
        setCity(e.target.value);
        sendCity();
    };

    useEffect(() => {
        const apiKey = "EbsDwyQVceaubPEPNd2r4w==f2tf0yajEmBKvVtD";

        fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': apiKey,
            }
        })
        .then(response => response.json())
        .then(data => {
            setInfo(data);
        });
    }, [city]);

    return (
<div className="cardContainer">
  <div className="card">
  <div className="location my-2 font-bold text-xl inline-flex cursor-pointer">
                {/* <MdPlace className='text-red-600' /> */}
                <select name="location" id="location" onChange={handleOnChange} value={city} className='bg-transparent'>
                    <option value="kathmandu" className='text-black'>Kathmandu</option>
                    <option value="london" className='text-black'>London</option>
                    <option value="new york" className='text-black'>New York</option>
                    <option value="tokyo" className='text-black'>Tokyo</option>
                    <option value="seoul" className='text-black'>Seoul</option>
                    <option value="dubai" className='text-black'>Dubai</option>
                </select>
            </div>
    <p className="temp">{info.temp}&#176;C</p>
    <p className="weather">Feels like {info.feels_like}</p>
    <p className="weather">Min {info.min_temp}&#176;C</p>
    <p className="weather">Max {info.max_temp}&#176;C</p>
    <div className="minmaxContainer">
      <div className="max justify-center items-center">
        <p className="maxHeading text-lg">Humidity</p>
        <p className="maxTemp">{info.humidity} </p>
      </div>
      <div className="max flex justify-center items-center">
        <p className="maxHeading text-lg">Wind Speed</p>
        <p className="maxTemp">{info.wind_speed}</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Box;


