import { Html, OrbitControls, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'
import * as THREE from 'three'
import Loader from './Loader'

const ModelView = ({ index, groupRef, gsapType,
  controlRef, setRotationState, size, item}) => {

    console.log('Modelview component item:', item);
  return (
    <View 
      index={index}
      id={gsapType}
      className={`  w-full px-20 h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />
        <perspectiveCamera makeDefault position={[0,0,4]} 
        />

        <Lights />

        <OrbitControls 
         makeDefault
         ref={controlRef}
         enableZoom={false}
         enablePan={false}
         rotateSpeed={0.6}
         target={new THREE.Vector3(0,0,0)}
         onEnd={() => setRotationState(controlRef.current.
          getAzimuthalAngle())}
         />

        <group ref={groupRef} name={`${index === 1} 'small' : 'large'`}
        position={[0,0,0]}>
        <Suspense fallback={<Loader />}>
      <IPhone 
       scale={index === 1 ? [25, 25, 25] : [30,30,30]}
       item={item}
       size={size}
       />
        </Suspense>
      
        </group>
        
    </View>
  )
}

export default ModelView