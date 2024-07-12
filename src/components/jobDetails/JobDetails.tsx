import { Container, Flex, Group, Stack } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import classes from './jobDetails.module.css';
import JobCardSummary from '../jobCard/JobCardSummary';
import JobDetailSummary from './JobDetailSummary';

const JobDetails = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('jobId') ?? '';
  return (
    <Container className={classes.container} size="xl">
      <Group align="flex-start">
        <Stack className={classes.jobSummaryContainer}>
          <Flex visibleFrom="md" direction="column" gap={8}>
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
            <JobCardSummary />
          </Flex>
        </Stack>
        <Container fluid m={0} className={classes.jobDetailContainer}>
          <JobDetailSummary
            companyImage="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            companyName="Company A"
            jobLocation="Taguig, Philippines"
            jobPosition="Senior Fullstack Developer"
          />
          {jobId}
        </Container>
      </Group>
    </Container>
  );
};

export default JobDetails;
