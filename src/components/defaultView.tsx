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
                          <h2>Explore the marketplace</h2>
                        </div>
                        <p className="text-size-medium">Find creators to power your next project </p>
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
        <>
  <section className="section_layout156">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large margin-top margin-0">
          <div className="layout156_component">
            <div className="layout156_image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174ba26c79a88cc9b48114_Image.webp"
                loading="lazy"
                sizes="90vw"

                alt=""
                className="layout156_image"
              />
            </div>
            <div className="margin-top margin-xxlarge">
              <div className="text-align-center">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h3>
                      Welcome to a truly human marketplace, powered by you
                    </h3>
                  </div>
                  <p className="text-size-medium">
                    Find talent anywhere in the world or post your own jobs
                  </p>
                  <div className="button-wrapper">
                    <a
                      href="#"
                      className="button is-orange margin-right margin-small w-button"
                    >
                      Find Talent
                    </a>
                    <a href="#" className="button is-purple-button w-button">
                      Find Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section_layout1">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="w-layout-grid layout1_component">
            <div className="layout1_content">
              <div className="margin-bottom margin-xsmall">
                <div className="text-weight-semibold">Step 1</div>
              </div>
              <div className="margin-bottom margin-small">
                <h2>Find a freelancer or post your own job listing</h2>
              </div>
              <p className="text-size-medium">
              Browse through our diverse network of talented freelancers or create your own job listing to attract the perfect match for your project needs.
              </p>
            </div>
            <div className="layout1_image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174d7bf5b3435809482a0e_Frame%204.webp"
                loading="lazy"
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"

                alt=""
                className="layout1_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section_layout1">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="w-layout-grid layout1_component">
            <div
              id="w-node-acb6c5b5-a162-e111-ae6d-931afd6e03d7-bd709c8b"
              className="layout1_image-wrapper"
            >
              <img
                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174dfdd18f1bb7fb841f91_Frame%205.webp"
                loading="lazy"
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
 
                alt=""
                className="layout1_image"
              />
            </div>
            <div className="layout1_content">
              <div className="margin-bottom margin-xsmall">
                <div className="text-weight-semibold">Step 2</div>
              </div>
              <div className="margin-bottom margin-small">
                <h2>Lock your bitcoin up until the job is complete</h2>
              </div>
              <p className="text-size-medium">
              Safeguard your bitcoin by placing it into a secure escrow account, ensuring payment is held until the job is completed to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section_layout1">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="w-layout-grid layout1_component">
            <div className="layout1_content">
              <div className="margin-bottom margin-xsmall">
                <div className="text-weight-semibold">Step 3</div>
              </div>
              <div className="margin-bottom margin-small">
                <h2>Sign the contract and release the funds</h2>
              </div>
              <p className="text-size-medium">
              Finalize the agreement by signing a digital contract, and once the project is successfully delivered, release the funds to the freelancer with confidence.
              </p>
            </div>
            <div className="layout1_image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174e30d18f1b3baf842734_Frame%207.webp"
                loading="lazy"
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"

                alt=""
                className="layout1_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section_layout156_v2">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large margin-top margin-0">
          <div className="layout156_component">
            <div className="text-align-center">
              <div className="max-width-large">
                <div className="margin-bottom margin-small">
                  <h3>Crowdfunding with Bitworx</h3>
                </div>
                <p className="text-size-medium">
                With a 2% transaction fee, users gain voting rights based on contributions. Every quarter, members pitch ideas for projects to be crowdfunded by the collected fees, fostering a dynamic ecosystem that promotes growth and shared success.
                </p>
                <div className="button-wrapper">
                  <a href="#" className="button is-orange w-button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="margin-top margin-medium">
              <div className="layout156_image-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174ed7f5b3430ab2484edf_Frame%208.webp"
                  loading="lazy"
                  sizes="90vw"
                  alt=""
                  className="layout156_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section_pricing22">
    <div className="padding-global hide-tablet">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="margin-bottom margin-xxlarge">
            <div className="text-align-left">
              <div className="max-width-large align-left">
                <div className="margin-bottom margin-small">
                  <h2>Ditch the middleman for good</h2>
                </div>
                <p className="text-size-medium">
                Embrace transparent, cost-effective transactions in a decentralized freelancing ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="pricing22_component">
            <div className="w-layout-grid pricing22_top-row">
              <div className="pricing22_empty-space" />
              <div
                id="w-node-_5dde9d31-c927-7d7f-3188-8bf4d850728f-bd709c8b"
                className="pricing22_top-row-content"
              >
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641750587b8e01781129097a_bitworx.svg"
                  loading="lazy"
                  alt=""
                  className="comparison-logo"
                />
              </div>
              <div className="pricing22_top-row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174fe500ca744498a7671d_Fiverr-Logo.svg"
                  loading="lazy"
                  id="w-node-_6feeb2e8-66d2-6d59-9e65-6f88a79fdd9c-bd709c8b"
                  alt=""
                  className="comparison-logo"
                />
              </div>
              <div className="pricing22_top-row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/64174fe55aac654a5297eab1_2560px-Upwork-logo.svg"
                  loading="lazy"
                  alt=""
                  className="comparison-logo upwork"
                />
              </div>
            </div>
            <div className="pricing22_heading-row">
              <div className="heading-style-h6">Features</div>
            </div>
            <div className="w-layout-grid pricing22_row background-color-gray">
              <div className="pricing22_feature">
                <div>Profile Pages</div>
              </div>
              <div className="pricing22_row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa41805709cb5_icon_check.svg"
                  loading="lazy"
                  alt=""
                  className="icon-1x1-xsmall"
                />
              </div>
              <div className="pricing22_row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa41805709cb5_icon_check.svg"
                  loading="lazy"
                  alt=""
                  className="icon-1x1-xsmall"
                />
              </div>
              <div className="pricing22_row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa41805709cb5_icon_check.svg"
                  loading="lazy"
                  alt=""
                  className="icon-1x1-xsmall"
                />
              </div>
            </div>
            <div className="w-layout-grid pricing22_row">
              <div className="pricing22_feature">
                <div>Talent Reviews</div>
              </div>
              <div className="pricing22_row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa41805709cb5_icon_check.svg"
                  loading="lazy"
                  alt=""
                  className="icon-1x1-xsmall"
                />
              </div>
              <div className="pricing22_row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa41805709cb5_icon_check.svg"
                  loading="lazy"
                  alt=""
                  className="icon-1x1-xsmall"
                />
              </div>
              <div className="pricing22_row-content">
                <img
                  src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/63f55220e76aa41805709cb5_icon_check.svg"
                  loading="lazy"
                  alt=""
                  className="icon-1x1-xsmall"
                />
              </div>
            </div>
            <div className="w-layout-grid pricing22_row background-color-gray">
              <div className="pricing22_feature">
                <div>Escrowed Payments</div>
              </div>
              <div className="pricing22_row-content">
                <div>Via discreet law contract</div>
              </div>
              <div className="pricing22_row-content">
                <div>Trust based</div>
              </div>
              <div className="pricing22_row-content">
                <div>Trust based</div>
              </div>
            </div>
            <div className="w-layout-grid pricing22_row">
              <div className="pricing22_feature">
                <div>Countries</div>
              </div>
              <div className="pricing22_row-content">
                <div>Global and permissionless</div>
              </div>
              <div className="pricing22_row-content">
                <div>180+ Countries</div>
              </div>
              <div className="pricing22_row-content">
                <div>190+ Countries</div>
              </div>
            </div>
            <div className="pricing22_heading-row margin">
              <div className="heading-style-h6">Pricing</div>
            </div>
            <div className="w-layout-grid pricing22_row background-color-gray">
              <div className="pricing22_feature">
                <div>Client Service Fees</div>
              </div>
              <div className="pricing22_row-content">
                <div>Free</div>
              </div>
              <div className="pricing22_row-content">
                <div>5%</div>
              </div>
              <div className="pricing22_row-content">
                <div>5.5%</div>
              </div>
            </div>
            <div className="w-layout-grid pricing22_row">
              <div className="pricing22_feature">
                <div>Provider Service Fees</div>
              </div>
              <div className="pricing22_row-content">
                <div>Free</div>
              </div>
              <div className="pricing22_row-content">
                <div>20%</div>
              </div>
              <div className="pricing22_row-content">
                <div>20%</div>
              </div>
            </div>
            <div className="w-layout-grid pricing22_row background-color-gray">
              <div className="pricing22_feature">
                <div>Crowdfunding Contribution</div>
              </div>
              <div className="pricing22_row-content">
                <div>1.5%</div>
              </div>
              <div className="pricing22_row-content">
                <div>N/A</div>
              </div>
              <div className="pricing22_row-content">
                <div>N/A</div>
              </div>
            </div>
            <div className="w-layout-grid pricing22_row">
              <div className="pricing22_feature">
                <div>Transaction Fee</div>
              </div>
              <div className="pricing22_row-content">
                <div>Miner fees</div>
              </div>
              <div className="pricing22_row-content">
                <div>1-3%</div>
              </div>
              <div className="pricing22_row-content">
                <div>1-3%</div>
              </div>
            </div>
            <div className="w-layout-grid pricing22_row background-color-gray">
              <div className="pricing22_feature">
                <div>Billing Methods</div>
              </div>
              <div className="pricing22_row-content">
                <div>Bitcoin</div>
              </div>
              <div className="pricing22_row-content">
                <div>Credit Card, Bank transfer</div>
              </div>
              <div className="pricing22_row-content">
                <div>Credit Card, PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section_layout-donation">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="w-layout-grid layout1_component">
            <div className="layout1_content">
              <div className="margin-bottom margin-small">
                <h2>Donate sats to help support the development of bitworx</h2>
              </div>
              <p className="text-size-medium">
                Bitworx is a fully not for profit project. We don’t make a
                single sat from transactions to ensure a truly peer to peer
                marketplace powered by the hardest currency to ever exist.
                Please consider donating some extra sats to help support
                development
              </p>
              <a
                href="#"
                className="button is-orange margin-top margin-small w-button"
              >
                Donate
              </a>
            </div>
            <div className="layout1_image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6417539f6288393f8332c7c6_donate.webp"
                loading="lazy"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"

                alt=""
                className="layout1_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

      </main>
      </div></>
    )
}

export default DefaultView;