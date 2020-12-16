let btn  = document.getElementById('generate-btn');
let quotes = [
    {
        quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John"
    },
    {
        quote: "God save me from my friends. I can protect myself from my enemies.",
        author: "Jack"
    },
    {
        quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
        author: "John Lee"
    },
    {
        quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: "Joe"
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "Dan"
    }
];

var i = 0;
btn.addEventListener("click", function(){
    i = i < quotes.length ? ++i : 0;
    console.log(quotes[i]);
    document.getElementById('quote').textContent = quotes[i].quote;
    document.getElementById('author').textContent = quotes[i].author;
});