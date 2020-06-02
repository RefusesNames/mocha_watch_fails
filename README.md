# mocha_watch_fails
This repository serves to reproduces a problem I have with mocha for [StackOverflow](https://stackoverflow.com/q/62150490/5909613).

# Steps to reproduce the problem
1. `npm install`
2. `npm run test:watch` (no problem here)
3. Trigger mocha to run again (i.e. add whitespace to the test file and save)

# Resulting problem

```
TypeError: _a.addEventListener is not a function
```
