/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightDoor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./RightDoor/costumes/costume1.svg", {
        x: -166.27359,
        y: 46.99825000000001
      }),
      new Costume("costume2", "./RightDoor/costumes/costume2.svg", {
        x: -140.9029190887527,
        y: 49.650648622334046
      }),
      new Costume("costume3", "./RightDoor/costumes/costume3.svg", {
        x: -137.2979640296736,
        y: 49.65064409514619
      }),
      new Costume("costume4", "./RightDoor/costumes/costume4.svg", {
        x: -131.89053245112495,
        y: 49.65064956795834
      }),
      new Costume("costume5", "./RightDoor/costumes/costume5.svg", {
        x: -126.48310087257647,
        y: 49.650645040770485
      }),
      new Costume("costume6", "./RightDoor/costumes/costume6.svg", {
        x: -122.47071490832872,
        y: 49.65064047281217
      }),
      new Costume("costume7", "./RightDoor/costumes/costume7.svg", {
        x: -118.37195350475349,
        y: 49.65064594562432
      }),
      new Costume("costume8", "./RightDoor/costumes/costume8.svg", {
        x: -112.96452192620484,
        y: 49.650641418436464
      }),
      new Costume("costume9", "./RightDoor/costumes/costume9.svg", {
        x: -109.35956754050557,
        y: 49.65064689124861
      })
    ];

    this.sounds = [new Sound("pop", "./RightDoor/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open RightDoor" },
        this.whenIReceiveOpenRightdoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close Rightdoor" },
        this.whenIReceiveCloseRightdoor
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

  *whenIReceiveOpenRightdoor() {
    for (let i = 0; i < 8; i++) {
      this.costume = this.costumeNumber - 1;
      yield;
    }
  }

  *whenIReceiveCloseRightdoor() {
    for (let i = 0; i < 8; i++) {
      this.costumeNumber++;
      yield;
    }
  }
}
