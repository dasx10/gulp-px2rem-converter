const getType = require('../dist/getType');

for(let i = 0; i < 100; i++){
    test(`return % in ${i}%`, () => {
        expect(getType(`${i}%`)).toBe('%');
    });
}
