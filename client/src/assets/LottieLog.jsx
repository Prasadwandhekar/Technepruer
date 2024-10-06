// LottieWeb.js
import Lottie from "lottie-react";
import animationData from "../Lottice/Log.json"; // Ensure this path is correct

const LottieLog= () => {
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

export default LottieLog;
