"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useMemo, useState } from "react";
import {
  fetchSimpleIcons,
  Cloud,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

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

const renderCustomIcon = (icon: SimpleIcon) => {
  // TODO: Add a tooltip with the icon name and link
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export const DynamicCloud = ({ iconSlugs }: DynamicCloudProps) => {
  const [icons, setIcons] = useState<SimpleIcon[]>();
  const matches = useMediaQuery("(max-width: 1400px)");

  console.log(matches);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then((data) => {
      if (data.simpleIcons) {
        setIcons(Object.values(data.simpleIcons));
      }
    });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!icons) {
      return null;
    }

    return icons.map((i) => renderCustomIcon(i));
  }, [icons]);

  const newCloudProps: Omit<ICloud, "children"> = {
    ...cloudProps,
    canvasProps: {
      ...cloudProps.canvasProps,
      ...{
        style: {
          width: "100%",
          maxWidth: matches ? 350 : 600,
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
