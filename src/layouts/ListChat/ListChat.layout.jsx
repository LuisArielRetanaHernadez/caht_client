import { Outlet } from "react-router-dom";
import ListChat from "../../components/ListChat/ListChat";

const ListChatLayout = () => {
  return (
    <div className="layout-list-chat wrapped wrapped--menu">
      <div className="w-25 h-full">
        <ListChat />
      </div>
      <div className="flex-1">
        <Outlet /> 
      </div>
    </div>
  );
}

export default ListChatLayout;