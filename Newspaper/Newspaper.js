/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Newspaper extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Newspaper/costumes/costume1.svg", {
        x: 366.2443124931499,
        y: 272.2393547672127
      })
    ];

    this.sounds = [new Sound("pop", "./Newspaper/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveNewgame() {
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost -= 2;
      yield;
    }
    yield* this.wait(6);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.broadcast("Nights");
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(0, 0);
    this.visible = false;
  }
}
