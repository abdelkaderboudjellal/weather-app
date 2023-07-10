import Image from "next/image";
import { LiaTemperatureHighSolid } from "react-icons/lia";
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
const cardsday = (props: any) => {
  let dateString: any = new Date(`${props.date}`);
let dayMonth:any =dategenerator(props.date,1)
  let heur:number=dateString.getHours()
 

  return (
    <>
      <div
        className={
          props.weatherId == "n"
            ? "flex flex-row  md:flex-col justify-around  p-4  m-4  bg-[url('https://img.freepik.com/premium-vector/stary-sky-background_583556-181.jpg?w=996')]  text-white   rounded-3xl "
            : "flex flex-row  md:flex-col justify-around rounded-3xl p-4  m-4  bg-[#1b90df]   text-white "
        }
      >
        <div className="flex flex-col">
          <h1 className="font-bold text-md md:text-xl ">
            {dayMonth.split(' ').reverse().join(' ')}{dategenerator(props.date,2)}
          </h1>
          <h1 className="text-md md:text-xl font-bold text-gray-300">
            {dategenerator(props.date,0)}
          </h1>
          <h1 className="text-md md:text-xl font-bold text-gray-300">
            {heur % 12}{heur>= 12 ? ' PM' : ' AM'} 
          </h1>
        </div>
        <div className=" self-center flex flex-col items-center justify-center  ">
          <Image
            className={"drop-shadow-[0_0_30px_rgba(255,255,255)]"}
            src={`/weather/${props.image}.svg`}
            width={150}
            height={150}
            alt="Picture of the author"
          />
          <h1 className="text-lg md:text-2xl font-bold text-center ">{props.description}</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-around ">
          <div className="flex items-center font-medium  text-3xl md:text-6xl">
            {(props.temp - 273).toFixed(0)}
            <LiaTemperatureHighSolid size={35} color="white" />
          </div>
          <div className="flex flex-col w-[50%] items-center ml-6">
            <div>{props.weather}</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="flex items-center text-md font-bold text-gray-300">
                {(props.temp_max - 273).toFixed(0)}
                <LiaTemperatureHighSolid size={20} color="white" />
              </span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="flex items-center text-md font-bold text-gray-300">
                {(props.feels_like - 273).toFixed(0)}
                <LiaTemperatureHighSolid size={20} color="white" />
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex   flex-col md:flex-row justify-between ">
          <div className="flex flex-col items-center">
            <div className="font-medium text-md">Wind</div>
            <div className="text-md font-medium text-gray-300">
              {props.wind}k/h
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-md">Humidity</div>
            <div className="text-md font-medium text-gray-300">
              {props.humidity}%
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-md">Visibility</div>
            <div className="text-md font-medium text-gray-300">
              {props.visibility}km
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cardsday;
