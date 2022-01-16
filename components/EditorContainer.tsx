import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect, useRef, useState } from 'react';
import AceEditorComponent from 'components/AceEditorComponent';
import { darkModeState } from 'context/state/layout.atom';
import { useRecoilValue } from 'recoil';

export const EditorContainer: FC<{
  color: string;
  language: string;
  editable?: boolean;
  overflow?: boolean;
  initialCode?: string;
  tabIndex?: number;
  onChange?: (code: string) => void;
}> = ({ color, editable, language, initialCode, tabIndex, onChange }) => {
  const parsedInitialCode = initialCode
    ? initialCode.replaceAll('\\n', '\n')
    : '';

  const [code, setCode] = useState(parsedInitialCode);
  const editorRef = useRef<any>();
  const darkMode = useRecoilValue(darkModeState);
  const darkmodeColor = darkMode ? '#141414' : '#fafafa';

  useEffect(() => {
    setCode(initialCode?.replaceAll('\\n', '\n') ?? '');
  }, [initialCode, setCode]);

  return (
    <Paper
      ref={editorRef}
      data-testid="editor-colorful-container"
      sx={{
        bgcolor: color,
        p: 4,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          bgcolor: darkmodeColor,
          backgroundImage: 'none',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            bgcolor: !editable
              ? darkmodeColor
              : darkMode
              ? '#242424'
              : '#eCECEC',
          },
        }}
      >
        <Box
          mx={2}
          pt={2}
          height={48}
          display="flex"
          justifyContent="space-between"
        >
          <svg width="52" height="12" viewBox="0 0 52 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" />
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" />
            <circle cx="46" cy="6" r="6" fill="#27C93F" />
          </svg>
        </Box>
        <AceEditorComponent
          data-testid="code-editor"
          mode={language}
          onChange={e => {
            setCode(e);
            if (onChange) onChange(e);
          }}
          value={code}
          defaultValue={initialCode}
          readOnly={!editable}
          style={{ cursor: editable ? 'text' : 'pointer !important' }}
        />
      </Paper>
    </Paper>
  );
};

export default EditorContainer;
