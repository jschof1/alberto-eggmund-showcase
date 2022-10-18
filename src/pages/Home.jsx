import React from 'react';

function Home() {
  // console.log('hi')
  return (
    <div>
      <video
        autoPlay={true}
        muted=""
        loop={true}
        playsInline=""
        className="pointer-events-none object-cover w-screen h-screen fixed top-0 left-0"
      >
        <source src="https://github.com/jschof1/Al-Robertston-website/blob/main/videos/landing-page.mp4?raw=true" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
