 const buttonExemplojs= document.getElementById('buttonExemplojs')
        buttonExemplojs.addEventListener('click',() => {
            alert("flamengo");

            const form = document.querySelector("form");
            form.addEventListener('submit',()=> {
                console.log('batatata')
            })
        });
        const header = document.getElementById("header");
        header.addEventListener('mouseover',()=>{
            alert("Uma vez Flamengo Sempre Flamengo, Flamengo sempre, eu hei de ser É o meu maior prazer vê-lo brilhar Seja na terra, seja no mar Vencer, vencer, vencer!Uma vez Flamengo Flamengo ate morrer Na regata, ele me mata, me maltrata, me arrebata Que emoção no coração!Consagrado no gramado, sempre amado, o mais cotado no Fla-Flu é o ai, Jesus!Eu teria um desgosto profundo Se faltasse o Flamengo no mundo Ele vibra, ele é fibra muita libra já pesouFlamengo até morrer eu sou!Uma vez FlamengoSempre FlamengoFlamengo sempre, eu hei de serÉ o meu maior prazer vê-lo brilharSeja na terra, seja no marVencer, vencer, vencer!Uma vez FlamengoFlamengo até morrer!Na regata, ele me mata, me maltrata, me arrebataQue emoção no coração!Consagrado no gramado, sempre amadoO mais cotado no Fla-Flu é o ai, Jesus!Eu teria um desgosto profundoSe faltasse o Flamengo no mundoEle vibra, ele é fibra muita libra já pesouFlamengo até morrer eu sou!")
        });
        
        document.addEventListener('keydown',(event)=>{
            console.log(`Tecla clicada ${event.key}`)
        })