import numRomanos from "./romanos";

describe("Numero romano", () => {
  it("deberia devolver el primer numero romano", () => {
    expect(numRomanos(1)).toEqual("I");
  });
  
  it("deberia devolver el numero romano para 5", () => {
    expect(numRomanos(5)).toEqual("V");
  });

  it("deberia devolver el numero romano para 9", () => {
    expect(numRomanos(9)).toEqual("IX");
  });

  it("deberia devolver el numero romano para 10", () => {
    expect(numRomanos(10)).toEqual("X");
  });

  it("deberia devolver el numero romano para 50", () => {
    expect(numRomanos(50)).toEqual("L");
  });

  it("deberia devolver el numero romano para 90", () => {
    expect(numRomanos(90)).toEqual("XC");
  });

  it("deberia devolver el numero romano para 10", () => {
    expect(numRomanos(100)).toEqual("C");
  });


});