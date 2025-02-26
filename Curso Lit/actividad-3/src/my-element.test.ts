import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { Counter } from "./my-element"; // Importa los tipos de tus componentes
import { LoginDisplay } from "./my-element";
import { CardList } from "./my-element";

describe("Ejercicio 1: Contador", () => {
  it("debería renderizar el contador con valor inicial 0", async () => {
    const element = await fixture<Counter>(html`<app-counter></app-counter>`);
    const count = element.shadowRoot?.querySelector("p")?.textContent;
    expect(count).to.equal("0");
  });

  it("debería incrementar el contador al hacer clic en el botón +", async () => {
    const element = await fixture<Counter>(html`<app-counter></app-counter>`);
    const incrementButton = element.shadowRoot?.querySelector("button:nth-of-type(2)") as HTMLButtonElement;
    incrementButton.click();
    await element.updateComplete; // Ahora TypeScript reconoce updateComplete
    const count = element.shadowRoot?.querySelector("p")?.textContent;
    expect(count).to.equal("1");
  });

  it("debería decrementar el contador al hacer clic en el botón -", async () => {
    const element = await fixture<Counter>(html`<app-counter></app-counter>`);
    const decrementButton = element.shadowRoot?.querySelector("button:nth-of-type(1)") as HTMLButtonElement;
    decrementButton.click();
    await element.updateComplete; // Ahora TypeScript reconoce updateComplete
    const count = element.shadowRoot?.querySelector("p")?.textContent;
    expect(count).to.equal("-1");
  });
});

describe("Ejercicio 2: Formulario de Login", () => {
  it("debería renderizar el formulario con campos de email y contraseña", async () => {
    const element = await fixture<LoginDisplay>(html`<login-display></login-display>`);
    const emailInput = element.shadowRoot?.querySelector('input[type="email"]');
    const passwordInput = element.shadowRoot?.querySelector('input[type="password"]');
    expect(emailInput).to.exist;
    expect(passwordInput).to.exist;
  });

  it("debería mostrar un error si el email es inválido", async () => {
    const element = await fixture<LoginDisplay>(html`<login-display></login-display>`);
    const emailInput = element.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
    emailInput.value = "invalid-email";
    emailInput.dispatchEvent(new Event("input"));
    await element.updateComplete; // Ahora TypeScript reconoce updateComplete
    const errorMessage = element.shadowRoot?.querySelector(".error")?.textContent;
    expect(errorMessage).to.include("Usuario incorrecto");
  });
});

describe("Ejercicio 3: Lista de Tarjetas", () => {
    it("debería renderizar las tarjetas correctamente", async () => {
      const element = await fixture<CardList>(html`<card-list></card-list>`);
      await element.updateComplete; // Ahora TypeScript reconoce updateComplete
      const cards = element.shadowRoot?.querySelectorAll(".card");
      expect(cards?.length).to.equal(3);
    });
  
    it("debería mostrar un mensaje de carga mientras se cargan las imágenes", async () => {
      const element = await fixture<CardList>(html`<card-list></card-list>`);
      element.isLoading = true; // Usamos el getter público
      await element.updateComplete; // Ahora TypeScript reconoce updateComplete
      const loadingMessage = element.shadowRoot?.querySelector("span")?.textContent;
      expect(loadingMessage).to.include("Cargando información...");
    });
  });