import { h } from 'preact'

function displayNameInput ({
  onDisplayNameChange,
  onDisplayNameSubmit,
  displayName
}) {
  const handleChange = event => {
    onDisplayNameChange(event.target.value)
  }
  return (
    <div class='absolute inset-0 m-auto bg-white h-64 text-center p-4 flex flex-col justify-center items-center rounded shadow-md'>
      <h1 class='text-5xl'>Voila</h1>
      <input
        onChange={handleChange}
        value={displayName}
        class='outline-none border border-gray-600 p-2 rounded focus:bg-gray-200 focus:border-gray-800'
        type='text'
        placeholder='Display Name'
      />
      <button
        type='button'
        onClick={onDisplayNameSubmit}
        class='m-4 px-6 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 outline-none'
      >
        Confirm
      </button>
    </div>
  )
}

export default displayNameInput
