const generic = require('../dist/generic');

test('return rem', () => {
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

test('return default', () => {
    expect(generic('padding:10vw;',16)).toBe("padding:10vw;");
    expect(generic('padding:10vh;',16)).toBe("padding:10vh;");
    expect(generic('padding:10%;',32)).toBe("padding:10%;");
    expect(generic('padding:2rem;',32)).toBe("padding:2rem;");
    expect(generic('padding:2em;',32)).toBe("padding:2em;");
    expect(generic('margin:2em;',32)).toBe("margin:2em;");
});

test('class test',()=>{
    expect(generic('.class12px{margin:2em;}',16)).toBe(".class12px{margin:2em;}");
});

test('id test',()=>{
    expect(generic('#class12px{margin:2em;}',16)).toBe("#class12px{margin:2em;}");
});