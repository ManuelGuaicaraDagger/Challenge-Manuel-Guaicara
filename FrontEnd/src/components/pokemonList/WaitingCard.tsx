import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import unknow from '../../assets/images/unknow.png';

const Img = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  cursor: 'pointer',
  display: 'block',
  margin: '0 auto',
  padding: '10px',
  [theme.breakpoints.down(1250)]: {
    width: '140px', 
    height: '140px',
  },
  [theme.breakpoints.down(1050)]: {
    width: '98px', 
    height: '98px',
  },
  [theme.breakpoints.down(700)]: {
    width: '68px', 
    height: '68px',
  },
}));

const StyledGrid = styled(Grid)<{ background: string }>((props) => ({
  padding: '16px',
  borderRadius: '8px',
  background: props.background,
  backgroundImage: `linear-gradient(180deg, ${props.background} 13%, rgba(255,255,255,1) 41%)`,
  [props.theme.breakpoints.down(1250)]: {
    padding: '11px', 
    borderRadius: '5.6px',
  },
  [props.theme.breakpoints.down(1050)]: {
    padding: '7.7px',
    borderRadius: '3.9px',
  },
  [props.theme.breakpoints.down(700)]: {
    padding: '5.4px', 
    borderRadius: '2.7px',
  },
}));

const ProgressBarContainer = styled('div')(({ theme }) => ({
  marginBottom: '5px',
  [theme.breakpoints.down(1250)]: {
    marginBottom: '3.5px',
  },
  [theme.breakpoints.down(1050)]: {
    marginBottom: '2.45px', 
  },
  [theme.breakpoints.down(700)]: {
    marginBottom: '1.715px',
  },
}));

const ProgressBar = styled('div')(({ theme }) => ({
  height: '10px',
  width: '100%',
  backgroundColor: '#f1f1f1',
  borderRadius: '5px',
  position: 'relative',
  [theme.breakpoints.down(1250)]: {
    height: '7px',
    borderRadius: '3.5px',
  },
  [theme.breakpoints.down(1050)]: {
    height: '4.9px',
    borderRadius: '2.45px',
  },
  [theme.breakpoints.down(700)]: {
    height: '3.43px',
    borderRadius: '1.715px',
  },
}));

const ProgressValue = styled('div')<{ value: number }>(({ value, theme }) => ({
  height: '100%',
  width: `${(value / 6) * 100}%`,
  backgroundColor: '#4CAF50',
  borderRadius: '5px',
  [theme.breakpoints.down(1250)]: {
    borderRadius: '3.5px',
  },
  [theme.breakpoints.down(1050)]: {
    borderRadius: '2.45px',
  },
  [theme.breakpoints.down(700)]: {
    borderRadius: '1.715px',
  },
}));

const WaitingCard: React.FC = () => {
  return (
    <StyledGrid container justifyContent="center" alignItems="center" background={"rgb(113,113,113)"} boxShadow={5}>
      <Grid item xs={12}>
        <Img src={unknow} alt="Unknow" />
        <Typography align='left' variant='h5'>
          ?
        </Typography>
        <ProgressBarContainer>
          <Typography align='left'>
            HP
          </Typography>
          <ProgressBar>
            <ProgressValue value={0} />
          </ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Typography align='left'>
            Attack
          </Typography>
          <ProgressBar>
            <ProgressValue value={0} />
          </ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Typography align='left'>
            Defense
          </Typography>
          <ProgressBar>
            <ProgressValue value={0} />
          </ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Typography align='left'>
            Speed
          </Typography>
          <ProgressBar>
            <ProgressValue value={0} />
          </ProgressBar>
        </ProgressBarContainer>
      </Grid>
    </StyledGrid>
  );
};

export default WaitingCard;
