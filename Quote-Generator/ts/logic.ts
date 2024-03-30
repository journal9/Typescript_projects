var buttonElement: HTMLButtonElement = document.getElementById("btn") as HTMLButtonElement
var quoteDiv:HTMLDivElement = document.getElementById("inner-card") as HTMLDivElement

var store={
    "quote": {
      "lists": [
        "You must be the change you wish to see in the world.",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "The only thing we have to fear is fear itself.",
        "Do one thing every day that scares you.",
        "It is during our darkest moments that we must focus to see the light.",
        "Life itself is the most wonderful fairy tale.",
        "Go confidently in the direction of your dreams! Live the life you've imagined.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma."
      ]
    }
  }

buttonElement.addEventListener('click',()=>{
    var idx:number = Math.floor((Math.random() * 7));
    console.log(idx);
    quoteDiv.textContent = store.quote.lists[idx]
})
