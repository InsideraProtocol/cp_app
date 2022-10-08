import React, { useCallback, useEffect } from "react";

import * as Images from "../../assets/images";
import { isWeb } from "../../utils/web";
import { Image as KitImage } from "../Kit/Image";

const images = [...Object.values(Images)];

export function PreloadImage() {
  useEffect(() => {
    if (isWeb()) {
      preFetchImageWeb();
    }
  }, []);

  const preFetchImageWeb = useCallback(() => {
    images?.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return isWeb() ? (
    <></>
  ) : (
    <>
      {images.map((image, i) => {
        return (
          <KitImage
            source={image}
            key={`${image}-${i}`}
            _width="0px"
            _height="0px"
          />
        );
      })}
    </>
  );
}
