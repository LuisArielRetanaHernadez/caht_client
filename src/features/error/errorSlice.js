import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  message: "",
  statusCode: null,
  isError: false
}


const errorSlice = createSlice({
  name: "error",
  initialState,

  reducers: {
    setError: (state, action) => {
      state.message = action.payload.message
      state.statusCode = action.payload.statusCode
      state.isError = true
    },
    clearError: (state) => {
      state.message = ""
      state.statusCode = null
      state.isError = false
    }
  }
})


export const { setError, clearError } = errorSlice.actions
export default errorSlice.reducer
