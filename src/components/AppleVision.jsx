import React from 'react'
import VisionHero from './VisionHero'
import VisionHighlights from './VisionHighlights'
import CanvasComponent from './CanvasComponent'
import Something from './Something'
import VisionProPicHighlight from './VisionProPicHighlight'
import VisionTechnology from './VisionTechnology'

const AppleVision = () => {
  return (
    <div className=''>
    <VisionHero />
    
  <CanvasComponent />
 
   
  <VisionHighlights />
  <VisionProPicHighlight className='mt-20' />
  <VisionTechnology />
  
    </div>
  )
}

export default AppleVision