import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => ` flex:1;
display:flex;
justify-content:center;
align-items:center;
gap:${theme.typography.pxToRem(theme.gap.larger)};

${theme.breakpoints.down('sm')} {
	flex-direction:column;
}

${theme.breakpoints.down('md')} {
	flex-direction:column;
}

.parentContainer {
	display:flex;
	gap:${theme.typography.pxToRem(theme.gap.larger)};

	${theme.breakpoints.down('md')} {
		flex-direction:column;
	}

}

.upperSeatBox {
	border:thin solid ${theme.palette.background.grey};

}

.busContainer {
	border:thin solid ${theme.palette.background.grey};
	width:min-content;
	display:flex;
	flex-direction:column;
	align-items:flex-end;

	&::-webkit-scrollbar {
		display: none;
	}

}

.boxContainer {
	padding:${theme.typography.pxToRem(theme['padding']['main'])};
	position:relative;
	display:flex;
	max-height: ${theme.typography.pxToRem(400)};
	overflow-y:scroll;

	&::-webkit-scrollbar {
		display: none;
	}
}

.nowrap {
	flex-wrap:nowrap;
	height:min-content;
}

.space {
	padding:${theme.typography.pxToRem(theme['padding']['small'])};
}

.divider {
	margin:${theme.typography.pxToRem(theme['margin']['large'])}

3rem ${theme.typography.pxToRem(theme['margin']['large'])} 0;
}

.container {
	max-width: ${theme.typography.pxToRem(theme['width']['main'])};
	display: flex;
	gap:${theme.typography.pxToRem(theme['gap']['tworem'])};
}

.steeringImage {
	width: 1.6em;
	margin-right:${theme.typography.pxToRem(theme['margin']['secondary'])};
	margin-top:${theme.typography.pxToRem(theme['margin']['main'])};
}

.mainBox {
	padding:${theme.typography.pxToRem(theme['padding']['smaller'])};
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column-reverse;
	cursor: pointer;
}

.count {
	position: absolute;
	color: ${theme.palette.background.darkgrey};
	font-size:${theme.typography.pxToRem(8)};
	cursor: pointer;
	margin-left: ${theme.typography.pxToRem(11.5)};
	margin-top: -${theme.typography.pxToRem(25.5)};
}

.smallBox {
	position: absolute;
	width:${theme.typography.pxToRem(16)};
	border:thin solid ${theme.palette.commonBgColor.darkgrey};
	padding:${theme.typography.pxToRem(3)};
}

.femaleUnavailable {
	color:${theme.palette.background.lightpink};
	cursor: default;
}

.femaleAvailable {
	color:${theme.palette.background.pink};
}

.maleAvailable {
	color:${theme.palette.background.grey};
}

.maleUnavailable {
	color:${theme.palette.background.lightgrey};
	cursor: default;
}

.available {
	color:${theme.palette.background.grey};
}

.detailsMain {
	height:${theme.typography.pxToRem(theme['height']['oneRem'])};
	width:${theme.typography.pxToRem(theme['width']['oneRem'])};
	margin-top:${theme.typography.pxToRem(theme['margin']['oneForth'])};
}

.singleLegend {
	display: flex;
	gap:${theme.typography.pxToRem(theme['gap']['primary'])};
}

.seatLegend {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.seatDetails {

	${theme.breakpoints.down('sm')} {
		margin-left:${theme.typography.pxToRem(48)};
		margin-top:${theme.typography.pxToRem(theme['margin']['twoRem'])};
		display: none;
	}

	${theme.breakpoints.down('md')} {
		flex-direction: column;
		margin-left: 0;
		margin-bottom:${theme.typography.pxToRem(32)};
	}
}

.bookingSummaryButton {
	border-radius: 0;
}

.selected {
	border: thin solid green;
}

.gridMargin {
	margin-top:${theme.typography.pxToRem(theme['margin']['medium'])};
}

.femaleBorder {
	border:thin solid ${theme.palette.background.lightpink};
}

.maleBookedColor {
	border:thin solid ${theme.palette.background.lightgrey};

}

.femaleBookedColor {
	background-color:${theme.palette.background.lightpink};
}

.deckInfo {
	position: absolute;
	top: ${theme.typography.pxToRem(theme['top']['medium'])};
	left: ${theme.typography.pxToRem(theme['left']['secondary'])};
	margin: 0;
	color:${theme.palette.background.darkgrey};
}

.seats {
	display: flex;
	gap:${theme.typography.pxToRem(theme.gap.secondary)};

	${theme.breakpoints.down('sm')} {
		flex-direction: column;
	}
}

.drawer {
	display: none;

	${theme.breakpoints.down('sm')} {
		display: flex;
	}
}

.styledBox {
	display: none;

	${theme.breakpoints.down('sm')} {
		display: flex;
		background-color: #fff;
	}
}

.summaryButton {
	position: fixed;
	right: 1%;
	bottom: 0;
}

.childrenContainer {
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
}

.heading {
	margin-top: 1rem;
}

`,
);
