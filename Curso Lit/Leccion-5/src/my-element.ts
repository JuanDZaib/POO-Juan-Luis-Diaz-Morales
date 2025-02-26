import { MyElement } from "./my-element"; 
import { expect } from "@esm-bundle/chai"; 

describe("MyElement", () => {
  let element: MyElement;

  beforeEach(() => {
    element = new MyElement(); 
  });

  it("should return 0 when summing 0 and 0", () => {
    const result = element.sum(0, 0); 
    expect(result).to.equal(0); 
  });

  it("should throw an error when parameters are not numbers", () => {
    expect(() => element.sum(NaN, 0)).to.throw("parametros incorrectos");
    expect(() => element.sum(0, NaN)).to.throw("parametros incorrectos");
    expect(() => element.sum(NaN, NaN)).to.throw("parametros incorrectos");
  });
});

export { MyElement };
