const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'packages', 'ui', 'src');

const filesToFix = ['Button.tsx', 'Card.tsx', 'StatusTag.tsx', 'Modal.tsx'];

filesToFix.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace("import './ui.css';\n", "");
    content = content.replace("import './ui.css';\r\n", "");
    content = content.replace("import './ui.css';", "");
    fs.writeFileSync(filePath, content);
  }
});
console.log('Fixed CSS imports in UI package.');
