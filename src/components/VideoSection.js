import React from 'react';

const buildSrcUrl = videoSrcURL =>
  `${videoSrcURL}?modestbranding=1&autoplay=0&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&allowfullscreen=true&wmode=transparent&iv_load_policy=3&playsinline=0&html5=1&widgetid=1`;

// ?autoplay=1&controls=0&showinfo=0&autohide=1

const VideoSection = ({ videoSrcURL, ...props }) => (
  <section style={{ position: 'relative' }} className="slider-area">
    <div
      style={{
        position: 'absolute',
        zIndex: 0,
        minWidth: '100%',
        minHeight: '100%',
        left: '0px',
        top: '0px',
        overflow: 'hidden',
        opacity: 1,
        transitionProperty: 'opacity',
        transitionDuration: '1500ms',
      }}
    >
      <iframe
        src={buildSrcUrl(videoSrcURL)}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="640"
        height="360"
        unselectable="on"
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
          top: '0px',
          left: '0px',
          overflow: 'hidden',
          opacity: 1,
          userSelect: 'none',
          maxWidth: 'initial',
        }}
      />
    </div>
  </section>
);
// src="https://www.youtube.com/embed/l_tHTmd5pgk?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_P1&amp;origin=https%3A%2F%2Fcolorlib.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;playsinline=0&amp;html5=1&amp;widgetid=1"

// <div
//   class="mbYTP_wrapper"
//   id="wrapper_P1"
//   style="position: absolute; z-index: 0; min-width: 100%; min-height: 100%; left: 0px; top: 0px; overflow: hidden; opacity: 1; transition-property: opacity; transition-duration: 1500ms;"
// >
//   <iframe
//     id="iframe_P1"
//     class="playerBox"
//     style="position: absolute; z-index: 0; width: 1037px; height: 583px; top: 0px; left: 0px; overflow: hidden; opacity: 1; user-select: none; margin-top: 0px; margin-left: -63px; max-width: initial;"
//     frameborder="0"
//     allowfullscreen="1"
//     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//     title="YouTube video player"
//     width="640"
//     height="360"
//     src="https://www.youtube.com/embed/l_tHTmd5pgk?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_P1&amp;origin=https%3A%2F%2Fcolorlib.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;playsinline=0&amp;html5=1&amp;widgetid=1"
//     unselectable="on"
//   ></iframe>
//   <div
//     class="YTPOverlay"
//     style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"
//   ></div>
/* <div
        id="P1"
        class="background-video"
        data-property="{videoURL:'http://youtu.be/l_tHTmd5pgk',containment:'.slider-area',showControls:false,startAt:0,mute:false,autoPlay:true,loop:false,opacity:1}"
      ></div> */
export default VideoSection;
