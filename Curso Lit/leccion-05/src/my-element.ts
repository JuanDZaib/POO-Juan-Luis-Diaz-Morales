import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { msgError } from "./my-element.test";

@customElement("app-element")
export class MyElement extends LitElement {
    render() {
        return html`<h1>Mola, Mundo!</h1>`;
    }

    static styles = css``;

    sum(num1: number, num2: number) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error(msgError);
        }
        let result = num1 + num2;
        return result;
    }

    declare global {
        interface HTMLElementTagNameMap {
            "my-element": MyElement;
        }
    }
}