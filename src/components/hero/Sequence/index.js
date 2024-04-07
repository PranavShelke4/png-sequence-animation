import React, { forwardRef } from "react";
import { Skeleton } from "../Skeleton";
import ImageArray from "./ImageArray";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = ImageArray();
  const index = Math.round(progress * (newImages.length - 1));

  return (
    <>
      {newImages.map((item, i) => (
        <div
          ref={ref}
          key={i}
          style={{
            display: i !== index ? "none" : "block",
            height: "100%",
            width: "100%",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      ))}
      {newImages[index][1] === "loading" && (
        <Skeleton width="100%" height="100%" />
      )}
    </>
  );
});

export default ImageSequence;
