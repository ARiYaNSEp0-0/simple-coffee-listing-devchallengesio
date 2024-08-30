import Button from "../Button";
import { FilterType, FilterActionType } from "../../types/filter";

type Props = {
  onFilter: (filterType: FilterType) => void;
  activeFilter: FilterType;
};

function Filters({ activeFilter, onFilter }: Props) {
  return (
    <menu className="flex items-center justify-center gap-3">
      <li>
        <Button
          onClick={() => onFilter(FilterActionType.FILTER_ALL)}
          variant={
            activeFilter === FilterActionType.FILTER_ALL ? "active" : "default"
          }
        >
          All Products
        </Button>
      </li>
      <li>
        <Button
          onClick={() => onFilter(FilterActionType.FILTER_AVAILABLE)}
          variant={
            activeFilter === FilterActionType.FILTER_AVAILABLE
              ? "active"
              : "default"
          }
        >
          Available Now
        </Button>
      </li>
    </menu>
  );
}

export default Filters;
