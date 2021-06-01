# Azure Functions unit test with Jest
## What is this?
This is a note to myself about unit tests in Azure functions with Jest. 
Simple sample for unit test Azure Functions with Jest.  

## Steps for build this Azure function
I did following steps and it worked.  
### 1.Create function
```
$ func init AzureFunctionJestSample --typescript
$ cd AzureFunctionJestSample/
$ func new --name HttpJestSample --template "HTTP trigger" --authlevel "anonymous"
```

### 2.Install dependencies
```
$ npm install azure-functions-core-tools@3
$ npm i jest @types/jest ts-jest -D
$ npm install --save typescript ts-node
$ npm install npm-run-all --save-dev
$ npx jest --init
```

### 3.Modify files.
jest.config.ts  

```
export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testEnvironment: "jest-environment-node",
	testMatch: [
		"**/?(*.)+(test).ts?(x)"
	],
	"transform": {
		"^.+\.(ts|tsx)$": "ts-jest"
	}
};
```

package.json  

```
"scripts": {
  ...
  "test": "jest"
}
```
### 4.write test code
`./HttpJestSample/index.test.ts`

### 5.Run test
```
npm test
```
