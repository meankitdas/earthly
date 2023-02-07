
import Image from "next/image";
import image_1 from "../../public/1.png";
import image_2 from "../../public/2.png";
import image_3 from "../../public/3.png";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);



export default function CarouselPage() {
  return (
    <div className="w-full flex  h-[6rem] md:h-[10rem] lg:h-[22rem] mb-14 md:mb-11">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        // startupScreen={startupScreen}
        cssModule={[CoreStyles, AnimationStyles]}
      >
        <div className="w-full ">
          <Image src={image_1} alt="image_1" />
        </div>
        <div className="w-full ">
          <Image src={image_2} alt="image_1" />
        </div>
        <div className="w-full ">
          <Image src={image_3} alt="image_1" />
        </div>
      </AutoplaySlider>
    </div>
  );
}
