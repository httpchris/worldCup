let changeColor = true;

function changeCard(event) {
  const card = event.currentTarget;
  const backgroundImage = changeColor ? "blue" : "green"

  changeColor = !changeColor
  card.style.backgroundImage = `url(./assets/bg-${backgroundImage}.svg)`;
}