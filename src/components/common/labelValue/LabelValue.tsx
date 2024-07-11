import { Group, Text } from '@mantine/core';
import classes from './labelValue.module.css';

interface LabelValueProps {
  label: string;
  value: string;
}

const LabelValue = ({ label, value }: LabelValueProps) => {
  return (
    <Group className={classes.labelValue} justify="start" align="start">
      <Text className={classes.label}>{label}</Text>
      <Text className={classes.value}>{value}</Text>
    </Group>
  );
};

export default LabelValue;
