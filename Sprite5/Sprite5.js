/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 167.5,
        y: -131.60017607416773
      }),
      new Costume("costume2", "./Sprite5/costumes/costume2.svg", {
        x: 167.5,
        y: -131.60017607416773
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveClockIn() {
    this.effects.ghost = 25;
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveClockIn2() {
    while (true) {
      if (this.touching("mouse")) {
        this.effects.ghost = 40;
      } else {
        this.effects.ghost = 25;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber === 1) {
      this.broadcast("Monitor");
      this.costume = "costume2";
    } else {
      this.broadcast("Monitor 2");
      this.costume = "costume1";
    }
  }

  *whenIReceiveCamera() {
    yield* this.wait(1);
    this.moveAhead();
  }
}
