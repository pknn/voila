import { h } from 'preact'

import MessageBox from '../components/messagesBox'
import MessageInput from '../components/messageInput'
import { useState, useEffect } from 'preact/hooks'
import { route } from 'preact-router'
import Cookie from 'js-cookie'

import SocketClient from 'socket.io-client'

const socket = SocketClient('http://localhost:8081')

function Chat () {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [displayName] = useState(Cookie.get('displayName'))

  useEffect(() => {
    socket.on('message', message => {
      setMessages(oldVal => oldVal.concat(message))
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!displayName) {
      route('/')
    }
  })

  const handleMessageChange = (message) => {
    setMessage(message)
  }

  const handleMessageSubmit = () => {
    if (!message) return
    socket.emit('compose', {
      displayName,
      message,
      time: new Date()
    })
    setMessage('')
  }

  return (
    <div class='w-full h-full flex flex-col justify-between'>
      <MessageBox displayName={displayName} messages={messages} />
      <MessageInput onMessageChange={handleMessageChange} onMessageSubmit={handleMessageSubmit} />
    </div>
  )
}

export default Chat
