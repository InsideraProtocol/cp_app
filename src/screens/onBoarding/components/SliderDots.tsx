import React, { Fragment } from "react";
import { Card, Spacer, TouchableOpacity } from "../../../components/Kit";
import { Colors, Curves } from "../../../stylesheet";

export type SliderDotsProps = {
  dots: number;
  onSelect: (step: number) => void;
  currentStep: number;
};

export function SliderDots(props: SliderDotsProps) {
  const { dots, currentStep, onSelect } = props;
  console.log(dots, "dots");
  return (
    <Card flexDirection="row" justifyContent="center">
      {Array(dots)
        .fill(dots)
        .map((_dot, index) => (
          <Fragment key={index}>
            <Spacer times={0.5} />
            <TouchableOpacity onPress={() => onSelect(index)}>
              <Card
                curve={Curves.xs}
                _width="9.6px"
                _height="9.6px"
                bg={Colors.gray100}
                borderStyle={index === currentStep ? "solid" : undefined}
                borderColor={Colors.dark}
                borderWidth="2px"
              />
            </TouchableOpacity>
            <Spacer times={0.5} />
          </Fragment>
        ))}
    </Card>
  );
}
