import { Outlet } from "react-router-dom";
import ListChat from "../../components/ListChat/ListChat";

const ListChatLayout = () => {
  return (
    <div className="wrapped wrapped--list-layout bg-gradient">
      <div className="w-25">
        <ListChat />
      </div>
      <div className="flex-1">
        <Outlet /> 
      </div>
    </div>
  );
}

export default ListChatLayout;