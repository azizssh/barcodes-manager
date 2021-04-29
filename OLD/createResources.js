//create desc.txt & title.txt
fs.closeSync(fs.openSync(`${newFolderName}/desc.txt`, "w"));
fs.closeSync(fs.openSync(`${newFolderName}/title.txt`, "w"));
//create images fldr
fs.mkdirSync(`${newFolderName}/images/`, (err) => {
  if (err) console.err(err);
});
