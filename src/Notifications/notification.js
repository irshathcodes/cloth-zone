import { store } from "react-notifications-component"; // for notifications
import "react-notifications-component/dist/theme.css";
import "animate.css";

const notification = (successType, messageText, title) => {
  store.addNotification({
    title: title || "",
    message: messageText,
    type: successType,
    insert: "top",
    container: "top-right",
    timeOut: 4000,
    animationIn: ["animate__animated", "animate__bounceIn"],
    animationOut: ["animate__animated", "animate__bounceOut"],
    dismiss: {
      duration: 3000,
      showIcon: true,
    },
  });
};

export default notification;
