let marka =[
    "bmw", "opel", "nissan"
]
  // let masin =document.getElementById("marka");
  //   let ekran =" ";
  // for(let i=0; i<marka.length; i++){
  //  ekran +=`<option> ${marka[i]} </option>`
   
  // } 
  // masin.innerHTML = ekran;


  // let masin =document.getElementById("marka");
  // let ekran =" ";
  // for(let key of marka){
  //   ekran +=`<option> ${key} </option>` 
  // }
  // masin.innerHTML = ekran;


  
  let masin =document.getElementById("marka");
  let ekran =" ";

  marka.forEach(function(key,index){
    ekran +=`<option> ${key},${index} </option>`
  })
  masin.innerHTML = ekran;
