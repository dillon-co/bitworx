import React from "react";

function createNavBar() {
    return(
        <>
            <main af-view="job-listing" className="main-wrapper is-white navbar-main">
      <div className="padding-global">
        <div className="container-large">
          <div data-animation="default" className="navbar1_component w-nav" data-easing2="ease" af-view="navbar" data-easing="ease" data-collapse="medium" data-w-id="c15ccbc4-5e63-27e5-2415-aaec20ab3a25" role="banner" data-duration="400">
            <div className="navbar1_container">
              <a href="/" className="navbar1_logo-link w-nav-brand"><img src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415d36c628839c507178d1b_Group%201.svg" loading="lazy" alt="" className="navbar1_logo"/></a>
              <nav role="navigation" className="navbar1_menu is-page-height-tablet w-nav-menu">
                <a href="job-listing.html" className="navbar1_link w-nav-link">Find Work</a>
                <a href="/talent-listings" className="navbar1_link w-nav-link">Find Talent</a>
                <a href="#" className="navbar1_link w-nav-link">Why Bitworx</a>
                <div className="navbar1_menu-buttons">
                  <a data-w-id="c15ccbc4-5e63-27e5-2415-aaec20ab3a31" href="#" className="button is-small w-button">Login</a>
                </div>
              </nav>
              <div className="navbar1_menu-button w-nav-button">
                <div className="menu-icon1">
                  <div className="menu-icon1_line-top"></div>
                  <div className="menu-icon1_line-middle">
                    <div className="menu-icon_line-middle-inner"></div>
                  </div>
                  <div className="menu-icon1_line-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main></>
    )
}

export default createNavBar;