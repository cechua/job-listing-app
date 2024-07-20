import { Stack, TextInput, Text, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { JSONContent } from '@tiptap/react';
import React, { useState } from 'react';
import RichTextEditorComponent from '../common/richTextEditor/RichTextEditorComponent';

interface FormValues {
  companyName: string;
  companyImage: string;
  companyLocation: string;
  companyDescription: JSONContent | undefined;
  companyBusiness: string;
}

const CompanyForm = () => {
  const [jobDescription, setJobDescription] = useState<JSONContent>();

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      companyName: '',
      companyImage: '',
      companyLocation: '',
      companyBusiness: '',
      companyDescription: undefined,
    },
  });

  const handleSubmit = (formData: FormValues) => {
    console.log({ ...formData, jobDescription });
  };

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
          <Text c="solid" fw={500} size="sm" component="label">
            Job Description
          </Text>
          <RichTextEditorComponent
            editContent={setJobDescription}
            content={jobDescription}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </>
  );
};

export default CompanyForm;
