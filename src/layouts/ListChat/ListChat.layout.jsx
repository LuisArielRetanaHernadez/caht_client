import { Outlet } from "react-router-dom";
import ListChat from "../../components/ListChat/ListChat";

const ListChatLayout = () => {
  return (
    <div className="">
      <ListChat />
      <Outlet /> 
    </div>
  );
}

export default ListChatLayout;