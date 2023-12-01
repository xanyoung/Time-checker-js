const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

let mode = 'time'

update()

setInterval(() => {
    update()
}, 1000)

function update(){
    output.textContent = format(mode);
}

function changeMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = changeMode('full')

dateBtn.onclick =  changeMode('date')

timeBtn.onclick = changeMode('time')

function format(mode) {
    const now = new Date()

    switch (mode) {
        case 'time':
            return now.toLocaleTimeString();
        case 'date':
            return now.toLocaleDateString();
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString();
    }
}