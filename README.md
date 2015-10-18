# Otevrena mesta - web

Jekyll based web [www.otevrenamesta.cz](http://www.otevrenamesta.cz) served on Github pages.

## Installation

To hack the web on your computer, you need [ruby](https://www.ruby-lang.org/en/) and gem.

Try first if you already have them with:

> ruby -v && gem -v && echo 'ok, I have all I need!'

If you do not see versions of programs you need to install them.
Most convenient way is to use [rvm](https://rvm.io/rvm/install).

```
# install rvm already with ruby
\curl -sSL https://get.rvm.io | bash -s stable --ruby
# see what version was installed
rvm list
# select it as default
rvm alias create default 2.2
# then each time you want ruby and co. run
rvm-shell
```
Or you can use package manager of your distribution.

Continue with (you can copy & paste into shell):

```bash
# Now you HAVE ruby and gem installed. Try it with:
ruby -v && gem -v && echo 'ok, I have all I need!'

# Now you can clone this repo
git clone https://github.com/otevrenamesta/otevrenamesta.github.io om-web
cd om-web

# Now you have install all necessary gems, the most easy way is use bundler
gem install bundler
bundle install

# Now you can run [jekyll](http://jekyllrb.com/)
jekyll serve
```

If you use a certain version of ruby (the author uses 2.1.2), you have to switch
before each use of jekyll with

    rvm use 2.1.2

### Asset Generation (optional)

For details see [assets folder](_assets).

## Special Thanks

Special thanks to <a href="https://github.com/h5bp/html5-boilerplate">HTML 5 Boilerplate</a> whose code I have based this on.

@kionoshp's <a href="https://github.com/kianoshp/SASS-CSS-Boilerplate">padding-margin</a>. Because it has become part of every site that I manage.

and <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a> for being awesome.
