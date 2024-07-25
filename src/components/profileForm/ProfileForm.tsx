import { Stack, TextInput, Text, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './profileForm.module.css';

interface FormValues {
  userEmail: string;
  userName: string;
  userImage?: string;
  userContact?: string;
  userLocation?: string;
  userHeadline?: string;
  userSummary?: string;
  userCompany?: string;
  userCompanyPosition?: string;
  userExperience?: string[]; //change to a Experience Type
  userEducation?: string[]; //change to Education Type
  userCertification?: string[]; //change to certification type
  userSkills?: string[]; //change to skills type
}

const ProfileForm = () => {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      userEmail: '',
      userName: '',
      userImage: '',
      userContact: '',
      userLocation: '',
      userHeadline: '',
      userSummary: '',
      userCompany: '',
      userCompanyPosition: '',
    },
  });

  const handleSubmit = (formData: FormValues) => {
    console.log({ formData });
  };

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className={classes.formContainer}
      >
        <Stack gap={8}>
          <Text tt="uppercase" c="solid" fw={700} size="md" component="label">
            Profile
          </Text>
          <TextInput
            label="Email"
            key={form.key('userEmail')}
            {...form.getInputProps('userEmail')}
            disabled
          />
          <TextInput
            label="Full Name"
            key={form.key('userName')}
            {...form.getInputProps('userName')}
          />
          <TextInput
            label="Profile Image"
            key={form.key('userImage')}
            {...form.getInputProps('userImage')}
          />
          <TextInput
            label="Contact"
            key={form.key('userContact')}
            {...form.getInputProps('userContact')}
          />
          <TextInput
            label="Location"
            key={form.key('userLocation')}
            {...form.getInputProps('userLocation')}
          />
          <TextInput
            label="Headline"
            key={form.key('userHeadline')}
            {...form.getInputProps('userHeadline')}
          />
          <TextInput
            label="Summary"
            key={form.key('userSummary')}
            {...form.getInputProps('userSummary')}
          />
          <TextInput
            label="Company"
            key={form.key('userCompany')}
            {...form.getInputProps('userCompany')}
          />
          <TextInput
            label="Position"
            key={form.key('userCompanyPosition')}
            {...form.getInputProps('userCompanyPosition')}
          />
          <Stack align="end">
            <Button type="submit" w="150px">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default ProfileForm;
