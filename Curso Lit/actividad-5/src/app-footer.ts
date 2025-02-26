import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-footer")
class AppFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
      width: 100%;
    }
    footer p {
      margin: 0;
      font-size: 0.875rem;
    }
    footer a {
      color: #007bff;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <footer>
        <p>
          © 2025 Juan Díaz. Todos los derechos reservados. Para más información,
          <a href="doncheto:email@example.com">contáctanos</a>.
        </p>
      </footer>
    `;
  }
}