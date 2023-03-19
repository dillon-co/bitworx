import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Lottie from "lottie-react";

function ShowTalentListing() {

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpen = () => {
        setTimeout(() => {setLoading(false)}, 2500)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const [animationData, setAnimationData] = useState(null);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        '&:focus': {
            outline: 'none',
          }
      };


        useEffect(() => {
            fetch('https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6417757cf5b343f20d4bcb68_353-newspaper-spinner.json')
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error('Error fetching Lottie JSON:', error));
        }, []);

    return(
        <>
<div className="page-wrapper">

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {loading && 
        <Lottie animationData={animationData} loop={true} />
    }{ !loading &&
    <>
        <div className="bitcoin_address">
                Send <strong>₿</strong> .0003 to the escrow to lock up funds. Once the project is complete both parties will sign and <strong>Joshua Pujol</strong> will recieve payment
                </div>
            <div className="qr_wrapper">
                
                <img
                    src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416348157aec227e2c843b7_Bitcoin.svg.png"
                    loading="lazy"
                    sizes="72px"
                    
                    alt=""
                    className="bitcoin-qr-logo"
                />
                <img
                    src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/6416342d2eb27f781df613e9_download%20(4).png"
                    loading="lazy"
                    alt=""
                    className="image"
                />
            </div>
    </>
    }
  </Box>
</Modal>

  <main af-view="job-listing" className="main-wrapper">
    <header className="section_product-header3">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="product-header3_component">
              <div className="w-layout-grid product-header3_layout">
                <div className="product-header3_product-details">
                  <div className="product-header3_breadcrumb">
                    <a href="#" className="breadcrumb-link w-inline-block">
                      <div>Talent</div>
                    </a>
                    <div className="breadcrumb-divider w-embed">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="CurrentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <a href="#" className="breadcrumb-link w-inline-block">
                      <div>Web Development</div>
                    </a>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h3">Web Design</h1>
                  </div>
                  <div className="margin-bottom margin-small">
                    <p>
                      Are you in need of a stunning website that will captivate
                      your audience and help you stand out from the competition?
                      Look no further! I am an experienced web designer with a
                      passion for creating beautiful, user-friendly websites
                      that drive results.
                      <br />
                      <br />
                      With over 5 years of experience in web design, I have
                      honed my skills in creating custom websites that meet the
                      unique needs of each of my clients. Whether you're a small
                      business owner looking to establish your online presence,
                      or a large corporation in need of a website redesign, I
                      have the expertise to bring your vision to life.
                    </p>
                  </div>
                  <div className="product-header3_add-to-cart w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="product-header3_default-state"
                    >
                      <a
                        href="#"
                        className="button is-icon margin-right margin-small is-orange w-inline-block"
                      >
                        <div>Contact</div>
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M231.3 31.7A16.1 16.1 0 0 0 215 29L30.4 101.5a15.8 15.8 0 0 0-10.1 16.3a16 16 0 0 0 12.8 14.3l46.9 9.3V200a16 16 0 0 0 9.9 14.8A16.6 16.6 0 0 0 96 216a15.8 15.8 0 0 0 11.3-4.7l26-25.9l39.3 34.6a16 16 0 0 0 10.5 4a14.2 14.2 0 0 0 5-.8a15.9 15.9 0 0 0 10.7-11.6l37.6-164.2a16 16 0 0 0-5.1-15.7ZM86.1 126.3l-49.8-9.9l139.6-54.9ZM96 200v-47.4l25.2 22.2Zm87.2 8l-82.4-72.5l118.7-85.7Z"
                            />
                          </svg>
                        </div>
                      </a>
                      <a onClick={handleOpen} className="button is-orange w-button">
                        Hire Talent
                      </a>
                    </form>
                    <div className="out-of-stock-state w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-state w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                  <div className="product-header3_accordion-wrapper">
                    <div className="product-header3_accordion">
                      <div className="product-header3_heading">
                        <div className="text-weight-semibold text-size-medium">
                          Details
                        </div>
                      </div>
                      <div className="product-header3_details">
                        <div className="margin-bottom margin-small">
                          <div className="w-richtext">
                            <p>Here's what I can offer you:</p>
                            <ul role="list">
                              <li>
                                A modern, professional, and visually appealing
                                website design
                              </li>
                              <li>
                                A layout that is easy to navigate and
                                user-friendly
                              </li>
                              <li>
                                Custom graphics, images, and visual elements
                                that align with your brand
                              </li>
                              <li>
                                A responsive design that looks great on all
                                devices
                              </li>
                              <li>
                                Collaborative approach to ensure your vision is
                                met
                              </li>
                            </ul>
                            <p>Requirements:</p>
                            <ul role="list">
                              <li>
                                A clear project brief outlining your website
                                requirements and goals
                              </li>
                              <li>
                                Any relevant branding materials, such as logos,
                                color schemes, and images
                              </li>
                              <li>A timeline for the project</li>
                              <li>
                                Clear communication throughout the project
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-header3_main-image-wrapper">
                    <img
                      src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641636c07dad69d041f2e0d3_Group%203.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, 52vw"

                      alt=""
                      className="product-header3_main-image"
                    />
                  </div>
                  <div className="product-header3_list">
                    <div className="product-header3_item">
                      <a
                        href="#"
                        className="product-header3_lightbox-link w-inline-block w-lightbox"
                      >
                        <div className="product-header3_image-wrapper">
                          <img
                            src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641636c021beaba3e2c7501c_Group%205.webp"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, 16vw"

                            alt=""
                            className="product-header3_image"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="product-header3_item">
                      <a
                        href="#"
                        className="product-header3_lightbox-link w-inline-block w-lightbox"
                      >
                        <div className="product-header3_image-wrapper">
                          <img
                            src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641636c0fbe89f6e44a90ed9_Group%208.webp"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, 16vw"
 
                            alt=""
                            className="product-header3_image"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="product-header3_item">
                      <a
                        href="#"
                        className="product-header3_lightbox-link w-inline-block w-lightbox"
                      >
                        <div className="product-header3_image-wrapper">
                          <img
                            src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641636c0fbe89f0c4ea90ed8_Group%207.webp"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, 16vw"
               
                            alt=""
                            className="product-header3_image"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-b8657ee5-8792-2caa-05ea-edfc19ea9cbe-b8a87d3b"
                  className="product-header3_gallery"
                >
                  <a
                    href="#"
                    id="w-node-b8657ee5-8792-2caa-05ea-edfc19ea9cbf-b8a87d3b"
                    className="product-header3_lightbox-link w-inline-block w-lightbox"
                  >
                    <div className="talent_portfolio">
                      <img src="https://uploads-ssl.webflow.com/63f55220e76aa41c96709c83/641631bb04ae8abe95b5bb25_16.webp" loading="lazy" alt="" />
                      <div className="star_wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m234 115.5l-45.2 37.6l14.3 58.1a16.5 16.5 0 0 1-15.8 20.8a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.5 18.5 0 0 1-7-19.6l13.5-53.1L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.5 16.5 0 0 1 31.4 86l59-3.8l22.4-55.8A16.4 16.4 0 0 1 128 16a16.4 16.4 0 0 1 15.2 10.4l22 55.5l59.4 4.1a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1Z"
                            />
                          </svg>
                        </div>
                        <div className="icon-embed-small w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m234 115.5l-45.2 37.6l14.3 58.1a16.5 16.5 0 0 1-15.8 20.8a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.5 18.5 0 0 1-7-19.6l13.5-53.1L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.5 16.5 0 0 1 31.4 86l59-3.8l22.4-55.8A16.4 16.4 0 0 1 128 16a16.4 16.4 0 0 1 15.2 10.4l22 55.5l59.4 4.1a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1Z"
                            />
                          </svg>
                        </div>
                        <div className="icon-embed-small w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m234 115.5l-45.2 37.6l14.3 58.1a16.5 16.5 0 0 1-15.8 20.8a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.5 18.5 0 0 1-7-19.6l13.5-53.1L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.5 16.5 0 0 1 31.4 86l59-3.8l22.4-55.8A16.4 16.4 0 0 1 128 16a16.4 16.4 0 0 1 15.2 10.4l22 55.5l59.4 4.1a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1Z"
                            />
                          </svg>
                        </div>
                        <div className="icon-embed-small w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m234 115.5l-45.2 37.6l14.3 58.1a16.5 16.5 0 0 1-15.8 20.8a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.5 18.5 0 0 1-7-19.6l13.5-53.1L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.5 16.5 0 0 1 31.4 86l59-3.8l22.4-55.8A16.4 16.4 0 0 1 128 16a16.4 16.4 0 0 1 15.2 10.4l22 55.5l59.4 4.1a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1Z"
                            />
                          </svg>
                        </div>
                        <div className="icon-embed-small w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m234 115.5l-45.2 37.6l14.3 58.1a16.5 16.5 0 0 1-15.8 20.8a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.5 18.5 0 0 1-7-19.6l13.5-53.1L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.5 16.5 0 0 1 31.4 86l59-3.8l22.4-55.8A16.4 16.4 0 0 1 128 16a16.4 16.4 0 0 1 15.2 10.4l22 55.5l59.4 4.1a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="bitcoin_address">
                        <strong>Name</strong>:&nbsp;Joshua Pujol
                      </div>
                      <div className="bitcoin_address">
                        <strong>Jobs Complete</strong>:&nbsp;8
                      </div>
                      <div className="bitcoin_address">
                        <strong>Address</strong>:&nbsp;
                        1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                      </div>

                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </main>
</div>

</>
    )
}

export default ShowTalentListing;