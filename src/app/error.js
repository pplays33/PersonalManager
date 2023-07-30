'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Логирование ошибки в сервисе отчетности об ошибках
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <button onClick={() => reset()}>Попробовать еще раз</button>
    </div>
  )
}