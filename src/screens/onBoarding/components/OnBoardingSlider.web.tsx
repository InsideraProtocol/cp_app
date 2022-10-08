import React, { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import {
  onBoardingOne,
  onBoardingThree,
  onBoardingTwo,
} from "../../../assets/images";
import { Card, Image, Spacer, Text } from "../../../components/Kit";
import { colors, Colors } from "../../../stylesheet";
import { SliderDots } from "./SliderDots";

export type OnBoardingSlide = {
  image: number;
  heading: string;
  content: string;
  width: string;
  height: string;
};

export function OnBoardingSlider() {
  const { t } = useTranslation();

  const carouselRef = useRef<Slider>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (value) => setCurrentStep(value),
    }),
    []
  );

  const onBoardingData: OnBoardingSlide[] = [
    {
      image: onBoardingOne,
      heading: "onBoarding.first.title",
      content: "onBoarding.first.details",
      width: "360px",
      height: "204px",
    },
    {
      image: onBoardingTwo,
      heading: "onBoarding.second.title",
      content: "onBoarding.second.details",
      width: "68px",
      height: "240px",
    },
    {
      image: onBoardingThree,
      heading: "onBoarding.third.title",
      content: "onBoarding.third.details",
      width: "243px",
      height: "200px",
    },
  ];
  const isEnd = currentStep === onBoardingData.length - 1;

  const handleSelectItem = useCallback(
    (index: number) => {
      if (isEnd) {
        console.log("end here");
      }
      console.log(carouselRef.current.slickGoTo(index));
    },
    [isEnd]
  );

  return (
    <Card _overflow="hidden">
      <Slider {...settings} ref={carouselRef}>
        {onBoardingData?.map((item) => (
          <Card key={item.heading}>
            <Card>
              <Card
                bg={Colors.lightGreen}
                _height="480px"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  _width={item.width}
                  _height={item.height}
                  source={item.image}
                />
              </Card>
              <Spacer />
              <SliderDots
                dots={onBoardingData.length}
                onSelect={handleSelectItem}
                currentStep={currentStep}
              />
              <Card
                justifyContent="center"
                alignItems="center"
                padding={[2, 6]}
              >
                <Text typo="title" bold color={Colors.dark}>
                  {item.heading}
                </Text>
                <Spacer />
                <Text typo="xs" color={Colors.gray} _textAlign="center">
                  {item.content}
                </Text>
              </Card>
            </Card>
          </Card>
        ))}
      </Slider>
    </Card>
  );
}
