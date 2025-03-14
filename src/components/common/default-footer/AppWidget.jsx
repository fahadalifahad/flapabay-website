import React from "react";

const AppWidget = () => {
  const appList = [
    {
      icon: "fab fa-apple fz30",
      text: "Download on the",
      title: "Apple Store",
      link: "#",
    },
    {
      icon: "fab fa-google-play fz30 text-white",
      text: "Get it on",
      title: "Google Play",
      link: "#",
    },
  ];

  return (
    <div className="app-widget">
      <h5 className="title text-white mb10">Apps</h5>
      <div className="row mb-4 mb-lg-5">
        {appList.map((app, index) => (
          <div className="col-auto" key={index}>
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <div className="app-info d-flex align-items-center mb10">
                <div className="flex-shrink-0">
                  <i className={app.icon} />
                </div>
                <div className="flex-grow-1 ml20">
                  <p className="app-text fz13 mb0">{app.text}</p>
                  <h6 className="app-title fz14">{app.title}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWidget;
