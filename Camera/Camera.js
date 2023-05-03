/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Camera extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Camera/costumes/costume1.svg", {
        x: 256.82489748447205,
        y: 195.942546583851
      }),
      new Costume("costume2", "./Camera/costumes/costume2.svg", {
        x: 257.24415,
        y: 190.3618029570252
      }),
      new Costume("costume3", "./Camera/costumes/costume3.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      }),
      new Costume("costume4", "./Camera/costumes/costume4.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      }),
      new Costume("costume5", "./Camera/costumes/costume5.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      }),
      new Costume("costume6", "./Camera/costumes/costume6.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      }),
      new Costume("costume7", "./Camera/costumes/costume7.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      }),
      new Costume("costume8", "./Camera/costumes/costume8.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      }),
      new Costume("costume9", "./Camera/costumes/costume9.svg", {
        x: 256.82489748447205,
        y: 195.94253658385094
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera Close" },
        this.whenIReceiveCameraClose
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCamera() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveCameraClose() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }
}
