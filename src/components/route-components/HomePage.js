import React, { useEffect, useRef } from "react";

import OrderSteps from "../subcomponents/HomePageComponents/OrderSteps";
import NewProducts from "../subcomponents/HomePageComponents/NewProducts";
import Team from "../subcomponents/HomePageComponents/Team";
import Contact from "../subcomponents/HomePageComponents/Contact";

import gsap from "gsap";
import { ReactComponent as MainPhoto } from "../../images/main-image.svg";

import { BoxMainImageStyle } from "../../styles/HomePageStyles";

const HomePage = ({ errMenuItems, menuItems }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boxMainPhoto = useRef(null);

  useEffect(() => {
    const elements = boxMainPhoto.current.children[0];

    const background = elements.getElementById("background");
    const people = elements.getElementById("people");
    const shadows = elements.getElementById("shadows");
    const backgroundShapes = elements.getElementById("backgroundShapes");

    gsap.set([background, people, shadows, ...backgroundShapes.children], {
      autoAlpha: 0,
    });
    gsap.set(people, { transformOrigin: "50% 50%" });

    const tl = gsap.timeline();

    tl.fromTo(background, { duration: 0.8, y: "-=100" }, { autoAlpha: 1, y: 0 })
      .fromTo(people, { duration: 1, scale: 0 }, { autoAlpha: 1, scale: 1 })
      .to(shadows, { duration: 0.8, autoAlpha: 1 })
      .to(backgroundShapes.children, {
        duration: 2,
        autoAlpha: 1,
        stagger: 0.2,
      });
  }, []);

  return (
    <>
      <BoxMainImageStyle ref={boxMainPhoto}>
        <MainPhoto />
      </BoxMainImageStyle>

      <OrderSteps />
      {!errMenuItems && <NewProducts menuItems={menuItems} />}
      <Team />
      <Contact />
    </>
  );
};

export default HomePage;
