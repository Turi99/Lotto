var iloscKlikniec = 0;
var liczby = new Array(6);

var kliknieteLiczby=[];

function show(){
    var str = "";
    for(let i=0; i<=48; i++){
        str = str + "<div class=\"btn\" id=\"btn"+i+"\" onclick=\"sprawdz("+i+")\">"+(i+1)+"</div>"  
        if((i+1)%7 == 0) str = str + "<div style=\"clear:both;\"></div>"
    }
    document.getElementById("wynik").innerHTML = str;
    losujCyfry();
}

function sprawdz(nr){
    var id="btn"+nr;
    document.getElementById(id).style.backgroundColor = "#003300";
    document.getElementById(id).style.color = "#00CC00";
    document.getElementById(id).style.cursor = "default";
    document.getElementById(id).setAttribute("onclick",";");

    kliknieteLiczby.push(nr+1);
    iloscKlikniec++;
    if(iloscKlikniec == 6){
        setTimeout(function(){
            var strTwoje="";
            for(let i=0; i<kliknieteLiczby.length;i++){
                strTwoje = strTwoje+kliknieteLiczby[i]+" ";
            }
            var strLosowe="";
            for(let i=0; i<liczby.length;i++){
                strLosowe = strLosowe+liczby[i]+" ";
            }
            alert("Twoje liczby: "+strTwoje +"\nWylosowane: "+strLosowe);
            location.reload();
        },90);
    }    
}

function losujCyfry(){
    for(let i=0; i<liczby.length;i++){
        var los = (Math.floor(Math.random()*49)+1);
        //liczby[i] = (Math.floor(Math.random()*49)+1);
        do{
            los = (Math.floor(Math.random()*49)+1);
        }while(NumberIsExist(los,liczby));
        liczby[i] = los;
    }
}

function NumberIsExist(val, numbers){
    var ileLiczb = 0;
    for(let i=0; i<numbers.length;i++){
        if(val == numbers[i]) ileLiczb++;
    }
    return ileLiczb > 0 ? true : false;
}