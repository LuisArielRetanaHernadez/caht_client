import { Outlet } from "react-router-dom";
import ListChat from "../../components/ListChat/ListChat";
import "./ListChat.style.css";

const ListChatLayout = () => {
  return (
    <div className="layout-list-chat wrapped wrapped--menu">
      <div className="layout-list-chat--list w-25 h-full">
        <ListChat />
      </div>
      <div className="layout-list-chat--content">
        <Outlet /> 
      </div>
    </div>
  );
}

export default ListChatLayout;