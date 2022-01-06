import { IconButton, Menu, MenuItem, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';
import { More } from 'assets/icons/More';
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from 'react-component-export-image';
import AceEditorComponent from 'components/AceEditorComponent';

// const AceEditorComponent = dynamic(import('components/AceEditorComponent'), {
//   ssr: false,
// });

export const EditorContainer: FC<{
  color: string;
  language: string;
  editable?: boolean;
  overflow?: boolean;
  initialCode?: string;
  tabIndex?: number;
}> = ({ color, editable, language, initialCode, tabIndex }) => {
  const [code, setCode] = useState(initialCode ?? '');
  const [hovering, setHovering] = useState(false);
  const [moreOptionsOpen, setMoreOptionsOpen] = useState<null | HTMLElement>(
    null
  );
  const editorRef = useRef<any>();
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
          bgcolor: '#141414',
          backgroundImage: 'none',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            bgcolor: editable ? '#242424' : '#141414',
          },
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
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
          {editable && (
            <IconButton
              sx={{ display: hovering ? 'block' : 'none' }}
              onClick={e => setMoreOptionsOpen(e.currentTarget)}
              size="small"
            >
              <More />
            </IconButton>
          )}
          <Menu
            open={!!moreOptionsOpen}
            onClose={() => setMoreOptionsOpen(null)}
            anchorEl={moreOptionsOpen}
          >
            <MenuItem
              onClick={() => {
                setMoreOptionsOpen(null);
                setTimeout(() => {
                  exportComponentAsJPEG(editorRef, {
                    html2CanvasOptions: { removeContainer: false },
                  });
                }, 1000);
              }}
            >
              Exportar para JPG
            </MenuItem>
            <MenuItem
              onClick={() => {
                setMoreOptionsOpen(null);
                setTimeout(() => {
                  exportComponentAsPNG(editorRef, {
                    html2CanvasOptions: { removeContainer: false },
                  });
                }, 1000);
              }}
            >
              Exportar para PNG
            </MenuItem>
          </Menu>
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

export default EditorContainer;
