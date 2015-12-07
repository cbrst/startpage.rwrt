# startpage.rwrt

## Configuration

### index.html
This is where you add your links. But don't worry, there's no HTML skills needed.

There's really only two places you should take a look at: Line 44, where you set the page title, and everything below line 49, where the links go. There's some instructions in the comments, but since I'm busy writing anyways, I'll just repeat myself here.

```
The Section Heading. This will start a new block.
  I
  V
Title
http://www.example.com || Title || Keybinding || Icon URL
  ^                         ^           ^             ^
  |                         |           `---------,   `-------------------------------------,
Where you want to go ][ What you want to see ][ Keybinding to go there fast (optional) ][ URL of image to display with link (optional) ]
```

The keybindings support multi-stroke bindings, so you can use ```gm``` to go to Gmail, ```gp``` to go to Google+, and so on. But beware! Shorter keybindings will get triggered first, so if you already use ```g``` to go to Google, you'll never be able to input ```gm``` or ```gp```.

### settings
Due to some issues with Chrome's XMLHttpRequest, the settings have been moved to ```js/script.js```. They can be found right at the top of the file.

#### navigation
This only has one setting: ```"newWindow"```. Set to true to have links open in a new tab/window, false to use the same window.

#### clock
Again, this has one setting: ```"showClock"```. True or false.

#### animation
This only has one setting: ```"hideLinks"```. Set to true to have links being shown/hidden automatically on
mouse events, false to see them always.

#### icons
This only has one setting: ```"showIcons"```. Set to true to see configured icons next to links, false to hide them.

#### search
This is where it gets interesting. There's two keys:

##### focusSearch
```true``` or ```false```. This is supposed to focus the first search box when the page is opened, but that's highly dependent on the browser. It works in Firefox, but last time I checked it won't work in Chrome. There's not really anything I can do about that.

##### engines
This is the fun part. Instead of giving you predefined search engines, I thought I'd let you add some on the fly.

So, ```engines``` is an array full of arrays. Each inner array needs to have three objects - The URL of your search engine, the ```GET``` argument, and a placeholder for the searchbox.

How do you get that stuff? Let's take a look at Google. When you search something, you'll get redirected to this URL:

```
https://www.google.com/search?q=something
```

There's some more stuff there, but this is the part we're interested about. Everything up to ```?``` is the URL, so it goes in the first position in the array.

The part between ```?``` and ```=``` is the name of the ```GET``` argument, this goes in the second position.

The third position can be any string really. I suggest you choose something descriptive here, like "Google".

### style/style.css
If you know CSS, edit to your heart's contempt.
