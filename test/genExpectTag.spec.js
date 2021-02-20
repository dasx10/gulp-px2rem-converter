const generic = require('../dist/generic');
const params = [
    'margin','padding','margin-left','padding-left','margin-right','padding-right','margin-top','padding-top','margin-bottom','padding-bottom',
    'width','height','max-width','max-height','min-width','min-height',
    'top','bottom','left','right'
];

params.forEach(param => {
    test('tag test',() => {
        expect(generic(`tag-p12px{${param}:2em;}`,16)).toBe(`tag-p12px{${param}:2em;}`);
    });

    test('class test',() => {
        expect(generic(`.class12px{${param}:2em;}`,16)).toBe(`.class12px{${param}:2em;}`);
    });
    
    test('id test',() => {
        expect(generic(`#class12px{${param}:2em;}`,16)).toBe(`#class12px{${param}:2em;}`);
    });

    test('data target test',() => {
        expect(generic(`[data-${params}="16px"]{${param}:2em;}`,16)).toBe(`[data-${params}="16px"]{${param}:2em;}`);
    });
})