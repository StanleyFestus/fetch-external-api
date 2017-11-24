document.getElementById('getText').addEventListener('click', getText);

document.getElementById('getJson').addEventListener(
    'click', getJson
);

document.getElementById('getPosts').addEventListener(
    'click', getPosts
);

document.getElementById('addPost').addEventListener(
    'submit', addPost
);
function getText(){
    console.log('getText')
    fetch('sample.txt')
    .then((res) => res.text()
    .then((data) => document.getElementById('txt').innerHTML = data)
    )
}

function getJson(){
    console.log('getJson')
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
    let output = '<h3>Users</h3>';
    data.forEach(function(element) {
        console.log(element)
        output += `
        <ul>
            <li>ID: ${element.id}</li>
            <li>Name: ${element.name}</li>
            <li>Email: ${element.email}</li>
        </ul>
        `
        });
        document.getElementById('txt').innerHTML = output
    })
}

function getPosts(){
    console.log('getPosts')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
    let output = '<h3>Users</h3>';
    data.forEach(function(element) {
        console.log(element)
        output += `
        <div>
            <h4>Title: ${element.title}</h4>
            <p> ${element.body}</p>
        </div>
        `
        });
        document.getElementById('txt').innerHTML = output
    })
}

function addPost(e){
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title, body: body}),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

}

// global function fectch document by Id
function id(params) {
   return document.getElementById(params);
}

// get modal element
let modal = id('simpleModal');
// get modal btn
let modalBtn = id('modalBtn');
// get close btn
let closeBtn = document.getElementsByClassName('closeBtn')[0];

let interviewButton = id('interview');

function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = "none"
    }
}

// function open modal

function openModal(){
    modal.style.display = "block";
}
// function to clse
function closeModal(){
    modal.style.display = "none";
}

function viewButton(){
    fetch('http://www.ebmeds.org/compiler/api/missiondata')
    .then((res) => console.log(res.json()))
    .then((data) => console.log(data))
}

// listen top click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// listen for outside click to close modal
window.addEventListener('click', clickOutside)