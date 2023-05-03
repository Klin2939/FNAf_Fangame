/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Backdrop0", "./Stage/costumes/Backdrop0.svg", {
        x: 258.04780853461034,
        y: 193.6667466252488
      }),
      new Costume("Home Page", "./Stage/costumes/Home Page.svg", {
        x: 266.2422360248447,
        y: 192.32298136645971
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

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
      )
    ];

    this.vars.night = 1;

    this.watchers.night = new Watcher({
      label: "NIGHT",
      style: "normal",
      visible: false,
      value: () => this.vars.night,
      x: 245,
      y: 175
    });
  }

  *whenIReceiveWarningScreen() {
    yield* this.wait(2);
    this.costume = "Home Page";
  }

  *whenGreenFlagClicked() {
    this.costume = "Backdrop0";
  }

  *whenIReceiveNewgame() {
    this.costume = "Backdrop0";
  }
}
