// Q-what is event propagation

// when and in which direction event will be executed is called event propagation

// bubling -down to up default behaviour
// capturing
// event delegation

const div = document.querySelector("div");
const form = document.querySelector("form");
const btn = document.querySelector("button");

div.addEventListener(
  "click",
  () => {
    alert("div");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    alert("form");
  },
  {
    capture: true,
  }
);
btn.addEventListener(
  "click",
  () => {
    alert("button");
  },
  {
    capture: true,
  }
);

// event.target, this.target, event.currentTarget

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// btn.addEventListener("click", func);
function func(event) {
  alert(
    "current target=" +
      event.currentTarget.tagName +
      "target" +
      event.target.tagName + //do not bubble //origin of bubbling
      "this" +
      this.tagName
  );
}

// event capturing and trickling

// what is event delegation
// Event delegation is a powerful technique that simplifies event handling, improves performance, and enhances the flexibility of your code. By leveraging the event bubbling mechanism, you can efficiently manage events on a group of elements rather than dealing with each one individually
