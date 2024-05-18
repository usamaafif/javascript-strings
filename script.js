let cities=['Faislabad','Lahore','Karachi','Islamabad','Burewala','Seikhupura','Kashmir'];
function simpleAlert(){
    alert("This Is A Simple Alert ")
}
function myname(){
    document.getElementById("para").innerHTML="";
    let name=document.getElementById("input").value;
   if(name===""){
   alert("Please Enter Name in Input Field" )

}
else if (isNaN(name)){
    document.getElementById("para").innerHTML=name;
    document.getElementById('input').value="";
    }


else
alert("Enter A Valid Name");
document.getElementById('input').value="";
}

function allcities(){
    document.getElementById("para").innerHTML="";
    for(let i=0;i<cities.length;i++)
    {
        document.getElementById('input').value="";
        let count=i;
        document.getElementById("para").innerHTML+=++count+" :" +cities[i]+"<br> "
        
    }
}
function addcities(){
    
    let newcity=document.getElementById("input").value;
    if(newcity===""){
        alert("Please Enter City Name");

    }
    else if(isNaN(newcity))
    {
     document.getElementById("para").innerHTML="City Added Successfully!"
        cities.push(newcity);
        document.getElementById('input').value="";
    }
    else
    alert("Enter A  Valid city")


}
function table(){
    document.getElementById("para").innerHTML="";
let num=Number(document.getElementById("input").value);

if(isNaN(num))
alert("Enter A Number In Input Field")
else if(num=="")
alert("Enter A Numer in Input Field")
else {
for(let i=1;i<=10;i++)
{
    document.getElementById("para").innerHTML+=num+" * "+i+" = "+num*i+"<br>";
    document.getElementById('input').value="";
}
}

    
}
 function inputclear(){
    document.getElementById("input").value="";
 }
 function outputclear(){
    document.getElementById("para").innerHTML="";
    
 }