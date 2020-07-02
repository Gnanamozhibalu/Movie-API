var submitEvent=document.getElementById("submit");
submitEvent.addEventListener("click",()=>{
    var name=document.getElementById("movieName");
    if(name.value!=""){
    mname=name.value;
    console.log(mname);
    var url=`http://www.omdbapi.com/?t=${mname}&apikey=a1e1992f`
    async function search(){
        try{

            var omdbAPI=await fetch(url);
            var omdbData=await omdbAPI.json();
            console.log(omdbData);

            //poster
               /* var image=document.createElement("img");
               image.src=omdbData.Poster;
               image.setAttribute("class","baner-img img-fluid");
               image.setAttribute("alt","poster")
               document.getElementById("imageId").appendChild(image); */
               var image=document.getElementById("poster");
               image.src=omdbData.Poster;
               image.setAttribute("class","baner-img img-fluid");

            //details
               var movieDetails=document.getElementById("details");
               movieDetails.innerHTML=
               `<div class="data">
               <div><b style="color:black">Title:</b>&nbsp${omdbData.Title}
               </div>
               <div><b style="color:black">Year:</b>&nbsp${omdbData.Year}
               </div>
               <div><b style="color:black">Actors:</b>&nbsp${omdbData.Actors}
               </div>
               <div><b style="color:black">Director:</b>&nbsp${omdbData.Director}
               </div>
               <div style="color:gold;"><b style="color:black">BoxOffice:</b>&nbsp${omdbData.BoxOffice}
               </div>   
               <div><b style="color:black">Ratings:</b>&nbsp${JSON.stringify(omdbData.Ratings[0].Value)}
               </div>
               <div><b style="color:black">Country:</b>&nbsp${omdbData.Country}
               </div>
               </div>`
        }catch(err){
               alert(err);  
        }
    }
    search();
    }else{
        alert("Enter Movie Name")
    }
    
})

