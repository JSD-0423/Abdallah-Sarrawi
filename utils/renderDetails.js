const contentContainer = document.querySelector(".content-container");
const renderDetails = (pageData) => {
  const tiopicCategory = pageData.category;
  const topicDescription = pageData.description;
  const topicImage = pageData.image;
  const authorName = pageData.name;
  const cardTopic = pageData.topic;
  const subTopicsHTML = pageData.subtopics
    .map(
      (topic) => `<div class="sub-topic">
  <i class="sub-icon"
    ><ion-icon name="checkmark-circle-outline"></ion-icon
  ></i>
  <p>${topic}</p>
</div>`
    )
    .join("");

  const html = `<div class="details-background-container">
    <div class="details-box">
      <div class="details-container">
        <div class="topic-title-container">
          <h4>${tiopicCategory}</h4>
          <h3>${cardTopic}</h3>
        </div>
        <div class="rating-box">
          <i>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star"></ion-icon>
            <ion-icon class="star-icon" name="star-outline"></ion-icon
          ></i>
        </div>
        <div class="info-box">
          <p>
            ${topicDescription}
          </p>
        </div>
      </div>
    </div>
    </div>
    <div class="related-topics-container">
    <div class="sub-topics-container">
      <div class="sub-topic first-sub">
        <p>HTML Sub Topics</p>
      </div>
      ${subTopicsHTML}
      
     
      
    </div>
    </div>
    
    <div class="card-container">
    <div class="img-banner">
      <img src="assets/${topicImage}" />
    </div>
    <div class="card-info">
      <div class="author-box">
        <p><b>${cardTopic}</b> by <a href="#">${authorName}</a></p>
      </div>
      <div class="feedback-box">
        <p>Interested about this topic?</p>
        <button class="add-to-fav">
          Add to Favourites
          <i class="fav-icon"><ion-icon name="heart-outline"></ion-icon></i>
        </button>
        <h6>Unlimited Credits</h6>
      </div>
    </div>
    </div>`;
  contentContainer.innerHTML = html;
};

export default renderDetails;
