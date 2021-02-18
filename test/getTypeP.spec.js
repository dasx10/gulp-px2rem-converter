const getType = require('../getType');

test('return %', () => {
    expect(getType('0%')).toBe("%");
    expect(getType('10%')).toBe("%");
    expect(getType('20%')).toBe("%");
    expect(getType('30%')).toBe("%");
    expect(getType('40%')).toBe("%");
});