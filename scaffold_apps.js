const fs = require('fs');
const path = require('path');

const apps = [
  { name: 'customer', port: 3001, title: 'LaundryOS Customer', desc: 'Welcome to the cleanest laundry experience.' },
  { name: 'outlet', port: 3002, title: 'LaundryOS Outlet', desc: 'Outlet Dashboard for staff.' },
  { name: 'admin', port: 3003, title: 'LaundryOS Admin', desc: 'Admin Panel for oversight.' }
];

apps.forEach(app => {
  const dir = path.join(__dirname, 'apps', app.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.mkdirSync(path.join(dir, 'src'), { recursive: true });

  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({
    name: `@laundryos/${app.name}`,
    private: true,
    version: "1.0.0",
    type: "module",
    scripts: {
      "dev": "vite",
      "build": "tsc && vite build",
      "lint": "eslint src --ext ts,tsx",
      "preview": "vite preview"
    },
    dependencies: {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "@laundryos/ui": "workspace:*",
      "@laundryos/types": "workspace:*"
    },
    devDependencies: {
      "@types/react": "^18.2.66",
      "@types/react-dom": "^18.2.22",
      "@vitejs/plugin-react": "^4.2.1",
      "typescript": "^5.2.2",
      "vite": "^5.2.0"
    }
  }, null, 2));

  fs.writeFileSync(path.join(dir, 'vite.config.ts'), `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: ${app.port} }
})`);

  fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${app.title}</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f3f4f6;">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`);

  fs.writeFileSync(path.join(dir, 'tsconfig.json'), JSON.stringify({
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }, null, 2));

  fs.writeFileSync(path.join(dir, 'tsconfig.node.json'), JSON.stringify({
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true,
      "strict": true
    },
    "include": ["vite.config.ts"]
  }, null, 2));

  fs.writeFileSync(path.join(dir, 'src', 'main.tsx'), `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`);

  fs.writeFileSync(path.join(dir, 'src', 'App.tsx'), `import React from 'react'
import { Button, Card } from '@laundryos/ui'
import '@laundryos/ui/src/ui.css'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '2rem', fontFamily: 'system-ui' }}>
      <Card>
        <h1 style={{ color: '#111827', margin: '0 0 1rem 0' }}>${app.title}</h1>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>${app.desc}</p>
        <Button onClick={() => alert('Action clicked')}>Enter App</Button>
      </Card>
    </div>
  )
}

export default App`);

});

console.log('Successfully scaffolded the apps!');
