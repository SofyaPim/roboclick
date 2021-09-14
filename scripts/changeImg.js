function changeImg() {
    // let documentWidth = document.documentElement.clientWidth;

    let contentBlock = document.querySelector('#stage-content');
    let meeting = document.querySelector('#meeting');
    // let  tariff = document.querySelector('#tariff');
    // let  payment = document.querySelector('#payment');
    // let  learning = document.querySelector('#learning');
    // let  money = document.querySelector('#money');
 window.addEventListener('resize', () => {
      if(contentBlock.clientWidth  <= 440){
    meeting.style.backgroundImage = "url('../Roboclick/images/stage-meeting-app.jpg')";
}else{
    meeting.style.backgroundImage = "url('../Roboclick/images/stage-meeting.jpg')";
}
 })
       
   



    
  };
  export default changeImg;