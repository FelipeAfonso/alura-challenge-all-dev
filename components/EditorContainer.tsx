import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
const AceEditorComponent = dynamic(import('components/AceEditorComponent'), {
  ssr: false,
});
export const EditorContainer: FC<{
  color: string;
  language: string;
  editable?: boolean;
  overflow?: boolean;
  initialCode?: string;
  tabIndex?: number;
}> = ({ color, editable, language, initialCode, tabIndex }) => {
  const [code, setCode] = useState(initialCode ?? '');

  return (
    <Paper
      data-testid="editor-colorful-container"
      sx={{
        bgcolor: color,
        p: 4,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          bgcolor: '#141414',
          backgroundImage: 'none',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            bgcolor: editable ? '#242424' : '#141414',
          },
        }}
      >
        <Box mx={2} py={2}>
          <svg width="52" height="12" viewBox="0 0 52 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" />
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" />
            <circle cx="46" cy="6" r="6" fill="#27C93F" />
          </svg>
        </Box>
        <AceEditorComponent
          data-testid="code-editor"
          mode={language}
          onChange={e => setCode(e)}
          value={code}
          readOnly={!editable}
          style={{ cursor: editable ? 'text' : 'pointer' }}
        />
      </Paper>
    </Paper>
  );
};
