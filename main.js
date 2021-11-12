// VARIABLES
const text = document.querySelector("#user-text");
const addButton = document.querySelector("#add-button");
const removeButton = document.querySelector("#remove-button");
const removeAllButton = document.querySelector("#removeAll-button");
const ol = document.querySelector("#list-items");


function update() {
// ALLOW USER TO ADD TO LIST
addButton.addEventListener("click", function (event) {
    console.log('Add Button Clicked'); 

    const newItem = document.createElement('div');
    console.log('newItem created', newItem);

    newItem.innerHTML = '<li>' + text.value + '</li>';
    ol.appendChild(newItem);
    
    console.log('Ol', ol); 

})

// ALLOW USER TO CLICK LIST FOR LINE-THROUGH
ol.addEventListener("click", function (event) {
    const ol = event.target; 
    console.log('list clicked'); 

    ol.style.textDecoration = 'line-through';
    console.log('line-through', ol); 

})


// ALLOW USER TO REMOVE COMPLETED TASK
removeButton.addEventListener("click", function (event) {
    console.log('Remove Task Button Clicked'); 

    const li = document.querySelector('li');
    console.log('list item to be removed:', li);

    li.remove('remove the ones with line-through:',li);
    

    

})

// ALLOW USER TO REMOVE ALL 
removeAllButton.addEventListener("click", function (event) {
    const listItems = event.target;
    const newItem = document.createElement('div');
    
    newItem.innerHTML = '<li>' + text.value + '</li>';
    ol.remove(newItem);
})
}
update();