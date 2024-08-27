import Rating from "../Rating";

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
        className="rounded-xl bg-palesky"
        src={image}
        alt={`coffee name is ${name}`}
        width={260}
        height={160}
      />
      {popular && (
        <span className="absolute left-2 top-2 rounded-full bg-creamcan px-3 py-0.5 text-2xs font-bold capitalize text-woodsmoke">
          popular
        </span>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">{name}</h2>
        <span className="rounded bg-surf px-2 py-1 text-xs font-bold text-woodsmoke">
          {price}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <Rating rating={rating} votes={votes} />
        {!available && <span className="text-terracotta">Sold out</span>}
      </div>
    </li>
  );
};

export default Coffee;
