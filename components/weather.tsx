"use client";
import { useState } from "react";
import { ImLocation } from "react-icons/im";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { Cardsday, Map } from "@/components";

import Image from "next/image";
let dategenerator = (date: any, number: number): any => {
  const forecastDate: any = new Date(date)
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(",")[number];
  return forecastDate;
};
const weather = (props: any) => {
  let fiveDays = props.fiveDays;
  let listDay = fiveDays;
  let uniqueForceDays: any = [];
  let fiveDays1 = listDay.filter((forecast: any) => {
    let forecastDate = dategenerator(forecast.dt_txt, 0);

    const Datelight: any = new Date(forecast.dt_txt).getHours();
    if (!uniqueForceDays.includes(forecastDate)) {
      return uniqueForceDays.push(forecastDate);
    }
  });

  let date1 = new Date();

  let day = dategenerator(date1, 0);

  let date = dategenerator(date1, 1);
  const [dayshow, setDayshow] = useState<any>(day);

  let dataFiltering: any[] = [];
  let dataShow = fiveDays.map((item: any) => {
    if (dayshow == dategenerator(item.dt_txt, 0)) {
      return dataFiltering.push(item);
    }
  });

  return (
    <>
      <div className="  w-[100%] sm:w-[800px] px-0 lg:px-8  mt-24">
        <div className="flex flex-wrap w-full ">
          <div className="w-full  flex rounded-3xl my-6 bg-[url('https://img.freepik.com/free-photo/raindrops-window-with-blue-sky_53876-142999.jpg?w=996&t=st=1688088419~exp=1688089019~hmac=0205af5d240ab87cc4090d8442a1bbe7751f4aeb22a3a61ed37750343d42d4da')]  bg-cover bg-center">
            {fiveDays.length != 0 ? (
              <>
                <div
                  className={
                    fiveDays[0].sys.pod == "n"
                      ? "rounded-lg py-6 px-8  w-full bg-[url('https://img.freepik.com/premium-vector/stary-sky-background_583556-181.jpg?w=996')] opacity-90  text-white"
                      : "rounded-lg py-6 px-8  w-full bg-[#1b90df] opacity-90  text-white"
                  }
                >
                  <div className="mb-8">
                    <h2 className="font-bold text-3xl leading-none pb-1">
                      {day}
                    </h2>
                    <h3 className="leading-none pb-2 pl-1">
                      {date.split(" ").reverse().join(" ")}{" "}
                      {dategenerator(date1, 2)}
                    </h3>
                    <p className="flex aling-center opacity-75">
                      <ImLocation size={20} color="white" />
                      {props.cityname} , {props.country.toLowerCase()}
                    </p>
                  </div>
                  <div className="flex flex-col w-full  ">
                    <div className=" w-full flex flex-col  md:flex-row  justify-around items-center  ">
                      <Image
                        className={"drop-shadow-[0_0_20px_rgba(255,255,255)]"}
                        src={`/weather/${fiveDays[0].weather[0].icon}.svg`}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                      />
                      <div className="flex flex-row md:flex-col  justify-around items-center">
                        <strong
                          className="flex items-center text-center leading-none text-7xl 
                         font-weight-bolder"
                        >
                          {Math.round(fiveDays[0].main.temp - 273)}
                          <LiaTemperatureHighSolid size={70} color="white" />
                        </strong>
                        <b className="text-3xl  block font-bold  ">
                          {fiveDays[0].weather[0].main}
                        </b>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full   justify-around">
                      <div className="flex justify-between w-46 space-x-2 items-center  mb-4 ">
                        <MdVisibility size={28} color="white" />

                        <div className="w-auto font-bold   text-xl">
                          Visibility
                        </div>
                        <div className="text-right font-bold  text-xl">
                          {Math.round(100 - fiveDays[0].wind.speed)}%
                        </div>
                      </div>
                      <div className="flex justify-between  w-46 space-x-2  items-center  mb-4 ">
                        <WiHumidity size={35} color="green" />

                        <div className="w-auto font-bold  text-xl">
                          Humidity
                        </div>
                        <div className="w-auto text-right font-bold  text-xl">
                          {fiveDays[0].main.humidity} %
                        </div>
                      </div>
                      <div className="flex justify-between  w-46 space-x-2 items-center  mb-4">
                        <GiWindsock size={28} color="red" />
                        <div className="w-auto font-bold  text-xl">
                          Wind Speed
                        </div>
                        <div className="w-auto text-right font-bold  text-xl">
                          {fiveDays[0].wind.gust} km/h
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-lg py-6 px-8  w-full bg-[#1b90df] opacity-90  text-white">
                <div className="mb-8">
                  <h2 className="font-bold text-3xl leading-none pb-1">
                    {day}
                  </h2>
                  <h3 className="leading-none pb-2 pl-1">
                    {date} {dategenerator(date1, 2)}
                  </h3>
                  <p className="flex aling-center opacity-75">
                    <ImLocation size={20} color="white" />
                    {props.cityname}
                  </p>
                </div>
                <div className="flex flex-col w-full  ">
                  <div className="flex justify-center">
                    <Image
                      src={"/weather/01d.svg"}
                      width={200}
                      height={200}
                      alt="Picture of the author"
                    />
                    <div className="flex flex-col justify-around">
                      <strong className="leading-none text-6xl block font-weight-bolder">
                        29ºC
                      </strong>
                      <b className="text-2xl block font-bold">Sunny</b>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full  flex ml-0">
            <div className="lg:my-3   opacity-85 text-white  lg:rounded-lg w-full">
              {fiveDays.length != 0 && (
                <Map lat={props.lat} lon={props.lon} name={props.cityname} />
              )}
            </div>
          </div>

          <div
            className="z-30 rounded-md shadow-sm grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 mx-auto  "
            role="group"
          >
            {uniqueForceDays.map((day: any) => {
              return (
                <button
                  key={day}
                  type="button"
                  className="text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-[#201d36]  hover:border-[#201d36] hover:text-white font-medium rounded-xl text-sm px-4 py-2.5 mr-2 mb-2 focus:bg-[#201d36] focus:text-white "
                  onClick={() => {
                    setDayshow(day);
                  }}
                >
                  {day == uniqueForceDays[0]
                    ? "Today"
                    : day == uniqueForceDays[1]
                    ? "Tomorrow"
                    : day}
                </button>
              );
            })}
          </div>

          <div className="w-full  flex ml-0 ">
            <div className="lg:my-3 backdrop-blur-sm  text-black  lg:rounded-lg w-full h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
                {dataFiltering.map((item: any) => {
                  return (
                    <Cardsday
                      key={item.main.temp}
                      temp={item.main.temp}
                      temp_max={item.main.temp_max}
                      feels_like={item.main.feels_like}
                      weather={item.weather[0].main}
                      weatherId={item.sys.pod}
                      description={item.weather[0].description}
                      wind={item.wind.gust}
                      visibility={item.wind.speed}
                      humidity={item.main.humidity}
                      image={item.weather[0].icon}
                      date={item.dt_txt}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default weather;
