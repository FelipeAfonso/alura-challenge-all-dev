import { layoutState, LayoutStateTypes } from 'context/state/layout.atom';
import { useSetRecoilState } from 'recoil';

export const useLayout = (layout: LayoutStateTypes) => {
  const setLayoutState = useSetRecoilState(layoutState);
  setLayoutState(layout);
};
