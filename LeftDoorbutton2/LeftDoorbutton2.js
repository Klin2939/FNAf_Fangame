/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftDoorbutton2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LeftDoorbutton2/costumes/costume1.svg", {
        x: 242.30470171708296,
        y: 83.8408750970583
      }),
      new Costume("costume2", "./LeftDoorbutton2/costumes/costume2.svg", {
        x: 242.30470161066674,
        y: 83.84086586921514
      })
    ];

    this.sounds = [new Sound("pop", "./LeftDoorbutton2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveClockIn() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      this.x = this.mouse.x * -0.1;
      this.y = this.mouse.y * -0.05;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("LB");
    if (this.costumeNumber === 1) {
      this.costume = "costume2";
      this.broadcast("Close Leftdoor");
    } else {
      this.costume = "costume1";
      this.broadcast("Open Leftdoor");
    }
  }
}
