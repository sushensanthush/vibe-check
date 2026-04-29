# @sushensanthush/vibe-check

A professional, lightweight network quality monitor.

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