import "./App.css";
import Health from "./components/Health";
import Controls from "./components/Controls";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [gameSession, setGameSession] = useState<Boolean>(false);
  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const [monsterHealth, setMonsterHealth] = useState<number>(100);
  const [death, setDeath] = useState<Boolean>(false);
  const [turn, setTurn] = useState<number>(0);

  const SetHealthPlayer = (healthPlayer: number) => {
	setPlayerHealth(healthPlayer);
  };

  const SetHealthMonster = (healthMonster: number) => {
    setMonsterHealth(healthMonster);
  };

  const SetCurrentRound = (round: number) => {
    setTurn(round);
  };

  const SetGameState = (gameState: Boolean) => {
    setGameSession(gameState);
  };

  const SetDeathState = (deathState: Boolean) => {
	setDeath(deathState);
  }
  if((playerHealth === 0 || monsterHealth === 0) && death === false ){
	setDeath(true);
	setGameSession(false);
  }
  console.log("Not dead " + turn + " " + playerHealth + " " + monsterHealth);
  return (
    <div className="App">
		<div className="header">
        	<h1>Monster Slayer</h1>
    	</div>
      { gameSession === false ?
		<GameOver
		player={playerHealth}
		monster={monsterHealth}
		state={gameSession}
		death={death}
		playerHealth={SetHealthPlayer}
		monsterHealth={SetHealthMonster}
		roundCount={SetCurrentRound}
		gameState={SetGameState}
		deathState = {SetDeathState}
	  />
	:
	<div>
  <Health player={playerHealth} monster={monsterHealth} />
	<Controls
	player={playerHealth}
	monster={monsterHealth}
	round={turn}
	playerHealth={SetHealthPlayer}
	monsterHealth={SetHealthMonster}
	roundCount={SetCurrentRound}
	gameState={SetGameState}
	deathState = {SetDeathState}
  />
  <Log />
  </div>
  }
    </div>
  );
}

export default App;
