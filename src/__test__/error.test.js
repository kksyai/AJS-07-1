import Validator from "../validator";

test('validate user name', () => {
    expect(() => new Validator('1Ivan_12-345we')).toThrow(Error('Name not allowed'));
  });