import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// Ejercicio 1: Contador
@customElement("app-counter")
export class Counter extends LitElement {
  @property({ type: Number })
  contador = 0;

  aumentar() {
    this.contador++;
  }

  disminuir() {
    this.contador--;
  }

  render() {
    return html`
      <div style="display: flex; align-items: center; justify-content: center;">
        <button @click="${this.disminuir}">-</button>
        <p style="margin: 0 10px;">${this.contador}</p>
        <button @click="${this.aumentar}">+</button>
      </div>
    `;
  }
}

// Ejercicio 2: Formulario de Login
@customElement("login-display")
export class LoginDisplay extends LitElement {
  @property()
  email: string = "";

  @property()
  password: string = "";

  @state()
  emailError: string = "";

  static styles = css`
    .form-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .error {
      color: red;
      font-size: 0.875em;
      margin-bottom: 16px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  `;

  private EmailChange(event: Event) {
    const ob = event.target as HTMLInputElement;
    this.email = ob.value;
    if (!this.validarEmail(this.email)) {
      this.emailError = "Usuario incorrecto";
    } else {
      this.emailError = "";
    }
  }

  private PasswordChange(event: Event) {
    const ob = event.target as HTMLInputElement;
    this.password = ob.value;
  }

  validarEmail(email: string): boolean {
    const rg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return rg.test(email);
  }

  render() {
    const isFormValid = this.validarEmail(this.email) && this.password.length > 0;
    return html`
      <div class="form-container">
        <form>
          <label for="email">Usuario</label>
          <input
            type="email"
            id="email"
            .value=${this.email}
            @input=${this.EmailChange}
          />
          ${this.emailError ? html`<div class="error">${this.emailError}</div>` : ""}
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            .value=${this.password}
            @input=${this.PasswordChange}
          />
          <button type="submit" ?disabled=${!isFormValid}>Ingresar</button>
        </form>
      </div>
    `;
  }
}

// Ejercicio 3: Lista de Tarjetas
interface CardData {
  title: string;
  imageUrl: string;
  description: string;
}

@customElement("card-list")
export class CardList extends LitElement {
  @state()
  private _isLoading: boolean = false;

  // Getter público para acceder a _isLoading
  get isLoading() {
    return this._isLoading;
  }

  // Setter público para modificar _isLoading
  set isLoading(value: boolean) {
    this._isLoading = value;
  }

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