console.log('estas en index');
import'../css/styles.css';

// // Import function
// import greeting from './greeting.js';
// import search from './search'
// import render from './render'

// greeting();

// // Carga de manera dinamica sin que recargue el navegador
// if (module.hot) {
//     module.hot.accept('./greeting.js', function() {
//       console.log('he recargado en caliente')
//       text()
//     })
// }


// const id = prompt('quien es ese pokemon')
// search(id)
//   .then((data)=> {
//     render(data)
//   })
//   .catch(()=>{
//     console.log('no hubo pokemon')
//   })


/// implementado react
import React from 'react';
import { render } from 'react-dom'
import App from './components/app'
render(<App />, document.getElementById('container'))