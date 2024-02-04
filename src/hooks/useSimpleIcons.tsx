import { renderCustomIcon } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { SimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

export type UseSimpleIcons = {
  iconSlugs: string[];
};

export default function useSimpleIcons({ iconSlugs }: UseSimpleIcons) {
  const [icons, setIcons] = useState<SimpleIcon[]>();

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

  return {
    renderedIcons,
  };
}
