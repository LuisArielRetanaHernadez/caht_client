import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// utils
import { login } from "../../utils/Auth";
import { getContacts } from "../../utils/thunkUser";

const initialState = {
  isLogin: false,
  token: "",
  ID: "",
  name: "",
  username: "",
  email: "",
  photo: "",
  rol: "standar",
  status: 'fulfilled'
}

export const loginAsync = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await login(data)
      console.log(response)
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
      state.isLogin = action.payload.isLogin
      state.token = action.payload.token
      state.user = action.payload.user
    },
    usersFind: (state, action) => {
      state.usersFind = action.payload
    },
    updatePhotoUser: (state, action) => {
      state.photo = action.payload
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
      state.ID = action.payload.data.user._id
      state.photo = action.payload.data.user.photo
      state.username = action.payload.data.user.username
      state.name = action.payload.data.user.name
      state.email = action.payload.data.user.email
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
      state.ID = ""
      state.name = ""
      state.username = ""
      state.email = ""
      state.photo = ""
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

export const { logout, setUser, updatePhotoUser } = userSlice.actions

export default userSlice