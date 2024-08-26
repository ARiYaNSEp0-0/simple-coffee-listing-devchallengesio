import Button from "../Button";

function Filters() {
  return (
    <menu className="flex items-center">
      <li>
        <Button>All Products</Button>
      </li>
      <li>
        <Button>Available Now</Button>
      </li>
    </menu>
  );
}

export default Filters;
