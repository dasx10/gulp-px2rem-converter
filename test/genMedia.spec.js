const generic = require('../generic');

test('return px', () => {
    expect(generic('@media(max-width:100rem){}',16).replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')).toBe("@media(max-width:100em){}");
    expect(generic('@media(max-width:100REM){}',16).replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')).toBe("@media(max-width:100em){}");
    expect(generic('@media(max-width:100REM){}',32).replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')).toBe("@media(max-width:100em){}");
    expect(generic('@media(max-width:100rem){}',32).replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')).toBe("@media(max-width:100em){}");
    expect(generic('@media(max-width:100em){}',32).replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')).toBe("@media(max-width:100em){}");
    expect(generic('@media(max-width:100vw){}',32).replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')).toBe("@media(max-width:100vw){}");
});