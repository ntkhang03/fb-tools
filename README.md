# fb-tools
> npm install fb-tools

# Credits:
[Kaysil](https://github.com/Kaysil/facebook-tools)

   <p>Download the video and find the Facebook Uid using the profile link.</p>
   <p>Tải video và tìm Uid facebook bằng link profile"</p>

## Example

### Find Uid

```javascript
(async () => {

 const toolfb = require("fb-tools");
 var id = await toolfb.findUid("https://facebook.com/ntkhang.9831");
 console.log(id);

})();
```
> Or

```javascript
const toolfb = require("fb-tools");
toolfb.findUid("https://m.facebook.com/ntkhang.9831")
  .then(function (item) {
console.log(item);
});
```
### Download video
```javascript
(async () => {
  
 var toolfb = require("fb-tools");
 var videolink = await toolfb.getVideoUrl("https://m.facebook.com/watch/?v=214784840422650");
 console.log(videolink);
 /*object: {
    sd: "https://video-mxp1-1.xx.fbcdn.net/v/t42.1790-2/173146224_513475892983670_3402119856878466716_n.mp4?_nc_cat=109&ccb=1-3&_nc_sid=985c63&efg=eyJybHIiOjUxMSwicmxhIjoxMDI1LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=lDBJX2D_07kAX94kfWA&rl=511&vabr=284&_nc_ht=video-mxp1-1.xx&oh=c2b28244715229891040fd74b2f2f869&oe=6087F3D0",
    
    hd: "https://scontent-mxp1-1.xx.fbcdn.net/v/t66.36240-6/10000000_3866505630102943_4884150572227376903_n.mp4?_nc_cat=110&ccb=1-3&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=EKMemjHPdrQAX_o0KsS&_nc_ht=scontent-mxp1-1.xx&oh=c2058c81be8d5e754fff76f13b8001a9&oe=60AD2D08"
 }*/
 console.log(videolink.sd);//link SD
 console.log(videolink.hd);//link HD

})();
```
