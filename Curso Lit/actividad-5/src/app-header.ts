import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-header")
class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #007bff;
      color: white;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    button {
      background-color: #ff4757;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
    button:hover {
      background-color: #ff6b81;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "/"; // Redirige al login si no está autenticado
    }
  }

  logout() {
    localStorage.removeItem("authToken");
    window.location.href = "/"; // Redirige a la página de login
  }

  render() {
    return html`
      <header>
        <h1>Especies de Animales</h1>
        <button @click="${this.logout}">Cerrar sesión</button>
      </header>
    `;
  }
}