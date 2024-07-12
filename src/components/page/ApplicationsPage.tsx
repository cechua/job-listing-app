import { Container, Stack } from '@mantine/core';
import JobCard from '../jobCard/JobCard';

const ApplicationsPage = () => {
  return (
    <Container size="lg">
      <Stack align="center">
        <JobCard isAppliedView />
        <JobCard isAppliedView />
        <JobCard isAppliedView />
      </Stack>
    </Container>
  );
};

export default ApplicationsPage;
