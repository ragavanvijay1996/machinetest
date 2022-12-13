import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Home } from './home';
import { Login } from './login';
import { Footer } from './footer';
import { Header } from './header';

function App() {
  const [login, setLogin] = useState(false)
  const [data, setData] = useState([])
  const [countries, setCountries] = useState(data)


  useEffect(() => {
    const loadResponse = async () => {
      const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
      setData(response.data)
      setCountries(response.data)
    }

    loadResponse()

  }, [])

  console.log(countries)

  const handleLogin = (e) => {
    e.preventDefault()
    setLogin(true)
  }
  const handleAsia = (e) => {
    e.preventDefault()
    const asia = data.filter(country => country.region === 'Asia')
    setCountries(asia)
  }
  const handleEurope = (e) => {
    e.preventDefault()
    const europe = data.filter(country => country.region === 'Europe')
    setCountries(europe)
  }

  const handleAllCountry = (e) => {
    e.preventDefault()
    setCountries(data)
  }

  if (!login) {
    return <Login handleLogin={handleLogin} />
  }

  return (
    <>
      <Header handleAsia={handleAsia} handleEurope={handleEurope} handleAllCountry={handleAllCountry} countries={countries} />
      <Home countries={countries} />
      <Footer />
    </>
  );
}

export default App;
