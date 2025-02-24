import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

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
                <p style="margin: 0 10px;"> ${this.contador}</p> 
                <button @click="${this.aumentar}">+</button> 
            </div>
        `;
    }
}