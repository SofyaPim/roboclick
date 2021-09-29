//function showSectionName(e,t){document.addEventListener("scroll",()=>{let o=document.querySelectorAll(e),n=document.querySelector(t),r=document.querySelector(".nav-bar-links"),c=document.querySelector(".nav-bar"),l=r.children,s=document.querySelector(".line1"),d=document.querySelector(".line2"),i=document.querySelector(".line3");o.forEach((e,t)=>{e.getBoundingClientRect().top<50&&e.getBoundingClientRect().bottom>50&&(n.textContent=l[t].innerText,document.documentElement.clientWidth>=640?(c.classList.remove("transformTransX"),document.body.style.overflow=""):document.body.style.overflow="hidden")}),c.classList.contains("transformTransX")||(document.body.style.overflow="",d.classList.remove("displayNone"),s.classList.remove("transform45deg"),i.classList.remove("transformMin45deg"))})}export default showSectionName;
function showSectionName(section, headerNav){
    document.addEventListener('scroll', () => {
    
        let pageItem = document.querySelectorAll("[data-section]"), //массив секций
          headerTitle = document.querySelector(headerNav), // контент заголовка в хедере
          headerLinks = document.querySelector('.nav-bar-links'), // панель навигации
          navBar = document.querySelector('.nav-bar'),
          
          linksItem = headerLinks.children, // коллекция ссылок
          l1 = document.querySelector('.line1'),
          l2 = document.querySelector('.line2'),
          l3 = document.querySelector('.line3');  
          
          console.log(pageItem);
        pageItem.forEach((item, ind) => {
    
          if (item.getBoundingClientRect().top < 50 && item.getBoundingClientRect().bottom > 50) {
             console.log(linksItem);
            console.log(ind);
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
    


 

