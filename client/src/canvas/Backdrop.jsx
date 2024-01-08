import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React from "react";
import { useRef } from "react";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.75}
      scale={4}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.16]}
    >
      <RandomizedLight
        amount={5}
        radius={9}
        intensity={1.5}
        ambient={1.5}
        position={[5, 2, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={20}
        intensity={1}
        ambient={1}
        position={[-5, -5, -12]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
