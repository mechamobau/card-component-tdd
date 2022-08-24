const person = {
  name: "Lucas",
  greet: function (name) {
    return `Hi ${name ?? "stranger"}, my name is ${this.name}`;
  },
};

export default person;
