import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from "../../utils/axios"

const initialState = {
  isContact: false,
  name: "",
}


export const isContactAsync = createAsyncThunk(
  "contact/isContact",
  async (id, thunkAPI) => {
    try {
      const response = await Axios.get(`/isContact/${id}`)
      return response.data.isContact
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }

  }
)

export const getContactAsync = createAsyncThunk(
  "contact/getContact",
  async (id, thunkAPI) => {
    try {
      const response = await Axios.get(`/contact/${id}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  }
)


const contactSlice = createSlice({
  name: "contact",
  initialState,

  reducers: {
    selectContact: (state, action) => {
      state.idSelect = action.payload.id
      state.isContact = action.payload.contact
      state.name = action.payload.name
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(isContactAsync.pending, (state) => {
      state.isContact = false
    })
    .addCase(isContactAsync.fulfilled, (state, action) => {
      state.isContact = action.payload
    })
    .addCase(isContactAsync.rejected, (state) => {
      state.isContact = false
    })

    .addCase(getContactAsync.pending, (state) => {
      state.isContact = false
    })
    .addCase(getContactAsync.fulfilled, (state, action) => {
      state.isContact = true
      state.name = action.payload.name
    })
    .addCase(getContactAsync.rejected, (state) => {
      state.isContact = false
    })
  }
})

export const { selectContact } = contactSlice.actions
export default contactSlice
