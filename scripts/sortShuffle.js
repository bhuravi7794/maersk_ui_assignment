let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let cardColor = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

// Function to generate card dynamically
const createCard = () => {
    numArray.forEach((element, index) => {
        let card = document.createElement('div');
        card.id = 'card'+ index;
        card.innerText = numArray[index];
        card.style.background = cardColor[index];
        card.style.borderLeft = cardColor[index] + "10px solid";
        document.getElementById('grid-container').appendChild(card);
    });
}

const updateCard = () => {
    for (let i = 0; i < numArray.length; i++) {
        let cardID = "card"+ i;
        let card = document.getElementById(cardID);
        card.style.background = cardColor[i];
        card.style.borderLeft = cardColor[i] + "10px solid";
        document.getElementById(cardID).style.order = numArray[i];
    }
};

const shuffleCard = () => {
    numArray.sort(() => Math.random()- .5);
    updateCard();
};

const isArraySorted=(arr)=>{
    let isSorted=true;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
           isSorted=false 
        }
    }
    return isSorted;
};

const sortCard = () => {
    if(isArraySorted(numArray)){
        alert("Card is already sorted")
    }else{
    numArray.sort();
    updateCard();
    }
};

