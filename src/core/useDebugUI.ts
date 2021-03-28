import { GUI } from "dat.gui";
import useIsDebug from "./useIsDebug";
import { Color, Light } from "three";

const isDebug = useIsDebug();
const gui = new GUI();

if (!isDebug) gui.hide();

export const addLightDebug = (gui: GUI, light: Light, prefix: string) => {
  const params = {
    color: light.color.getHex(),
  };

  const toName = (name: string) => `${prefix}_${name}`;

  gui.add(light.position, "x").min(-10).max(10).step(0.01).name(toName("x"));
  gui.add(light.position, "y").min(-10).max(10).step(0.01).name(toName("y"));
  gui.add(light.position, "z").min(-10).max(10).step(0.01).name(toName("z"));

  gui
    .add(light.rotation, "x")
    .min(0)
    .max(2 * Math.PI)
    .step(0.01)
    .name(toName("rx"));
  gui
    .add(light.rotation, "y")
    .min(-10)
    .max(2 * Math.PI)
    .step(0.01)
    .name(toName("ry"));
  gui
    .add(light.rotation, "z")
    .min(-10)
    .max(2 * Math.PI)
    .step(0.01)
    .name(toName("rz"));
  gui
    .add(light, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name(toName("intensity"));

  gui
    .addColor(params, "color")
    .name(toName("color"))
    .onChange((c) => (light.color = new Color(c)));
};

export default () => {
  return gui;
};
