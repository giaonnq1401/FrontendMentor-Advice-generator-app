import divider from '../assets/images/pattern-divider-desktop.svg';
import dice from '../assets/images/icon-dice.svg';
import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("00");

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      console.log(data);

      });
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <div className="m-auto p-11 flex flex-col justify-between items-center bg-dark-graylish rounded-lg w-80 h-auto relative sm:w-[539px]">
        <h1 className="text-neon-green uppercase">Advice #{id}</h1>

        <div className="text-light-cyan text-[28px] text-center my-9">
          “{advice}”
        </div>

        <div className="mb-9">
          <div className="bg-dark-graylish h-[1px]"></div>
          <img src={divider} alt="" />
          <div className="bg-dark-graylish h-[1px]"></div>
        </div>
        <button
          className="absolute -bottom-6 rounded-full w-16 h-16 grid items-center justify-center hover:shadow-neon-green bg-neon-green shadow-[0_0_40px_-5px_rgba(0,0,0,0.1)] cursor-pointer"
          onClick={handleClick}
        >
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Advice;