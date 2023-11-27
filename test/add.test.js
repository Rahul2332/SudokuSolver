import {add} from "../src/add.js";
import { expect } from "chai";

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should throw an error when given non-numeric input', () => {
    expect(() => add('a', 3)).to.throw('Invalid input');
  });
});
