// LottieWeb.js
import Lottie from "lottie-react";
import animationData from "../Lottice/Data.json"; // Ensure this path is correct

const LottieData= () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};

export default LottieData;
