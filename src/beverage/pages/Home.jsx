import React from 'react'
import BeverageList from '../components/BeverageList'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <BeverageList />
    </main>
  )
}