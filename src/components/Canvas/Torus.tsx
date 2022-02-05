import type { VFC } from "react";
import { useRef, useState } from "react";
import type { Points } from "three";
import { useFrame } from "@react-three/fiber";
import type { PointsProps } from "@react-three/fiber";

type Props = PointsProps;

export const Torus: VFC<Props> = (props) => {
  const ref = useRef<Points>(null);

  useFrame(() => {
    if (ref.current !== null) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <points {...props} ref={ref}>
      <torusGeometry attach="geometry" args={[0.7, 0.2, 16, 100]} />
      <pointsMaterial attach="material" size={0.01} />
    </points>
  );
};
