function changeImg() {
    // let documentWidth = document.documentElement.clientWidth;

    let contentBlock = document.querySelector('#stage-content');
    let meeting = document.querySelector('#meeting');
     let  tariff = document.querySelector('#tariff');
     let  payment = document.querySelector('#payment');
     let  learning = document.querySelector('#learning');
     let  money = document.querySelector('#money');
 
      if(contentBlock.clientWidth  <= 440){

        
    meeting.style.backgroundImage = "url('../Roboclick/images/stage-meeting-app.jpg')";
    tariff.style.backgroundImage = "url('../Roboclick/images/stage-tariff-app.jpg')";
    money.style.backgroundImage = "url('../Roboclick/images/stage-money-app.jpg')";
    payment.style.backgroundImage = "url('../Roboclick/images/stage-payment-app.jpg')";
    learning.style.backgroundImage = "url('../Roboclick/images/mashine-learning-app.jpg')";

}else{
    meeting.style.backgroundImage = "url('../Roboclick/images/stage-meeting.jpg')";
    tariff.style.backgroundImage = "url('../Roboclick/images/stage-tariff.jpg')";
    money.style.backgroundImage = "url('../Roboclick/images/stage-money.jpg')";
    payment.style.backgroundImage = "url('../Roboclick/images/stage-payment.jpg')";
    learning.style.backgroundImage = "url('../Roboclick/images/mashine-learning.jpg')";
}
 
       
   



    
  };
  export default changeImg;