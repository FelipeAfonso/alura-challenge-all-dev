import { Paper, Stack, TextField } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Box, lineHeight } from '@mui/system';
import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import materialDark from 'assets/code_styles/material-dark';

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
    <Paper sx={{ bgcolor: color, p: 4 }}>
      <Paper elevation={5} sx={{ bgcolor: '#141414', backgroundImage: 'none' }}>
        <Box mx={2} py={2}>
          <svg width="52" height="12" viewBox="0 0 52 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" />
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" />
            <circle cx="46" cy="6" r="6" fill="#27C93F" />
          </svg>
        </Box>
        <Box display="grid" gridTemplateColumns="1fr" gridTemplateRows="1fr">
          <SyntaxHighlighter
            style={materialDark}
            customStyle={{
              gridColumnStart: 1,
              gridRowStart: 1,
              background: 'transparent !important',
              textShadow: 'none',
              fontFamily: 'Roboto Mono, Consolas, "monospaced"',
              fontSize: 16,
              lineHeight: '1.4375em',
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 25,
              margin: 0,
            }}
            codeTagProps={{
              style: {
                textShadow: 'none',
                fontFamily: 'Roboto Mono, Consolas, "monospaced"',
                fontSize: 16,
                lineHeight: '1.4375em',
              },
            }}
            language={language}
          >
            {code}
          </SyntaxHighlighter>
          <TextField
            onChange={e => setCode(e.target.value)}
            variant="filled"
            tabIndex={tabIndex}
            sx={{
              gridColumnStart: 1,
              gridRowStart: 1,
              bgcolor: 'transparent',
              minHeight: 300,
              caretColor: '#f2f2f2',
              color: 'transparent',
              fontFamily: 'Roboto Mono, Consolas, "monospaced"',
              '&:hover': {
                '& .MuiFilledInput-root': {
                  bgcolor: editable
                    ? 'rgb(255, 255, 255, 0.16)'
                    : 'transparent',
                  borderRadius: 0,
                  minHeight: 305,
                  color: 'transparent',
                  fontFamily: 'Roboto Mono, Consolas, "monospaced"',
                },
              },
              '& .Mui-focused': {
                '& .MuiFilledInput-root': {
                  bgcolor: editable
                    ? 'rgb(255, 255, 255, 0.24)'
                    : 'transparent',
                  borderRadius: 0,
                  minHeight: 305,
                  color: 'transparent',
                  fontFamily: 'Roboto Mono, Consolas, "monospaced"',
                },
              },
              '& .Mui-disabled': {
                '& .MuiFilledInput-root': {
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  minHeight: 305,
                  color: 'transparent',
                  fontFamily: 'Roboto Mono, Consolas, "monospaced"',
                },
              },
              '& .MuiFilledInput-root': {
                bgcolor: 'transparent',
                alignItems: 'start',
                borderRadius: 0,
                minHeight: 305,
                color: 'transparent',
                fontFamily: 'Roboto Mono, Consolas, "monospaced"',
              },
            }}
            inputProps={{
              spellCheck: 'false',
              'data-testid': 'code_editor',
              'aria-label': 'Editor de Código',
              role: 'textbox',
            }}
            value={code}
            disabled={!editable}
            multiline
            fullWidth
          />
        </Box>
      </Paper>
    </Paper>
  );
};
