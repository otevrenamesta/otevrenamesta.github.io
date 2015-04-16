# Otevrena mesta - asset pipeline

## Installation

To hack assets (css and js) install [node](http://nodejs.org/) environment.
Start with [nvm](https://github.com/creationix/nvm).
The rest is similar to [ruby env](..):

issue this within `_assets`
```
nvm ls remote # choose 0.10.* - node-sass not working with new node versions
# issue this if previous cmd say n/a:
# export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist
nvm install 0.10 # install
nvm alias default 0.10 # my default version
nvm use 0.10 # use it
node -v && npm -v # shall show versions
npm install grunt-cli bower -g
npm install # install all necessary stuff
bower install
# do whatever you want with the asset sources
grunt build # generate new version of assets
```
