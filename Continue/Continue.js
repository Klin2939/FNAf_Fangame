/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Continue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Continue/costumes/costume1.svg", {
        x: 154.5,
        y: 102
      }),
      new Costume("costume2", "./Continue/costumes/costume2.svg", {
        x: 154.5,
        y: 102
      })
    ];

    this.sounds = [new Sound("pop", "./Continue/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warning screen" },
        this.whenIReceiveWarningScreen
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warning screen" },
        this.whenIReceiveWarningScreen2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame" },
        this.whenIReceiveNewgame
      )
    ];
  }

  *whenIReceiveWarningScreen() {
    yield* this.wait(2);
    this.visible = true;
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWarningScreen2() {
    yield* this.wait(2);
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Nights");
    this.visible = false;
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
