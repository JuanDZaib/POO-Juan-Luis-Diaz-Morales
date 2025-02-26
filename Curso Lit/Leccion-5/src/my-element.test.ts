import Sinon from "sinon";
import { fetchPackageInfo } from "./impl-fetch.ts"; 
import { expect } from "@esm-bundle/chai";

describe("fetchPackageInfo", () => {
  let fetchMock: Sinon.SinonStub;

  beforeEach(() => {
    
    fetchMock = Sinon.stub(globalThis, "fetch");
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("should call fetch and return package info", async () => {
    const mockResponse = { name: "mock-package", version: "1.0.1" };
    fetchMock.resolves(new Response(JSON.stringify(mockResponse), { status: 200 }));
    const result = await fetchPackageInfo("mock-package");
    expect(result).to.deep.equal(mockResponse); 
    Sinon.assert.calledOnce(fetchMock); 
    });
})
