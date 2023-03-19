import React from "react";

function ShowTalent() {
    return(
    

<div className="page-wrapper">
  <main af-view="job-listing" className="main-wrapper">
    <section className="section_filters1">
      <div className="filters-1-instructions-delete">
        <div className="container-small">
          <div className="filters1_instructions-callout">
            <div className="margin-bottom margin-xxsmall">
              <div className="text-weight-semibold">
                Important:
                <br />
              </div>
            </div>
            <div>
              This component uses Transforms (Move Down 100%) to hide and show
              modal (on Tablet) so that filters apply once the user hits the
              apply button (optimal UX). Using the display: hidden will prevent
              the apply button from working.
              <br />
              <br />
              To show and hide the modal for editing purposes on Tablet:
              <br />
            </div>
            <ul role="list" className="filters_instructions-list">
              <li>
                Select the{" "}
                <span className="rl-styleguide_label">
                  filters1_filters-wrapper
                </span>{" "}
                inside the parent div{" "}
                <span className="rl-styleguide_label">filters1_layout</span>{" "}
                div.
              </li>
              <li>
                Hit the Hide button and it will show (yes this is
                counterintuitive).
              </li>
            </ul>
            <img
              src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/629438693454650adbcffc04_filters3_callout-image.png"
              loading="lazy"
              width={240}
              alt=""
              className="filters_instructions-callout-image"
            />
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom margin-xxlarge">
              <div className="max-width-large">
                <div className="margin-bottom margin-small">
                  <h2>Find Talent</h2>
                </div>
                <p className="text-size-medium">Search for your freelancer</p>
              </div>
            </div>
            <div className="filters1_component">
              <div className="filters1_layout">
                <div
                  id="w-node-_39530ef4-f7c9-b928-fe2e-2529d0e250d7-8ff67df5"
                  className="filters1_filters-wrapper"
                >
                  <div
                    id="w-node-_39530ef4-f7c9-b928-fe2e-2529d0e250d8-8ff67df5"
                    className="filters1_form-block w-form"
                  >
                    <form
                      id="wf-form-Filter-1"
                      name="wf-form-Filter-1"
                      data-name="Filter 1"
                      method="get"
                      fs-cmsfilter-element="filters"
                      className="filters1_form"
                    >
                      <div
                        id="w-node-_39530ef4-f7c9-b928-fe2e-2529d0e250da-8ff67df5"
                        className="filters1_form-header"
                      >
                        <div className="filters1_heading">Filters</div>
                        <a
                          fs-cmsfilter-element="reset"
                          href="#"
                          className="button w-inline-block"
                        >
                          <div>Clear all</div>
                        </a>
                      </div>
                      <div className="filters1_results-wrapper">
                        <div className="filters1_results-text">
                          Showing of 9
                        </div>
                      </div>
                      <div className="filters1_category-list">
                        <a href="#" className="filters1_category-link">
                          All
                        </a>
                      </div>
                      <div className="filters1_filter-options">
                        <div className="filters1_list-wrapper">
                          <div className="filters1_list">
                            <div className="filters1_item">
                              <div className="filters1_keyword-search">
                                <input
                                  type="text"
                                  className="form-input is-search-input w-input"
                                  maxLength={256}
                                  name="field"
                                  fs-cmsfilter-field="IDENTIFIER"
                                  data-name="Field"
                                  placeholder="Keyword"
                                  fs-cmsfilter-debounce={200}
                                  id="field"
                                />
                                <div className="search-icon w-embed">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M16.875 15.4554L20.875 19.4602C21.0536 19.6589 21.0448 19.9631 20.855 20.1511L20.155 20.8519C20.0611 20.9467 19.9333 21 19.8 21C19.6667 21 19.5389 20.9467 19.445 20.8519L15.445 16.8471C15.3344 16.7362 15.234 16.6156 15.145 16.4867L14.395 15.4855C13.1541 16.4776 11.613 17.0178 10.025 17.0173C6.75261 17.0287 3.90902 14.7686 3.17773 11.5751C2.44643 8.38161 4.0226 5.10699 6.9731 3.68991C9.92359 2.27284 13.461 3.09151 15.491 5.66125C17.521 8.23099 17.5019 11.866 15.445 14.4142L16.445 15.105C16.6012 15.2051 16.7454 15.3226 16.875 15.4554ZM5.025 10.0089C5.025 12.7736 7.26357 15.0149 10.025 15.0149C11.3511 15.0149 12.6229 14.4875 13.5605 13.5487C14.4982 12.6099 15.025 11.3366 15.025 10.0089C15.025 7.24412 12.7864 5.00285 10.025 5.00285C7.26357 5.00285 5.025 7.24412 5.025 10.0089Z"
                                      fill="CurrentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters1_filter-group-list">
                        <div className="filters1_filter-group">
                          <div className="filters1_filter-group-heading">
                            <div className="text-size-medium text-weight-semibold">
                              Filter One
                            </div>
                            <img
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/63100e186fb3915374888cdb_icon_group-chevron.svg"
                              alt=""
                              className="filters1_accordion-icon"
                            />
                          </div>
                          <div className="filters1_filter-options">
                            <div className="filters1_list-wrapper">
                              <div className="filters1_list">
                                <div className="filters1_item">
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-1"
                                      id="Filter-One-Option-1"
                                      data-name="Filter One Option 1"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                      
                                    >
                                      Art
                                    </span>
                                  </label>
                                </div>
                                <div className="filters1_item">
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-2"
                                      id="Filter-One-Option-2"
                                      data-name="Filter One Option 2"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                      
                                    >
                                      Logo Design
                                    </span>
                                  </label>
                                </div>
                                <div className="filters1_item">
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-3"
                                      id="Filter-One-Option-3"
                                      data-name="Filter One Option 3"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                      
                                    >
                                      Software Development
                                    </span>
                                  </label>
                                </div>
                                <div className="filters1_item">
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-4"
                                      id="Filter-One-Option-4"
                                      data-name="Filter One Option 4"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                      
                                    >
                                      Web Design
                                    </span>
                                  </label>
                                </div>
                                <div className="filters1_item">
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-5"
                                      id="Filter-One-Option-5"
                                      data-name="Filter One Option 5"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                      
                                    >
                                      Voice Over
                                    </span>
                                  </label>
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-5"
                                      id="Filter-One-Option-5"
                                      data-name="Filter One Option 5"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                            
                                    >
                                      Video Editing
                                    </span>
                                  </label>
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-5"
                                      id="Filter-One-Option-5"
                                      data-name="Filter One Option 5"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                     
                                    >
                                      Writing
                                    </span>
                                  </label>
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-5"
                                      id="Filter-One-Option-5"
                                      data-name="Filter One Option 5"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                    
                                    >
                                      Illustration
                                    </span>
                                  </label>
                                  <label className="w-checkbox filters1_form-checkbox1">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filters1_form-checkbox1-icon" />
                                    <input
                                      type="checkbox"
                                      name="Filter-One-Option-5"
                                      id="Filter-One-Option-5"
                                      data-name="Filter One Option 5"
                                      style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: -1
                                      }}
                                    />
                                    <span
                                      fs-cmsfilter-field="IDENTIFIER"
                                      className="filters1_form-checkbox1-label w-form-label"
                                     
                                    >
                                      Data Entry
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="filters1_filter-group">
                          <div className="filters1_filter-group-heading">
                            <div className="text-size-medium text-weight-semibold">
                              Budget
                            </div>
                            <img
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/63100e186fb3915374888cdb_icon_group-chevron.svg"
                              alt=""
                              className="filters1_accordion-icon"
                            />
                          </div>
                          <div className="filters1_filter-options">
                            <div className="filters1_list-wrapper">
                              <div className="filters1_list">
                                <div className="filters1_item">
                                  <div
                                    fs-rangeslider-formatdisplay="true"
                                    fs-rangeslider-element="wrapper"
                                    fs-rangeslider-min={0}
                                    fs-rangeslider-max={100}
                                    className="filters1_rangeslider2-wrapper"
                                  >
                                    <div
                                      fs-rangeslider-element="track"
                                      className="filters1_rangeslider2-track"
                                    >
                                      <div
                                        aria-label="minimum price"
                                        fs-rangeslider-element="handle"
                                        className="filters1_rangeslider2-handle-left"
                                      />
                                      <div
                                        aria-label="maximum price"
                                        fs-rangeslider-element="handle"
                                        className="filters1_rangeslider2-handle-right"
                                      />
                                      <div
                                        fs-rangeslider-element="fill"
                                        className="filters1_rangeslider2-fill"
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      className="filters1_rangeslider2-input w-input"
                                      maxLength={256}
                                      name="From-3"
                                      fs-cmsfilter-field="IDENTIFIER"
                                      data-name="From 3"
                                      fs-cmsfilter-range="from"
                                      placeholder="From"
                                      id="From-3-B"
                                    />
                                    <input
                                      type="text"
                                      className="filters1_rangeslider2-input w-input"
                                      maxLength={256}
                                      name="To-3"
                                      fs-cmsfilter-field="IDENTIFIER"
                                      data-name="To 3"
                                      fs-cmsfilter-range="to"
                                      placeholder="To"
                                      id="To-3-A"
                                    />
                                    <div className="filters1_rangeslider2-values">
                                      <div
                                        fs-rangeslider-element="display-value"
                                        className="filters1_rangeslider2-text"
                                      >
                                        <strong>₿</strong> 0
                                      </div>
                                      <div
                                        fs-rangeslider-element="display-value"
                                        className="filters1_rangeslider2-text"
                                      >
                                        <strong>₿</strong> 10{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters1_tablet-modal-menu">
                        <a
                          fs-cmsfilter-element="reset"
                          href="#"
                          className="button is-link w-inline-block"
                        >
                          <div>Clear all</div>
                        </a>
                        <input
                          type="submit"
                          defaultValue="Apply"
                          data-wait=""
                          data-w-id="39530ef4-f7c9-b928-fe2e-2529d0e251c9"
                          className="button w-button"
                        />
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                  <a
                    data-w-id="39530ef4-f7c9-b928-fe2e-2529d0e251d0"
                    href="#"
                    className="filters1_tablet-modal-close-button w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg"
                      alt=""
                      className="icon-1x1-small"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_39530ef4-f7c9-b928-fe2e-2529d0e251d6-8ff67df5"
                  className="filters1_feed"
                >
                  <div className="feed-content-replace-this-div">
                    <div className="w-layout-grid product4_list">
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641631bb04ae8abe95b5bb25_16.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Joshua Pujol
                              </div>
                              <div className="text-size-small">Web Design</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.0003
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="/talent-joshua-pujol"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416413a36dcd3507ae4c341_17.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Madison Kim
                              </div>
                              <div className="text-size-small">Art</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.01
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416413a3669f8d33b15c3ad_08.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Isabella Chen
                              </div>
                              <div className="text-size-small">Logo Design</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.002
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416413ab071a7ff8374b5ac_20.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Sophia Patel
                              </div>
                              <div className="text-size-small">Art</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.003
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416413936dcd398a3e4c33f_14.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Aiden Kumar
                              </div>
                              <div className="text-size-small">Voice over</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.004
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641641399f12e06198e06d20_15.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Noah Li
                              </div>
                              <div className="text-size-small">
                                Video editing
                              </div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.002
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416418bc7afb70324626a68_05.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Ethan Wong
                              </div>
                              <div className="text-size-small">Variant</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.001
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416418b44e6f123c648907b_07.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Lucas Huang
                              </div>
                              <div className="text-size-small">Variant</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.0089
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                      <div className="product4_item">
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_image-link w-inline-block"
                          >
                            <div className="product4_image-wrapper">
                              <img
                                src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416413a04ae8acc5bb6a795_09.webp"
                                loading="lazy"
                                alt=""
                                className="product4_image"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="margin-bottom margin-xsmall">
                          <a
                            href="#"
                            className="product4_text-link w-inline-block"
                          >
                            <div className="margin-bottom margin-xxsmall">
                              <div className="text-size-medium text-weight-semibold">
                                Ava Singh
                              </div>
                              <div className="text-size-small">Variant</div>
                            </div>
                            <div className="text-size-large text-weight-semibold">
                              <strong>₿</strong> 0.0089
                            </div>
                          </a>
                        </div>
                        <div className="margin-top-auto">
                          <a
                            href="#"
                            className="button is-secondary is-small w-button"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>


    )
}

export default ShowTalent;