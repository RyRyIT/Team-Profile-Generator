const Employee = require("../lib/employee");
// Starts the sequencee
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
test("Can test name via constructor arguments", () => {
  const name = "Merna";
  const e = new Employee(name);
  expect(e.name).toBe("object");
});
test("Can test id via constructor arguments", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe("testValue");
});
test("Can test email via constructor arguments", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe("object");
});
test("Can get name via getName()", () => {
  const testValue = "Merna";
  const e = new Employee(testValue);
  expect(e.getname()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe("object");
});
test("Can get id via getId()", () => {
  const testValue = "100";
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe("object");
});
test('getRole() should return "Employee"', () => {
  const testValue = "Empployee";
  const e = new Employee("Merna", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
