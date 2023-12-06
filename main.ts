/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Dec 2023
 * This program sends as signal depending on distance
*/

// variables
let distanceToTarget: number = 0

// set up
radio.setGroup(69)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// loop
while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    distanceToTarget = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)

    // if distance is less than or equal to 10
    if (distanceToTarget <= 10) {
      basic.showNumber(distanceToTarget)
      basic.pause(1000)
      radio.sendString('Too close')
      basic.pause(1000)
      basic.showIcon(IconNames.Happy)
    }
    // if distance is more than 10
    if (distanceToTarget > 10) {
      basic.showNumber(distanceToTarget)
      basic.pause(1000)
      radio.sendString('Ok')
      basic.pause(1000)
      basic.showIcon(IconNames.Happy)
    }
  }
}
