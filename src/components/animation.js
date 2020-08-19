import React, {useEffect, createRef} from "react"
import lottie from 'lottie-web'
import animation from './shiba.json'


const Animation = () => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
  }, []);


  return (
        <div className="animation-container" ref={animationContainer} />
  );
};

export default Animation;