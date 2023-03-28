import React, {useState, createContext, useContext, useEffect} from 'react'
import { useCallback } from 'react'
import { AppContext } from '../sidebar/context'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppBeverageContext = createContext()

const AppBeverageProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [beverage, setBeverage] = useState([])

    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const { drinks } = data

            if (drinks) {
                const newBeverage = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass
                    } = item

                    return {
                        id: idDrink,
                        name : strDrink,
                        image : strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setBeverage(newBeverage)
            } else {
                setBeverage([])
            } 

            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return (
        <AppBeverageContext.Provider
            value={{ loading, beverage, searchTerm, setSearchTerm}}
        >
            {children}
        </AppBeverageContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppBeverageContext)
}

export {AppBeverageContext, AppBeverageProvider}