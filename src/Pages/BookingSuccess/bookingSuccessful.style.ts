import { styled } from '@mui/material/styles';

export const Container = styled('div')(
  ({ theme }: any) => ` display:flex;
flex-direction:column;
gap:2rem;
justify-content:center;
align-items:center;
height:80vh;

${theme.breakpoints.down('sm')} {
	height:85vh;
}

.bookingId {
	color:${theme.palette.background.blue};
}

.bookingId:hover {
	color:red;
	cursor:pointer;

}

.buttonGroup {
	display:flex;
	gap:0.5rem;
	max-width:100vw;
	justify-content:center;
	margin-left:1rem;
}

.heading {
	margin-top:-${theme.typography.pxToRem(48)};
}

`,
);
