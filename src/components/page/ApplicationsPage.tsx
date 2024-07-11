import { Container, Stack } from '@mantine/core';
import JobCard from '../jobCard/JobCard';

const ApplicationsPage = () => {
  return (
    <Container size="xl">
      <Stack align="center">
        <JobCard isAppliedView />
        <JobCard isAppliedView />
        <JobCard isAppliedView />
      </Stack>
    </Container>
  );
};

export default ApplicationsPage;
