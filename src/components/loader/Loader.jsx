import { hourglass } from "ldrs";
import "./Loader.css";

hourglass.register();

// Default values shown

export const Loader = () => {
  return (
    <div className="loader-box">
      <l-hourglass
        size="40"
        bg-opacity="0.5"
        speed="1.75"
        color="#D5BDAF"
      ></l-hourglass>
    </div>
  );
};
