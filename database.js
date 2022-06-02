

function append(){
let Data=JSON.parse(localStorage.getItem("data"))




Data.map(function(el,index){

    let div=document.createElement('div')
    div.setAttribute('id','box')
   
    let image=document.createElement("img")
    image.src=el.image;
    image.setAttribute('class','img')
   
    let name=document.createElement('h2')
    name.innerText=` Name :${el.name}`;
   
    let course=document.createElement('div')
    course.innerText=`ReleaseDate : ${el.course}`;
   
    let unit=document.createElement('div')
    unit.innerText=`unit Rating : ${el.unit}`;

    let batch=document.createElement('div')
    batch.innerText=`unit Rating : ${el.batch}`;

    let btn=document.createElement('button')
    btn.innerText='Remove'
    btn.addEventListener("click",function(){
          trash(index)
    })
   
    div.append(image,name,course,unit,batch,btn)
   
    document.getElementById('container').append(div);
   
   
   })
}
append()

   function trash(index){
     
       let Data=JSON.parse(localStorage.getItem("data")) || [];
       let newData= Data.filter(function(el,i){
           if (i===index){
               let trash=JSON.parse(localStorage.getItem("trash")) || [];
                 trash.push(el);
                localStorage.setItem("trash",JSON.stringify(trash))
                       }
                       else{

                           return i != index
                       }

       })
       Data.splice(index,1)
      
       localStorage.setItem('data',JSON.stringify(newData));
       location.reload()
    //    append()
    //    console.log(newData)
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