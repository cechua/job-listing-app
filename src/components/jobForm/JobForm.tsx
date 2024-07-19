import { useState } from 'react';
import RichTextEditorComponent from '../common/richTextEditor/RichTextEditorComponent';
import { JSONContent } from '@tiptap/react';

const JobForm = () => {
  const [jobDescription, setJobDescription] = useState<JSONContent>();

  return (
    <div>
      <h1>JobForm</h1>
      <RichTextEditorComponent
        editContent={setJobDescription}
        content={jobDescription}
      />
    </div>
  );
};

export default JobForm;
