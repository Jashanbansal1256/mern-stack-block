import { useContext} from "react";
import { GlobalContext } from "../../context";

export default function Home() {
  const { pending, setPending, blogList, setBlogList } = useContext(GlobalContext);
  return <div>Home</div>;
}
