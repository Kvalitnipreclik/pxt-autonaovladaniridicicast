let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4
let silaM1 = 0
let silaM4 = 0
let pole: Array<number> = []
let variabley = 0
let variablex = 0
//radio
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(50)

///

//SOS tlacitko
input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStopAll()

})


input.onButtonPressed(Button.A, function () {

    
    radio.sendNumber(0)




})

radio.onReceivedString(function (sstring) {

   

        
       
        variabley = Math.round(Math.map(sstring.charCodeAt(0), 0, 255, -255, 255)) * -1
        variablex = Math.round(Math.map(sstring.charCodeAt(1), 0, 255, -255, 255))  * -1
        
       
       
      motory(variabley, variablex)
       
    



})
function motory(y: number, x: number){

silaM1 = y - x*2
silaM4 = y + x*2
    PCAmotor.MotorRun(m1, silaM1)
    PCAmotor.MotorRun(m4, silaM4)
}
