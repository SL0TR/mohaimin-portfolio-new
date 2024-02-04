"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useSimpleIcons from "@/hooks/useSimpleIcons";
import { Cloud, ICloud } from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    maxSpeed: 0.08,
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export const DynamicCloud = ({ iconSlugs }: DynamicCloudProps) => {
  const { renderedIcons } = useSimpleIcons({ iconSlugs });
  const isXlScreen = useMediaQuery("(min-width: 1400px)");

  const newCloudProps: Omit<ICloud, "children"> = {
    ...cloudProps,
    canvasProps: {
      ...cloudProps.canvasProps,
      ...{
        style: {
          width: "100%",
          maxWidth: isXlScreen ? 470 : 320,
        },
      },
    },
  };

  return (
    <Cloud {...newCloudProps}>
      <></>
      {renderedIcons}
    </Cloud>
  );
};

export default DynamicCloud;
