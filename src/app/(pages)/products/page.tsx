import { Gutter } from "../../_components/Gutter";
import Filters from "./Filters";
import classes from "./index.module.scss"

const Products = () => {
  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters></Filters>
      </Gutter>
    </div>
  );
};

export default Products;