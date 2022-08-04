import { add } from "../../src/utils/sum";

it("test add function", () => {
  expect(add(10, 15)).toEqual(25);
});
