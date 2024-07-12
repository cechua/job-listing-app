import {
  Group,
  Stack,
  Image,
  Text,
  Divider,
  Flex,
  Chip,
  Button,
  Container,
} from '@mantine/core';
import LabelValue from '../common/labelValue/LabelValue';

interface JobDetailSummaryProps {
  companyImage: string;
  companyName: string;
  jobPosition: string;
  jobLocation: string;
}

const JobDetailSummary = ({
  companyImage,
  companyName,
  jobLocation,
  jobPosition,
}: JobDetailSummaryProps) => {
  return (
    <Stack>
      <Group>
        <Image src={companyImage} radius={100} w={90} h={90} />
        <Stack gap={2}>
          <Text tt="uppercase" c="solid" fw={700} size="lg">
            {jobPosition}
          </Text>
          <Text fw={400} size="md">
            {companyName}
          </Text>
          <Text c="dimmed" fw={400} size="xs">
            {jobLocation}
          </Text>
          <Flex pt={4} gap={8}>
            <Chip size="xs">Full-time</Chip>
            <Chip size="xs">Hybrid</Chip>
            <Chip size="xs">Php100,000</Chip>
          </Flex>
        </Stack>
      </Group>
      <Divider />
      <Stack>
        <Text tt="uppercase" c="solid" fw={600} size="md">
          Requirements:
        </Text>
        <LabelValue
          label="Education"
          value="Bacholor of Science in Computer science or equivalent"
        />
        <LabelValue
          label="Skills"
          value="ReactJS, Typescript, NodeJS, Docker, AWS, PostgreSQL"
        />
        <Group>
          <Button>Apply</Button>
          <Button>Save</Button>
        </Group>
      </Stack>
      <Divider />
      <Container>
        JOB DESCRIPTION ALL HERE. TEST ONCE RICH TEXT INPUT IS READY
      </Container>
    </Stack>
  );
};

export default JobDetailSummary;
