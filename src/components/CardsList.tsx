import React, { useState, useCallback } from 'react'

import { IPicture } from '../types/types'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { selectLikes } from '../features/actions/actionsSlice'
import { selectPictures, selectLoading, selectError } from '../features/stock/stockSlice'
import { actionsSlice } from '../features/actions/actionsSlice'

import Card from './Card'
import Loader from './Loader'

const CardsList: React.FC = () => {
  const dispatch = useAppDispatch()

  const allLikes: number[] = useAppSelector(selectLikes)
  const pictures: IPicture[] = useAppSelector(selectPictures)
  const isLoading: boolean = useAppSelector(selectLoading)
  const error: string = useAppSelector(selectError)

  const [filterByLike, setFilterByLike] = useState<boolean>(false)
  const handleFilterByLike = useCallback(() => setFilterByLike(prev => !prev), [])

  const showAllHide = () => dispatch(actionsSlice.actions.showAllHide())

  if (isLoading) return <Loader />

  if (error) return <p>{error}</p>

  if (!pictures.length) return <p>Уупс, кажется, здесь ничего нет...</p>

  return (
    <div className='row'>
      <>
        <div className='filters'>
          <button
            className='waves-effect waves-light btn'
            onClick={handleFilterByLike}
            style={{ marginBottom: '20px', marginLeft: '0.75rem' }}
          >
            Сортировка по лайкам
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={showAllHide}
            style={{ marginBottom: '20px', marginLeft: '0.75rem' }}
          >
            Вернуть все закрытые карточки
          </button>
        </div>

        {filterByLike &&
          pictures.map((picture: IPicture) => allLikes.includes(picture.id) && <Card item={picture} key={picture.id} />)}

        {!filterByLike && pictures.map((picture: IPicture) => <Card item={picture} key={picture.id} />)}
      </>
    </div>
  )
}

export default CardsList
