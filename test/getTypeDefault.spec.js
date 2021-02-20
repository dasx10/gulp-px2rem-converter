const getType = require('../dist/getType');

for(let i = 0; i < 100; i++){
    test(`return px in ${i}`, () => {
        expect(getType(`${i}`)).toBe('px');
    });
}
