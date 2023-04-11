import "./App.css";
import Health from "./components/Health";
import Controls from "./components/Controls";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import { useState } from "react";

interface BattleLog {
  actionBy: string,
  actionType: string,
  actionValue: number
}

function App() {
  const [gameState, setGameState] = useState<Boolean>(false);
  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const [monsterHealth, setMonsterHealth] = useState<number>(100);
  const [deathState, setDeathState] = useState<Boolean>(false);
  const [turn, setTurn] = useState<number>(0);
  const [battleLog, SetBattleLog] = useState<Array<BattleLog>>([]);

  const SetPlayerHealthInChild = (healthPlayer: number) => {
    setPlayerHealth(healthPlayer);
  };

  const SetMonsterHealthInChild = (healthMonster: number) => {
    setMonsterHealth(healthMonster);
  };

  const SetTurnInChild = (round: number) => {
    setTurn(round);
  };

  const SetGameStateInChild = (gameState: Boolean) => {
    setGameState(gameState);
  };

  const SetDeathStateInChild = (deathState: Boolean) => {
    setDeathState(deathState);
  };
  const SetBattleLogInChild = (log:Array<BattleLog>) => {
    SetBattleLog(log)
  }

  function log(who:string, what:string, value:number){
    battleLog.unshift({
      actionBy: who,
      actionType: what,
      actionValue: value
    });
  }

  if ((playerHealth === 0 || monsterHealth === 0) && deathState === false) {
    setDeathState(true);
    setGameState(false);
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Monster Slayer</h1>
      </div>
      {gameState === false ? (
        <GameOver
          player={playerHealth}
          monster={monsterHealth}
          state={gameState}
          death={deathState}
          playerHealth={SetPlayerHealthInChild}
          monsterHealth={SetMonsterHealthInChild}
          roundCount={SetTurnInChild}
          gameState={SetGameStateInChild}
          deathState={SetDeathStateInChild}
        />
      ) : (
        <div>
          <Health player={playerHealth} monster={monsterHealth} />
          <Controls
            player={playerHealth}
            monster={monsterHealth}
            round={turn}
            playerHealth={SetPlayerHealthInChild}
            monsterHealth={SetMonsterHealthInChild}
            roundCount={SetTurnInChild}
            gameState={SetGameStateInChild}
            deathState={SetDeathStateInChild}
          />
          <Log 
            log = {battleLog}
          />
        </div>
      )}
    </div>
  );
}

export default App;
