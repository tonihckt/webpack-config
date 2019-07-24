import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/logo.png'
import video from '../../videos/T_I - T_L_I_K_T_B.mp4'

console.log(data)


function App () {
    // HOOKS
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
      setLoaderList(data.loaders)
    }
    return (
        <div>
            <h1>Aplicación con React</h1>
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
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