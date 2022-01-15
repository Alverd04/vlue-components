import React, { useState } from 'react'
import './App.css'
import { MediaGallery } from 'vlue-components'
import 'vlue-components/dist/index.css'

const App = () => {
  const images = [
    'https://jooinn.com/images/amazing-sunset-3.jpg',
    'https://wallpaperaccess.com/full/4085479.jpg',
    'https://wallpaperaccess.com/full/269542.jpg'
  ]

  const [position, setPosition] = useState(2)

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition)
    console.log('new position: ', newPosition)
  }

  return (
    <div className='demoBody'>
      <h1>Demo</h1>
      <div style={{ width: '50%' }}>
        <MediaGallery
          position={position}
          onPositionChange={handlePositionChange}
          images={images}
          hasLabelCount
          infinityScroll
          enableVerticalKeys
          arrowColor='white'
        />
      </div>
    </div>
  )
}

export default App
