import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  idSelect: null,
  contact: false,
}


const contactSlice = createSlice({
  name: "contact",
  initialState,

  reducers: {
    selectContact: (state, action) => {
      state.idSelect = action.payload.id
      state.contact = action.payload.contact
    }
  }
})

export const { selectContact } = contactSlice.actions
export default contactSlice
