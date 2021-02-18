const generic = require('../generic');

test('return px', () => {
    expect(generic('@media(max-width:100rem){}',16).replace(/rem+[ \)|\)|\)\n]+{/g,'em){')).toBe("@media(max-width:100em){}");
});