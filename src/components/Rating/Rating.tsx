import { StarEmpty, StarFill } from "../../images";
import { ICoffee } from "../Coffee";

type Props = Pick<ICoffee, "rating" | "votes">;

const Rating = ({ rating, votes }: Props) => {
  return (
    <span className="flex items-center gap-1">
      {rating === null ? (
        <StarEmpty aria-hidden={true} />
      ) : (
        <StarFill aria-hidden={true} />
      )}
      {rating === null ? (
        <span className="text-palesky">No ratings</span>
      ) : (
        <>
          <span>{rating}</span>
          <span className="text-palesky">({votes} votes)</span>
        </>
      )}
    </span>
  );
};

export default Rating;
