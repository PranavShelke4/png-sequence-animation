import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import "../../style/Home/hero.css";

function Hero() {
  return (
    <Controller>
      <Scene duration="200%" triggerHook="onLeave" pin>
        {(progress) => (
          <div className="hero-div">
            <Sequence progress={progress} />
          </div>
        )}
      </Scene>
    </Controller>
  );
}

export default Hero;
