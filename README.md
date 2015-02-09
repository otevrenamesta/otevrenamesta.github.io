# Otevrena mesta - web

Jekyll based web [otevrenamesta.cz](www.otevrenamesta.cz) served on Github pages.

## Installation

To hack the web on your computer, you need [jekyll](http://jekyllrb.com/) environment.

Install [rvm](https://rvm.io/) according instruction.
You shall have rvm installed, try it:

> rvm -v

Continue with:

```bash
# Install some ruby version (I have ruby-2.1.2)
rvm install ruby-2.1.2

# Now you have ruby and gem installed. Try it with:
ruby -v && gem -v

# Now you can clone this repo
git clone https://github.com/otevrenamesta/otevrenamesta.github.io om-web
cd om-web

# Now you have install all necessary gems, the most easy way is use bundler
gem install bundler
bundler install

# Now you can run jekyll
jekyll serve
```

### asset generation (optional)

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

## Special Thanks

Special thanks to <a href="https://github.com/h5bp/html5-boilerplate">HTML 5 Boilerplate</a> whose code I have based this on.

@kionoshp's <a href="https://github.com/kianoshp/SASS-CSS-Boilerplate">padding-margin</a>. Because it has become part of every site that I manage.

and <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a> for being awesome.
