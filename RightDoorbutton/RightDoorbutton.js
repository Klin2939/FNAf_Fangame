/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightDoorbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./RightDoorbutton/costumes/costume1.svg", {
        x: -208.09280810201722,
        y: 76.41495463741077
      }),
      new Costume("costume2", "./RightDoorbutton/costumes/costume2.svg", {
        x: -208.09280347051708,
        y: 76.41495921369192
      })
    ];

    this.sounds = [new Sound("pop", "./RightDoorbutton/sounds/pop.wav")];

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
    this.broadcast("RB");
    if (this.costumeNumber === 1) {
      this.costume = "costume2";
      this.broadcast("Close Rightdoor");
    } else {
      this.costume = "costume1";
      this.broadcast("Open RightDoor");
    }
  }
}
