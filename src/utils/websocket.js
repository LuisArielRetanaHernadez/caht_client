/* eslint-disable no-undef */
import { Manager } from "socket.io-client";

const user = localStorage.getItem("user");
let token
if (user) {
  token = JSON.parse(user).token;
}

const manager = new Manager("ws://localhost:3000", {
  reconnection: true,
  autoConnect: true,
  auth: {
    offset: undefined
  }, 
  query: {
    key: token || ""
  },
})

export default manager;
