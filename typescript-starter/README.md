# Init
```
npm i -D typescript
# yarn add -D typescript

tsc --init
```

# Step
> Set `outDir` in tsconfig.json to "./dist"

Now all the JS file generated by `tsc` command will be located in that outDir.

> Update npm start script with the generated JS files location

Now we can run `npm run tsc` then `npm start`

> Add `jest` test
```
npm i -D jest ts-jest @types/jest
```
* Add `jest.config.js` as in this project.
* Add npm script to run `jest`.
* Fix tsconfig so it `rootDir` is the `src` folder, also add `exclude` for `node_modules` and `*.spec.ts` files

> Setup [VSCode debugger for TS](https://code.visualstudio.com/docs/typescript/typescript-debugging)
* in tsconfig, add `"sourceMap": true,`
* Create `./vscode/launch.json`. Make sure `outFiles` matchs `outDir` in tsconfig
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch TS",
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```


> (Optional) Optimize the JS file with webpack bundling
The genrated JS files are not yet optimized.
```
npm i -D webpack webpack-cli typescript ts-loader
npm i -D babel-loader @babel/core @babel/preset-env

# Create webpack.config.js
npm run tsc
npm run build
node ./dist/bundle.js
```

> (Optional) Compile to ES6 modules
ES6 has `import/export` syntax but it's experimental in Node.js. `commonjs` module has `require/module.import`.
* Add `"type": "module",` to package.json
* Set `"module": "ES6"` in tsconfig.json
* In all the TS source files, the imports statement must include `.js` extensions
* Run node with the experimental flag
```
tsc -p tsconfig.es6.json
node --experimental-modules ./dist/index.js
```

If you compile as ES6 module but run without experimental flag, the will be syntax error such as `SyntaxError: Cannot use import statement outside a module`.

> Run with nodeamon watch mode
```
npm i -D ts-node nodemon
# Add package.json script
{
  "dev": "nodemon ./src/index.ts",
}
```

# Reference
* https://levelup.gitconnected.com/tdd-with-typescript-and-jest-starter-project-cca94fd089f5

# Troubleshooting
Error: `tsc --init`: This is not the tsc command you are looking for
Fix:
```
npm uninstall tsc
npm install -D typescript # the correct one for tsc command
```
