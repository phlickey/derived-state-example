import { useEffect, useState } from "react";

export const Container = () => {
  console.log("Container renders");
  const [numberOfTimesClicked, setNumberOfTimesClicked] = useState(0);

  const onButtonClick = () => {
    setNumberOfTimesClicked((current) => current + 1);
  };

  return (
    <div>
      <p>The Button was clicked {numberOfTimesClicked} times.</p>
      <StatefulIsEven count={numberOfTimesClicked} />
      <DerivedIsEven count={numberOfTimesClicked} />
      <button onClick={onButtonClick}>Click</button>
    </div>
  );
};

const StatefulIsEven = ({ count }) => {
  console.log("StatefulIsEven renders");
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  return <p>That {isEven ? "is" : "isn't"} an even number. </p>;
};

const DerivedIsEven = ({ count }) => {
  console.log("DerivedIsEven renders");
  const isEven = count % 2 === 0;

  return <p>That {isEven ? "is" : "isn't"} an even number. </p>;
};
