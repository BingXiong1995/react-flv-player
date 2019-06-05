import React, { Component } from 'react';
import flvjs from './flv.min';

class ReactFlvPlayer extends Component {
  constructor(props) {
    super(props);

    this.flvPlayerRef = element => {
      this.flvPlayerRef = element;
    };
  }

  componentDidMount() {

    const {type , url, isLive, enableStashBuffer, stashInitialSize, hasAudio,hasVideo} = this.props;

    // 组件挂载后，拿到Ref进行操作
    if (flvjs.isSupported()) {
      const flvPlayer = flvjs.createPlayer({
        type: type ? type : 'flv',
        isLive: isLive ? isLive :true,
        url: url,
        hasAudio: hasAudio ? hasAudio : true,
        hasVideo: hasVideo ? hasVideo : true
      });
      flvPlayer.attachMediaElement(this.flvPlayerRef); // 将这个DOM付给第三方库
      flvPlayer.load();
      flvPlayer.play();
    }
  }

  render() {
    const {height, width, isMuted} = this.props;
    return (
      <div>
        <video
          controls
          muted={{isMuted}}
          ref={this.flvPlayerRef}
          style={{height,width}}
        />
      </div>
    );
  }
}

export default ReactFlvPlayer;
