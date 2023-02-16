import React from "react";
import CopyToClipBoard from "./Button/CopyToClipBoard";
import DeleteUrl from "./Button/DeleteUrl";
const UrlCard = ({ url }) => {
  const { _id, shortId, redirectURL, visitHistory } = url;

  let timestamp;
  if (visitHistory.length > 0) {
    timestamp = visitHistory[visitHistory.length - 1].timestamp;
  }

  const date = new Date(timestamp);
  function timeSince(timeStamp) {
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
    if (secondsPast < 60) {
      return secondsPast + " second";
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + " minute";
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + " hour";
    }
    if (secondsPast <= 2628000) {
      return parseInt(secondsPast / 86400) + " day";
    }
    if (secondsPast <= 31536000) {
      return parseInt(secondsPast / 2628000) + " month";
    }
    if (secondsPast > 31536000) {
      return parseInt(secondsPast / 31536000) + "y";
    }
  }
  const time = timeSince(date);

  return (
    <div className="w-full p-2">
      <div className="flex items-center h-full p-4 break-all transition-all bg-gray-500 rounded-lg shadow-lg cursor-auto hover:bg-gray-800 hover:bg-opacity-20 bg-opacity-20 backdrop-blur-sm">
        <div className="flex-grow">
          <a href={redirectURL}>
            <h2 className="font-medium text-gray-200 title-font">
              <span className="hidden md:block">{redirectURL}</span>
              <span className="md:hidden">{redirectURL}</span>
            </h2>
          </a>
          <a
            href={`https://shorty-cvii.onrender.com/u/${shortId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 my-3"
          >
            <p className="font-bold leading-6 text-primary">{`https://shorty-cvii.onrender.com/u/${shortId}`}</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </a>
          <div className="flex items-center justify-between gap-3 mt-4 flex-wrap">
            <p className="flex flex-shrink-0 gap-2 font-medium text-right text-gray-500 italic space-between items-center">
              <span className="flex gap-1 pr-2 border-r border-r-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <strong>{visitHistory.length}</strong>
              </span>
              {/* created time add span */}
              {time} ago
            </p>
            <div className="flex items-center gap-1">
              <CopyToClipBoard redirectURL={redirectURL} />
              {/* delete icon */}
              <DeleteUrl shortId={shortId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
