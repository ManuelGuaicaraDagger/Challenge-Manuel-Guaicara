import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import { IPokemon } from '../../helpers/interfaces/types';

interface SelectedPokemonActionsProps {
  selectedPokemon: IPokemon;
}

const Img = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  cursor: 'pointer',
  display: 'block', 
  margin: '0 auto',
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

const SelectedPokemonActions: React.FC<SelectedPokemonActionsProps> = ({ selectedPokemon }) => {
  let background = '';

  switch (selectedPokemon.name) {
    case 'Pikachu':
      background = 'rgb(227,221,0)';
      break;
    case 'Charmander':
      background = 'rgb(252,107,34)';
      break;
    case 'Squirtle':
      background = 'rgb(34,252,250)';
      break;
    case 'Bulbasur':
      background = 'rgb(55,166,40)';
      break;
    case 'Eevee':
      background = 'rgb(113,113,113)';
      break;
    default:
      background = '';
  }

  return (
    <StyledGrid container justifyContent="center" alignItems="center" background={background} boxShadow={5}>
      <Grid item xs={12}>
        <Img src={selectedPokemon.imageUrl} alt={selectedPokemon.name} />
        <Typography align='left' variant='h5'>
          {selectedPokemon.name}
        </Typography>
        <ProgressBarContainer>
          <Typography align='left'>
            HP
          </Typography>
          <ProgressBar>
            <ProgressValue value={selectedPokemon.hp} />
          </ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Typography align='left'>
            Attack
          </Typography>
          <ProgressBar>
            <ProgressValue value={selectedPokemon.attack} />
          </ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Typography align='left'>
            Defense
          </Typography>
          <ProgressBar>
            <ProgressValue value={selectedPokemon.defense} />
          </ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Typography align='left'>
            Speed
          </Typography>
          <ProgressBar>
            <ProgressValue value={selectedPokemon.speed} />
          </ProgressBar>
        </ProgressBarContainer>
      </Grid>
    </StyledGrid>
  );
};

export default SelectedPokemonActions;
