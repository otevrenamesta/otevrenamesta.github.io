# Otevrena mesta - asset pipeline

## Installation

To hack assets (css and js) install [node](http://nodejs.org/) environment.
Start with [nvm](https://github.com/creationix/nvm).
The rest is similar to [ruby env](..):

```
nvm ls remote # choose 0.10.* - node-sass not working with new node versions
# issue this if previous cmd say n/a:
# export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist
nvm install v0.10 # install
nvm alias default v0.10 # my default version
nvm use v0.10 # use it
node -v && npm -v # shall show versions
npm install grunt-cli -g
cd fffuuu # skip into cloned folder
npm install # install all necessary stuff
# do whatever you want with the asset sources
grunt build # generate new version of assets
```
