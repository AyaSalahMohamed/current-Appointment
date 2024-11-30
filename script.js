


let user = {
    logo: "./media/logo.jpg",
    userImage: "./media/user-image.jpg",
    userName: "Dr. Alex Hess",
    userImageChange: "/media/user-image2.jpg",

    userNameChange: "Roger Curtis",
    age: "Age: 36",}

















let toggleContainer =document.querySelector(".toggleContainer")
function move() {
    toggleContainer.classList.toggle("active")
    if(!toggleContainer.classList.contains("active")){
        document.body.style.backgroundColor="rgba(0, 0, 0, 0.579)"
        document.body.style.color="white"
        let topElement = document.querySelector(".top"); 
        if (topElement.classList.contains("dark")) {
            topElement.classList.remove("dark"); }
    }else{
        document.body.style.backgroundColor="rgba(0, 0, 0, 0.055)"
        document.body.style.color="black" 
        if (topElement.classList.contains("light")) {
            topElement.classList.remove("light"); }
    }

    
}
let name1 = document.querySelector("#name")
let age = document.querySelector("#age")
let nameapp = document.querySelector(".nameapp")
let ageapp = document.querySelector(".ageapp")
let add = document.querySelector(".add")
let big = document.querySelector(".big")
let currentApplication = document.querySelector(".currentApplication")
let inp = document.querySelector("#inp")
let lab = document.querySelector(".labpic")
function uploadfile() {
    let fr = new FileReader
    fr.onload=function () {
        let img = document.createElement("img")
        img.src = fr.result
        img.style.width="120px"
        img.style.height="120px"
        lab.innerHTML=""
        lab.append(img)
        localStorage.setItem("patientimg",fr.result)
        
    }

    fr.readAsDataURL(inp.files[0])
    big.style.display="flex"
    currentApplication.style.display="block"
}
function addNameAge () {
    nameapp.textContent= name1.value
    ageapp.textContent= age.value
    localStorage.setItem("patientname",name1.value)
    localStorage.setItem("patientage",age.value)
    big.style.display="none"
    currentApplication.style.display="none"
    
}
   




let biginformation = document.querySelector(".biginformation")
let informationapp = document.querySelector(".informationapp")
function information() {
    biginformation.style.display="block"
    informationapp.style.display="flex"
    
}
 
function addform1localstorage(){
    let imgform1 = localStorage.getItem("patientimg")
    let img=document.createElement("img")
    img.src = imgform1
    img.style.width="120px"
    img.style.height="120px"
    lab.append(img)
    let nameform1 = localStorage.getItem("patientname")
    nameapp.textContent=nameform1
    let ageform1 = localStorage.getItem("patientage")
    ageapp.textContent=ageform1

}
addform1localstorage()

function addinformation() {
    let pgender=document.querySelector(".pgender")
    let gender=document.querySelector("#gender")
    let pblood= document.querySelector(".pblood")
    let bloodtype=document.querySelector("#bloodtype")
    let pallergie=document.querySelector(".pallergies")
    let allergies=document.querySelector("#allergies")
    let pdiseases =document.querySelector(".pdiseases")
    let diseases =document.querySelector("#diseases")
    let pheight =document.querySelector(".pheight")
    let height = document.querySelector("#height")
    let pweight=document.querySelector(".pweight")
    let weight=document.querySelector("#weight")
    let ppatientID=  document.querySelector(".ppatientID")
    let patientID=document.querySelector("#Patientid")
    let plastvisit=document.querySelector(".plastvisit")
    let lastvisit =document.querySelector("#lastvisit")
 pgender.textContent=gender.value  
 pblood.textContent=bloodtype.value  
 pallergie.textContent=allergies.value  
pdiseases.textContent=diseases.value  
 pheight.textContent=height.value  
 pweight.textContent=weight.value  
ppatientID.textContent=patientID.value  
 plastvisit.textContent=lastvisit.value  
 biginformation.style.display="none"

 let infoform= {
     genderform:gender.value  ,
     bloodform:bloodtype.value  ,
     allergiesform:allergies.value ,
     diseasesform:diseases.value ,
     heightform:height.value  ,
     weightform:weight.value ,
     patientIDform:patientID.value,
     lastvisitform:lastvisit.value 
 }
 localStorage.setItem("forminfo",JSON.stringify(infoform))
}
function getinfo() {
    let getforminfo =JSON.parse( localStorage.getItem("forminfo"))
    let pgender = document.querySelector(".pgender");
     let pblood = document.querySelector(".pblood"); 
     let pallergie = document.querySelector(".pallergies"); 
     let pdiseases = document.querySelector(".pdiseases"); 
     let pheight = document.querySelector(".pheight"); 
     let pweight = document.querySelector(".pweight"); 
     let ppatientID = document.querySelector(".ppatientID"); 
     let plastvisit = document.querySelector(".plastvisit"); 
     pgender.textContent = getforminfo.genderform; 
     pblood.textContent = getforminfo.bloodform; 
     pallergie.textContent = getforminfo.allergiesform; 
     pdiseases.textContent = getforminfo.diseasesform; 
     pheight.textContent = getforminfo.heightform; 
     pweight.textContent = getforminfo.weightform; 
     ppatientID.textContent = getforminfo.patientIDform; 
     plastvisit.textContent = getforminfo.lastvisitform;
    
}
getinfo()

let bigheartTemG =document.querySelector(".bigheartTemG")

function part1() {
    bigheartTemG.style.display="flex"
    
}                               
