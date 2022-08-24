import person from "./spy";

describe("person", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it("returns a greeting using name", () => {
    const spy = jest.spyOn(person, "greet");
    const greet = person.greet();

    expect(spy).toHaveBeenCalled();
    expect(greet).toBe("Hi stranger, my name is Lucas");

    person.name = "Jon";
    expect(person.greet()).toBe("Hi stranger, my name is Jon");
    expect(spy.mock.calls.length).toBe(2);
  });
});
