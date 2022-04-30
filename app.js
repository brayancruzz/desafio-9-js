var paisRestringido = 'Mexico';
var inputPais = document.getElementById('inputPais');
var inputEdad = document.getElementById('inputEdad')
var btn = document.getElementById('btn');

const dataPersonal = {
    miPais : '',
    Edad : '',
}

inputPais.addEventListener('change', (e) => {
    dataPersonal.miPais = e.target.value;
})

inputEdad.addEventListener('change', (e) => {
    dataPersonal.Edad = e.target.value;
})

btn.addEventListener('click', () => {
    if(dataPersonal.Edad == '' || dataPersonal.miPais == ''){
        alert('Debes llenar los campo')
    } else if(dataPersonal.miPais == paisRestringido){
        alert('Aún no hemos llegado a este pais')
    } else if(dataPersonal.Edad < 18 || dataPersonal.Edad > 60){
        alert(`Por tu edad (${dataPersonal.Edad}), no eres apto para nuestro programa`)
    } else{
        alert(`Bienvenido a ${dataPersonal.miPais}, eres apto`)
    }
})

function mainAlert(){
    alert('Bienvenido a nuestra pagina, podras calificar siempre y cuando no estes en Mexico (No tenemos nada contra Mexico es solo para el ejemplo xd) y seas mayor de 18 años y menos de 60')
}

mainAlert()