# Otevrena mesta - asset pipeline

## Installation

To hack assets (css and js) install [node](http://nodejs.org/) environment.
Start with [nvm](https://github.com/creationix/nvm).
Rest is similar to ruby env:

```
nvm ls remote # choose your destiny (I have 0.11*)
nvm install v0.11 # install
nvm alias default v0.11 # my default version
nvm use v0.11 # use it
node -v && npm -v # shall show versions
npm install grunt-cli -g
cd fffuuu # skip into cloned folder
npm install # install all necessary stuff
# do whatever you want with the asset sources
grunt build # generate new version of assets
```
