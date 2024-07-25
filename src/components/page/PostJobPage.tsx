import JobForm from '../jobForm/JobForm';
import { Container, Stack } from '@mantine/core';

const PostJobPage = () => {
  return (
    <Container size="lg">
      <Stack align="center">
        <JobForm />
      </Stack>
    </Container>
  );
};

export default PostJobPage;
