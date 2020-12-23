Following this manual>:
https://github.com/mattpe/wbma/blob/master/docs/w1-first-app.md

after:
npm i --save-dev eslint eslint-plugin-react eslint-plugin-react-native babel-eslint

I had to do also:
npm i -D eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

otherwise I was getting: 
PS C:\Users\Acer\Desktop\projects\react\my-app> ./node_modules/.bin/eslint --init
internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module 'C:\Users\Acer\Desktop\projects\react\my-app\node_modules\eslint\bin\eslint.js'

PS as admin