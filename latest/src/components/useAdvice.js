const adviceId = document.querySelector(".advice span");
const adviceText = document.querySelector(".advicetext p");
const adviceBtn = document.querySelector(".btn");

const fetchData = async () => {
    try {
    const res = await fetch("https://api.adviceslip.com{Date.now()}");
    const data = await res.json()
    const {slip} = data
    adviceId.innerHTML = `#${slip.id}`
    adviceText.innerHTML = `${slip.advice}`
}catch (error){
    console.error("Error fetching advice:",error);
}


};

fetchData();
adviceBtn.addEventListener("click", fetchData);

