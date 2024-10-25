# REST api Deployments
Serverless is **not** ideal for the backend but is **best** suited for the frontend.

## Vercel

#### Pros
- Serverless architecture
- Auto-scaling
- Cost-effective 
- Distributed network across the globe
- Great for testing small project
#### Cons
- Cold start(no total uptime)
- Not recomanded for persistent connection(websocket or webRTCs)
- Issues may arsie with frequent request send at one time to db or other api.

_Refer read doc of Vercel's deployment on express for issues._
### Deployment.
There are two ways to deploy: using the CLI or a GitHub repository.
#### github way(preferd) : 
```
-> add in package.json :  script 

"start": "node index.js"

-> create vercel.json at root 

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

-> change in index.js : 

const port = process.env.PORT || 3000;

module.exports = app;

```
#### cli way : 
```
-> first install vercel cli globally 

npx install -g vercel

-> add adding vercel.json
-> hit vercel in terminal and enter prompt(this repo has root source code)
```

## Render

#### pros
- server architecture (microservices)
- precisistent connection 
- total up time no cold start
- easy issue fixing

#### cons
- no auto scale
- cost on scale
- no distributed network over globe

_make sure that repo is on github and visiblity is public_
### Deployment.
```
-> navigate to +New click on Web Service option.
-> in Soruce code section click on public git repos.
-> enter url of github repo
-> hit create button
-> check source code is repo that we want to target.
-> enter name field (preferd repo name)
-> select project and production (optional)
-> branch (preferd main as production) 
-> region (Oregon US west) no change
-> root directory(where the index.js is present if it already in root then left empty)
-> build command field : npm install (that applicable for frontends there no build of express.js + node.js but installation of package)
-> start command field : node index.js
-> instance type : select free
-> env variable : add manually key and value or add .env
-> hit deploy button
```