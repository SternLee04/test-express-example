# REST API Deployments

Serverless is **not** ideal for the backend but is **best** suited for the frontend.

## Vercel

#### Pros
- Serverless architecture
- Auto-scaling
- Cost-effective 
- Distributed network across the globe
- Great for testing small projects

#### Cons
- Cold starts (no guaranteed uptime)
- Not recommended for persistent connections (e.g., WebSocket or WebRTC)
- Issues may arise with frequent requests sent simultaneously

_Refer to Vercel's documentation for deploying Express for further information on handling issues._

### Deployment
There are two ways to deploy: using the CLI or a GitHub repository.

#### GitHub Method (Preferred): 
1. Add the following to `package.json` under `scripts`: 
    ```json
    "start": "node index.js"
    ```

2. Create a `vercel.json` file at the root:
    ```json
    { 
        "version": 2, 
        "builds": [{
            "src": "./index.js",
            "use": "@vercel/node"
        }],
        "routes": [{
            "src": "/(.*)",
            "dest": "/"
        }]
    }
    ```

3. Update `index.js`:
    ```javascript
    const port = process.env.PORT || 3000;

    module.exports = app;
    ```

#### CLI Method: 
1. Install the Vercel CLI globally:
    ```bash
    npx install -g vercel
    ```

2. Ensure `vercel.json` is in place, then run:
    ```bash
    vercel
    ```
   Follow the prompts (ensure this repo has the root source code).

## Render

#### Pros
- Server architecture (microservices)
- Persistent connections 
- Continuous uptime without cold starts
- Easier issue resolution

#### Cons
- No auto-scaling
- Additional costs with scaling
- Not globally distributed

_Make sure the repository is on GitHub and publicly visible._

### Deployment
1. Navigate to **+New** and select **Web Service**.
2. In the **Source Code** section, select **Public Git Repos**.
3. Enter the GitHub repository URL and click **Create**.
4. Verify that the source code is from the intended repository.
5. Complete the following fields:
   - **Name**: (Recommended to use the repo name)
   - **Project** and **Production** (optional)
   - **Branch**: (Recommended to use `main` for production)
   - **Region**: Oregon (US West) — no change required
   - **Root Directory**: Specify if `index.js` is not in the root directory; otherwise, leave blank
   - **Build Command**: `npm install` (only needed for frontend builds; Express.js and Node.js require package installation only)
   - **Start Command**: `node index.js`
   - **Instance Type**: Select **Free**
   - **Environment Variables**: Add manually (key and value) or from `.env`

6. Click **Deploy**.
