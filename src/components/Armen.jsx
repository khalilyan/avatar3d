import React, { useEffect, useLayoutEffect, useRef } from "react";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import keyPress from "./keyPress";
import { useFrame } from "@react-three/fiber";

export function Model({animation,ViewOnCursor}) {
  const group = useRef()
 
  const { animations: StandingAnimation } = useGLTF(`animations/Standing.glb`);
  const { animations: WalkingAnimation } = useGLTF(`animations/Walking.glb`);
  const { animations: JumpingAnimation } = useGLTF(`animations/Jumping.glb`);
  const { animations: BackFlipAnimation } = useGLTF(`animations/BackFlip.glb`);
  const { animations: Offensive_IdleglbAnimation } = useGLTF(`animations/Offensive_Idle.glb`);
  const { animations: Crouched_WalkingAnimation } = useGLTF(`animations/Crouched_Walking.glb`);
  const { animations: PunchAnimation } = useGLTF(`animations/Cross_Punch.glb`);

  StandingAnimation[0].name = 'Standing'
  WalkingAnimation[0].name = 'Walking'
  JumpingAnimation[0].name = 'Jumping'
  Crouched_WalkingAnimation[0].name = 'Crouched_Walking'
  BackFlipAnimation[0].name = 'BackFlip'
  Offensive_IdleglbAnimation[0].name = 'Offensive'
  PunchAnimation[0].name = 'Punch'

  const { actions } = useAnimations(
    [StandingAnimation[0],
    WalkingAnimation[0],
    JumpingAnimation[0],
    BackFlipAnimation[0],
    Crouched_WalkingAnimation[0],
    Offensive_IdleglbAnimation[0],
    PunchAnimation[0]
  ], group);
  
  const { nodes, materials } = useGLTF("models/6512c1427cf6c0ddf59ef960.glb");
  useGLTF.preload("models/6512c1427cf6c0ddf59ef960.glb");
  
  useGLTF.preload(`animations/Walking.glb`);
  useGLTF.preload(`animations/Standing.glb`);
  useGLTF.preload(`animations/Jumping.glb`);
  useGLTF.preload(`animations/Crouched_Walking.glb`);
  useGLTF.preload(`animations/BackFlip.glb`);
  useGLTF.preload(`animations/Offensive_Idle.glb`);
  useGLTF.preload(`animations/Cross_Punch.glb`);
  
  useEffect(() => {
      actions[animation].fadeIn(1).play();
  console.clear()
      
      return () => {
       actions[animation].fadeOut(1).stop();
      }
  },[animation,ViewOnCursor])

  document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 37){
      group.current.rotation.y+=0.015
    }
    if(e.keyCode === 39){
      group.current.rotation.y-=0.015
    }
  })

 


  keyPress(67,'Crouched_Walking',actions)
  keyPress(32,'Jumping',actions)
  keyPress(70,'BackFlip',actions)
  keyPress(38,'Walking',actions)
  keyPress(86,'Offensive',actions)
  keyPress(71,'Punch',actions)


  return (
    <group ref={group}  rotation={[0,1,0]} position={[0,-1,0]}  dispose={null}>
      {ViewOnCursor && <OrbitControls  />}
      <primitive object={nodes.Hips} />
      <skinnedMesh 
        castShadow
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh 
        castShadow
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh 
        castShadow
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh 
        castShadow
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh 
        castShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh 
        castShadow
        name="Wolf3D_Outfit_Top"
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
      />
      <skinnedMesh 
        castShadow
        name="Wolf3D_Outfit_Bottom"
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
      />
      <skinnedMesh 
        castShadow
        name="Wolf3D_Outfit_Footwear"
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        morphTargetDictionary={
          nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
        }
        morphTargetInfluences={
          nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
        }
      />
      <skinnedMesh 
        castShadow
        name="Wolf3D_Body"
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
      />
      <ambientLight intensity={1} />
      <directionalLight intensity={0.5} position={[1, 2, 3]} />
    </group>
  );
}

