const btnShare = document.querySelector("#btn-share");
const sharePopUp = document.querySelector(".share-container");
btnShare.addEventListener("click", ()=>{
   sharePopUp.classList.toggle('hidden');
})