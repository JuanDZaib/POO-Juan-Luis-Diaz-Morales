import { LitElement, html, css } from "lit"; 
import { customElement, property, state } from "lit/decorators.js"; 
import { validarEmail } from "././login-utils.ts"; 

@customElement("login-display")
class LoginDisplay extends LitElement {
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
    if (!validarEmail(this.email)) {
      this.emailError = "Usuario incorrecto"; 
    } else {
      this.emailError = ""; 
    }
  }
  private PasswordChange(event: Event) {
    const ob = event.target as HTMLInputElement; 
    this.password = ob.value; 
  }

  render() {
    const isFormValid = validarEmail(this.email) && this.password.length > 0;
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