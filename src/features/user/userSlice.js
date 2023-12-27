import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// utils
import { login } from "../../utils/Auth";

const initialState = {
  isLogin: false,
  token: "",
  user: {},
  rol: "standar"
}

export const loginAsync = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await login(data)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => {
      state.isLogin = false
      state.token = ""
      state.user = {}
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(loginAsync.pending, state => {
      state.status = "loading"
    })
    .addCase(loginAsync.rejected, state => {
      state.status = "rejected"
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
      state.status = "fulfilled"
      state.isLogin = true
      state.token = action.payload.data.token
      state.user = action.payload.data.user
    })
  }
})

export const { logout } = userSlice.actions

export default userSlice