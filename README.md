# imgdata-filter

> Canvas 实现图片滤镜，效果参考的 https://github.com/picturepan2/instagram.css

![预览图](https://pic.rmb.bdstatic.com/baidu-rmb-video-cover-1/2020-9/1599034977875/31b568a2dccf.png)

## Getting started

### Installation

```shell
npm install imgdata-filter
```

### Usage
#### Syntax
```js
    import { filter1977 } from 'imgdata-filter';

    filter1977(canvas, context);
```
- **canvas**
  - Type: `HTMLCanvasElement`

- **context**
  - Type: `CanvasRenderingContext2D`

#### Example
```html
    <!-- html -->
    <img id='image' src=''>

    <canvas id='1977'></canvas>
```
```js
    // js
    import {
        filter1977,
        ...
    } from 'imgdata-filter';

    const origin = document.getElementById('image');
    const img = new Image();

    window.onload = () => {
        img.addEventListener('load', imgOnload, false);
        img.src = './image/instagram.jpg';
        origin.src = img.src;
    }

    const imgOnload = () => {
        const canvas = document.getElementById('canvas');
        canvas.width = origin.width;
        canvas.height = origin.height;

        const context = canvas.getContext('2d');
        context.drawImage(img,
            0,
            0,
            img.width,
            img.height,
            0,
            0,
            canvas.width,
            canvas.height
        );

        const imgData = filter1977(canvas, context);

        // ...
    }
```
### Development
```shell
npm run dev
```