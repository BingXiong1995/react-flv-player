import React, { Component } from 'react';
import flvjs from './flv.min';
import PropTypes from 'prop-types';


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
        type,
        isLive,
        url,
        hasAudio,
        hasVideo
      },{
        enableStashBuffer,
        stashInitialSize
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
          style={{height, width}}
        />
      </div>
    );
  }
}

ReactFlvPlayer.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string.isRequired,
  isLive: PropTypes.bool,
  hasAudio: PropTypes.bool,
  hasVideo: PropTypes.bool,
  enableStashBuffer: PropTypes.bool,
  stashInitialSize: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
  isMuted: PropTypes.bool
};

ReactFlvPlayer.defaultProps = {
  type: 'flv',
  isLive: true,
  hasAudio: true,
  hasVideo: true,
  enableStashBuffer: true,
  stashInitialSize: 128,
  height: '100%',
  width: '100%',
  isMuted: false
};

export default ReactFlvPlayer;
