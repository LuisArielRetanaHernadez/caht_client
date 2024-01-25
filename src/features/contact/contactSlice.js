import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  idSelect: null,
}


const contactSlice = createSlice({
  name: "contact",
  initialState,

  reducers: {
    selectContact: (state, action) => {
      state.idSelect = action.payload
    }
  }
})

export const { selectContact } = contactSlice.actions
export default contactSlice
