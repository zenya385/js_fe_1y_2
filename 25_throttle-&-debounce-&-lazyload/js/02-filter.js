const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

/*
 * 1. Рендеримо размітку елементів списку
 * 2. Слухаєм зміни фільтра
 * 3. Фільтруєм дані і Рендеримо нові елементи
 */

const list = document.querySelector("js-list");
const input = document.querySelector("#filter");

input.addEventListener("input", _.debounce(onFilterCange, 300));

function createListItemsMarkup(items) {
   return 
 }

function onFilterCange(e) {
  const filter = e.target.value.toLowerCase();
  console.log("filter:>>", filter);
}
