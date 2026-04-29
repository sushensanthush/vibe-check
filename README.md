<div align="center">

#  @sushensanthush/vibe-check

[![NPM Version](https://img.shields.io/npm/v/@sushensanthush/vibe-check?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/@sushensanthush/vibe-check)
[![Build Size](https://img.shields.io/bundlephobia/min/@sushensanthush/vibe-check?style=for-the-badge&color=44CC11&logo=webassembly)](https://bundlephobia.com/package/@sushensanthush/vibe-check)
[![License](https://img.shields.io/github/license/sushensanthush/vibe-check?style=for-the-badge&color=007EC6&logo=github)](LICENSE)
[![Stars](https://img.shields.io/github/stars/sushensanthush/vibe-check?style=for-the-badge&color=FFD700&logo=githubstars)](https://github.com/sushensanthush/vibe-check/stargazers)

**A high-performance, zero-dependency network latency monitor for modern web apps.**

[Explore Docs](https://github.com/sushensanthush/vibe-check#readme) · [Report Bug](https://github.com/sushensanthush/vibe-check/issues) · [Request Feature](https://github.com/sushensanthush/vibe-check/issues)

</div>

---

###  Built With

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat-square&logo=npm&logoColor=white)

##  Features

- **Real-time Monitoring**: Tracks round-trip time (latency) in milliseconds accurately.
- **Smart Status Categorization**: 
  - 🟢 `excellent`: Fast and reliable connection.
  - 🟡 `stuttering`: High latency or jitter is perfect for triggering "Slow Connection" UI warnings.
  - 🔴 `offline`: No connection detected or server unreachable.
- **Zero Dependencies**: Keeps your production bundle size ultra-small.
- **Modern Stack**: Fully typed with TypeScript for the best developer experience.

## Installation
```bash
npm install @sushensanthush/vibe-check
```
  
## Usage
```JavaScript
import { VibeCheck } from '@sushensanthush/vibe-check';

const checker = new VibeCheck();
checker.start((vibe) => {
  console.log(vibe.status); // 'excellent', 'stuttering', or 'offline'
});
```

## 2. Publish to NPM
This is the big moment. Open your terminal in the **`vibe-check`** folder (not the test folder) and run:

1.  **Build one last time:**
    ```powershell
    npm run build
    ```
2.  **Log in to your account:**
    ```powershell
    npm login
    ```
    *(It will open a browser window for you to sign in to npmjs.com)*
3.  **Ship it:**
    ```powershell
    npm publish --access public
    ```

---

## 3. Clean Up Your Workspace
Once it is published, you don't need the local "links" anymore. You can clean up your machine:

```powershell
# In vibe-test
npm unlink @sushensanthush/vibe-check
cd ..
rm -r vibe-test

# In vibe-check
npm unlink
