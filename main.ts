let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4
let silaM1 = 0;
let silaM4 = 0;
let pole: Array<number> = []
let variabley = 0;
let variablex = 0;
let ovladac = 0;
let reverse = -1
let spatnyMotor = 215/255
let tempomat = [255, 155]
let tempo = 0
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
input.onButtonPressed(Button.B, function () {


    PCAmotor.MotorRun(m1, 255)
    PCAmotor.MotorRun(m4, 190)



})

radio.onReceivedString(function (sstring) {
    ovladac = control.deviceSerialNumber()
    if (ovladac != control.deviceSerialNumber()) { //kontrola sériového čísla
        return
    } else {
        for (let i = 0; i < sstring.length + 1; i++){
            if (i < 2){
           pole.push(sstring.charCodeAt(i))
            }else{

                pole.push(parseInt( sstring.charAt(i)))
                
                
            }
            
        }
        
        variabley = pole[0]
        variablex = pole[1]
        
        if(pole[4] == 1){
            reverse = reverse * -1
        }

        if (pole[5] == 1) {
            tempo = 0
        }
        if (pole[6] == 1) {
            tempo = 1
        }
       
        
       
        if (variablex > -20 && variablex < 20 ){
            variablex = 0
        }
        
        
        motory(variabley, variablex)
        pole = []
    }









})
function motory(y: number, x: number) {

    if(reverse == -1){
        x = Math.round(Math.map(x, 0, 255, tempomat[tempo] * -1, tempomat[tempo])) *-1
        silaM4 = Math.round(Math.map(y, 0, 255, tempomat[tempo] * -1, tempomat[tempo])) * reverse * spatnyMotor
        silaM1 = Math.round(Math.map(y, 0, 255, tempomat[tempo] * -1, tempomat[tempo])) * reverse
        silaM1 = silaM1 - x
        silaM4 = silaM4 + x

       

        PCAmotor.MotorRun(m1, silaM1)
        PCAmotor.MotorRun(m4, silaM4)


    } else {
        x = Math.round(Math.map(x, 0, 255, tempomat[tempo] * -1, tempomat[tempo])) * -1
        silaM4 = Math.round(Math.map(y, 0, 255, tempomat[tempo] * -1, tempomat[tempo])) * reverse * spatnyMotor
        silaM1 = Math.round(Math.map(y, 0, 255, tempomat[tempo] * -1, tempomat[tempo])) * reverse
        silaM1 = silaM1 - x
        silaM4 = silaM4 + x



        PCAmotor.MotorRun(m1, silaM1)
        PCAmotor.MotorRun(m4, silaM4)

    }
  
}

//na cistou zatacku o 90 stupnu
function zatacka(){
    PCAmotor.MotorRun(m1, 255)
    PCAmotor.MotorRun(m4, 100)


}