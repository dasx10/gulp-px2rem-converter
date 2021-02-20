const generic = require('../dist/generic');
const remToEm = /rem+[ \)|\)|\)\n]+{/ig;
const em = 'em){';

const rems = ['rem','Rem','REM'];
const units = ['vw','vh','%','vmax','vmin'];
const coficients = [8,10,12,16,20,22,30,32,40,42];
const mediaParams = ['min-width','max-width','min-height','max-height','width','height'];

for(let i = 20; i < 120; i+=10){
    mediaParams.forEach(mediaparam=>{
        coficients.forEach(cof=>{
            rems.forEach(rem=>{
                test(`replace em into ${i}${rem} coficient ${cof} in ${mediaparam}`,()=>{
                    expect(generic(`@media(${mediaparam}:${i}${rem}){}`, cof).replace(remToEm,em)).toBe(`@media(${mediaparam}:${i}em){}`);
                });
            });

            test(`return ${i}em is ${i}em coficient ${cof} in ${mediaparam}`,()=>{
                expect(generic(`@media(${mediaparam}:${i}em){}`,cof).replace(remToEm,em)).toBe(`@media(${mediaparam}:${i}em){}`);
            });

            test(`return ${i}em is ${i}em coficient ${cof} if many media in ${mediaparam}`,()=>{
                const media = `@media(${mediaparam}:${i}em){}@media(min-width:${i*2}em){}@media(max-width:${i*3}em){}`;
                expect(generic(media,cof).replace(remToEm,em)).toBe(media);
            });

            units.forEach(unit=>{
                test(`return default ${i}${unit} coficient ${cof} in ${mediaparam}`,()=>{
                    expect(generic(`@media(${mediaparam}:${i}${unit}){}`,cof).replace(remToEm, em)).toBe(`@media(${mediaparam}:${i}${unit}){}`);
                });
            });
        });
    });
}