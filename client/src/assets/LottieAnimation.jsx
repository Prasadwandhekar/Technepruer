import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from "../Lottice/animation.json";

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);  
  
  return <div ref={animationContainer} className="lottie-animation" />;
};

export default LottieAnimation;
