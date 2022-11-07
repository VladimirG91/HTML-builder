const path = require('path');
const fs = require('fs/promises');

async function readFiles() {
  const files = await fs.readdir(path.join(__dirname, 'secret-folder'), {
    withFileTypes: true,
  });
  for (let file of files) {
    if (file.isFile()) {
      const extFile = await path
        .extname(path.join(__dirname, file.name))
        .slice(1);
      const statFile = await fs.lstat(
        path.join(__dirname, 'secret-folder', file.name)
      );
      console.log(
        path.parse(file.name).name +
          ' - ' +
          extFile +
          ' - ' +
          statFile.size / 1024 +
          'kb'
      );
    }
  }
}

readFiles();
