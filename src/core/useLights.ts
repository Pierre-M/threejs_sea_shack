import { AmbientLight, DirectionalLight, Vector2, Vector3 } from "three";
import useDebugUI, { addLightDebug } from "./useDebugUI";

const gui = useDebugUI();
const lights = gui.addFolder("Lights");

const ambientLight = new AmbientLight(0xe7f1ff, 1);
const sun1 = new DirectionalLight(0xf7e3c1, 0.887);
sun1.lookAt(new Vector3());
sun1.position.set(2.04, 2.04, -0.44);
sun1.castShadow = true;
sun1.shadow.normalBias = 0.08;
sun1.shadow.mapSize = new Vector2(1024, 1024);

const sun2 = new DirectionalLight(0xf5b496, 0.765);
sun2.position.set(-0.89, 1.82, -2.24);
sun2.lookAt(new Vector3());
sun2.castShadow = true;
sun2.shadow.normalBias = 0.08;
sun2.shadow.mapSize = new Vector2(1024, 1024);

addLightDebug(lights, sun1, "sun1");
addLightDebug(lights, sun2, "sun2");
addLightDebug(lights, ambientLight, "ambient");

export default () => {
  return { ambientLight, sun1, sun2 };
};
