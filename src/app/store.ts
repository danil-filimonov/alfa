import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import stockReducer from '../features/stock/stockSlice'
import actionsReducer from '../features/actions/actionsSlice'

const reducers = combineReducers({
  stock: stockReducer,
  actions: actionsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['stock']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
