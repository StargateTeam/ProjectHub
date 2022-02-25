import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const addAnything = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increase(state) {
      state.value++
    }
  }
})

export const { increase } = addAnything.actions
export default addAnything.reducer
