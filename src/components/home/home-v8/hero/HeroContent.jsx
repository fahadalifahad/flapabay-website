
import React, { useState } from "react";
import FilterItems from "./FilterItems";
import {useNavigate} from 'react-router-dom';

const HeroContent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Experiences");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "Experiences", label: "Experiences" },
    { id: "rent", label: "Rent" },
    { id: "sold", label: "Sold" },
  ];

  return (
    <div className="advance-search-tab mt60 mt30-lg mx-auto animate-up-3">
      <ul className="nav nav-tabs p-0 m-0 border-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style1 at-home8">
              <div className="row">
                <FilterItems />

                <div className="col-md-12">
                  <div className="d-bloc mt-3 mt-md-0 mb15">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button>{" "}
                  </div>
                  <div className="d-grid">
                    <button
                      className="ud-btn btn-dark"
                      type="button"
                      onClick={() => navigate("/grid-full-4-col")}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
