import { h } from 'preact'
import { useEffect } from 'preact/hooks'

function myMessageBox (message) {
  return (
    <div class='m-2 bg-white p-2 rounded'>
      { message.message }
    </div>
  )
}

function otherMessageBox (message) {
  return (
    <div class=''>
      <div class='text-sm text-gray-800'>{message.displayName}</div>
      <div class='bg-white p-2 rounded'>{message.message}</div>
      <div class='text-xs text-gray-600'>
        {new Date(message.time).toLocaleTimeString('en-US')}
      </div>
    </div>
  )
}

function MessageBox ({ displayName, messages }) {
  const chatMessages = messages.map(
    (message) => (
      <div class='message-box flex'>
        {message.displayName !== displayName ? otherMessageBox(message) : (<div class='flex-1' />)}
        {message.displayName === displayName ? myMessageBox(message) : (<div class='flex-1' />)}
      </div>
    )
  )

  useEffect(() => {
    const chatHistory = document.getElementById('chat-history')
    chatHistory.scrollTop = chatHistory.scrollHeight
  }, [messages])

  return (
    <div id='chat-history' class='flex-1 flex-grow bg-gray-400 shadow-md p-4 overflow-y-scroll'>
      {chatMessages}
    </div>
  )
}

export default MessageBox
