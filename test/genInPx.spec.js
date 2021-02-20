const generic = require('../dist/generic');

const units = ['px','Px','PX'];
const coficients = [8,10,12,16,20,22,30,32,40,42];

coficients.forEach(cof=>{
    units.forEach(unit=>{
        test('return rem is equal params and cof', () => {
            expect(generic(`padding:${cof}${unit};`, cof)).toBe("padding:1rem;");
        });

        test('return rem is biger params and cof', () => {
            expect(generic(`padding:${cof * 2}${unit};`, cof)).toBe("padding:2rem;");
            expect(generic(`padding:${cof * 4}${unit};`, cof)).toBe("padding:4rem;");
        });

        test('return rem is smaller params and cof', () => {
            expect(generic(`padding:${cof / 2}${unit};`, cof)).toBe("padding:0.5rem;");
        });
    })
})