import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

document.addEventListener('ready', () => {

  ReactDOM.render(
    <App
     currentUserId = {JSON.parse(document.getElementById('app').dataset.currentUser).id}
    />,
    document.getElementById('app')
  );
})
