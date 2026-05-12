const fs = require("fs");

test("HTML file should not be empty", () => {
  const content = fs.readFileSync("index.html", "utf8");
  expect(content.length > 0).toBe(true);
});
