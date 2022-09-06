import classes from './MealItem.module.css';

const MealItem = ({ meal }) => {
  const fixedPrice = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
