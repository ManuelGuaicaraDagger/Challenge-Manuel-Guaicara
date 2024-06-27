import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import unknow from '../../assets/images/unknow.png'


const Img = styled('img')({
  width: '200px',
  height: '200px',
  cursor: 'pointer',
  display: 'block', 
  margin: '0 auto', 
  padding: "10px"
});

const StyledGrid = styled(Grid)<{ background: string }>((props) => ({
  padding: '16px',
  borderRadius: '8px',
  background: props.background,
  backgroundImage: `linear-gradient(180deg, ${props.background} 13%, rgba(255,255,255,1) 41%)`,
}));

const ProgressBarContainer = styled('div')({
  marginBottom: '5px',
});

const ProgressBar = styled('div')({
  height: '10px',
  width: '100%',
  backgroundColor: '#f1f1f1',
  borderRadius: '5px',
  position: 'relative',
});

const ProgressValue = styled('div')<{ value: number }>((props) => ({
  height: '100%',
  width: `${(props.value / 6) * 100}%`,
  backgroundColor: '#4CAF50',
  borderRadius: '5px',
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