/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 266.5,
        y: 212.5
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 300.98369565217416,
        y: 212.5
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.svg", {
        x: 304.9246894409936,
        y: 212.5
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 298.02795031055905,
        y: 212.5
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.svg", {
        x: 318.7181677018634,
        y: 212.5
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.svg", {
        x: 299.9984472049691,
        y: 212.5
      }),
      new Costume("costume7", "./Sprite1/costumes/costume7.svg", {
        x: 297.04270186335407,
        y: 212.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nights" },
        this.whenIReceiveNights
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nights" },
        this.whenIReceiveNights2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(36, 0);
    this.visible = false;
  }

  *whenIReceiveNights() {
    this.moveAhead();
    this.visible = true;
    if (this.toNumber(this.stage.vars.night) === 1) {
      this.costume = "costume1";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    if (this.toNumber(this.stage.vars.night) === 2) {
      this.costume = "costume2";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    if (this.toNumber(this.stage.vars.night) === 3) {
      this.costume = "costume3";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    if (this.toNumber(this.stage.vars.night) === 4) {
      this.costume = "costume4";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    if (this.toNumber(this.stage.vars.night) === 5) {
      this.costume = "costume5";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    if (this.toNumber(this.stage.vars.night) === 6) {
      this.costume = "costume6";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    if (this.toNumber(this.stage.vars.night) === 7) {
      this.costume = "costume7";
      yield* this.wait(7);
      this.broadcast("Clock In");
    }
    this.visible = false;
  }

  *whenIReceiveNights2() {
    this.effects.ghost = 100;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost -= 2;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
  }
}
