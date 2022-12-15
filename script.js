const lamp = window.document.getElementById('lamp')
var st = 0
var stBrok = 0
let x = document.getElementById('alert')



function ioLAmp() {
    if(stBrok != 1){
        if (st == 0 ) {
            onLamp()
            st = 1
        } else if (st == 1) {
            offLamp()
            st = 0
        }

    }else{
        x.textContent = '!!! Conserte a Lampada!!!'
    }

   

}

function situatioLamp() {
    if (stBrok == 0) {
        brokeLamp()
        stBrok = 1
        x.textContent = '!!! Você quebrou a Lampada !!!'
    } else if (stBrok == 1) {
        offLamp()
        stBrok = 0
        x.textContent = ''


    }
}


function onLamp() {
    lamp.src = './src/img/l_on.svg'
}

function offLamp() {
    lamp.src = './src/img/l_off.svg'
}

function brokeLamp() {
    lamp.src = './src/img/l_broken.svg'
}

