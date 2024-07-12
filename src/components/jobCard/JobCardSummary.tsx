import {
  Card,
  Image,
  Avatar,
  Text,
  Group,
  Stack,
  Grid,
  Flex,
  Chip,
} from '@mantine/core';
import classes from './jobCard.module.css';
import { Link } from 'react-router-dom';

const JobCardSummary = () => {
  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      px={{ xs: 8, lg: 16 }}
      py={12}
    >
      <Grid columns={12} justify="center" grow>
        <Grid.Col span={1} mt={4}>
          <Flex justify="center" align="center" h="100%">
            <Image
              src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              radius={100}
              w={{ xs: 70, lg: 90 }}
              h={{ xs: 70, lg: 90 }}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid columns={8}>
            <Grid.Col span={{ xs: 5, sm: 4, md: 5 }}>
              <Flex direction="column" gap={8} h="100%">
                <Stack gap={0}>
                  <Text tt="uppercase" c="solid" fw={700} size="lg">
                    <Link to={`/jobs/details?jobId=${2}`}>Position</Link>
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
            </Grid.Col>
            <Grid.Col span={{ xs: 3, sm: 3 }}>
              <Flex
                className={classes.otherDetails}
                direction="column"
                justify="space-between"
                h="100%"
              >
                <Chip size="xs">Full-time</Chip>
                <Chip size="xs">Hybrid</Chip>
                <Chip size="xs">Php100,000</Chip>
              </Flex>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default JobCardSummary;
