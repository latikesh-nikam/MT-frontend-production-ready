import { Global } from '@emotion/react';
import { Box, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { Drawer } from './bottomBar.style';
import { IBottomBarProps } from './bottomBar.types';

function BottomBar({ children, text }: IBottomBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer>
      <Box className="drawer">
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              overflow: 'visible',
            },
          }}
        />
        <Box className="button">{text}</Box>
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}>
          <Box>{children}</Box>
        </SwipeableDrawer>
      </Box>
    </Drawer>
  );
}

export default BottomBar;
