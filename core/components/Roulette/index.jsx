import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "REACT" },
  { option: "CUSTOM" },
  { option: "CUSTOM" },
  { option: "WHEEL" },
  { option: "REACT" },
  { option: "CUSTOM" },
  { option: "WHEEL" },
];

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const startSpinning = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const stopSpinning = () => {
    setMustSpin(false);
    alert(`You won ${data[prizeNumber].option}`);
  };

  return (
    <div className="flex flex-col space-y-4 w-full justify-center items-center">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"]}
        textColors={["#0b3351"]}
        fontSize={17}
        outerBorderColor={"#eeeeee"}
        outerBorderWidth={10}
        innerRadius={0}
        innerBorderColor={"#30261a"}
        innerBorderWidth={0}
        radiusLineColor={"#eeeeee"}
        radiusLineWidth={8}
        textDistance={60}
        onStopSpinning={stopSpinning}
      />
      <button
        className="bg-black rounded-md text-lg font-semibold cursor-pointer text-white px-5 py-1"
        onClick={startSpinning}
      >
        GIRAR
      </button>
    </div>
  );
};

export default Roulette;
