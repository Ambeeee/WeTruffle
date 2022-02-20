//Testo
function print(testo){
    console.log(testo)
}


//Apri/Chiudi Menu


function apriMenu(){

    var pagina = document.getElementById("pagina")
    var menu = document.getElementById("menu")
    var icona = document.getElementById("menuIcon")
    var pagina2 = document.getElementById("titleBox")

    console.log("opening...");
    try{
        pagina.style.marginLeft = "20%";
        
    } catch {
        console.log("P!f");
    }
    try{
        pagina2.style.marginLeft = "20%";
    }catch{
        console.log("P2!f");
    }
    
    menu.style.display = "flex";
    icona.style.display = "none";
}


function chiudiMenu(){

    var pagina = document.getElementById("pagina")
    var menu = document.getElementById("menu")
    var icona = document.getElementById("menuIcon")
    var pagina2 = document.getElementById("titleBox")


    console.log("closing...");
    
    try{
        pagina.style.marginLeft = "0";
        
    } catch {
        console.log("P!f");
    }
    try{
        pagina2.style.marginLeft = "0%";
    }catch{
        console.log("P2!f");}
    menu.style.display = "none";
    icona.style.display = "block";
}