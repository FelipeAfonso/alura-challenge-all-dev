import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Heart } from 'assets/icons/Heart';
import { TextBubble } from 'assets/icons/TextBubble';
import { FC, useMemo } from 'react';
import { StackedIconButton } from 'components/StackedIconButton';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { favoriteProject, ProjectDataType } from 'context/api/projects';
import { auth } from 'config/firebase.config';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from 'context/state/auth.atom';
import { snackbarState } from 'context/state/snackbar.atom';

const EditorContainer = dynamic(import('components/EditorContainer'), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" height={300} />,
});

export const CommunityCard: FC<{
  d: ProjectDataType;
  onInvalidate?: () => void;
}> = ({ d, onInvalidate }) => {
  // this is the card wrapper for the community projects
  // it uses the ace-editor as the centerpiece, and allows
  // some customization of the selected project details by itself

  const router = useRouter();
  const auth = useRecoilValue(authState);
  const setSnackbar = useSetRecoilState(snackbarState);
  const isSameUser = useMemo(() => auth?.uid === d.uid, [auth, d]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#00000029"
      borderRadius={2}
      data-testid="project_box"
      data-id={d.id}
      aria-label={`Projeto ${d.title}`}
      role="link"
      sx={{ cursor: 'pointer' }}
      onClick={() => router.push(`/editor/${d.id}`)}
    >
      <EditorContainer
        initialCode={d.code}
        color={d.color}
        language={d.language}
        editable={false}
      />
      <Stack p={3} gap={1}>
        <Typography variant="subtitle2" color="textPrimary">
          {d.title}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          {d.description ?? ''}
        </Typography>
      </Stack>
      <Box display="flex" px={3} mt={1} mb={3} alignItems="center">
        <StackedIconButton
          role="button"
          aria-label="Deixe seu coment??rio"
          data-testid="comment_button"
        >
          <TextBubble fill="#fff" />
          <Typography variant="body1" color="textPrimary">
            {d.comments?.length ?? 0}
          </Typography>
        </StackedIconButton>
        <StackedIconButton
          role="button"
          aria-label="Favoritar c??digo"
          data-testid="fav_button"
          disabled={!auth?.uid || isSameUser}
          onClick={async e => {
            if (auth?.uid && !isSameUser) {
              e.preventDefault();
              e.stopPropagation();
              try {
                await favoriteProject(d.id, auth!.uid);
                setSnackbar({
                  message: 'Projeto favoritado com sucesso!',
                  type: 'success',
                });
                if (onInvalidate) onInvalidate();
              } catch (e) {
                setSnackbar({
                  message: 'Falha ao favoritar o projeto :(',
                  type: 'error',
                });
              }
            }
          }}
        >
          <Heart
            fill={
              auth?.uid && d.favorites?.includes(auth!.uid) ? '#f44336' : '#fff'
            }
          />
          <Typography variant="body1" color="textPrimary">
            {d.favorites?.length ?? 0}
          </Typography>
        </StackedIconButton>
        <Stack
          flexDirection="row"
          flex={1}
          gap={1}
          m={1}
          justifyContent="end"
          alignItems="center"
          role="img"
          aria-label={`Imagem do usu??rio: ${d.userName}`}
        >
          <Avatar sx={{ width: 24, height: 24 }} src={d.userPicUrl} />
          <Typography variant="body1" color="textPrimary">
            {d.userName}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
