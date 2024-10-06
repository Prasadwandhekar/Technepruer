// LottieWeb.js
import Lottie from "lottie-react";
import animationData from "../Lottice/coding.json"; // Ensure this path is correct

const LottieCoding = () => {
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

export default LottieCoding;
