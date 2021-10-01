function showSectionName(section, headerNav){
    document.addEventListener('scroll', () => {
    
        let pageItem = document.querySelectorAll("[data-section]"), 
          headerTitle = document.querySelector(headerNav), 
          headerLinks = document.querySelector('.nav-bar-links'), 
          navBar = document.querySelector('.nav-bar'),
          
          linksItem = headerLinks.children, 
          l1 = document.querySelector('.line1'),
          l2 = document.querySelector('.line2'),
          l3 = document.querySelector('.line3');  
          
         
        pageItem.forEach((item, ind) => {
    
          if (item.getBoundingClientRect().top < 50 && item.getBoundingClientRect().bottom > 50) {
           
            headerTitle.textContent = linksItem[ind].innerText;
            
            if(document.documentElement.clientWidth >= 640){
              navBar.classList.remove('transformTransX');
              document.body.style.overflow = '';
            }else{
              document.body.style.overflow = 'hidden';
            }
            
          }
        });
    
    
    
    if (!navBar.classList.contains('transformTransX')) {
      document.body.style.overflow = '';
      l2.classList.remove('displayNone');
      l1.classList.remove('transform45deg');
      l3.classList.remove('transformMin45deg');
    }
       
     
    
    })
      }
    
    export default showSectionName;
    


 

