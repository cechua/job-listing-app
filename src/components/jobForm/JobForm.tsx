import { useState } from 'react';
import RichTextEditorComponent from '../common/richTextEditor/RichTextEditorComponent';
import { JSONContent } from '@tiptap/react';
import { Button, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  company: string;
  position: string;
  workSetup: string;
  salary: string;
  workArrangement: string;
  workLocation: string;
  jobDescription: JSONContent | undefined;
}

const JobForm = () => {
  const [jobDescription, setJobDescription] = useState<JSONContent>();

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      company: '',
      position: '',
      workSetup: '',
      salary: '',
      workArrangement: '',
      workLocation: '',
      jobDescription: undefined,
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
            Post a New Job
          </Text>
          <TextInput
            label="Company"
            key={form.key('company')}
            {...form.getInputProps('company')}
          />
          <TextInput
            label="Position"
            key={form.key('position')}
            {...form.getInputProps('position')}
          />
          <TextInput
            label="Work Setup"
            key={form.key('workSetup')}
            {...form.getInputProps('workSetup')}
          />
          <TextInput
            label="Salary"
            key={form.key('salary')}
            {...form.getInputProps('salary')}
          />
          <TextInput
            label="Work Arrangement"
            key={form.key('workArrangement')}
            {...form.getInputProps('workArrangement')}
          />
          <TextInput
            label="Office Location"
            key={form.key('workLocation')}
            {...form.getInputProps('workLocation')}
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

export default JobForm;
