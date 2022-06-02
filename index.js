document.querySelector('form').addEventListener("submit",submission)


let array=JSON.parse(localStorage.getItem('data')) || []
function submission()
{
    event.preventDefault();

    let obj = {
       name: document.getElementById("name").value,
       course: document.getElementById("course").value,
       unit: document.getElementById("unit").value,
       image: document.getElementById("image").value,
       batch: document.getElementById("batch").value,

   }


array.push(obj);
localStorage.setItem("data",JSON.stringify(array));
location.reload()
// document.querySelector('form')=null;
}
 let data1=[]
function calculate(){
 let data=JSON.parse(localStorage.getItem("data")) ||[];

 let obj={};

 for (let i=0;i<data.length;i++){
     if (!obj[data[i].batch]){
         obj[data[i].batch] = 0;
     }
 }
 for (let i=0;i<data.length;i++){
     obj[data[i].batch]++
 }
 data1.push(obj)
 console.log(data1);
 data1.map(function(el){
     let div=document.createElement("div")
     div.setAttribute("id","div")

    let web16=document.createElement("div")
    web16.innerText=`Web16- ${el.web16}`

    let web17=document.createElement("div")
    web17.innerText=`Web17- ${el.web17}`

    let web18=document.createElement("div")
    web18.innerText=`Web18- ${el.web18}`

    let web19=document.createElement("div")
    web19.innerText=`Web19- ${el.web19}`

    let web20=document.createElement("div")
    web20.innerText=`Web20- ${el.web20}`

    div.append(web16 ,web17 ,web18 ,web19 ,web20)
    document.getElementById("navbar").append(div)
 })
location.reload;

}

calculate();