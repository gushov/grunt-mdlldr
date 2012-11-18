# grunt-mdlldr

Makes node modules browser friendly

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-mdlldr`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-mdlldr');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

adding to modules to your gruntfile:

```javascript
mdlldr: {
  module1: {
    root: './app/lib',
    src: ['module1.js'],
    dest: './build/module1.js'
  },
  module2: {
    root: './app/lib',
    src: ['module2.js'],
    dest: './build/module2.js',
    overrides: {
      DateZ: 'DateZ',
      underscore: 'underscore'
    }
  }
}
```

## License
Copyright (c) 2012 Gus Hovland  
Licensed under the MIT license.
