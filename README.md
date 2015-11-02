# Rhythmer

__A script for making images adhere to vertical rhythm.__

## How it works

Rhythmer alters the height of images to match your vertical rhythm.

## Installing

Download the file directly and include it in your project.

AMD-compatibility coming soon.

## Usage

Include the script directly in your project.

```html
<script src="path/to/rhythmer.js"></script>
```

Use Rhythmer on any inline image. The `data-rhythm` attribute is not required, as long as the desired image(s) can be selected by javascript.

```html
<img alt="" data-rhythm src="path/to/my-image.jpg">
```

Create a new instance. Rhythmer takes two parameters: `image` (string) and `rhythm` (integer):

```javascript
var myImage = new Rhythmer(
  {
    'image': document.querySelector('[data-rhythm]'),
    'rhythm': 26
  }
);
```

In your CSS, use `object-fit: cover;` to prevent fixed-size images from being distorted. More on [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

```css
[data-rhythm] {
  object-fit: cover;
  object-position: center center;
}
```

Force Rhythmer to recalculate and image size:

```javascript
window.addEventListener('resize', function() {
  myImage.resize();
});
```

Update the vertical rhythm for an image. This also forces a `resize()`:

```javascript
myImage.updateRyhthm(22);
```

### Using Rhythmer with multiple images

```javascript
// create an array to hold the image references (optional but recommended unless you need to have access to the images later).
var imagesArray = [];

// select the images
var images = document.querySelectorAll('[data-rhythm]');

// iterate over the collection and add the reference to the array
for (var i = 0, len = images.length; i < len; i++) {
  imagesArray.push(new Rhythmer(
    {
      'image': images[i],
      'rhythm': 26
    }
  ));
}

// set an event handler to resize all the images
// note: for better performance, it would be best to debounce this function
window.addEventListener('resize', function() {
  imagesArray.map(function(image) {
    image.resize();
  });
});
```

## Contributing

Coming soon.

## Demo

http://ten1seven.github.io/rhythmer/
