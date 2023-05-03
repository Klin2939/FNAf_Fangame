/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftLightbutton2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LeftLightbutton2/costumes/costume1.svg", {
        x: 207.87515938457364,
        y: 81.90745636151131
      })
    ];

    this.sounds = [new Sound("pop", "./LeftLightbutton2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      )
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
}
