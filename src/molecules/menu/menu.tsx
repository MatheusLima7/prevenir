import MenuItem from "@src/atoms/menuItem";
import { Wrapper, Row } from "./menu.styles";
import useMenu from "./useMenu";
import CloseApp from "@src/atoms/closeApp/closeApp";
import { MenuProps } from "./menu.types";
import Logout from "@src/atoms/logout";

export default function Menu({ onClose }: MenuProps) {
  const { items } = useMenu();
  return (
    <Wrapper>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}

      <CloseApp onClose={onClose} />
      <Row>
        <Logout />
      </Row>
    </Wrapper>
  );
}
