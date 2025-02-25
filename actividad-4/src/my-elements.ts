import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface CardData {
  title: string;
  imageUrl: string;
  description: string;
}

@customElement('card-list')
export class CardList extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      max-width: 300px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .card img {
      max-width: 100%;
      border-radius: 8px;
    }
    .card h2 {
      margin: 0 0 8px;
    }
    .card p {
      margin: 0;
    }
  `;


  @state()
  private _cards: CardData[] = [
    {
      title: 'Imagen 1',
      imageUrl: 'https://picsum.photos/300',
      description: 'We are the seekers of the knowledge',
    },
    {
      title: 'Imagen 2',
      imageUrl: 'https://picsum.photos/323',
      description: 'The arrogant Red Angel',
    },
    {
      title: 'Imagen 3',
      imageUrl: 'https://picsum.photos/321',
      description: 'Ten thousand years...Demand Russ return Fighting in the solitude And he still waiting...',
    },
  ];

  render() {
    return html`
      ${this._cards.map(
        (card) => html`
          <div class="card">
            <h2>${card.title}</h2>
            <img src="${card.imageUrl}" alt="${card.title}" />
            <p>${card.description}</p>
          </div>
        `
      )}
    `;
  }
}