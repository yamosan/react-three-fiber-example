import { Canvas as FiberCanvas } from "@react-three/fiber";
import { Torus } from "./Torus";
import "./Canvas.css";

export const Canvas = () => {
  return (
    <div id="canvas-container">
      <FiberCanvas>
        <Camera />

        <color attach="background" args={["#191920"]} />

        <group position={[0, 0, 0]}>
          <Torus scale={[2, 2, 2]} />
        </group>
      </FiberCanvas>
    </div>
  );
};

const Camera = () => {
  return (
    <perspectiveCamera
      position={[0, 0, 2]}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={100}
    />
  );
};
