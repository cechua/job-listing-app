import { Stack, TextInput, Text, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { JSONContent } from '@tiptap/react';
import classes from './companyForm.module.css';

interface FormValues {
  companyName: string;
  companyImage: string;
  companyLocation: string;
  companyBusiness: string;
  companySummary: JSONContent | undefined;
}

const CompanyForm = () => {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      companyName: '',
      companyImage: '',
      companyLocation: '',
      companyBusiness: '',
      companySummary: undefined,
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
            Affiliated Company
          </Text>
          <TextInput
            label="Company Name"
            key={form.key('company')}
            {...form.getInputProps('company')}
          />
          <TextInput
            label="Company Image"
            key={form.key('companyImage')}
            {...form.getInputProps('companyImage')}
          />
          <TextInput
            label="Full Company Address"
            key={form.key('companyLocation')}
            {...form.getInputProps('companyLocation')}
          />
          <TextInput
            label="Type of Business"
            key={form.key('companyBusiness')}
            {...form.getInputProps('companyBusiness')}
          />
          <TextInput
            label="Company Summary"
            placeholder="Short summary of the company"
            key={form.key('companySummary')}
            {...form.getInputProps('companySummary')}
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

export default CompanyForm;
