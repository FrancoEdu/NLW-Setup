const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add); //evento = click, quando se clicar o botão, chamará funcção add
form.addEventListener('change',save);

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5); //pegará a data do PC e converterá para o BRASIL, 
    //assim cortando o formato da posição zero e -5 do final para o começo 

    if(nlwSetup.dayExists(today)){
        alert("Dia já registrado 🛑");
        return //para o código
    }
    
    nlwSetup.addDay(today);
    alert("Dia registrado com sucesso ✅")
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)); //setItem("qualquer coisa", valor da chave e converti para texto)
    
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} //somente localmente
/*const data = {
    run:['01-01', '01-02', '01-06'],
    water: ['01-04', '01-05'],
    food: ['01-01', '01-03'], 
}*/
nlwSetup.setData(data)
nlwSetup.load()

