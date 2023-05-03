/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftDoor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LeftDoor/costumes/costume1.svg", {
        x: 240.3520713166455,
        y: 53.329848871721794
      }),
      new Costume("costume2", "./LeftDoor/costumes/costume2.svg", {
        x: 266.8435897456008,
        y: 57.69833218616397
      }),
      new Costume("costume3", "./LeftDoor/costumes/costume3.svg", {
        x: 266.8435897456008,
        y: 57.69833218616395
      }),
      new Costume("costume4", "./LeftDoor/costumes/costume4.svg", {
        x: 266.84359158462706,
        y: 57.698320472812185
      }),
      new Costume("costume5", "./LeftDoor/costumes/costume5.svg", {
        x: 266.84359158462706,
        y: 57.6983204728122
      }),
      new Costume("costume6", "./LeftDoor/costumes/costume6.svg", {
        x: 266.84359158462706,
        y: 57.6983204728122
      }),
      new Costume("costume7", "./LeftDoor/costumes/costume7.svg", {
        x: 266.8435931692541,
        y: 57.69832594562439
      }),
      new Costume("costume8", "./LeftDoor/costumes/costume8.svg", {
        x: 266.8435947538812,
        y: 57.69832141843658
      }),
      new Costume("costume9", "./LeftDoor/costumes/costume9.svg", {
        x: 266.84359633850823,
        y: 57.69832689124877
      })
    ];

    this.sounds = [new Sound("pop", "./LeftDoor/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close Leftdoor" },
        this.whenIReceiveCloseLeftdoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open Leftdoor" },
        this.whenIReceiveOpenLeftdoor
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "costume1";
    this.moveBehind();
    this.visible = false;
  }

  *whenIReceiveClockIn() {
    this.moveBehind();
    this.visible = true;
    while (true) {
      this.x = this.mouse.x * -0.1;
      this.y = this.mouse.y * -0.05;
      yield;
    }
  }

  *whenIReceiveCloseLeftdoor() {
    for (let i = 0; i < 8; i++) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveOpenLeftdoor() {
    for (let i = 0; i < 8; i++) {
      this.costume = this.costumeNumber - 1;
      yield;
    }
  }
}
