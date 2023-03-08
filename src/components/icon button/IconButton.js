import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as StarFilled } from "./star-filled.svg";

export default function IconButton({ isFavorite }) {
  return isFavorite ? <StarFilled /> : <Star />;
}
