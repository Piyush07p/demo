let crossbtn=document.querySelector(".cross-btn");
let openbtn=document.querySelector(".open-btn");
let aside=document.querySelector(".aside");
let pophead=document.querySelector('.pop_head')

//   ----------(opening the sidebar)---------------

function sidebar(){
  aside.style.left="0.1rem"
  openbtn.style.visibility="hidden"
 
}

function disp(){
  aside.style.left="-17rem"
  openbtn.style.visibility="visible"
}


// --------------------save_ul---------------------------

//   let save_ul=document.querySelector('.save_ul')
//   arrdata.forEach((elem) => {
//     let li=document.createElement('li'); //creation of li
//     li.innerHTML=`+`
//     save_ul.appendChild(li); 
//   });

//   let save_li=document.querySelectorAll('.save_ul li')[0]

//   save_li.addEventListener("click",()=>{
//     let flag=true;
//     if(flag)save_li.style.backgroundColor="green"
//   })

//   ----------------------(bookmarking)--------------------

let prac_ul=document.querySelector('.prac_ul')
  arrdata.forEach((elem) => {
  let li=document.createElement('li'); //creation of li
  li.innerHTML=`${elem.prob}`
  prac_ul.appendChild(li); 
 
});

 let i=0;


  let click=document.querySelectorAll('.prac_ul li');
  
  click.forEach((elem)=>{
      elem.addEventListener("click",(e)=>{
      console.log(e)
      setTimeout((e)=>{
      window.location.reload();
      },2000)
      localStorage.setItem(`${Date.now()}`,`${ click[0].innerHTML}`)// key value pair
      pops("bookmarked successfully")
      
     })
     
  })
 


//    localStorage.clear();
 function clears(){
    pops("list cleared successfully")
    localStorage.clear()
    setTimeout(()=>{
      window.location.reload()
    },3000)
    
 }

// how to foreach over localstorage
let bookmark=document.querySelector('.bookmark_ul')

 Object.keys(localStorage).forEach((key)=>{
  let li2=document.createElement('li'); 
  li2.innerHTML=`${localStorage.getItem(key)}`
  bookmark.appendChild(li2);
 })


//    ---------****-------serach_filter--------------

const searchfilter=()=>{
  let inputfield=document.querySelector('.input_field').value.toUpperCase();
  
  let prac_ul=document.querySelector('.prac_ul')
  let li_item=prac_ul.getElementsByTagName('li');        
  for(let i=0;i<li_item.length;i++){

      let currli=li_item[i]
       if(currli){
  
          let textvalue=currli.textContent|| currli.innerHTML;
          if(textvalue.toUpperCase().indexOf(inputfield)>-1){
              li_item[i].style.display="";
          }else{
              li_item[i].style.display="none";
          }
        
       }
  }
}

// -----------------((POPUP))-----------------------

let sidepop=document.querySelector('.pop-box')
function pops(props){
  // let sidepop_after=window.getComputedStyle(sidepop,'::after')
    pophead.innerHTML=props
    sidepop.style.left="0"
    let timer=setTimeout(()=>{
      sidepop.style.left="-21rem"
     },2500)

  sidepop.style.setProperty('--scaler','scale(0,1)')
}

