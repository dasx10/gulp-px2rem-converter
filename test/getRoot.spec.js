const {getParams,getRoot} = require('../dist/findRoot');

const fz = 'font-size:16px;'
const root = ':root{}'
const rootZ = `:root{${fz}}`
const html = 'html{}'
const htmlZ = `html{${fz}}`

test('return root', () => {
    getParams(rootZ);
    expect(getRoot(rootZ)).toBe(rootZ);
});

test('return root ecect html', () => {
    getParams(htmlZ+rootZ);
    expect(getRoot(htmlZ+rootZ)).toBe(rootZ);
});

test('return root ecect emty html', () => {
    getParams(html+rootZ);
    expect(getRoot(html+rootZ)).toBe(rootZ);
});

test('return html', () => {
    getParams(htmlZ);
    expect(getRoot(htmlZ)).toBe(htmlZ);
});

test('return html empty root', () => {
    getParams(root+htmlZ);
    expect(getRoot(root+htmlZ)).toBe(htmlZ);
});

test('return empty all empty', () => {
    getParams(root+html);
    expect(getRoot(root+html)).toBe("");
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