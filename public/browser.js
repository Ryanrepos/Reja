// const { response } = require("./app");

console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
  >
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
      >
        Ozgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm"
      >
        Ochirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    axios.post("/create-item", {reja: createField.value}).then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    }).catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function(e) {
  console.log(e.target);
  if(e.target.classList.contains("delete-me")){
    // alert("siz delete tugmasini bosdingiz");
    if(confirm("Aniq o'chirmoqchimisz?")) {
      axios.post("/delete-item", {id: e.target.getAttribute("data-id")}).then((response) => {
        //console.log(response.data);
        // e.target.parentElement.parentElement.remove();
        e.target.closest("li").remove();
      }).catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");

      });
    }
  }

  if(e.target.classList.contains("edit-me")){
    alert("siz edit tugmasini bosdingiz");
  }
});