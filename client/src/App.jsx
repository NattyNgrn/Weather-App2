import { useState } from 'react'
import './App.css'
import Search from './components/search';

function App() {
  const [count, setCount] = useState(0)

  const [weather, setWeather] = useState({});

  return (

      <div>
        <img class="h-auto max-w-full" src="https://www.seathecity.com/wp-content/uploads/2021/04/new-york-3602856_640.jpg" alt="image description"></img>
        <Search setWeather={setWeather} > </Search>
      </div>
  )
}

export default App
