import useTick from "@/core";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useEnvironment from "@/core/useEnvironment";
import useLights from "@/core/useLights";
import {
  DirectionalLightHelper,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";

const tick = useTick();
const { add, scene } = useEnvironment();

const gltfLoader = new GLTFLoader();

const main = async () => {
  const { scene: model } = await gltfLoader.loadAsync("/models/sea_shack.glb");
  const { ambientLight, sun1, sun2 } = useLights();

  const helper = new DirectionalLightHelper(sun1);
  const helper2 = new DirectionalLightHelper(sun2);

  add(helper, helper2);

  model.scale.set(0.1, 0.1, 0.1);

  add(model, ambientLight, sun1, sun2);

  scene.traverse((child) => {
    if (
      child instanceof Mesh &&
      child.material instanceof MeshStandardMaterial
    ) {
      child.receiveShadow = true;
      child.castShadow = true;
    }
  });

  tick((elapsedTime, deltaTime) => {});
};

main();
