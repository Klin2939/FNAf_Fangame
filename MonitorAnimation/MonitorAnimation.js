/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MonitorAnimation extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MonitorAnimation/costumes/costume1.svg", {
        x: 245.5,
        y: -135
      }),
      new Costume("costume2", "./MonitorAnimation/costumes/costume2.svg", {
        x: 245.5,
        y: -98
      }),
      new Costume("costume3", "./MonitorAnimation/costumes/costume3.svg", {
        x: 245.5,
        y: -62
      }),
      new Costume("costume5", "./MonitorAnimation/costumes/costume5.svg", {
        x: 245.5,
        y: -27
      }),
      new Costume("costume9", "./MonitorAnimation/costumes/costume9.svg", {
        x: 245.5,
        y: -2.8405799999999886
      }),
      new Costume("costume4", "./MonitorAnimation/costumes/costume4.svg", {
        x: 245.5,
        y: 32
      }),
      new Costume("costume10", "./MonitorAnimation/costumes/costume10.svg", {
        x: 245.5,
        y: 51
      }),
      new Costume("costume7", "./MonitorAnimation/costumes/costume7.svg", {
        x: 245.5,
        y: 76.00000000000001
      }),
      new Costume("costume11", "./MonitorAnimation/costumes/costume11.svg", {
        x: 245.5,
        y: 97.00000000000003
      }),
      new Costume("costume6", "./MonitorAnimation/costumes/costume6.svg", {
        x: 245.5,
        y: 110.15942000000001
      }),
      new Costume("costume12", "./MonitorAnimation/costumes/costume12.svg", {
        x: 245.5,
        y: 146.1594199999999
      }),
      new Costume("costume8", "./MonitorAnimation/costumes/costume8.svg", {
        x: 248.14977375565627,
        y: 165.89788153846135
      })
    ];

    this.sounds = [new Sound("pop", "./MonitorAnimation/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Monitor" },
        this.whenIReceiveMonitor
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clock In" },
        this.whenIReceiveClockIn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Monitor 2" },
        this.whenIReceiveMonitor2
      )
    ];
  }

  *whenIReceiveMonitor() {
    this.visible = true;
    this.costume = "costume1";
    for (let i = 0; i < 11; i++) {
      this.costumeNumber++;
      yield;
    }
    this.broadcast("Camera");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveClockIn() {
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveMonitor2() {
    this.broadcast("Camera Close");
    yield* this.wait(0.25);
    for (let i = 0; i < 11; i++) {
      this.costume = this.costumeNumber - 1;
      yield;
    }
    this.visible = false;
  }
}
