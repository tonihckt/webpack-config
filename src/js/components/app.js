import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)


function App () {
    // HOOKS
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
      setLoaderList(data.loaders)
    }
    return (
        <div>
          <p>Aplicación con React</p>
          <ul>
            {
              loaderList.map(item => <Loader {...item} key={item.id}/> )
            }
          </ul>
          <button onClick={handleClick}>Mostrar contenido</button>
        </div>
    )
}


export default App