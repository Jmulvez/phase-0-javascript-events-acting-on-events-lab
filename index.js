// Your code here
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10);
  
    if (right > 0) {
      dodger.style.right = `${left - 1}px`;
    }
  }
  undefined
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  undefined