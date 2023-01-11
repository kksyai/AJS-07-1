import Validator from "../validator";

test('validate user name', () => {
    const user = new Validator('Ivan_12-345we');
    const expected = 'Ivan_12-345we'
    expect(user.name).toMatch(expected);
  });