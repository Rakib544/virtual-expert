import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import bannerImg from "../../../../images/Img-5.svg";
import styles from "./banner.module.css";

const Banner = ({ bannerData, footerLink }) => {
  const router = useRouter();
  return (
    <>
      <div className={`${styles.bannerContainer}`}>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h1 className="fs-36 banner-lh-52 font-family-roboto">
                {bannerData[0].title}
              </h1>
              <p className="fs-15 lh-30">{bannerData[0].description}</p>
              <button
                className="button px-4 py-1"
                onClick={() => router.push("/popUp")}
              >
                <h4 className="d-inline fs-14 font-family-roboto">
                  Get Free Quote!
                </h4>
              </button>
            </div>
            <div className="col-md-6 order-1 order-md-2 pb-5 pb-md-0">
              <Image src={bannerImg} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>

      {/* social link goes here */}
      <div className="position-fixed left-0 top-30">
        <a
          target="_blank"
          title={footerLink.skype}
          className="position-relative d-flex align-items-center test"
        >
          <FaSkype
            className="d-block cursor-pointer px-2 order-color bg-white fixedIcon"
            size={40}
          />
          <span className="social-address fs-12 ms-1 text-secondary">
            Skype: {footerLink[0].skype}
          </span>
        </a>
        <a
          target="_blank"
          title={footerLink.whatsApp}
          className="position-relative d-flex align-items-center test"
        >
          <IoLogoWhatsapp
            className="d-block cursor-pointer px-2 order-color bg-white fixedIcon"
            size={40}
          />
          <span className="social-address fs-12 ms-1 text-secondary">
            WhatsApp: {footerLink[0].whatsApp}
          </span>
        </a>
        <a
          target="_blank"
          title={footerLink.email}
          className="position-relative d-flex align-items-center test"
        >
          <MdEmail
            className="d-block cursor-pointer px-2 order-color bg-white fixedIcon"
            size={40}
          />
          <span className="social-address fs-12 ms-1 text-secondary">
            Email: {footerLink[0].email}
          </span>
        </a>
      </div>
    </>
  );
};

export default Banner;
