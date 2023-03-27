import React from 'react'
import { useGlobalContext } from './context'
import './style.css'

// components
import Navbar from './Navbar'
import CartContainer from './cartContainer'
// items

function CartApp() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main className='cart-view'>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default CartApp