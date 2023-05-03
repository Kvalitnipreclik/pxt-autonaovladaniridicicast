//moturky
let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4
let silaM1 
let silaM4 
let pole = []
let variable = 0
//radio
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)


//SOS tlacitko
input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStopAll()
   
})




radio.onReceivedString(function(string) {
    
for (let i = 0; i < string.length - 1; i++){

   variable = string.charCodeAt(i)
    pole.push(variable)
}
  


})
    
    "ahoj".charCodeAt(0)

