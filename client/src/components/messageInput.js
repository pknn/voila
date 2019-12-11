import { h } from 'preact'

function MessageInput ({ onMessageSubmit, onMessageChange }) {
  const messageSubmitHandler = (event) => {
    if (event.key === 'Enter') {
      onMessageSubmit()
      event.preventDefault()
      event.target.value = ''
    } else {
      onMessageChange(event.target.value + event.key)
    }
  }
  return (
    <div class='w-full'>
      <textarea class='p-2 outline-none resize-none w-full h-24' onKeyPress={messageSubmitHandler} rows='1' autoFocus='true' wrap='soft' />
    </div>
  )
}

export default MessageInput
