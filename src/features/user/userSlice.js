import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// utils
import { login } from "../../utils/Auth";
import { getContacts } from "../../utils/thunkUser";

const initialState = {
  isLogin: false,
  token: "",
  user: {},
  contacts: [],
  rol: "standar",
  status: 'fulfilled'
}

export const loginAsync = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await login(data)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  }
)

export const logoutAsync = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    try {
      const response = await logout()
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  }
)

export const getContactsAsync = createAsyncThunk(
  "user/getContacts",
  async (data, thunkAPI) => {
    try {
      const response = await getContacts()
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue()
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
    },
    setUser: (state, action) => {
      state.isLogin = action.isLogin
      state.token = action.token
      state.user = action.user
    },
    usersFind: (state, action) => {
      state.usersFind = action.payload
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

    .addCase(logoutAsync.pending, state => {
      state.status = "loading"
    })
    .addCase(logoutAsync.rejected, state => {
      state.status = "rejected"
    })
    .addCase(logoutAsync.fulfilled, (state) => {
      state.isLogin = false
      state.token = ""
      state.user = {}
    })

    .addCase(getContactsAsync.pending, state => {
      state.status = "loading"
    })
    .addCase(getContactsAsync.rejected, state => {
      state.status = "rejected"
    })
    .addCase(getContactsAsync.fulfilled, (state, action) => {
      state.contacts = action.payload.data.contacts
    })
  }
})

export const { logout } = userSlice.actions

export default userSlice