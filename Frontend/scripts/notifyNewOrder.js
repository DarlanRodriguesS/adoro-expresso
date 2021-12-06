function handleNotifyNerOrder(){

if (numberOrders > newOrder) {
    document.querySelector('.audio').innerHTML +=
        `
   <audio  autoplay>
     <source src="../public/audioWeb/MP3 mobile-rington..mp3" type="audio/mp3" />
     <source src="../public/audioWeb/OGG mobile-rington..ogg" type="audio/ogg" />
     <source src="../public/audioWeb/WAV mobile-rington..wav" type="audio/wav" />
   </audio>
  `;
  setTimeout(() => {
    window.location.reload(true);
 }, 5000);
}
newOrder = localStorage.setItem('numberOrdersOld', numberOrders);

}
