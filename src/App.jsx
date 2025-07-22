import { useState } from 'react'
import axios from 'axios'


function App() {
  const [actress, setActress] = useState([])
  function fetchActress(){
    axios.get('https://lanciweb.github.io/demo/api/actresses/')
    .then((res) => setActress(res.data))
  }
  
  console.log(actress);
  

  return (
    <>
      <div>
        <button onClick={fetchActress}>Elenco Attrici</button>
        <ul>
          {actress.map((act) =>(
            <li key={act.id}>{act.name}</li>
          ))}
        </ul>
      </div>        
    </>
  )
}

export default App
