import { Card, Image, Avatar, Text, Group, Stack, Flex } from '@mantine/core';
import classes from './jobCard.module.css';
import LabelValue from '../common/labelValue/LabelValue';

const JobCard = () => {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          className={classes.image}
          radius={100}
          w={100}
          h={100}
        />
        <Flex className={classes.details}>
          <Flex
            className={classes.body}
            direction="column"
            justify={{ xs: 'flex-start', sm: 'space-between' }}
            gap={{ base: 'lg', md: 'xs' }}
          >
            <Stack gap={0}>
              <Text tt="uppercase" c="solid" fw={700} size="lg">
                Position
              </Text>
              <Text fw={400} size="md">
                Company
              </Text>
              <Text c="dimmed" fw={400} size="xs">
                Makati, Philippines
              </Text>
            </Stack>
            <Group wrap="nowrap" gap="xs">
              <Group gap="xs" wrap="nowrap">
                <Avatar
                  size={20}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                />
                <Text size="xs">Elsa Typechecker</Text>
              </Group>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
            </Group>
          </Flex>
          <Stack className={classes.otherDetails} justify="space-around">
            <LabelValue label="Job Type:" value="Full-time" />
            <LabelValue label="Setup:" value="Hybrid" />
            <LabelValue label="Salary:" value="N/A" />
            <LabelValue label="Visa Sponsorship:" value="N/A" />
          </Stack>
        </Flex>
      </Group>
    </Card>
  );
};

export default JobCard;
