const form = document.querySelector('#formItem');
const price = document.querySelector('#price');
const prod = document.querySelector('#prod');
const prodList = document.querySelector('#prodList');
let totalPriceSpan = document.querySelector('#totalValue');
var totalValue = parseFloat(totalPriceSpan.textContent);
console.log(totalPriceSpan)
form.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();

    const li = document.createElement('li');
    li.appendChild(
        document.createTextNode(
        `${price.value} : ${prod.value}`
        )
    );

    totalValue += parseInt(price.value);
    totalPriceSpan.textContent = totalValue;
    
    prodList.appendChild(li);
    let products = {
        pri: price.value,
        pro: prod.value
    }

    axios.post('https://crudcrud.com/api/db0578e14383444db16c5b849c40d794/productData', products)
        .then((response) => {
            // console.log(response.data);
            li.id = response.data._id
            
            console.log(li.id)
        })
        .catch((err) => console.log(err))

    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.append(document.createTextNode("Delete Order"));
    li.appendChild(deleteBtn);

    form.reset();
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/db0578e14383444db16c5b849c40d794/productData")
        .then((response) =>{
            for(let i = 0; i<response.data.length; i++){
                let objs = response.data[i];
                const li = document.createElement('li');
                li.appendChild(
                    document.createTextNode(
                    `${objs.pri} : ${objs.pro}`
                    )
                );
                li.id = objs._id;
                
                prodList.appendChild(li);
                let deleteBtn = document.createElement('button');
                deleteBtn.className = "btn btn-danger btn-sm float-right delete";
                deleteBtn.append(document.createTextNode("Delete Order"));
                li.appendChild(deleteBtn);
            }
        })
})

prodList.addEventListener('click', function (event) {
    removeProd(event);
});

function removeProd(event){
    event.preventDefault();
    if (event.target.classList.contains('delete')) {
        const li = event.target.parentNode;
        const prodId = li.id;
        axios.get(`https://crudcrud.com/api/db0578e14383444db16c5b849c40d794/productData/${prodId}`)
          .then((res) => {
            
            totalValue -= parseInt(res.data.pri);
            totalPriceSpan.textContent = totalValue;
            
          })
          .catch((err) => console.log(err));
        
    
        axios.delete(`https://crudcrud.com/api/db0578e14383444db16c5b849c40d794/productData/${prodId}`)
          .then(() => {
            li.remove();
            
          })
          .catch((err) => console.log(err));
    }
}