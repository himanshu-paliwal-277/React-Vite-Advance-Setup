# Frontend Deploy Guide 

### Installation & Run Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

📂 After build, the output folder is `dist/`.

### Environment Variables

Create a `.env` file in the frontend root directory with the following variables (example):

```env
VITE_API_BASE_URL=http://localhost:4000
```

### ⚙️ Vite Config (allowedHosts setup)

Add the following in your `vite.config.js` file:

```js
export default defineConfig({
  server: {
    // 👇 Add your allowed host URLs here
    allowedHosts: ["localhost", "127.0.0.1", "example.com"],
  },
});
```

---
