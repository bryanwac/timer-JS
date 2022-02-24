function getTimeFromSecond(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false, 
        timeZone: 'UTC'
    });//criando funcao que vai colocar na var data o horario atual, em ptbr, formato 24hrs utc, multipliquei por 1000 porquer o js conta em milisegundos
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
/*^ entreguei o elemento da page para uma var^*/

let segundos = 0; //vars para segurar os resultados
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSecond(segundos);
    }, 1000)
}//iniciando o relogio e incrementando os segundos a cada milesegundo, e entregando o valor pro inner html do relogio, passando os segundos que eram 0 mas foram incrementados a cada milesegundo

iniciar.addEventListener('click', function(event){// CAPTUREI O EVENTO DE CLICK 
    relogio.classList.remove('pausado');//tirando vermelho
    clearInterval(timer);
    iniciaRelogio();//chamando a função do relogin
});
pausar.addEventListener('click', function(event){// CAPTUREI O EVENTO DE CLICK 
    clearInterval(timer);//parando o timer
    relogio.classList.add('pausado');//deixando vermelho
});
zerar.addEventListener('click', function(event){// CAPTUREI O EVENTO DE CLICK 
    clearInterval(timer);//parando o timer
    relogio.classList.remove('pausado');//tirando vermelho
    relogio.innerHTML = '00:00:00';//resetando o contador
    segundos=0;
});
//SE EU PARAR O CÓDIGO AGORA, ELE PAUSA E ZERA, POREM SE INICIAR DENOVO ELE CONTINUA DE ONDE PAROU, PRECISO ZERAR O CONTADOR DA VAR, PQ ELA MANTEM O ESTADO, resolvi isso definindo os segundos pra 0 denovo no zerar