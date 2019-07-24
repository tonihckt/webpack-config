import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/logo.png'
import video from '../../videos/T_I - T_L_I_K_T_B.mp4'

// import types of styles
import '../../css/sass/sass.scss'
import '../../css/less/less.less'
import '../../css//stylus/stylus.styl'


console.log(data)


function App () {
    // HOOKS
    const [loaderList, setLoaderList] = useState([])
    async function handleClick() {
      setLoaderList(data.loaders)
      const {alerta} = await import('./alert.js') // es como hacer un feach
      alerta('OMG! MODULO CARGADO DIMAMICAMENTE')
    }
    return (
        <div>
            <h1>Aplicación con React</h1>
            <div>
              <p className="sass">sass</p>
              <p className="stylus">stylus</p>
              <p className="less">less</p>
              <p className="post-css">post-css</p>
            </div>
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