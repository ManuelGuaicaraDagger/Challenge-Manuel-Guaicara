import React from 'react';
import { IBattleResult } from '../../helpers/interfaces/types';

interface BattleResultProps {
  battleResult: IBattleResult;
}

const BattleResult: React.FC<BattleResultProps> = ({ battleResult }) => {
  return (
    <div>
      <p>{battleResult.winnerName} wins!</p>
    </div>
  );
};

export default BattleResult;
