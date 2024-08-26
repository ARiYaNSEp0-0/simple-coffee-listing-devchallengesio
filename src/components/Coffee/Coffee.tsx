import { StarEmpty, StarFill } from "../../images";

export interface ICoffee {
  id?: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

const Coffee = ({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: ICoffee) => {
  return (
    <li className="relative flex flex-col gap-3">
      <img
        className="rounded-2xl bg-palesky"
        src={image}
        alt={`coffee name is ${name}`}
        width={260}
        height={160}
      />
      {popular && (
        <span className="absolute left-2 top-2 font-bold  capitalize bg-creamcan text-woodsmoke rounded-full py-1 px-3 text-2xs">
          popular
        </span>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-lg">{name}</h2>
        <span className="text-xs bg-surf p-1 rounded text-woodsmoke font-bold">
          {price}
        </span>
      </div>
      <div className="flex items-center justify-between">
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

        {!available && <span className="text-terracotta">Sold out</span>}
      </div>
    </li>
  );
};

export default Coffee;
