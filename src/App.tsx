import React, { useEffect } from 'react'

import axios from 'axios'

import { stockSlice } from './features/stock/stockSlice'
import { useAppDispatch } from './app/hooks'

import CardsList from './components/CardsList'

import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const API = 'https://api.pexels.com/v1/curated'
  const TOKEN = '563492ad6f91700001000001ecf0d3af92a541458c09c1d48706968e'

  const dispatch = useAppDispatch()

  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const fetchPics = async () => {
      try {
        dispatch(stockSlice.actions.picsFetching())

        const { data } = await axios.get(API, { headers: { Authorization: TOKEN }, cancelToken: source.token })

        dispatch(stockSlice.actions.picsFetchingSuccess(data.photos))
      } catch (error) {
        dispatch(stockSlice.actions.picsFetchingError('Error'))
      }
    }

    fetchPics()

    return () => {
      source.cancel('Operation canceled.')
      dispatch(stockSlice.actions.picsFetchingError('Operation canceled.'))
    }
  }, [dispatch])

  return (
    <div className='App' style={{padding: '30px 0'}}>
      <div className='container'>
        <CardsList />
      </div>
    </div>
  )
}

export default App
