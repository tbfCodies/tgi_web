// src/components/Shared/TextEditor.js
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({ value, onChange }) => {
  return (
    <Editor
      apiKey="YOUR_TINYMCE_API_KEY" // Hämta din API-nyckel från TinyMCE
      initialValue={value}
      init={{
        plugins: 'advlist autolink lists link image charmap preview anchor textcolor',
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        // Lägg till eventuella andra inställningar här
      }}
      onEditorChange={(newValue) => onChange(newValue)}
    />
  );
};

export default TextEditor;
