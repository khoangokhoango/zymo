import data from "./data.json";

customElements.define("zymo-cards", class ZymoCards extends HTMLElement {
  constructor() {
    super();
    this.data = data ? Object.entries(data) : [];
    this.handleGenerateCardsList();
  }

  handleGenerateCardTemplate(card) {
    return `
      <li class="zymo-cards__item">
        <article class="zymo-card">
          <div class="zymo-card__inner">
            <div class="zymo-card__image">
            <img src="${card.image_url}" alt="${card.title}" />
            </div>
            <div class="zymo-card__text">
              <div class="zymo-card__information">
                <h2 class="zymo-heading--4 zymo-card__heading">${card.title}</h2>
                <p class="zymo-body-text zymo-card__description">${card.description}</p>
              </div>
              <div class="zymo-card__cta-wrapper">
                <a href="${card.url}" class="zymo-button--secondary zymo-card__cta">Learn More</a>
              </div>
            </div>
          </div>
        </article>
      </li>
    `;
  }

  handleGenerateCardsList() {
    const ELM_listItems = this.querySelector('ul');
    this.data.forEach(([_, value]) => {
      ELM_listItems.innerHTML += this.handleGenerateCardTemplate(value);
    })
  }
})