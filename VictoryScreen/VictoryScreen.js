/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VictoryScreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./VictoryScreen/costumes/costume1.svg", {
        x: 257.5,
        y: 190.5
      }),
      new Costume("costume2", "./VictoryScreen/costumes/costume2.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume3", "./VictoryScreen/costumes/costume3.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume4", "./VictoryScreen/costumes/costume4.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume5", "./VictoryScreen/costumes/costume5.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume7", "./VictoryScreen/costumes/costume7.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume8", "./VictoryScreen/costumes/costume8.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume6", "./VictoryScreen/costumes/costume6.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume9", "./VictoryScreen/costumes/costume9.svg", {
        x: 257.5,
        y: 190.5
      })
    ];

    this.sounds = [new Sound("pop", "./VictoryScreen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Victory Screen" },
        this.whenIReceiveVictoryScreen
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveVictoryScreen() {
    this.costume = "costume1";
    this.moveAhead();
    this.visible = true;
    yield* this.wait(0.25);
    for (let i = 0; i < 8; i++) {
      yield* this.wait(0.1);
      this.costumeNumber++;
      yield;
    }
    this.costume = "costume9";
    yield* this.wait(2);
    this.visible = false;
    this.broadcast("Nights");
  }
}
