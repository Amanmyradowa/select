/**
 * @class
 * @param {array} data The data
 */

const customSelect = new CustomSelect(".custom-select", {
  data: [
    { id: 0, title: "First item" },
    { id: 1, title: "Second item" },
    { id: 0, title: "Third item" },
    { id: 1, title: "Fourth item" },
  ],
});

customSelect.initialization();

let btn = document.querySelector(".selector__btn");
let table = document.querySelector(".selector__table");
let selector_table = document.querySelector(".selector__table__tr");

function searching(event) {
  console.log("Hi");

  const results = document.querySelectorAll(".selector__table__tr__td");

  for (const result of results) {
    if (result.textContent.includes(event.target.value)) {
      result.style.display = "block";
    } else {
      result.style.display = "none";
    }
  }
}

function activeTable() {
  let search = document.querySelector(".selector__table__search");
  let tr = document.querySelector(".selector__table__tr");

  table.classList.toggle("active");

  tr.style.height = "110px";

  search.style.display = "block";

  datas.map((item) => {
    selector_table.innerHTML += `	
      <div class="selector__table__tr__td">${item.item}</div>
    `;
  });
}
