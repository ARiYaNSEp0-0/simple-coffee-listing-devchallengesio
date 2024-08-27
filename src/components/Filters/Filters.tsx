import Button from "../Button";

type Props = {
  activeFilter: string;
  onFilterAll: () => void;
  onFilterAvailable: () => void;
};
function Filters({ activeFilter, onFilterAll, onFilterAvailable }: Props) {
  return (
    <menu className="flex items-center justify-center gap-3">
      <li>
        <Button
          onClick={onFilterAll}
          variant={activeFilter === "all" ? "active" : "default"}
        >
          All Products
        </Button>
      </li>
      <li>
        <Button
          onClick={onFilterAvailable}
          variant={activeFilter === "available" ? "active" : "default"}
        >
          Available Now
        </Button>
      </li>
    </menu>
  );
}

export default Filters;
