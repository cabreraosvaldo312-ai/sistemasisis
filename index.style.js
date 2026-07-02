<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistemas del Cuerpo Humano</title>

<style>
body{
    font-family: Arial, sans-serif;
    background:#f0f4f8;
    margin:0;
    text-align:center;
}

header{
    background:#1976d2;
    color:white;
    padding:20px;
}

.menu{
    margin:20px;
}

button{
    padding:10px 15px;
    margin:5px;
    border:none;
    border-radius:8px;
    background:#1976d2;
    color:white;
    cursor:pointer;
    font-size:16px;
}

button:hover{
    background:#0d47a1;
}

#contenido{
    max-width:800px;
    margin:auto;
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}

img{
    width:250px;
    max-width:100%;
}

h2{
    color:#1976d2;
}
</style>
</head>
<body>

<header>
    <h1>Sistemas del Cuerpo Humano</h1>
    <p>Explora los principales sistemas del organismo</p>
</header>

<div class="menu">
    <button onclick="mostrar('nervioso')">Sistema Nervioso</button>
    <button onclick="mostrar('oseo')">Sistema Óseo</button>
    <button onclick="mostrar('sanguineo')">Sistema Sanguíneo</button>
    <button onclick="mostrar('muscular')">Sistema Muscular</button>
    <button onclick="mostrar('respiratorio')">Sistema Respiratorio</button>
    <button onclick="mostrar('digestivo')">Sistema Digestivo</button>
</div>

<div id="contenido">
    <h2>Bienvenido</h2>
    <p>Selecciona un sistema para conocer su función.</p>
</div>

<script>

const sistemas = {

nervioso:{
titulo:"sistema nervioso.png",
imagen:"https://upload.wikimedia.org/wikipedia/commons/0/07/Nervous_system_diagram-es.svg",
texto:"Controla y coordina las funciones del cuerpo mediante el cerebro, la médula espinal y los nervios."
},

oseo:{
titulo:"esqueleto.jpg",
imagen:"https://upload.wikimedia.org/wikipedia/commons/e/e8/Human_skeleton_front_es.svg",
texto:"Está formado por los huesos. Brinda soporte, protección y permite el movimiento."
},

sanguineo:{
titulo:"sangre.jpg",
imagen:"https://upload.wikimedia.org/wikipedia/commons/9/92/Circulatory_System_es.svg",
texto:"Transporta oxígeno, nutrientes y desechos por todo el cuerpo mediante la sangre."
},

muscular:{
titulo:"musculos.jpg",
imagen:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Muscular_system.svg",
texto:"Permite el movimiento, mantiene la postura y produce calor corporal."
},

respiratorio:{
titulo:"naris.jpg",
imagen:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Respiratory_system_complete_es.svg",
texto:"Permite captar oxígeno y eliminar dióxido de carbono."
},

digestivo:{
titulo:"panza.jpg",
imagen:"https://upload.wikimedia.org/wikipedia/commons/6/62/Digestive_system_diagram_es.svg",
texto:"Procesa los alimentos para obtener nutrientes y energía."
}

};

function mostrar(nombre){
    document.getElementById("contenido").innerHTML = `
        <h2>${sistemas[nombre].titulo}</h2>
        <img src="${sistemas[nombre].imagen}" alt="${sistemas[nombre].titulo}">
        <p>${sistemas[nombre].texto}</p>
    `;
}

</script>

</body>
</html>