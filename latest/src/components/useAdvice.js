const adviceId = document.querySelector(`#advice`);
const adviceText = document.querySelector(`adviceText`);
const btn = document.querySelector(`#btn`);

function getAdvice(){
    fetch("https://api.adviceslip.com/advice").then(response =>){
        return response.json();
    }
   

}