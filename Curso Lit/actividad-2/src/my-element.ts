import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./login-display.ts";

@customElement("my-element")
class MyElement extends LitElement {
  render() {
    return html`
      <login-display></login-display>
    `;
  }
}