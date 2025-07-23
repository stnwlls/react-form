import './Info.css';
import { useState } from 'react';

const Info = () => {
  const [info, setInfo] = useState(false)

  return (
    <>
      <button onClick={() => setInfo(!info)} className='info-button'>i</button>

      {info && (
        <div className='info-panel'>Made by <a href='https://austinwells.dev' target='_blank' rel="noopener noreferrer">Austin Wells</a></div>
      )}
    </>
  )
}
export default Info;