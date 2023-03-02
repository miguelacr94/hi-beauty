import NotificationTile from "./NotificationTile";

const NotificationsPopup = () => {
  return (
    <div className="flex flex-col w-full max-w-sm p-4 overflow-y-scroll max-h-96 scrollbar-hide">
      {/* {[...Array(10).keys()].map((i) => (
        <NotificationTile key={i} />
      ))} */}
      <span>Sin notificación</span>
    </div>
  );
};

export default NotificationsPopup;
