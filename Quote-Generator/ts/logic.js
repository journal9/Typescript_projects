var buttonElement = document.getElementById("btn");
var quoteDiv = document.getElementById("inner-card");
// type JSONValue =
// | string
// | JSONObject
// | JSONArray;
// interface JSONObject {
//     [x: string]: JSONValue;
// }
// interface JSONArray extends Array<JSONValue>{}
// type JSONValue = string | string[];
// interface objectValue {
//     [x: string]: JSONValue;
// }
var store = {
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
};
buttonElement.addEventListener('click', function () {
    var idx = Math.floor((Math.random() * 7));
    console.log(idx);
    quoteDiv.textContent = store.quote.lists[idx];
});
