function circulo(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("circulo");

}


function rombo(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("rombo");

}


function rectangulo(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("rectangulo");
}


function triangulo(){
    
    var figura =document.getElementById("otras");
    figura.classList.toggle("triangulo");
}


function rectangulov(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("rectangulov");
}


function arriba(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("arriba");
}


function abajo(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("abajo");
}


function derecha(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("derecha");
}


function izquierda(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("izquierda");
}


function diagonal(){
    
    var figura =document.getElementById("figura");
    figura.classList=("")
    figura.classList.toggle("diagonal");
}


function imagen(){
    
    var figura =document.getElementById("figura");
   
    figura.classList.toggle("imagen");
}


function luna(){
    
    var figura =document.getElementById("otras");
  
    figura.classList.toggle("luna");
}

function estrella5(){
    var figura =document.getElementById("otras");

    figura.classList.toggle("estrella5");

}

function infinity(){
    var figura =document.getElementById("otras");
    figura.classList.toggle("infinity");

}

function yinyang(){
    var figura =document.getElementById("otras");
    figura.classList.toggle("yinyang");

}


function egg(){
    var figura =document.getElementById("otras");
    figura.classList.toggle("egg");

}


//CAPTURAR DATOS
//CAPTURAR DATOS
//CAPTURAR DATOS

function capturarDatos(){
    //capturamos las variables de cada uno de los datos del fomulario
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //Capturar los elemtos a los cuales les asignaremos los valores

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");
    var mGenero = document.getElementById("mGenero");

    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;
    mGenero.textContent = genero;

    if (genero == "Masculino") {
        mFoto.src="img/man.png";
    }else if(genero == "Femenino"){
        mFoto.src="img/woman.png";
    }else{
        mFoto.src="img/tanque.png";
    }
    
    
    switch (color) {
        case "azul":
            var contenedor = document.getElementById("contAvatar");
            
            contenedor.classList.add("azul");
            break;
        case "negro":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("negro");
            break;
        case "blanco":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("blanco");
            break;
        case "rosado":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("rosado");
            break;
        case "amarillo":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("amarillo");
            break;       
    }
    
}
