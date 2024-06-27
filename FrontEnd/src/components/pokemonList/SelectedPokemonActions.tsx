import React from 'react';
import { IPokemon } from '../../helpers/interfaces/types';
import { Grid, Typography, styled } from '@mui/material';

interface SelectedPokemonActionsProps {
  selectedPokemon: IPokemon;
}

const Img = styled('img')({
  width: '200px',
  height: '200px',
  cursor: 'pointer',
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
