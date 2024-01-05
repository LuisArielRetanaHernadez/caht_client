/* eslint-disable no-undef */
import { Manager } from "socket.io-client";

console.log(import.meta.env.SERVER_URL)

const token = JSON.parse(localStorage.getItem("user")).token;

const manager = new Manager("ws://localhost:3000", {
  reconnectionDelayMax: 10000,
  auth: {
    offset: undefined
  }, 
  query: {
    key: token || ""
  },
})

export default manager;
