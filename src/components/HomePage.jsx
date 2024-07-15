import React from 'react'
import HomeHero from './HomeHero'
import { HIpad, HIphone, HVision } from '../utils'

const HomePage = () => {

    
  return (
    <div>
       <HomeHero image={HIphone} Heading='iPhone' Para='Our most powerfull cameras yet. Ultrafast chips.And USB-C.' address='/phone' />
      
         
        <HomeHero image={HIpad} Heading='iPad Pro' Para='Unbelievably thin. Incredibly powerfull' address='/ipad' />

         <HomeHero image={HVision} Heading='Vision Pro' Para='The era of spatial computing is here.' address='/vision' />
    </div>
  )
}

export default HomePage