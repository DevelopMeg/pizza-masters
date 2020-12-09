import React, { useEffect, useRef } from "react";

import { useHistory } from "react-router-dom";

import { SectionTitleStyle } from "../../../styles/CommonStyles";
import {
  StepsStyle,
  StepStyle,
  StepNumberStyle,
  StepNameStyle,
  StepButtonOrderStyle,
  StepBoxArrowStyle,
  StepArrowStyle,
  StepArrowSignStyle,
} from "../../../styles/HomePageStyles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OrderSteps = () => {
  const history = useHistory();

  const handleOpenNewPage = (path) => {
    history.push(path);
  };

  const steps = [
    "choose pizza",
    "choose size pizza",
    "choose extra ingredients",
    "choose sauce",
    "order pizza",
  ];

  const stepsList = steps.map((step, id) => {
    return (
      <React.Fragment key={step}>
        <StepStyle>
          <StepNumberStyle>{id + 1}</StepNumberStyle>
          <StepNameStyle>{step}</StepNameStyle>
        </StepStyle>

        <StepBoxArrowStyle>
          <StepArrowStyle
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <StepArrowSignStyle d="M17.554 12l-6 6h-3.979l3.093-3h-10.668v-6h10.668l-3.093-3h3.979l6 6zm.446-6h-3.979l6 6-6 6h3.979l6-6-6-6z" />
          </StepArrowStyle>
        </StepBoxArrowStyle>
      </React.Fragment>
    );
  });

  // ANIMATIONS GSAP

  const refSectionSteps = useRef();
  const refButtonOrder = useRef();

  useEffect(() => {
    const sectionSteps = refSectionSteps.current;
    const buttonOrder = refButtonOrder.current;

    gsap.set([sectionSteps, buttonOrder], { autoAlpha: 0 });
    gsap.set(buttonOrder, { transformOrigin: "50% 50%" });

    gsap.fromTo(
      sectionSteps,
      { x: "-=100" },
      {
        duration: 0.8,
        x: 0,
        autoAlpha: 1,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: refSectionSteps.current,
          start: "top 70%",
        },
      }
    );

    gsap.to(buttonOrder, {
      duration: 0.8,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: refSectionSteps.current,
        start: "top 70%",
      },
    });
  });

  return (
    <section>
      <SectionTitleStyle>order pizza online</SectionTitleStyle>
      <StepsStyle ref={refSectionSteps}>{stepsList}</StepsStyle>
      <StepButtonOrderStyle
        ref={refButtonOrder}
        onClick={() => handleOpenNewPage("/order")}
      >
        check menu
      </StepButtonOrderStyle>
    </section>
  );
};

export default OrderSteps;
