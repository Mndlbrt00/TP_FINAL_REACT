import { useState } from 'react'
import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ChatScreen from './screens/ChatScreen'


const App = () =>{

  return (
    <div className='app-div'>
      <Routes>
        <Route path='/' element={<ChatScreen/>}/>
        <Route path='/chat' element={<ChatScreen/>}/>
        <Route path='/chat/:chat_id' element={<ChatScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
