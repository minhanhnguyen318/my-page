
const siBtn = document.querySelector(".si-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the si button is clicked
siBtn.addEventListener("click", () => {
  question.innerHTML = " 😘😘😘😘 TI AMO ANCHE IOOOOOO VA, ci vediamo a Natale";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzMxMWFuYWJpdTB0NTc2emdxcW51Mml4bm12YXdqdzR1b3FrM3h5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s96JEsHupDyL3eX2Xq/giphy.gif";
});

// Make the NO button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});