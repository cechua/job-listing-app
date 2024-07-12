import { Container, Stack } from '@mantine/core';
import JobCard from '../jobCard/JobCard';

const JobsPage = () => {
  return (
    <Container size="lg">
      <Stack align="center">
        <JobCard />
        <JobCard />
        <JobCard />
      </Stack>
    </Container>
  );
};

export default JobsPage;
