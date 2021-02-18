const {getParams,getRoot} = require('../findRoot');

test('return %', () => {
    getParams(':root{font-size:16px;}');
    expect(getRoot(':root{font-size:16px;}')[0]).toBe(":root{font-size:16px;}");
    getParams('html{font-size:20px;}:root{font-size:16px;}');
    expect(getRoot(':root{font-size:16px;}')[0]).toBe(":root{font-size:16px;}");
    getParams('html{font-size:20px;}');
    expect(getRoot(':root{font-size:16px;}')[0]).toBe("html{font-size:20px;}");
});