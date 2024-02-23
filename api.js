

let dogImage = document.getElementById("img-dog");
let dog_btn = document.getElementById("btn-dog");


dog_btn.addEventListener('click',randomImgae);

function randomImgae(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        dogImage.innerHTML = `<img src ="${data.message}"/>`;
    })
}

let cat_image = document.getElementById("img-cat");
let cat_btn = document.getElementById("btn-cat");


cat_btn.addEventListener('click',catsimage);

function catsimage(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        cat_image.innerHTML = `<img src ="${data[0].url}"/>`;
    })
}


let quotes = document.getElementById("quote");
let btn_quotes = document.getElementById("quotes_btn");


btn_quotes.addEventListener('click',randomquotes);

function randomquotes(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quotes.innerHTML = `<p>${data.content}</p>
        <p>- ${data.author}</p>
        <p>Category: ${data.tags.join(', ')}</p>`;
    })
}