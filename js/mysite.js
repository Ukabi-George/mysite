var myImage = document.getElementById("assets");
var ArrayImage = [ "Assets/george.JPG", "Assets/georgeukabi.JPG", "Assets/Passport.jpg", "Assets/p1.png"];
var imageidex = 0;
function changeImage(){
    myImage.setAttribute("src", ArrayImage[imageidex]);
    imageidex++;
    if ( imageidex>= ArrayImage.length){
        imageidex=0;
    }
}
setInterval(changeImage,2000);



function populate (s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML ="";
    if(s1.value=="abia"){
    
    var optionArray =["|", "ukwaeast|Ukwaeast", "abanorth|Abanorth", "isialangwa|Isialangwa"];
    }else if(s1.value=="adamawa"){
    
        var optionArray =["|", "yola|Yola", "atiku|Atiku", "gulak|Gulak"];
        }else if(s1.value=="akwaibom"){
     var optionArray =["|", "ikot-ekpene|Ikot-ekpene", "obotakara|ObotAkara", "uyo|Uyo"];
            }
    for(var option in optionArray ){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        s2.options.add(newoption);
    
    }
    
    
    }