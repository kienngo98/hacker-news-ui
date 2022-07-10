import { ReactElement, ReactFragment } from "react";

const CardContainer = ({ children }:{children: ReactElement | ReactFragment}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
};

export default CardContainer;
