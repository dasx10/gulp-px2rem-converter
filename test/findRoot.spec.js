const {getParams} = require('../findRoot');

test('return %', () => {
    expect(getParams(':root{font-size:16px;}')).toBe("16px");
    expect(getParams(':root{font-size:100%;}')).toBe("100%");
});