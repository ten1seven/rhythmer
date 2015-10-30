/*
 * accepts: dom element, vertical rhythm int
 * usage: new VerticalRhythm({ image: element, rhythm: 26 });
 */

var VerticalRhythm = function(obj) {
  this.image = obj.image;
  this.rhythm = obj.rhythm;

  if (this.image && this.rhythm) this.init();
};

VerticalRhythm.prototype = {

  /*
    ---------------
    init
    ---------------
  */

  init: function() {
    ['setup'].forEach(this.fire.bind(this));
  },

  fire: function(fn) {
    this[fn]();
  },


  /*
    ---------------
    variables
    ---------------
  */

  currentWidth: 0,

  variables: function() {
    this.originalHeight = this.preloader.height;
    this.originalWidth = this.preloader.width;
    this.ratio = this.originalHeight / this.originalWidth;
  },


  /*
    ---------------
    setup
    ---------------
  */

  setup: function() {
    this.preloader = document.createElement('img');
    this.preloader.onload = function() {
      this.variables();
      this.resize();
    }.bind(this);
    this.preloader.src = this.image.getAttribute('src');
  },


  /*
    ---------------
    utilities
    ---------------
  */

  resize: function() {
    if (this.image.width !== this.currentWidth) {
      this.image.style.height = 'auto';
      this.currentWidth = this.image.width;

      var newHeight = this.currentWidth * this.ratio;
      var clippedHeight = Math.floor(newHeight / this.rhythm) * this.rhythm;

      this.image.style.height = clippedHeight + 'px';
    }
  },

  update: function(rhythm) {
    this.rhythm = rhythm;
    this.currentWidth = 0;

    this.resize();
  }

};
