import { useSnapshot } from "valtio";
import state from "../store";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ type, handleClick, title, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      onClick={handleClick}
      style={generateStyle(type)}
      className={`px-2 py-1.5 rounded-md flex-1 ${customStyles}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
