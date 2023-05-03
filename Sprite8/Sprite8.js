/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 195.39180253317096,
        y: 243.94247313344042
      }),
      new Costume("costume2", "./Sprite8/costumes/costume2.svg", {
        x: 55.99058636636639,
        y: 257.7753361265882
      }),
      new Costume("costume3", "./Sprite8/costumes/costume3.svg", {
        x: 49.391785,
        y: 244.11475123987407
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warning screen" },
        this.whenIReceiveWarningScreen
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nights" },
        this.whenIReceiveNights
      )
    ];
  }

  *whenIReceiveWarningScreen() {
    yield* this.wait(2);
    this.visible = true;
    while (true) {
      this.costume = "costume1";
      yield* this.wait(this.random(3, 5));
      this.costume = "costume2";
      yield* this.wait(0.05);
      this.costume = "costume3";
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveNights() {
    this.visible = false;
  }
}
