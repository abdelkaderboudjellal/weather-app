"use client";
import { useEffect, useState } from "react";
import Weather from "./weather";

const search = () => {
  const [data, setData] = useState<any>({});
  const [fiveDays, setFiveDays] = useState<any>([]);
  const [cityname, setCityname] = useState("Médéa");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [country, setCountry] = useState("");
  const [value, setValue] = useState<string>("");
  let Api_key: string = "390b36c6ae2da05ff395c350b20e4e50";
  const getWeatherDetails = (
    name: string,
    lat: number,
    lon: number,
    country: string
  ): any => {
    const weatherIpa_Url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Api_key}`;
    fetch(weatherIpa_Url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  async function getServerSideProps(geocoing_ipa_url: string) {
    const res = await fetch(geocoing_ipa_url);
    const data = await res.json();
    const { name, lat, lon, country } = data[0];
    setCityname(name);
    setLat(lat);
    setLon(lon);
    setCountry(country);
    getWeatherDetails(name, lat, lon, country);

    return data;
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const geocoing_ipa_url: string = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${Api_key}`;

    getServerSideProps(geocoing_ipa_url);
  };

  useEffect(() => {
    if (data.list) {
      let fiveDays = data.list;
      let uniqueForceDays: any = [];

      setFiveDays(fiveDays);
    } else {
      console.log("no list ");
    }

  
  }, [data]);

  return (
    <>
      <form className="w-full  md:w-[50%] mx-auto " onSubmit={handleSubmit}>
        <div className=" flex justify-center items-center ">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#009e54] to-[#eede05] text-6xl font-bold my-8  ">Weather</h1>
        </div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter a City Name Paris, london..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <Weather
        fiveDays={fiveDays}
        cityname={cityname}
        lat={lat}
        lon={lon}
        country={country}
      />
    </>
  );
};

export default search;
