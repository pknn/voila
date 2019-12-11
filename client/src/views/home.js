import { h } from 'preact'

import { useState, useEffect } from 'preact/hooks'
import Cookie from 'js-cookie'
import UsernameInput from '../components/displayNameInput'
import { route } from 'preact-router'

function Home () {
  const [displayName, setDisplayName] = useState('')
  useEffect(() => {
    setDisplayName(Cookie.get('displayName'))
  }, [])
  const displayNameChangeHandler = newDisplayName => {
    setDisplayName(newDisplayName)
  }
  const displayNameSubmitHandler = () => {
    Cookie.set('displayName', displayName, { expires: 1 / 24 })
    if (displayName) {
      route('/chat')
    }
  }
  return (
    <div class=''>
      <UsernameInput
        displayName={displayName}
        onDisplayNameChange={displayNameChangeHandler}
        onDisplayNameSubmit={displayNameSubmitHandler}
      />
    </div>
  )
}

export default Home
