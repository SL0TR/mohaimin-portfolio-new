import { Button, ButtonProps } from "@/components/ui/button";
import React from "react";
import { GrPowerReset } from "react-icons/gr";

type ResetProps = ButtonProps;

export default function Reset(props: ResetProps) {
  return (
    <Button variant="outline" {...props}>
      <GrPowerReset className="mr-2" /> Reset
    </Button>
  );
}
