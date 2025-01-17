import weather from "../../../assets/weather.png";
import { NewCard } from "./style";
import { useState } from "react";

const { Meta } = NewCard;

export const Card3 = () => {
  const [isClick, setClick] = useState(false);

  const click = () => {
    !isClick ? setClick(true) : setClick(false);
  };

  return (
    <NewCard onClick={click} cover={<img src={weather} alt="weather" />}>
      <Meta title={<h3>Weather App</h3>} />
      {isClick ? (
        <div>
          <p>
            <br />
            <b>Tech Stack:</b>
            <br />
            React, Typescript
            <br />
            <br />
            A simple weather App that gives weather information on the current
            and upcoming 4 days of the given cities. <br />
            <br />
            <a
              href="https://github.com/MicVillacarlos/weather-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo click here
            </a>
            <br />
            <br />
            Live site:
            <a
              href="https://weather-app-react-mv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://weather-app-react-mv.netlify.app/
            </a>
          </p>
        </div>
      ) : null}
    </NewCard>
  );
};
