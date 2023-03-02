import Clamp from "../Icons/Clamp";

const NotificationTile = () => {
  return (
    <div className="flex items-start w-full p-2 space-x-2 text-sm bg-white rounded-md hover:bg-gray-50">
      <Clamp size="1.3em" className="mt-0.5" />
      <div className="flex flex-col w-full">
        <b className="font-semibold line-clamp-1">Notificación</b>
        <span className="font-light line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </span>
      </div>
    </div>
  );
};

export default NotificationTile;
