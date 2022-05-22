console.log('welcome');
let addBtn1 = document.getElementById('addBtn1');
let addBtn2 = document.getElementById('addBtn2');
let addBtn3 = document.getElementById('addBtn3');
let addBtn4 = document.getElementById('addBtn4');

let addlist1 = document.getElementById('Todo-list1');
let addlist2 = document.getElementById('Todo-list2');
let addlist3 = document.getElementById('Todo-list3');
let addlist4 = document.getElementById('Todo-list4');

let addtodo1 = document.getElementById('inputfeild-1');
let addtodo2 = document.getElementById('inputfeild-2');
let addtodo3 = document.getElementById('inputfeild-3');
let addtodo4 = document.getElementById('inputfeild-4');

addBtn1.addEventListener("click", () => {
    let list1 = document.createElement('p');
    list1.classList.add('listgrp1');
    list1.innerText = addtodo1.value;
    addlist1.appendChild(list1);
    addtodo1.value = "";

    list1.addEventListener('dblclick', () => {
        addlist1.removeChild(list1);
    })
})

addBtn2.addEventListener("click", () => {
    let list2 = document.createElement('p');
    list2.classList.add('listgrp2');
    list2.innerText = addtodo2.value;
    addlist2.appendChild(list2);
    addtodo2.value = "";

    list2.addEventListener('dblclick', () => {
        addlist2.removeChild(list2);
    })
})


addBtn3.addEventListener("click", () => {
    let list3 = document.createElement('p');
    list3.classList.add('listgrp3');
    list3.innerText = addtodo3.value;
    addlist3.appendChild(list3);
    addtodo3.value = "";

    list3.addEventListener('dblclick', () => {
        addlist3.removeChild(list3);
    })
})


addBtn4.addEventListener("click", () => {
    let list4 = document.createElement('p');
    list4.classList.add('listgrp4');
    list4.innerText = addtodo4.value;
    addlist4.appendChild(list4);
    addtodo4.value = "";

    list4.addEventListener('dblclick', () => {
        addlist4.removeChild(list4);
    })
})

let api = "http://api.quotable.io/random"

let quote = document.getElementById("quote");
let nextquote = document.getElementById("new-quotes");

nextquote.addEventListener("click", () => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                quote.innerHTML = `"${data.content}"`;
                author.innerHTML = `- ${data.author}`;
            });
    });



