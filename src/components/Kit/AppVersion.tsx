import React from "react";

import { CenterText, CenterTextProps } from "../Kit/CenterText";
import { Colors } from "../../stylesheet";
import { version } from "package.json";

export type AppVersionProps = CenterTextProps;

export function AppVersion(props: AppVersionProps) {
  return (
    <CenterText
      color={Colors.gray300}
      typo="xs"
      translationParams={{ version }}
      {...props}
    >
      about.version
    </CenterText>
  );
}
