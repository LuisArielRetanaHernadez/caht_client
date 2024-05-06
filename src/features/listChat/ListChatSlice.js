import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  chats: [],
  isShow: false,
}

const listChatSlice = createSlice({
  name: "listChat",
  initialState,

  reducers: {
    toggleVisibility(state) {
      state.isShow = !state.isShow
    },
    addChat(state, action) {
      state.chats.push(action.payload)
    },
  }
})

export const { toggleVisibility } = listChatSlice.actions

export default listChatSlice
