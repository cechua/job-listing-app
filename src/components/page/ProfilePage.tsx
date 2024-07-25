import { Container, Stack } from '@mantine/core';
import CompanyForm from '../companyForm/CompanyForm';
import ProfileForm from '../profileForm/ProfileForm';

const ProfilePage = () => {
  return (
    <Container size="sm">
      <Stack align="center">
        <CompanyForm />
        <ProfileForm />
      </Stack>
    </Container>
  );
};

export default ProfilePage;
