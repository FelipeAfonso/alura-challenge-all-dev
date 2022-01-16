import { Avatar, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Heart } from 'assets/icons/Heart';
import { TextBubble } from 'assets/icons/TextBubble';
import { FC, useMemo } from 'react';
import { StackedIconButton } from 'components/StackedIconButton';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { favoriteProject, ProjectDataType } from 'context/api/projects';
import { auth } from 'config/firebase.config';
import { useRecoilValue } from 'recoil';
import { authState } from 'context/state/auth.atom';

const EditorContainer = dynamic(import('components/EditorContainer'), {
  ssr: false,
});

export const CommunityCard: FC<{ d: ProjectDataType }> = ({ d }) => {
  const router = useRouter();
  const auth = useRecoilValue(authState);
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
          aria-label="Deixe seu comentário"
          data-testid="comment_button"
          onClick={() => console.log('comment')}
        >
          <TextBubble fill="#fff" />
          <Typography variant="body1" color="textPrimary">
            {d.comments?.length ?? 0}
          </Typography>
        </StackedIconButton>
        <StackedIconButton
          role="button"
          aria-label="Favoritar código"
          data-testid="fav_button"
          disabled={!auth?.uid || isSameUser}
          onClick={e => {
            if (auth?.uid && !isSameUser) {
              e.preventDefault();
              e.stopPropagation();
              favoriteProject(d.id, auth!.uid);
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
          aria-label={`Imagem do usuário: ${d.userName}`}
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
