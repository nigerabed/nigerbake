

const panels = document.querySelectorAll(".panel");

// itarating over all the panels html elements to add click eventlistener and actions
panels.forEach((panel) => {
  panel.addEventListener("click", handleClick);

  /**
   * first remove active class from all html elements and then active class to the clicked element
   */
  function handleClick() {
    removeActive();
    panel.classList.add("active");
  }
});
/**
 * remove active class from all html elements
 */
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
