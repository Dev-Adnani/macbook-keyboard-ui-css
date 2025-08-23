import React from "react";
import { cn } from "../../lib/utils";
import { getSVGIcon, iconMap, dualLabels } from "./icons";

interface KeyProps {
  label: string;
  className?: string;
  secondaryLabel?: string;
}

const Key = ({ label, className, secondaryLabel }: KeyProps) => {
  const svgIcon = iconMap[label] ? getSVGIcon(iconMap[label]) : null;
  const dualLabel = dualLabels.get(label);

  // Determine the content to display
  const hasIcon = !!svgIcon;
  const hasSecondaryLabel = !!(secondaryLabel || dualLabel);
  const topText = secondaryLabel || dualLabel;

  return (
    <div
      className={cn(
        "flex cursor-pointer bg-neutral-900 text-white rounded-md shadow-sm shadow-neutral-200 border border-neutral-700 hover:bg-neutral-800 transition-all duration-150 h-12 w-full items-center justify-center hover:transform hover:scale-98 active:scale-97",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center">
        {hasIcon && svgIcon}
        {hasSecondaryLabel && !hasIcon && (
          <span className="text-[10px]  leading-none">{topText}</span>
        )}
        <span
          className={cn(
            "text-[10px] leading-none",
            hasIcon && "mt-2",
            hasSecondaryLabel && !hasIcon && "mt-2"
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default Key;
