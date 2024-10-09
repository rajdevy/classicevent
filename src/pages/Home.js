import CelebrationIcon from '@mui/icons-material/Celebration';
import BgVideo from '../assets/videos/BackgroundVideo.mp4';
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.jpg'

const EventPage = () => {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    // Function to handle the visibility of the heading
    const toggleVisibility = () => {
      setShowHeading(true); // Show heading for the middle 7 seconds
      setTimeout(() => {
        setShowHeading(false); // Hide heading after 7 seconds
      }, 7000);
    };

    // Hide heading initially for 1.5 seconds
    const initialTimeout = setTimeout(() => {
      toggleVisibility(); // Show heading after 1.5 seconds
    }, 1500);

    // Repeat the process every 10 seconds (entire video duration)
    const interval = setInterval(() => {
      setShowHeading(false); // Hide for the last 1.5 seconds
      setTimeout(() => {
        toggleVisibility(); // Show heading again for the next cycle
      }, 1500);
    }, 10000);

    return () => {
      clearTimeout(initialTimeout); // Cleanup on unmount
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="relative h-[85vh] flex justify-center items-center">
      {/* Video background for the main div */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={BgVideo} // Replace with the path to your video
        autoPlay
        loop
        muted
      />

      {/* Content on top of the video */}
      <div className="relative flex justify-center items-center z-10">
        <div
          className={`transition-opacity flex flex-col  duration-1000 ease-in-out ${showHeading ? 'opacity-100' : 'opacity-0'} ${
            showHeading ? 'visible' : 'invisible'
          } flex justify-center items-center`}
        >
          {/* <CelebrationIcon sx={{ fontSize: '100px' }} /> */}
          <img
            src={logo} 
            alt="Logo"
            className="h-20 w-20 border-black border-2 my-10 rounded-full"
          />
          <h1
            className="text-7xl text-center font-bold mx-10 border-y-4 py-2 italic border-black"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Classic Event
          </h1>
          {/* <CelebrationIcon sx={{ fontSize: '100px', transform: 'rotate(270deg)' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
