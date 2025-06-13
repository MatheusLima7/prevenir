import { Wrapper } from "./address.styles";
import useAddress from "./useAddress";

export default function Address() {
  const { address } = useAddress();
  return <Wrapper>{address}</Wrapper>;
}
