const {getParams} = require('../dist/findRoot');

test('return root size', () => {
    expect(getParams(':root{font-size:16px;}')).toBe("16px");
    expect(getParams(':root{font-size:100%;}')).toBe("100%");
});

test('teturn html size',()=>{
    expect(getParams('html{font-size:16px;}')).toBe("16px");
    expect(getParams('html{font-size:100%;}')).toBe("100%");
})

test('teturn html size empty root',()=>{
    expect(getParams(':root{}html{font-size:100%;}')).toBe("100%");
    expect(getParams(':root{}html{font-size:16px;}')).toBe("16px");
    expect(getParams(':root{width:100px;}html{font-size:100%;}')).toBe("100%");
    expect(getParams(':root{width:100px;}html{font-size:20px;}')).toBe("20px");
})

test('return 16px', () => {
    expect(getParams(':root{}')).toBe("16px");
});

test('all emty',()=>{
    expect(getParams(':root{}html{}')).toBe("16px");
});

test('emty root',()=>{
    expect(getParams('')).toBe("16px");
});