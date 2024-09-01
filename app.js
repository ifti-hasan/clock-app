
const clock = document.querySelector('#clock');

function updateTime() {

    const now = new Date();
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const time = `${ hours.toString().padStart(2,'0') }: ${ minutes.toString().padStart(2,'0') }: ${ seconds.toString().padStart(2,'0') } ${ hours > 12 ? "pm" : "am"}`;

    clock.innerText = time; 

}

updateTime();
setInterval(updateTime, 1000);