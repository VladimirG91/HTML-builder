const path = require('path');
const fs = require('fs/promises');

async function createBundle() {
  const files = await fs.readdir(path.join(__dirname, 'styles'), {
    withFileTypes: true,
  });
  let arr = [];
  for (let file of files) {
    if (file.isFile()) {
      const ext = file.name.match(/\.\w{3}$/)[0].slice(1);
      if (ext == 'css') {
        const content = await fs.readFile(
          path.join(__dirname, 'styles', file.name),
          { encoding: 'utf8' }
        );
        arr.push(content);
      }
    }
  }
  
  fs.writeFile(
    path.join(__dirname, 'project-dist', 'bundle.css'),
    arr.join('\n')
  );
}

createBundle();
