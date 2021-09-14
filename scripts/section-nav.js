function showSectionName(e,t){document.addEventListener("scroll",()=>{let o=document.querySelectorAll(e),n=document.querySelector(t),r=document.querySelector(".nav-bar-links"),c=document.querySelector(".nav-bar"),l=r.children,s=document.querySelector(".line1"),d=document.querySelector(".line2"),i=document.querySelector(".line3");o.forEach((e,t)=>{e.getBoundingClientRect().top<50&&e.getBoundingClientRect().bottom>50&&(n.textContent=l[t].innerText,document.documentElement.clientWidth>=640?(c.classList.remove("transformTransX"),document.body.style.overflow=""):document.body.style.overflow="hidden")}),c.classList.contains("transformTransX")||(document.body.style.overflow="",d.classList.remove("displayNone"),s.classList.remove("transform45deg"),i.classList.remove("transformMin45deg"))})}export default showSectionName;



 

