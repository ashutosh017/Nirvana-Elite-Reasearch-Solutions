'use client'

import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  fun: () => void;
  variant:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

export default function CustomButton({ children, fun, variant }: CustomButtonProps) {
  return (
    <Button onClick={fun} variant={variant}>
      {children}
    </Button>
  );
}
