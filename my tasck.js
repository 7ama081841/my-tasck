var header = document.querySelector("header") ,
    list = document.querySelector("header .list") ,
    listeDesProduits = document.querySelector(".liste-des-produits")

    console.log(listeDesProduits)

window.onload = function () {
    console.log(window.innerWidth)

    if (window.innerWidth < 681) {

        header.style.display = "block";
        list.style.marginTop = "10px"

    } else {

        header.style.display = "flex";
        list.style.margin = "0px";

    }
}

window.onresize = function () {
    console.log(window.innerWidth)

    if (window.innerWidth < 681) {
        
        header.style.display = "block";
        list.style.marginTop = "10px";
        
    } else if (window.innerWidth > 681) {

        header.style.display = "flex";
        list.style.margin = "0px";

    }else if (window.innerWidth < 1168 ) {

        listeDesProduits.style.margin = "5px"
        console.log("rahi as8er")

    } else {

        listeDesProduits.style.margin = "0px"

    }

}