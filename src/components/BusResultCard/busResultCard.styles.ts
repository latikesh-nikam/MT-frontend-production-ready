import { styled } from '@mui/material/styles';

export const BusResultCardContainer = styled('div')(
  ({ theme }: any) => `
    border: thin solid ${theme.palette.borderFaded2};
    text-transform: capitalize;        
    border-radius:${theme.typography.pxToRem(theme.borderRadius.primary)};
    transition:all linear 0.2s;
    display:flex;
    gap:${theme.typography.pxToRem(theme.gap.primary)};
    flex-direction:column;
    
    .lightGrey{
        color:${theme.palette.textColors.lightGrey};
    }
    
    .fontWeightLight{
        font-weight: ${theme.typography.fontWeightLight};
    }
    
    .busDetails{
        flex:1;
        display:flex;
        padding:${theme.typography.pxToRem(theme.padding.secondary)};
        gap:${theme.typography.pxToRem(theme.gap.larger)};

        .vehicleAndTimeDetails{
            flex:2;
            display:flex;
            justify-content:space-between;
            min-width:${theme.typography.pxToRem(200)};
            .vehicle{
                flex:2;
                p{
                    text-transform:capitalize;
                }
            }
    
            .timeDetails{
                flex:2;
                display:flex;
                justify-content:space-between;
                .time{
                    display:flex;
                    flex-direction:column;
                    gap:${theme.typography.pxToRem(theme.gap.secondary)};
                    justify-content:space-between;

                    &.totalDuration{
                        text-transform:none;
                    }
                }
            }
            
        }

        .fareAndSeatsAvailabilty{
            display:flex;
            gap:${theme.typography.pxToRem(theme.gap.secondary)};
        }

        .ratingDetails{
            color:${theme.palette.textColors.white};

            .ratings{
                padding:${theme.typography.pxToRem(
                  theme.padding.small,
                )} ${theme.typography.pxToRem(theme.padding.primary)};
                &.green{
                    background-color: ${theme.palette.commonBgColor.lightGreen};
                }
                &.orange{
                    background-color: ${
                      theme.palette.commonBgColor.lightOrange
                    };
                }
                &.red{
                    background-color: ${theme.palette.commonBgColor.lightRed};
                }
            }
        }
    }

    .actionsContainer{
        display:flex;
        gap:${theme.typography.pxToRem(theme.gap.small)};
        padding:${theme.typography.pxToRem(theme.padding.secondary)};
        justify-content:flex-end;
        .actions{
            cursor:pointer;
            transition:all linear 0.2s;
         
            &:hover{
                    color:${theme.palette.primary.main};
                    font-weight:${theme.typography.fontWeightRegular};
            }
        }
    }

    .amenitiesContainer{
        padding:${theme.typography.pxToRem(theme.padding.secondary)};
        background-color: ${theme.palette.commonBgColor.lightGrey};
        display:flex;
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.gap.secondary)};
        flex-wrap:wrap;
        max-height:30vh;
        align-items:flex-start;

        .amenity{
            padding:${theme.typography.pxToRem(theme.padding.small)} 0;
            display:flex;
            gap:${theme.typography.pxToRem(theme.gap.primary)};
            align-items:center;
        }
    }

    &:hover {
        box-shadow:${theme.shadows[3]};
        transform:scale(101%);
    
}

${theme.breakpoints.down('sm')}{
    cursor:pointer;
    
    .vehicleAndTimeDetails{
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.gap.secondary)}
    }

    .fareAndSeatsAvailabilty{
        flex-direction:column;
    }
}

`,
);
