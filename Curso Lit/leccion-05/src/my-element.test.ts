import { expect, fixture } from '@open-wc/testing';
import { MyElement } from "./my-element";
import { html } from "lit";
import { fetchPackageInfo } from './impl-fetch';

export const msgError: string = "[081]-Parameters incorrectos";

describe("Set de pruebas unitarias del componente MyElement", () => {
    it("should be true", () => {
        expect(true).eqls(true);
    });

    it("should be instance", async () => {
        let element: MyElement;
        element = await fixture(html`<app-element></app-element>`);
        expect(element).to.be.instanceOf(MyElement);
    });

    it("should add two numbers", async () => {
        let element: MyElement;
        element = await fixture(html`<app-element></app-element>`);

        expect(element.sum(18, 5)).eqls(15);
    });

    it("should throw an error", async () => {
        let element: MyElement;
        element = await fixture(html`<app-element></app-element>`);
        let num2: any = "<inco";
        expect(() => element.sum(18, num2)).to.throw(msgError);
    });

    it("should call fetch",async() =>{
        let fecthMock=Sinon.stub(globalThis,"fetch");
        let abortController =new AbortController();
        
        const mockResponse={name: "mock-package", version: "1.0.1"};
        fetchMock.resolves(
            new Response(JSON.stringify(mockResponse),{status:200})
        );
        const result=fetchPackageInfo("mock-")
    })
});