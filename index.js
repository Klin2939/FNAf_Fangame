import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import NewGame from "./NewGame/NewGame.js";
import Continue from "./Continue/Continue.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Newspaper from "./Newspaper/Newspaper.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import LeftDoor from "./LeftDoor/LeftDoor.js";
import RightDoor from "./RightDoor/RightDoor.js";
import LeftLightbutton2 from "./LeftLightbutton2/LeftLightbutton2.js";
import LeftDoorbutton2 from "./LeftDoorbutton2/LeftDoorbutton2.js";
import RightLightbutton from "./RightLightbutton/RightLightbutton.js";
import RightDoorbutton from "./RightDoorbutton/RightDoorbutton.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import MonitorAnimation from "./MonitorAnimation/MonitorAnimation.js";
import Camera from "./Camera/Camera.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import VictoryScreen from "./VictoryScreen/VictoryScreen.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  NewGame: new NewGame({
    x: -74.99999987284343,
    y: -128.00000059339732,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Continue: new Continue({
    x: -74.54299952400416,
    y: -172.4285447410282,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite8: new Sprite8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Newspaper: new Newspaper({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Sprite3: new Sprite3({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  LeftDoor: new LeftDoor({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  RightDoor: new RightDoor({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  LeftLightbutton2: new LeftLightbutton2({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  LeftDoorbutton2: new LeftDoorbutton2({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  RightLightbutton: new RightLightbutton({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  RightDoorbutton: new RightDoorbutton({
    x: 16.7,
    y: 1.55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Sprite5: new Sprite5({
    x: 3,
    y: -10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 19
  }),
  MonitorAnimation: new MonitorAnimation({
    x: 6,
    y: 17,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Camera: new Camera({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  Sprite7: new Sprite7({
    x: -122,
    y: 64,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  }),
  VictoryScreen: new VictoryScreen({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
