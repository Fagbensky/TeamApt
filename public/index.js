let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
if (window.innerHeight > window.innerWidth) {
    let length = window.innerHeight;
    console.log(length);
  document.documentElement.style.setProperty("--length", `${length}px`);
} else {
    let length = window.innerHeight*1.35;
    console.log(length);
    document.documentElement.style.setProperty("--length", `${length}px`);
}

// We listen to the resize event
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    if (window.innerHeight > window.innerWidth) {
      let length = window.innerHeight;
    console.log(length);
      document.documentElement.style.setProperty("--length", `${length}px`);
    } else {
      let length = window.innerHeight * 1.35;
    console.log(length);
      document.documentElement.style.setProperty("--length", `${length}px`);
    }
});
