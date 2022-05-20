# Azure Functions unit test with Jest
## What is this?
This is a note to myself for unit testing Azure functions written in typescript with Jest.  
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
	transform: {
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
### 6th step : Start API/Run test
#### Start API
```
npm start
```

Access following URL.
```
http://localhost:7071/api/HttpJestSample?name=hoge
```


#### Run test
```
npm test
```

### 追記
#### 2nd step : Install dependencies　について
`npx jest --init`後について、全てデフォルトで先に進めます。一応、聞かれる内容を残しておきます

```
The following questions will help Jest to create a suitable configuration for your project

? Would you like to use Jest when running "test" script in "package.json"? › (Y/n)


? Would you like to use Typescript for the configuration file? › (y/N)

? Choose the test environment that will be used for testing › - Use arrow-keys. Return to submit.
❯   node
    jsdom (browser-like)


? Do you want Jest to add coverage reports? › (y/N)

? Which provider should be used to instrument code for coverage? › - Use arrow-keys. Return to submit.
❯   v8
    babel

? Automatically clear mock calls, instances, contexts and results before every test? › (y/N)

```


## 3rd step : Modify files　について
デフォルトで存在してるのはjsファイル（jest.config.js）ですが、このファイルを削除して新たにjest.config.tsファイルを作成する必要があります。  
jest.config.jsの方を生かしたい場合はjest.config.tsは作成しないでください（名前が競合してテストが動きません）

## 5th step : Write test for sample API　について
./HttpJestSample/index.test.ts  
githubのコードをそのままコピペします。



