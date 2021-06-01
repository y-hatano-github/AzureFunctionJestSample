# Azure Functions unit test with Jest
## What is this?
This is a note to myself about unit tests in Azure functions with Jest.  
Simple sample for unit test Azure Functions with Jest.  

## Quick start
```
$ git clone https://github.com/y-hatano-github/AzureFunctionJestSample.git
$ cd AzureFunctionJestSample/
$ npm install
$ npm test
```

## Steps for running unit test for Azure functions
To create this sample, I did following steps and it worked.  
### 1st step : Create function
```
$ func init AzureFunctionJestSample --typescript
$ cd AzureFunctionJestSample/
$ func new --name HttpJestSample --template "HTTP trigger" --authlevel "anonymous"
```

### 2nd step : Install dependencies
```
$ npm install azure-functions-core-tools@3
$ npm i jest @types/jest ts-jest -D
$ npm install --save typescript ts-node
$ npm install npm-run-all --save-dev
$ npx jest --init
```

### 3rd step : Modify files.
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
### 4th step : Write sample API
[`./HttpJestSample/index.ts`](./HttpJestSample/index.ts "index.ts")
### 5th step : Write test for sample API
[`./HttpJestSample/index.test.ts`](./HttpJestSample/index.test.ts "index.test.ts")
### 6th step : Run test
```
npm test
```
