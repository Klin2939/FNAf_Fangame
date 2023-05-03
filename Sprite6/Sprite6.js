/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: -163.77702702702703,
        y: 173.27402402402402
      }),
      new Costume("costume2", "./Sprite6/costumes/costume2.svg", {
        x: -180.29354354354342,
        y: 174.77552552552552
      }),
      new Costume("costume3", "./Sprite6/costumes/costume3.svg", {
        x: -169.78303303303295,
        y: 170.27102102102103
      }),
      new Costume("costume4", "./Sprite6/costumes/costume4.svg", {
        x: -169.783033033033,
        y: 171.77252252252254
      }),
      new Costume("costume5", "./Sprite6/costumes/costume5.svg", {
        x: -168.28153153153153,
        y: 171.77252252252254
      }),
      new Costume("costume6", "./Sprite6/costumes/costume6.svg", {
        x: -168.28153153153153,
        y: 171.77252252252254
      }),
      new Costume("costume7", "./Sprite6/costumes/costume7.svg", {
        x: -172.78603603603597,
        y: 171.7725225225225
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nights" },
        this.whenIReceiveNights
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveClockIn() {
    this.visible = true;
    this.costume = "costume1";
    this.moveAhead();
    for (let i = 0; i < 6; i++) {
      yield* this.wait(10);
      this.costumeNumber++;
      yield;
    }
    this.broadcast("Next Night");
  }

  *whenIReceiveNights() {
    this.costume = "costume1";
  }
}
