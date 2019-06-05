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
  constructor(props) {
    super(props);
    this.state = {url:"http://play.flv.feifeilink.com/video/2.flv"}
  }

  render() {
    return (
      <div>
        <ReactFlvPlayer
          url = {this.state.url}
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

### API
| Field              | Type                  | Default  | Description                              |
| ------------------ | --------------------- | ---------|------------------------------- |
| `type`             | `string`              |     `flv`     |Indicates media type, `'flv'` or `'mp4'` |
| `isLive?`          | `boolean`             |   `true`        |Indicates whether the data source is a **live stream** |
| `hasAudio?`        | `boolean`             |     `true`      |Indicates whether the stream has audio track |
| `hasVideo?`        | `boolean`             | `true`           |Indicates whether the stream has video track |
| `url?`             | `string`              |   `url`       |Indicates media URL, can be starts with `'https(s)'` or `'ws(s)'` (WebSocket) |
| `enableStashBuffer?`             | `boolean` | `true`                       | Enable IO stash buffer. Set to false if you need realtime (minimal latency) for live stream |
| `stashInitialSize?`              | `number`  | `128KB`                      | Indicates IO stash buffer initial size. Default is `384KB`. Indicate a suitable size can improve video load/seek time. |
