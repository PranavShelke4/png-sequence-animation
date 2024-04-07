import React from "react";

export const Skeleton = ({
  count = 1,
  width = null,
  wrapper: Wrapper = null,
  height = null,
  circle = false,
  margin = 0
}) => {
  const style = {
    margin: margin,
    width: width,
    height: height,
    borderRadius: circle && width !== null && height !== null ? "100%" : null
  };

  const skeletonElement = (
    <span className="skeleton" style={style}>
      &zwnj;
    </span>
  );

  if (Wrapper) {
    return (
      <span>
        {Array.from({ length: count }, (_, index) => (
          <Wrapper key={index}>{skeletonElement}</Wrapper>
        ))}
      </span>
    );
  }

  return Array.from({ length: count }, (_, index) => (
    <span key={index}>{skeletonElement}</span>
  ));
};
