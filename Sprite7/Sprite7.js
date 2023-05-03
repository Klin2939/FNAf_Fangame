/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 105.75450450450452,
        y: 113.256006006006
      }),
      new Costume("costume2", "./Sprite7/costumes/costume2.svg", {
        x: 101.25,
        y: 107.25
      }),
      new Costume("costume3", "./Sprite7/costumes/costume3.svg", {
        x: 101.25,
        y: 107.25
      }),
      new Costume("costume4", "./Sprite7/costumes/costume4.svg", {
        x: 101.25,
        y: 107.25
      }),
      new Costume("costume5", "./Sprite7/costumes/costume5.svg", {
        x: 101.25,
        y: 107.25
      }),
      new Costume("costume6", "./Sprite7/costumes/costume6.svg", {
        x: 101.25,
        y: 107.25
      }),
      new Costume("costume7", "./Sprite7/costumes/costume7.svg", {
        x: 101.25,
        y: 107.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next Night" },
        this.whenIReceiveNextNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.night.visible = false;
    this.visible = false;
    yield* this.wait(2);
    this.costume = "costume1";
  }

  *whenIReceiveNextNight() {
    this.broadcast("Victory Screen");
    this.stage.vars.night++;
    this.costumeNumber++;
    this.visible = false;
  }

  *whenIReceiveClockIn() {
    this.moveAhead();
    this.visible = true;
  }
}
