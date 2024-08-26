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
    <li className="relative flex flex-col gap-4">
      <img className="rounded-2xl" src={image} alt={`coffee name is ${name}`} />
      {popular && (
        <span className="absolute left-2 top-2 font-bold  capitalize bg-creamcan text-woodsmoke rounded-full py-1 px-4 text-xs">
          popular
        </span>
      )}
      <div className="flex items-center justify-between">
        <h2>{name}</h2>
        <span>{price}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>
          * {rating} ({votes} votes)
        </span>

        {!available && <span className="text-red-700">Sold out</span>}
      </div>
    </li>
  );
};

export default Coffee;
