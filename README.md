<div align="center">

#  @sushensanthush/vibe-check

<p align="center">
  <a href="https://www.npmjs.com/package/@sushensanthush/vibe-check">
    <img src="https://img.shields.io/badge/Version-1.0.0-CB3837.svg" alt="Version">
  </a>
  <a href="https://github.com/sushensanthush/vibe-check">
    <img src="https://img.shields.io/badge/Language-TypeScript-blue.svg" alt="Language">
  </a>
  <a href="https://bundlephobia.com/package/@sushensanthush/vibe-check">
    <img src="https://img.shields.io/badge/Size-Minimal-44CC11.svg" alt="Build Size">
  </a>
  <a href="https://github.com/sushensanthush/vibe-check/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  </a>
</p>
**A high-performance, zero-dependency network latency monitor for modern web apps.**

[Explore Docs](https://github.com/sushensanthush/vibe-check#readme) · [Report Bug](https://github.com/sushensanthush/vibe-check/issues) · [Request Feature](https://github.com/sushensanthush/vibe-check/issues)

</div>

---

###  Built With

<p align="left">
  <img src="https://img.shields.io/badge/Platform-Web-brightgreen.svg" alt="Platform">
  <img src="https://img.shields.io/badge/Environment-NodeJS-6DA55F.svg" alt="Environment">
  <img src="https://img.shields.io/badge/Architecture-Modular-blue.svg" alt="Architecture">
  <img src="https://img.shields.io/badge/Package_Manager-NPM-red.svg" alt="Package Manager">
</p>
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
