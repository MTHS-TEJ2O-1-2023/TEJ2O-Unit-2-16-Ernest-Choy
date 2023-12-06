/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/


// variables
let distanceToTarget: number = 0

// set up
radio.setGroup(69)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
  distanceToTarget = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
  if (distanceToTarget < 10) {
  radio.sendString("Too close") 
  }
}

