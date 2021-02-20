const getType = require('../dist/getType');
const units = ['px','Px','PX'];

units.forEach(unit=>{
    for(let i = 0; i < 1920; i++){
        test(`return px into ${i}${unit}`, () => {
            expect(getType(`${i}${unit}`)).toBe("px");
        });
    }
})