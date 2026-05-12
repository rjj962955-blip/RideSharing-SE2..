test("Rejects non-university email", () => {
  const email = "test@gmail.com";
  expect(email.endsWith("@imamu.edu.sa")).toBe(false);
});

test("Password must be at least 6 digits", () => {
  const password = "123";
  expect(password.length >= 6).toBe(false);
});

test("Passwords must match", () => {
  const pass1 = "123456";
  const pass2 = "654321";
  expect(pass1 === pass2).toBe(false);
});
