import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

interface CardData {
  title: string;
  imageUrl: string;
  description: string;
}

@customElement("app-section")
class AppSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      background-color: #f8f9fa;
      min-height: calc(100vh - 150px); /* Ajusta el alto para ocupar el espacio restante */
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .card {
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      width: 300px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
    .card img {
      width: 100%;
      border-radius: 8px;
    }
    .card h2 {
      margin: 1rem 0 0.5rem;
      font-size: 1.25rem;
      color: #333;
    }
    .card p {
      margin: 0;
      color: #666;
    }
    .error {
      color: red;
    }
  `;

  @state()
  private _cards: CardData[] = [
    {
      title: "Imagen 1",
      imageUrl: "https://picsum.photos/300",
      description: "We are the seekers of the knowledge",
    },
    {
      title: "Imagen 2",
      imageUrl: "https://picsum.photos/323",
      description: "The arrogant Red Angel",
    },
    {
      title: "Imagen 3",
      imageUrl: "https://picsum.photos/321",
      description: "Ten thousand years...Demand Russ return Fighting in the solitude And he still waiting...",
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
    } catch (error) {
      this._error = (error as Error).message;
    } finally {
      this._isLoading = false;
    }
  }

  render() {
    return html`
      <section>
        ${this._isLoading
          ? html`<span>Cargando información...</span>`
          : this._error
          ? html`<span class="error">Error: ${this._error}</span>`
          : this._cards.length === 0
          ? html`<span>Ingresa un nombre de una imagen</span>`
          : html`
              <div class="card-container">
                ${this._cards.map(
                  (card) => html`
                    <div class="card">
                      <img src="${card.imageUrl}" alt="${card.title}" />
                      <h2>${card.title}</h2>
                      <p>${card.description}</p>
                    </div>
                  `
                )}
              </div>
            `}
      </section>
    `;
  }
}