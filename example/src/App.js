import React, { useState } from 'react'
import './App.css'
import { MediaGallery } from 'vlue-components'
import 'vlue-components/dist/index.css'

const App = () => {
  const images = [
    'https://static.inmofactory.com/images/inmofactory/documents/1/94551/29944977/456544034.jpg?rule=web_1200x0_avif_50',
    'https://static.inmofactory.com/images/inmofactory/documents/1/94551/29944977/456544035.jpg?rule=web_1200x0_avif_50',
    'https://static.inmofactory.com/images/inmofactory/documents/1/94551/29944977/456544036.jpg?rule=web_1200x0_avif_50',
    'https://static.inmofactory.com/images/inmofactory/documents/1/94551/29944977/456544037.jpg?rule=web_1200x0_avif_50'
  ]

  const [position, setPosition] = useState(0)

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
