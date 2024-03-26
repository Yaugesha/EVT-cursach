export function printCode() {
  document.addEventListener("DOMContentLoaded", () => {
    const text = `const text = "Hello, world!";

    function printSomeText(textToPrint) {
        console.log(textToPrint);
    }
    
    printSomeText(text);`;

    const typingSpeed = 50;

    let index = 0;
    const codeElement = document.querySelector("code");

    const intervalId = setInterval(function () {
      codeElement.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);
  });
}
