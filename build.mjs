import {rm,mkdir,copyFile,cp} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
for(const file of ['app.js','model.js','seed.js','report.js'])execFileSync(process.execPath,['--check',file]);
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const f of ['index.html','app.js','model.js','seed.js','report.js','styles.css'])await copyFile(f,`dist/${f}`);
for(const d of ['vendor','data'])await cp(d,`dist/${d}`,{recursive:true});console.log('Built static laboratory in dist.');
