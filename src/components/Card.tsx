import React, { useState, useCallback } from 'react'
import cn from 'classnames'

interface CardProps {
  src: string
}

const Card: React.FC<CardProps> = ({ src }) => {
  const [like, setLike] = useState<boolean>(false)
  const handleLike = useCallback(() => setLike(prev => !prev), [])

  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        <div className='card-image'>
          <img src={src} alt='Preview' />
          <span className='card-title'>Card Title</span>
          <button className={cn('btn-floating halfway-fab red', { 'lighten-3': !like })} onClick={handleLike}>
            <i className='material-icons'>favorite</i>
          </button>
          <button className={cn('btn-floating halfway-fab red', { 'lighten-3': !like })} onClick={handleLike}>
            <i className='material-icons'>favorite</i>
          </button>
        </div>
        <div className='card-content'>
          <p>
            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
            markup to use effectively.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card