import { Button } from '@mantine/core';
import classes from './customButton.module.css';

const CustomButton = () => {
  return (
    <Button className={classes.button} type="button">
      My mantine button
    </Button>
  );
};

export default CustomButton;
