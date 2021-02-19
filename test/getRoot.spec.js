const {getParams,getRoot} = require('../dist/findRoot');

test('return root', () => {
    getParams(':root{font-size:16px;}');
    expect(getRoot(':root{font-size:16px;}')).toBe(":root{font-size:16px;}");
});

test('return root ecect html', () => {
    getParams('html{font-size:20px;}:root{font-size:16px;}');
    expect(getRoot('html{font-size:20px;}:root{font-size:16px;}')).toBe(":root{font-size:16px;}");
});

test('return root ecect emty html', () => {
    getParams('html{}:root{font-size:16px;}');
    expect(getRoot('html{}:root{font-size:16px;}')).toBe(":root{font-size:16px;}");
});

test('return html', () => {
    getParams('html{font-size:20px;}');
    expect(getRoot(':root{font-size:16px;}html{font-size:20px;}')).toBe("html{font-size:20px;}");
});

test('return html empty root', () => {
    getParams(':root{}html{font-size:20px;}');
    expect(getRoot(':root{}html{font-size:20px;}')).toBe("html{font-size:20px;}");
});

test('return empty all empty', () => {
    getParams(':root{}html{}');
    expect(getRoot(':root{}html{}')).toBe("");
});

test('return empty all fz empty', () => {
    getParams(':root{margin:20px;}html{padding:10px;}');
    expect(getRoot(':root{margin:20px;}html{padding:10px;}')).toBe("");
});

test('return empty root fz empty html empty', () => {
    getParams(':root{margin:20px;}html{}');
    expect(getRoot(':root{margin:20px;}html{}')).toBe("");
});

test('return empty html fz empty root empty', () => {
    getParams(':root{}html{margin:20px;}');
    expect(getRoot(':root{}html{margin:20px;}')).toBe("");
});

test('return emty empty html', () => {
    getParams('html{}');
    expect(getRoot('html{}')).toBe("");
});

test('return emty empty fz in html', () => {
    getParams('html{width:20px}');
    expect(getRoot('html{width:20px;}')).toBe("");
});

test('return emty empty fz in root', () => {
    getParams(':root{width:20px}');
    expect(getRoot(':root{width:20px;}')).toBe("");
});

test('return emty empty root', () => {
    getParams(':root{}');
    expect(getRoot(':root{}')).toBe("");
});