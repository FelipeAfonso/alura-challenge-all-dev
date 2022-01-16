import { layoutState, LayoutStateTypes } from 'context/state/layout.atom';
import { useSetRecoilState } from 'recoil';

// this hook is a simple abstraction on using the layoutState atom
export const useLayout = (layout: LayoutStateTypes) => {
  const setLayoutState = useSetRecoilState(layoutState);
  setLayoutState(layout);
};
