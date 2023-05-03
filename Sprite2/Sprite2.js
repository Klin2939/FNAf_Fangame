/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 253.4161490683229,
        y: 180.83850931677028
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 255.0931677018633,
        y: 180.00000000000003
      }),
      new Costume("costume3", "./Sprite2/costumes/costume3.svg", {
        x: 262.639751552795,
        y: 179.16149068322983
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
    yield* this.wait(2);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost = -2;
      yield;
    }
    yield* this.wait(3);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost = -2;
      yield;
    }
    this.visible = false;
    this.broadcast("Warning screen");
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.costume = "costume1";
      yield* this.wait(this.random(1, 4));
      this.costume = "costume2";
      yield* this.wait(0);
      this.costume = "costume3";
      yield* this.wait(0);
      yield;
    }
  }
}
