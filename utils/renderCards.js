const cardsContainer = document.querySelector(".cards-container");

const renderCards = (data) => {
  cardsContainer.replaceChildren();
  console.log("cardsContainer", cardsContainer);
  data.forEach((item) => {
    const imgName = item.image;
    const authorName = item.name;
    const topicName = item.topic;
    const card = `<div class="card-container">
      <div class="img-banner"><img src="assets/${imgName}" alt="${imgName}" /></div>
      <div class="card-details">
        <div class="card-info">
          <p>Web Development Concepts and Technologies</p>
          <h5>
            <b>${topicName}</b>
          </h5>
        </div>
        <div class="stars-box">
          <i>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star-outline"></ion-icon
          ></i>
        </div>
        <div class="author-box">
          <p>Author: ${authorName}</p>
        </div>
      </div>
    </div>`;

    cardsContainer.insertAdjacentHTML("beforeend", card);
  });
};
export default renderCards;
