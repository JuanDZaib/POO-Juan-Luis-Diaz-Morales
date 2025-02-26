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
    .error {
      color: red;
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

  @state()
  private _isLoading: boolean = false;

  @state()
  private _error: string | null = null;

  async connectedCallback() {
    super.connectedCallback();
    await this.loadImages();
  }

  async loadImages() {
    this._isLoading = true;
    this._error = null;

    try {
      // Simulamos la carga de imágenes con un retraso de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Aquí podrías hacer una solicitud real a una API para cargar las imágenes
    } catch (error) {
      this._error = (error as Error).message;
    } finally {
      this._isLoading = false;
    }
  }

  render() {
    return html`
      ${this._isLoading
        ? html`<span>Cargando información...</span>`
        : this._error
        ? html`<span class="error">Error: ${this._error}</span>`
        : this._cards.length === 0
        ? html`<span>Ingresa un nombre de una imagen</span>`
        : this._cards.map(
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