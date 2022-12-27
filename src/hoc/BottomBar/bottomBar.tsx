import { Global } from '@emotion/react';
import { Box, Button, SwipeableDrawer, Typography } from '@mui/material';
import React, { useState } from 'react';
import { StyledBox, Puller, Drawer } from './bottomBar.style';
import { IBottomBarProps } from './bottomBar.types';

const drawerBleeding = 56;

function BottomBar({ children, text }: IBottomBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer>
      <Box className="drawer">
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: 'visible',
            },
          }}
        />
        <Box onClick={() => setOpen(true)} className="button">
          {text}
        </Box>
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}>
          <StyledBox
            sx={{
              visibility: 'hidden',
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              right: 0,
              left: 0,
            }}>
            <Puller />
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: '100%',
              overflow: 'auto',
            }}>
            {children}
          </StyledBox>
        </SwipeableDrawer>
      </Box>
    </Drawer>
  );
}

export default BottomBar;
