const generic = require('../dist/generic');

test('return px', () => {
    expect(generic('padding:16px;',16)).toBe("padding:1rem;");
    expect(generic('padding:16PX;',16)).toBe("padding:1rem;");
    expect(generic('padding:16PX;',32)).toBe("padding:0.5rem;");
    expect(generic('padding:16px;',32)).toBe("padding:0.5rem;");
    expect(generic('padding:32PX;',32)).toBe("padding:1rem;");
    expect(generic('padding:32px;',32)).toBe("padding:1rem;");
    expect(generic('padding:16PX;',8)).toBe("padding:2rem;");
    expect(generic('padding:8PX;',8)).toBe("padding:1rem;");
    expect(generic('padding:8px;',8)).toBe("padding:1rem;");
});