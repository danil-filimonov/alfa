import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { IPicture } from '../../types/types'

interface StockState {
  pictures: IPicture[] | []
  isLoading: boolean,
  error: string
}

const initialState: StockState = {
  pictures: [],
  isLoading: false,
  error: ''
}

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    picsFetching: state => {
      state.isLoading = true
    },
    picsFetchingSuccess: (state, action: PayloadAction<IPicture[]>) => {
      state.isLoading = false
      state.error = ''
      state.pictures = action.payload
    },
    picsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { picsFetching, picsFetchingSuccess, picsFetchingError } = stockSlice.actions

export const selectPictures = (state: RootState) => state.stock.pictures
export const selectLoading = (state: RootState) => state.stock.isLoading
export const selectError = (state: RootState) => state.stock.error

export default stockSlice.reducer
