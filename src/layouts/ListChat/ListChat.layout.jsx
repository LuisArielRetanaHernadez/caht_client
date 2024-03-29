/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ListChat from "../../components/ListChat/ListChat";
import "./ListChat.style.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { toggleVisibility } from "../../features/listChat/ListChatSlice";


const ListChatLayout = () => {
  const [showListChat, setShowListChat] = useState(true);

  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.user);

  const isShowListChat = useSelector(state => state.listChat.isShow)

  let location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  const toggleListChat = () => {
    dispatch(toggleVisibility())
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
        <span className="button button--list-chat text-center"
        onClick={toggleListChat}
        >
        {
          isShowListChat ? <FontAwesomeIcon icon={faArrowRight} />
          : <FontAwesomeIcon icon={faArrowLeft} />
        }
        </span>
      </div>
      <div className="layout-list-chat--content">
        <Outlet /> 
      </div>
    </div>
  );
}

export default ListChatLayout;