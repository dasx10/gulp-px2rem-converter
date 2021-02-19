const {getParams,getRoot} = require('../dist/findRoot');

test('return %', () => {
    getParams(':root{font-size:16px;}');
    expect(getRoot(':root{font-size:16px;}')).toBe(":root{font-size:16px;}");
    getParams('html{font-size:20px;}:root{font-size:16px;}');
    expect(getRoot(':root{font-size:16px;}')).toBe(":root{font-size:16px;}");
    getParams('html{font-size:20px;}');
    expect(getRoot(':root{font-size:16px;}')).toBe("html{font-size:20px;}");
});