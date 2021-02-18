const getType = require('../getType');

test('return px', () => {
    expect(getType('0px')).toBe("px");
    expect(getType('10px')).toBe("px");
    expect(getType('20px')).toBe("px");
    expect(getType('30px')).toBe("px");
    expect(getType('40px')).toBe("px");
});

test('return px into PX', () => {
    expect(getType('0PX')).toBe("px");
    expect(getType('10PX')).toBe("px");
    expect(getType('20PX')).toBe("px");
    expect(getType('30PX')).toBe("px");
    expect(getType('40PX')).toBe("px");
});