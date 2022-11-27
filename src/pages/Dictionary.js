import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {

  const [word, setWord ] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setWord(e.target.value)
  }


  return (
    <>
      <input type="text" onChange={handleChange} />

      <button onClick={()=> {
        navigate(`/definition/${word}`)
      }}>Search</button>
    </>
  )
}

export default Dictionary