/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./NewGame/costumes/costume1.svg", {
        x: 154.5,
        y: 102.00000000000003
      }),
      new Costume("costume2", "./NewGame/costumes/costume2.svg", {
        x: 154.5,
        y: 102.00000000000003
      })
    ];

    this.sounds = [new Sound("pop", "./NewGame/sounds/pop.wav")];

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
    this.stage.vars.night = 1;
    this.broadcast("NewGame");
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveNights() {
    this.visible = false;
  }
}
