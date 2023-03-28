import React from 'react'
import Beverage from './Beverage'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function BeverageList() {
  const { beverage, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (beverage.length < 1) {
    return (
      <h2 className='section-title'>
        no beverage matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {beverage.map((item) => {
          return <Beverage key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}