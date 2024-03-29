/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ListChat from "../../components/ListChat/ListChat";
import "./ListChat.style.css";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useState } from 'react';

const ListChatLayout = () => {
  const [showListChat, setShowListChat] = useState(true);

  const { isLogin } = useSelector((state) => state.user);

  let location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  useEffect(() => {
    const widthViewport = window.innerWidth;
    if (widthViewport < 768) {
      if (location.pathname !== "/") {
        setShowListChat(false);
      }
    }

    return () => {
      setShowListChat(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [location, window.innerWidth])

  return (
    <div className="layout-list-chat wrapped wrapped--menu">
      <div className={`layout-list-chat--list ${!showListChat ? 'layout-list-chat--hidden' : ''} w-25 h-full`}>
        <ListChat />
      </div>
      <div className="layout-list-chat--content">
        <Outlet /> 
      </div>
    </div>
  );
}

export default ListChatLayout;