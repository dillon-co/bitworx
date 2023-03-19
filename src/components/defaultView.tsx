import React, { useEffect, useState } from 'react';

function DefaultView() {

    return (
        <><div><main af-view="home-page" className="main-wrapper">
        <header className="section_header76">
          <div className="padding-global">
            <div className="container-large">
              <div className="w-layout-grid header76_component">
                <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed33d-bd709c8b" className="header76_content-left">
                  <div className="margin-bottom margin-small">
                    <h1>Empowering the global marketplace with Bitcoin</h1>
                  </div>
                  <p className="text-size-medium">Bitworx empowers global participation in the digital economy with lightning-fast, trustless transactions. Our platform leverages the lightning network and decentralized smart contracts to facilitate seamless interactions between clients and freelancers without the need for a bank account.</p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <a href="#" className="button w-button">Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="header76_content-right">
                  <div className="header76_images-layout">
                    <div className="header76_image-list-left">
                      <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed34a-bd709c8b" className="header76_image-list">
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed34b-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415e071f4c83ff080f16212_05.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed34c-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed34d-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df6336dcd3e3c0dd16ac_25.png'} loading="lazy" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed34f-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df63830881a1665edead_09.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed350-bd709c8b" alt="" className="header76_image"/></div>
                      </div>
                      <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed351-bd709c8b" className="header76_image-list">
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed352-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df637dad696e1eebda8e_15.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed353-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed354-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df63b071a72e646d07c4_11.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed355-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed356-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df14826a423467de9e5a_20.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed357-bd709c8b" alt="" className="header76_image"/></div>
                      </div>
                    </div>
                    <div className="header76_image-list-right">
                      <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed359-bd709c8b" className="header76_image-list">
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed35a-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df63b071a72e646d07c4_11.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed35b-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed35c-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df14826a423467de9e5a_20.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed35d-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed35e-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415e0721363c9218636388f_07.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed35f-bd709c8b" alt="" className="header76_image"/></div>
                      </div>
                      <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed360-bd709c8b" className="header76_image-list">
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed361-bd709c8b" className="header76_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6415df63b071a70bd46d07c3_04.png'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed362-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed363-bd709c8b" className="header76_image-wrapper"><img src={'images/placeholder-image.svg'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed364-bd709c8b" alt="" className="header76_image"/></div>
                        <div id="w-node-e658c970-986b-b957-16ea-85d28f0ed365-bd709c8b" className="header76_image-wrapper"><img src={'images/placeholder-image.svg'} loading="lazy" id="w-node-e658c970-986b-b957-16ea-85d28f0ed366-bd709c8b" alt="" className="header76_image"/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="section_layout69">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="w-layout-grid layout69_component">
                  <div className="layout69_content-left">
                    <div className="margin-bottom margin-small">
                      <h2>A truely peer-to-peer digital services marketplace </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_blog67">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-xxlarge">
                  <div className="blog67_heading-wrapper">
                    <div className="blog67_heading">
                      <div className="max-width-large">
                        <div className="margin-bottom margin-xsmall">
                          <h2>Short heading goes here</h2>
                        </div>
                        <p className="text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      </div>
                    </div>

                  </div>
                </div>
                <div data-delay="4000" data-animation="slide" className="blog67_component w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="false">
                  <div className="blog67_mask w-slider-mask">
                    <div className="blog67_slide w-slide">
                      <div className="card">
                        <a href="#" className="blog67_item-link w-inline-block">
                          <div className="blog67_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64173e6ba3139e3c06f81f61_Frame%203-1.webp'} loading="lazy" alt="" className="blog67_image"/></div>
                          <div className="blog67_item-content">
                            <div className="blog67_item-content-top">
                              <div className="blog67_title-wrapper">
                                <h3 className="heading-style-h5">Programming &amp; Tech</h3>
                              </div>
                              <div className="text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="blog67_slide w-slide">
                      <div className="card">
                        <a href="#" className="blog67_item-link w-inline-block">
                          <div className="blog67_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641646f4d0396936568106e0_music3.webp'} loading="lazy" alt="" className="blog67_image"/></div>
                          <div className="blog67_item-content">
                            <div className="blog67_item-content-top">
                              <div className="blog67_title-wrapper">
                                <h3 className="heading-style-h5">Music &amp; Audio</h3>
                              </div>
                              <div className="text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="blog67_slide w-slide">
                      <div className="card">
                        <a href="#" className="blog67_item-link w-inline-block">
                          <div className="blog67_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64173e6b4e0fbd66fcaa256e_Frame%202.webp'} loading="lazy" alt="" className="blog67_image"/></div>
                          <div className="blog67_item-content">
                            <div className="blog67_item-content-top">
                              <div className="blog67_title-wrapper">
                                <h3 className="heading-style-h5">Art &amp; Design</h3>
                              </div>
                              <div className="text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="blog67_slide w-slide">
                      <div className="card">
                        <a href="#" className="blog67_item-link w-inline-block">
                          <div className="blog67_image-wrapper"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64173e6d7701c26f1fb9701d_Frame%203.webp'} loading="lazy" alt="" className="blog67_image"/></div>
                          <div className="blog67_item-content">
                            <div className="blog67_item-content-top">
                              <div className="blog67_title-wrapper">
                                <h3 className="heading-style-h5">Voice over</h3>
                              </div>
                              <div className="text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog67_arrow left button w-slider-arrow-left"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa45a33709cc0_icon_slider-arrow-left_2px.svg'} loading="lazy" alt="" className="image-2"/></div>
                  <div className="blog67_arrow button w-slider-arrow-right"><img src={'https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa4d1ab709cdb_icon_slider-arrow-right.svg'} loading="lazy" alt="" className="image-2"/></div>
               
                  
                      <a href="#" className="button is-secondary slider-button-view-more">View all</a>
                  
                </div>
                <div className="blog67_button-row show-mobile-landscape">
                  <a href="#" className="button is-secondary w-button">View all</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div></>
    )
}

export default DefaultView;