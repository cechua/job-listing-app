import { Container, Stack } from '@mantine/core';
import JobCard from '../jobCard/JobCard';

const JobsPage = () => {
  return (
    <Container size="xl">
      <Stack align="center">
        <JobCard />
        <JobCard />
        <JobCard />
      </Stack>
    </Container>
  );
};

export default JobsPage;
