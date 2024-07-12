import { Container, Grid, GridCol, Stack } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import classes from './jobDetails.module.css';
import JobCardSummary from '../jobCard/JobCardSummary';

const JobDetails = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('jobId') ?? '';
  return (
    <Container className={classes.container} fluid>
      <Grid>
        <GridCol span={{ md: 5, xl: 4 }} visibleFrom="md">
          <Stack>
            <JobCardSummary />
            <JobCardSummary />
          </Stack>
        </GridCol>
        <GridCol span={{ md: 7, xl: 8 }}>
          <Stack bg="red">{jobId}</Stack>
        </GridCol>
      </Grid>
    </Container>
  );
};

export default JobDetails;
