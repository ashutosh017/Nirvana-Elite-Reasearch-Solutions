'use client'

import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  fun: () => void;
}

export default function CustomButton({ children, fun, ...props }: CustomButtonProps) {
  return (
    <Button onClick={fun} {...props}>
      {children}
    </Button>
  );
}
