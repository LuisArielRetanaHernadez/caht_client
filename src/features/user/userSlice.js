import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: "",
  user: {},
  rol: "standar"
}

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => {
      state.isLogin = false
      state.token = ""
      state.user = {}
    }
  }
})

export const { logout } = userSlice.actions

export default userSlice