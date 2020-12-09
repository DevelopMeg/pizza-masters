import React, { useRef, useEffect } from "react";

import { IconHiddenStyle } from "../../../styles/CommonStyles";
import {
  SocialIconsStyle,
  SocialIconStyle,
  SocialIconLinkStyle,
  ContactInfoSectionStyle,
  ContactInfoBoxStyle,
  ContactInfoStyle,
  ContactIconStyle,
  ContactTextStyle,
  ContactMapStyle,
} from "../../../styles/HomePageStyles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const socialIcons = [
    { icon: "fab fa-facebook-f", path: "https://www.facebook.com" },
    { icon: "fab fa-instagram", path: "https://www.instagram.com/" },
    { icon: "fab fa-twitter", path: "https://twitter.com/" },
    { icon: "fab fa-pinterest-p", path: "https://www.pinterest.com" },
  ];

  const socialIconsList = socialIcons.map((socialIcon) => {
    return (
      <SocialIconStyle key={socialIcon.icon}>
        <SocialIconLinkStyle href={socialIcon.path} target="_blank">
          <IconHiddenStyle className={socialIcon.icon}></IconHiddenStyle>
        </SocialIconLinkStyle>
      </SocialIconStyle>
    );
  });

  const contactInfo = [
    { icon: "fas fa-phone-square", text: "777 777 777" },
    { icon: "fas fa-envelope-square", text: "pizzamasters@email.com" },
    { icon: "fas fa-clock", text: "10 a.m - 10 p.m" },
    {
      icon: "fas fa-map-marker-alt",
      text: "London, 61 Chartlotte Rd",
    },
  ];

  const contactInfoList = contactInfo.map((info) => {
    return (
      <ContactInfoStyle key={info.icon}>
        <ContactIconStyle className={info.icon}></ContactIconStyle>
        <ContactTextStyle>{info.text}</ContactTextStyle>
      </ContactInfoStyle>
    );
  });

  // ANIMATIONS GSAP

  const refSocialIcons = useRef();

  useEffect(() => {
    const elementsSocialIcons = [...refSocialIcons.current.children];

    elementsSocialIcons.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, scale: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          scale: 1,
          scrollTrigger: {
            trigger: refSocialIcons.current,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section>
      <SocialIconsStyle ref={refSocialIcons}>
        {socialIconsList}
      </SocialIconsStyle>

      <ContactInfoBoxStyle>
        <ContactInfoSectionStyle>{contactInfoList}</ContactInfoSectionStyle>

        <ContactMapStyle
          title="address map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.5766078947426!2d-0.08165747073467!3d51.525939198727364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cba9897106b%3A0x5adb1c45fb09aaff!2s61%20Charlotte%20Rd%2C%20Hackney%2C%20London%20EC2A%203QT%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1605634022464!5m2!1spl!2spl"
        ></ContactMapStyle>
      </ContactInfoBoxStyle>
    </section>
  );
};

export default Contact;
