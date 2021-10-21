/*
carts = {
    nome,
    descrição,
    vídeo
}


*/


deck = [
    "00_Fool.jpg",
    "01_Magician.jpg",
    "02_High_Priestess.jpg",
    "03_Empress.jpg",
    "04_Emperor.jpg",
    "05_Hierophant.jpg",
    "06_Lovers.jpg",
    "07_Chariot.jpg",
    "08_Strength.jpg",
    "09_Hermit.jpg",
    "10_Wheel_of_Fortune.jpg",
    "11_Justice.jpg",
    "12_Hanged_Man.jpg",
    "13_Death.jpg",
    "14_Temperance.jpg",
    "15_Devil.jpg",
    "16_Tower.jpg",
    "17_Star.jpg",
    "18_Moon.jpg",
    "19_Sun.jpg",
    "20_Judgement.jpg",
    "21_World.jpg",
    "Cups01.jpg",
    "Cups02.jpg",
    "Cups03.jpg",
    "Cups04.jpg",
    "Cups05.jpg",
    "Cups06.jpg",
    "Cups07.jpg",
    "Cups08.jpg",
    "Cups09.jpg",
    "Cups10.jpg",
    "Cups11.jpg",
    "Cups12.jpg",
    "Cups13.jpg",
    "Cups14.jpg",
    "Pents01.jpg",
    "Pents02.jpg",
    "Pents03.jpg",
    "Pents04.jpg",
    "Pents05.jpg",
    "Pents06.jpg",
    "Pents07.jpg",
    "Pents08.jpg",
    "Pents09.jpg",
    "Pents10.jpg",
    "Pents11.jpg",
    "Pents12.jpg",
    "Pents13.jpg",
    "Pents14.jpg",
    "Swords01.jpg",
    "Swords02.jpg",
    "Swords03.jpg",
    "Swords04.jpg",
    "Swords05.jpg",
    "Swords06.jpg",
    "Swords07.jpg",
    "Swords08.jpg",
    "Swords09.jpg",
    "Swords10.jpg",
    "Swords11.jpg",
    "Swords12.jpg",
    "Swords13.jpg",
    "Swords14.jpg",
    "Wands01.jpg",
    "Wands02.jpg",
    "Wands03.jpg",
    "Wands04.jpg",
    "Wands05.jpg",
    "Wands06.jpg",
    "Wands07.jpg",
    "Wands08.jpg",
    "Wands09.jpg",
    "Wands10.jpg",
    "Wands11.jpg",
    "Wands12.jpg",
    "Wands13.jpg",
    "Wands14.jpg"
]

pass = document.querySelector('#pass > img')
present = document.querySelector('#present > img')
future = document.querySelector('#future > img')

console.log(pass)
let round = []
let card = ""
    do{
        do{
            card = SelectRandomCard(deck);
        }while(CardAlreadySelect(round,card))
        round.push(card)
        
    }while(round.length < 3)


    pass.src = `./img/${round[0]}`
    pass.alt = `${round[0]}`
    present.src = `./img/${round[1]}`
    present.alt = `${round[1]}`
    future.src = `./img/${round[2]}`
    future.alt = `${round[2]}`
    //(`<img src="./img/${card} alt="${card.replace(".jpg","")}">`)
    
console.log(round)
    
round = []

function SelectRandomCard(deck){
    return deck[Math.floor(Math.random()*deck.length)];
}

function CardAlreadySelect(round,card){
    return round.includes(card)
}


