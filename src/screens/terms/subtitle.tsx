import { ReactNode } from "react";
import { CustomSubtitle, CustomSpace } from "./terms.styles";

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <CustomSpace>
      <CustomSubtitle>{children}</CustomSubtitle>
    </CustomSpace>
  );
}
