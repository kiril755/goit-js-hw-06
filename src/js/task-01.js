const categories = document.querySelector("#categories");

const categoriesItem = categories.children.length;

console.log("Number of categories:", categoriesItem)




const items = document.querySelectorAll(".item")

items.forEach(item => 
    {
        console.log("Category: ", item.firstElementChild.textContent)
        console.log("Elements: ", item.lastElementChild.children.length)
    })