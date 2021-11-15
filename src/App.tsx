import React, { useEffect } from 'react'

import axios from 'axios'

import Card from './components/Card'

import './App.css'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  // https://api.pexels.com/v1/curated?per_page=1
  const TOKEN = '563492ad6f91700001000001ecf0d3af92a541458c09c1d48706968e'

  useEffect(() => {
    axios.get('https://api.pexels.com/v1/curated', { headers: { Authorization: TOKEN } }).then(response => {
      const { data } = response

      console.log(data)
    })
  }, [])

  const images = [
    {
      id: 1,
      src: 'https://materializecss.com/images/sample-1.jpg'
    },
    {
      id: 2,
      src: 'https://materializecss.com/images/sample-1.jpg'
    },
    {
      id: 3,
      src: 'https://materializecss.com/images/sample-1.jpg'
    }
  ]

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>{images.length && images.map(item => <Card src={item.src} key={item.id} />)}</div>
      </div>
    </div>
  )
}

export default App
