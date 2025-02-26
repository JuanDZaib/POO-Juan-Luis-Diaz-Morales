import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-form")
export class LoginForm extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh; /* Ocupa toda la altura de la pantalla */
      background-color: #f8f9fa;
    }
    form {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }
    label {
      font-weight: bold;
      color: #333;
      display: block;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    input.error {
      border-color: #ff4757;
    }
    button {
      width: 100%;
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.75rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    .error {
      color: #ff4757;
      font-size: 0.875rem;
    }
  `;

  @property({ type: String })
  email = "";

  @property({ type: String })
  password = "";

  @property({ type: Boolean })
  validEmail = false;

  @property({ type: Boolean })
  isLoggedIn = false;

  connectedCallback() {
    super.connectedCallback();
    this.isLoggedIn = !!localStorage.getItem("authToken");
  }

  emailChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
    this.validEmail = this.validateEmail();
  }

  passwordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  validateEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.email);
  }

  login() {
    if (this.validEmail && this.password) {
      localStorage.setItem("authToken", "valid-token");
      this.isLoggedIn = true;
      this.requestUpdate();
      this.redirectToAppPage();
    } else {
      alert("Credenciales incorrectas");
    }
  }

  redirectToAppPage() {
    window.location.href = "/app-page";
  }

  logout() {
    localStorage.removeItem("authToken");
    this.isLoggedIn = false;
    this.requestUpdate();
    window.location.href = "/";
  }

  render() {
    return html`
      ${this.isLoggedIn
        ? html`<app-page></app-page>`
        : html`
            <form @submit="${(e: Event) => e.preventDefault()}">
              <label>
                Username:
                <input
                  type="email"
                  .value="${this.email}"
                  @input="${this.emailChange}"
                  class="${this.validEmail ? "" : "error"}"
                />
                ${this.validEmail ? "" : html`<span class="error">Ingrese un correo válido.</span>`}
              </label>
              <label>
                Password:
                <input
                  type="password"
                  .value="${this.password}"
                  @input="${this.passwordChange}"
                />
              </label>
              <button @click="${this.login}" ?disabled="${!this.validEmail || !this.password}">
                Login
              </button>
            </form>
          `}
    `;
  }
}