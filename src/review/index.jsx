import React from 'react'
import Review from './review'
import './review.css'

const ReviewPage = () => {
  return (
    <main className='reviews'>
      <section className='container-review'>
        <div className='title-review'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default ReviewPage