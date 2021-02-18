const generic = require('../generic');

test('return px', () => {
    expect(generic('padding:16px;',16)).toBe("padding:1rem;");
});