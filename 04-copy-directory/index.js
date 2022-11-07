const path = require('path');
const fs = require('fs/promises');

async function copyDirectory() {
  const folderTwin = await fs.mkdir(path.join(__dirname, 'files-copy'), {
    recursive: true,
  });
  const filesTwin = await fs.readdir(path.join(__dirname, 'files-copy'), {
    withFileTypes: true,
  });
  for (let fileTwin of filesTwin) {
    await fs.unlink(path.join(__dirname, 'files-copy', filesTwin.name));
  }
  const files = await fs.readdir(path.join(__dirname, 'files'), {
    withFileTypes: true,
  });

  for (let file of files) {
    if (file.isFile()) {
      await fs.copyFile(
        path.join(__dirname, 'files', file.name),
        path.join(__dirname, 'files-copy', file.name)
      );
    }
  }
}

copyDirectory();
