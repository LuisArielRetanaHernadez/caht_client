import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from "../../utils/axios"

const initialState = {
  idSelect: null,
  isContact: false,
  name: "",
}


export const isContactAsyn = createAsyncThunk(
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


const contactSlice = createSlice({
  name: "contact",
  initialState,

  reducers: {
    selectContact: (state, action) => {
      state.idSelect = action.payload.id
      state.isContact = action.payload.contact
      state.name = action.payload.name
    }
  }
})

export const { selectContact } = contactSlice.actions
export default contactSlice
