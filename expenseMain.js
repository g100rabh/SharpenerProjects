let amt = document.getElementById("amt");
let des = document.getElementById("des");
let cat = document.getElementById("drop");
const errorMessage = document.querySelector("#msg");
// let amtInput = 
const form = document.querySelector(".ex");
let expenseList = document.querySelector("#expenses");

window.addEventListener("load", onReload);

form.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();
    if(amt.value === "" || des.val === "" || drop.value == "Choose category"){
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "*Please enter all fields";
        errorMessage.style.color = "blue";
    } else {
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(
                `${cat.value} : ${des.value} : ${amt.value}` 
            )
        );
        expenseList.appendChild(li);
        // console.log(li);  
    

    //store in local storage

        let store = {
            amount: amt.value,
            description: des.value,
            cate: cat.value
        };
        li.id = store.description;
        localStorage.setItem(store.description, JSON.stringify(store));
        
        let space = document.createTextNode(" ");
        li.appendChild(space);
        let editBtn = document.createElement("button");
        editBtn.className = "edit btn-light btn-sm float-right edit"
        editBtn.appendChild(document.createTextNode("Edit"));
        li.appendChild(editBtn);

        li.appendChild(space);

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm float-right delete";
        deleteBtn.appendChild(document.createTextNode("Delete"));
        li.appendChild(deleteBtn);
        amt.value = "";
        des.value = "";
        cat.value = "Choose category";

    }
    form.reset();
}

expenseList.addEventListener("click", function (event){
    removeItems(event, des.value)
});
function removeItems(event){
    event.preventDefault();
    if(event.target.classList.contains("delete")){
        if(confirm("Are you sure?")) {
            let desKey = event.target.parentElement.id;
            let li2 = event.target.parentElement;
            
            localStorage.removeItem(desKey);
            expenseList.removeChild(li2);
        }
    } else if(event.target.classList.contains("edit")){
        if(confirm("Are you sure?")) {
            let desKey = event.target.parentElement.id;
            let li2 = event.target.parentElement;
            let storeData = JSON.parse(localStorage.getItem(desKey))
            amt.value = storeData.amount;
            des.value = storeData.description;
            cat.value = storeData.cate;

            // localStorage.removeItem(desKey);
            expenseList.removeChild(li2);
        }
    }
}

function onReload() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let storeData = JSON.parse(localStorage.getItem(key));
  
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(`${storeData.cate} : ${storeData.description} : ${storeData.amount}`));
      expenseList.appendChild(li);
  
      li.id = storeData.description;
  
      // Add edit and delete buttons
      let space = document.createTextNode(" ");
      li.appendChild(space);
  
      let editBtn = document.createElement("button");
      editBtn.className = "edit btn-light btn-sm float-right edit";
      editBtn.appendChild(document.createTextNode("Edit"));
      li.appendChild(editBtn);
  
      li.appendChild(space);
  
      let deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm float-right delete";
      deleteBtn.appendChild(document.createTextNode("Delete"));
      li.appendChild(deleteBtn);
    }
  }
    

