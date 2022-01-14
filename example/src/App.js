import React from 'react'

import { VlueCarrousel } from 'vlue-components/dist/index'
import 'vlue-components/dist/index.css'

const App = () => {
  const images = [
    'https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg',
    'https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg',
    'http://www.solofondos.com/wp-content/uploads/2016/03/outrun-vaporwave-hd-wallpaper-preview.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
  ]

  return <VlueCarrousel hasCount images={images} label='Vlue Carrousel' />
}

export default App
