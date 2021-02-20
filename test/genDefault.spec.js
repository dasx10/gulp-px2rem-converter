const generic = require('../dist/generic');

const units = ['vw','vh','vmin','vmax','rem','em', '%'];
const params = [
    'margin','padding','margin-left','padding-left','margin-right','padding-right','margin-top','padding-top','margin-bottom','padding-bottom',
    'width','height','max-width','max-height','min-width','min-height',
    'top','bottom','left','right'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

units.forEach(unit=>{
    params.forEach(param=>{
        test(`return default ${unit} in ${param}`, () => {
            const prop = getRandomInt(1920);
            expect(generic(`${param}:${prop}${unit};`,16)).toBe(`${param}:${prop}${unit};`);
        })
    })
});