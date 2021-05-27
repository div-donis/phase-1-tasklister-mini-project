

document.addEventListener("DOMContentLoaded", () => {


const grabForm = document.querySelector("#create-task-form")
const list = document.querySelector("#tasks")

grabForm.addEventListener("submit", function(y){
  y.preventDefault()

  const newInput = document.querySelector("#new-task-description").value 

  const listItem = document.createElement("li")
  listItem.innerText =  newInput

  list.appendChild(listItem)
  grabForm.reset()
})
});
