import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Country from './Country'
import List from './List'
import axios from 'axios'

const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ filteredCountries, setFilteredCountries ] = useState([])
    const [ nameFilter, setNameFilter ] = useState('')

    useEffect(() => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setFilteredCountries(response.data)
            setCountries(response.data)
        })
    }, [])

    const handleShowClick = (countryName) => {
        setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase())))
        setNameFilter(countryName)
    }

    const handleNameFilterChange = (event) => {
        setFilteredCountries(countries.filter(country => event.target.value === '' ? true : country.name.toLowerCase().includes(event.target.value.toLowerCase())))
        setNameFilter(event.target.value)
    }

    return (
        <div>
            <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} /> 
            <List filteredCountries={filteredCountries} handleShowClick={handleShowClick} />
            {filteredCountries.length === 1 ? <Country filteredCountries={filteredCountries} /> : null}
        </div>
    )

}

export default App