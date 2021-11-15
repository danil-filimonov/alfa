import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ActionsState {
  likes: number[]
  hide: number[]
}

const initialState: ActionsState = {
  likes: [],
  hide: []
}

export const actionsSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    setLike: (state, action: PayloadAction<number>) => {
      if (!state.likes.includes(action.payload)) {
        state.likes.push(action.payload)
      }
    },
    removeLike: (state, action: PayloadAction<number>) => {
      if (state.likes.includes(action.payload)) {
        state.likes.splice(state.likes.indexOf(action.payload), 1)
      }
    },
    setHide: (state, action: PayloadAction<number>) => {
      if (!state.hide.includes(action.payload)) {
        state.hide.push(action.payload) 
      }
    },
    showAllHide: (state) => {
      state.hide.length = 0
    }
  }
})

export const { setLike, removeLike, setHide, showAllHide } = actionsSlice.actions

export const selectLikes = (state: RootState) => state.actions.likes
export const selectHide = (state: RootState) => state.actions.hide

export default actionsSlice.reducer
