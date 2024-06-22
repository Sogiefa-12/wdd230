const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let li =document.createElement('li');
let deleteButton = document.createElement('button');
button.addEventListener('click', function() {
    console.log('Handler called');
    if (input.value.length) {
        // Handle button click
        let li =document.createElement('li');

        let deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = 'X';

        li.append(deleteButton);

        list.append(li);
    } else {
        alert("please enter a chapter title");
        input.focus();
        return;
    }
});



deleteButton.addEventListener('click', () => {
    if (input.value.length){
        // deleteButton.textContent = 'X';
        // li.append(deleteButton);
        list.removeChild(li);
        input.focus();
        input.value = '';
    };
   
});