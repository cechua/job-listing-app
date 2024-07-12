import {
  Card,
  Image,
  Avatar,
  Text,
  Group,
  Stack,
  Chip,
  ActionIcon,
  Grid,
  Flex,
} from '@mantine/core';
import classes from './jobCard.module.css';
import LabelValue from '../common/labelValue/LabelValue';
import { MdOutlineClose } from 'react-icons/md';

interface JobCardProps {
  isAppliedView?: boolean;
}

const JobCard = ({ isAppliedView }: JobCardProps) => {
  return (
    <Card withBorder radius="md" className={classes.card} px={24} py={12}>
      <Grid columns={12} justify="center" grow>
        <Grid.Col span={1} mt={4} order={{ base: 1 }}>
          <Flex>
            <Image
              src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              radius={100}
              w={90}
              h={90}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={8} order={{ base: 3, md: 2 }}>
          <Grid grow columns={8}>
            <Grid.Col span={{ xs: 5, sm: 4, md: 5 }} order={{ base: 1 }}>
              <Flex direction="column" justify="space-between" gap={8} h="100%">
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
            </Grid.Col>
            <Grid.Col span={{ xs: 3, sm: 3 }} order={{ base: 2 }}>
              <Stack className={classes.otherDetails} justify="space-around">
                <LabelValue label="Job Type:" value="Full-time" />
                <LabelValue label="Setup:" value="Hybrid" />
                <LabelValue label="Salary:" value="N/A" />
                <LabelValue label="Visa Sponsorship:" value="N/A" />
              </Stack>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={{ base: 2 }} order={{ base: 2, md: 3 }}>
          {isAppliedView && (
            <Flex className={classes.ctaContainer} justify="flex-end" gap={24}>
              <Chip>test</Chip>
              <ActionIcon
                variant="filled"
                bg="red"
                size="md"
                aria-label="Delete Job Application"
              >
                <MdOutlineClose />
              </ActionIcon>
            </Flex>
          )}
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default JobCard;
