import { useState } from "react";
import Clamp from "./Icons/Clamp";

const NotificationIcon = () => {
  const [count, setCount] = useState(2);

  return (
    <div className="relative flex items-center justify-center w-10 h-10 bg-transparent 
    rounded-full  aspect-square">
      <Clamp className="text-white" />
      {/* {count > 0 && (
        <div className="absolute w-3 h-3 text-xs border border-white rounded-full -right-0.5 bottom-0 bg-alert aspect-square" />
      )} */}
    </div>
  );
};

export default NotificationIcon;
