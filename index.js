const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');
const digitalHour = document.querySelector('.h-digit');
const digitalMinute = document.querySelector('.m-digit');
const digitalSecond = document.querySelector('.t-format');
function setDate(){
    const now = new Date();

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if((hours%12) < 10)
        digitalHour.innerHTML = `0${hours%12}`; 
    else
        digitalHour.innerHTML = `${hours%12}`;
    
    (hours >= 12 ) ? digitalSecond.innerHTML = `PM`: digitalSecond.innerHTML = `AM`; 
    
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    digitalMinute.innerHTML = `${minutes}`;

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`; 
    
}
setInterval(setDate, 1000);
document.getElementById('toggle').addEventListener('change', function(){
    if(this.checked){
        document.documentElement.classList.add('dark');
    }else {
        document.documentElement.classList.remove('dark');
    }
} )