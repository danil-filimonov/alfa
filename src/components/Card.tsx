import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { IPicture } from '../types/types'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { actionsSlice, selectLikes, selectHide } from '../features/actions/actionsSlice'

interface CardProps {
  item: IPicture
}

const Card: React.FC<CardProps> = ({ item }) => {
  const dispatch = useAppDispatch()

  const allLikes: number[] = useAppSelector(selectLikes)
  const allHides: number[] = useAppSelector(selectHide)

  const [like, setLike] = useState<boolean>(allLikes.includes(item.id))
  const [hide, setHide] = useState<boolean>(allHides.includes(item.id))
  
  const handleLike = () => {
    if (like) {
      dispatch(actionsSlice.actions.removeLike(item.id))
    } else {
      dispatch(actionsSlice.actions.setLike(item.id))
    }
    setLike(prev => !prev)
  }

  const hideCard = () => {
    dispatch(actionsSlice.actions.setHide(item.id))
    setHide(true)
  }

  useEffect(() => {
    setHide(allHides.includes(item.id))
  }, [allHides, item])

  if (hide) return <></>

  return (
    <div className='col s12 m6 l4' style={{ marginBottom: '30px' }}>
      <div className='card'>
        <div className='card-image'>
          <img src={item.src.portrait} alt='Preview' />
          <span className='card-title'>{item.photographer}</span>
          <button
            className={cn('btn-floating halfway-fab red', { 'lighten-3': !like })}
            onClick={handleLike}
            style={{ right: '75px' }}
          >
            <i className='material-icons'>favorite</i>
          </button>
          <button className={cn('btn-floating halfway-fab black')} onClick={hideCard}>
            <i className='material-icons'>close</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
