//create desc.txt & title.txt
fs.closeSync(fs.openSync(`${newFolderName}/desc.txt`, "w"));
fs.closeSync(fs.openSync(`${newFolderName}/title.txt`, "w"));
//create images fldr
fs.mkdirSync(`${newFolderName}/images/`, (err) => {
  if (err) console.err(err);
});



// const newFile = createLabel("Address30251", "1916111111018", 'SP-104');
// newFile.forEach((line, idx) => console.log(idx, line))

/*
    <LabelName>Address30251</LabelName>
              <DataString>1916111111018</DataString>
                <Text>GC-008</Text>
*/
