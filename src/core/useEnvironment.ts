import { Color, Object3D, Scene } from "three";
import useDebugUI from "./useDebugUI";

const sceneParams = {
  color: 0xffd7ba,
};

const scene = new Scene();
const gui = useDebugUI();
const sceneDebug = gui.addFolder("Scene");

scene.background = new Color(sceneParams.color);

sceneDebug
  .addColor(sceneParams, "color")
  .name("envColor")
  .onChange((c) => (scene.background = new Color(c)));

export default () => {
  return {
    scene,
    add: (...obj: Object3D[]) => scene.add(...obj),
  };
};
