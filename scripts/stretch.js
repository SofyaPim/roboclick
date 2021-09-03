let cards = document.querySelectorAll('.card'),
cardsHeight = cards.clientHeight;

function stretchCards(){
   
    cards.reduce( (cardsHeight, maxheight) => {
          let maxheight = 0;   
            if(cardsHeight < maxheight){
                maxheight = cardsHeight;
            } 
              return maxheight;
        })
}