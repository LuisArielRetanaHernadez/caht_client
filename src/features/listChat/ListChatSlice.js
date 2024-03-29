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
    }
  }
})

export const { toggleVisibility } = listChatSlice.actions

export default listChatSlice
