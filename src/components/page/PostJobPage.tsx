import React from 'react';
import JobForm from '../jobForm/JobForm';
import { Container, Stack } from '@mantine/core';
import CompanyForm from '../companyForm/CompanyForm';

const PostJobPage = () => {
  return (
    <Container size="lg">
      <Stack align="center">
        <CompanyForm />
        <JobForm />
      </Stack>
    </Container>
  );
};

export default PostJobPage;
