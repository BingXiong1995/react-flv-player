<h1 align="center">react-flv-player</h1>
A React component to play flv streaming video.

### Installation
``
npm i react-flv-player
``

## Usage

```
import React, { Component } from 'react';
import {ReactFlvPlayer} from 'react-flv-player'

class Index extends Component {

  render() {
    return (
      <div>
        <ReactFlvPlayer
          url = "http://xxx/xxx/xxx.flv"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
      </div>
    );
  }
}

export default Index;
```
![image](http://bingxiong.vip/wp-content/uploads/2019/06/home.png)


### Props
| Field              | Type                  | Default  | Description                              |
| ------------------ | --------------------- | ---------|------------------------------- |
| `type`             | `string`              |     `flv`     |Indicates media type, `'flv'` or `'mp4'` |
| `isLive?`          | `boolean`             |   `true`        |Indicates whether the data source is a **live stream** |
| `hasAudio?`        | `boolean`             |     `true`      |Indicates whether the stream has audio track |
| `hasVideo?`        | `boolean`             | `true`           |Indicates whether the stream has video track |
| `url?`             | `string`              |   `url`       |Indicates media URL, can be starts with `'https(s)'` or `'ws(s)'` (WebSocket) |
| `enableStashBuffer?`             | `boolean` | `true`                       | Enable IO stash buffer. Set to false if you need realtime (minimal latency) for live stream |
| `stashInitialSize?`              | `number`  | `128`        (KB)              | Indicates IO stash buffer initial size. Default is `384KB`. Indicate a suitable size can improve video load/seek time. |
| `height?`              | `px or %`  | `100%`                      |  |
| `width?`              | `px or %`  | `100%`                      |  |
| `isMuted?`              | `boolean`  | `required`                      | Indicates audio output when init the video |
| `handleError?`              | `function`  | `(err)=>{console.log(err)}`                      |Handle errors, error type is enum |
| `enableWarning?`        | `boolean`             | `false`           |Enable Warnings in Console|
| `enableError?`        | `boolean`             | `false`           |Enable errors in Console|

### Errors
```
<ReactFlvPlayer
  url={videoUrl}
  isMuted
  handleError={(err) => {
  switch (err) {
    case 'NetworkError':
      // todo
      console.log('network error');
    break;
    case 'MediaError':
      console.log('network error');
    break;
    default:
      console.log('other error');
  }
}}
/>
```
| Error         | Description                              |
| ------------- | ---------------------------------------- |
| NETWORK_ERROR | Errors related to the network            |
| MEDIA_ERROR   | Errors related to the media (format error, decode issue, etc) |
| OTHER_ERROR   | Any other unspecified error              |
