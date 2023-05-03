/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 250.30557250976562,
        y: 187.34376525878906
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warning screen" },
        this.whenIReceiveWarningScreen
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveWarningScreen() {
    yield* this.wait(2);
    this.visible = true;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      yield;
    }
    this.visible = false;
  }
}
