import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./components/Armen";
import './App.css'
import { useEffect,useState } from "react";
import { useControls } from "leva";
import { BsQuestionCircleFill } from 'react-icons/bs'
import AboutItem from "./components/aboutItem/aboutItem";


function App() {
  const { Animations,ViewOnCursor,background } = useControls({
    Animations: {
      value: 'Standing',
      options: ['Standing','Walking']
    },
    ViewOnCursor: false,
    background: '#fff',
  })
  const [bgColor, setBgColor] = useState(background)
  useEffect(()=>{
    setBgColor(background)
  },[background])
  return (
    <>
    <div className="aboutContainer">
      <BsQuestionCircleFill size={30}/>
      <div className="aboutList">
        <AboutItem PressKey={'↑'} functionality={'to walk'} />
        <AboutItem PressKey={'Space'} functionality={'to jump'}/>
        <AboutItem PressKey={'C'} functionality={'for crouched walking'}/>
        <AboutItem PressKey={'F'} functionality={'to flip'}/>
        <AboutItem PressKey={'G'} functionality={'to punch'}/>
        <AboutItem PressKey={'V'} functionality={'for offensive idle'}/>
        <AboutItem PressKey={'W,A,S,D,E,Q'} functionality={'to control the camera'}/>
      </div>
    </div>
      <Canvas  shadows camera={{ position: [20/*motik heru */, 5 /*verev*/ , 18.25 /*aj dzax */], fov: 5 }}
        style={{
          backgroundColor: bgColor,
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight />
        {(ViewOnCursor===false) ? <CameraControls/> : null}
        <directionalLight position={[15, 20, 20]} castShadow shadow-mapSize={1024} />
        <Model ViewOnCursor={ViewOnCursor} animation={Animations}/> 
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;


function CameraControls() {
  const camera = useThree(state => state.camera); // Access the camera from useThree
  
  document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 87 /*W*/){
      camera.translateZ(-0.1)
    }
    if(e.keyCode === 81/*Q*/){
      camera.position.y-=0.05
    }
    if(e.keyCode === 83/*S*/){
      camera.translateZ(0.1)
      
    }
    if(e.keyCode === 69/*E*/){
      camera.position.y+=0.05
      
    }
    if(e.keyCode === 65/*A*/){
      camera.translateX(-0.05,false)

    }
    if(e.keyCode === 68/*D*/){
      camera.translateX(0.05,false)
    }
  })

  return null; 
}