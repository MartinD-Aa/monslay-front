function Controls(props: 
    {player:number, 
      monster:number,
      round: number,
      playerHealth: Function, 
      monsterHealth: Function, 
      roundCount: Function,
      gameState: Function,
      deathState: Function
    }) {
      var playerHP = props.player;
      var monsterHP = props.monster;
      var currentRound = props.round;
      
    function attackPlayer(){
      const hit = randomTall(15, 8);
      if(playerHP - hit < 0){
        props.playerHealth(0);
        
      }else{
        props.playerHealth(playerHP-= hit);
      }
      currentRound++;
      props.roundCount(currentRound);
    }
  
    function attackMonster(){
      const hit = randomTall(12, 5);
      if(monsterHP - hit < 0){
        props.monsterHealth(0);
        
      } else{
        props.monsterHealth(monsterHP -= hit);
      }
      attackPlayer();
    }
  
    function specialAttack(){
      const hit = randomTall(20, 15);
      if(monsterHP - hit < 0){
        props.monsterHealth(0);
        
      } else{
        props.monsterHealth(monsterHP -= hit);
      }
      attackPlayer();
    }
  
    function healPlayer(){
      const heal = randomTall(20, 10);
      const hit = randomTall(15, 8);
      if(playerHP + (heal - hit) > 100){
        props.playerHealth(100);
      } else {
        props.playerHealth(playerHP += (heal - hit));
      }
      currentRound++;
      props.roundCount(currentRound);
    }
  
    function flee(){
      const num = randomTall(8, 2)
      if(num < 5){
        attackPlayer();
      } else {
        props.gameState(false);
        props.deathState(true);
      }
    }
  
    function randomTall(min:number, max:number){
      return Math.floor(Math.random() * (max-min)) + min;
    }
  
  
      return (
      <section id="controls" className="container">
      <button onClick={attackMonster}>ATTACK</button>
      <button disabled={currentRound % 3 !== 0} onClick={specialAttack}>
        SPECIAL ATTACK
      </button>
      <button onClick={healPlayer}>HEAL</button>
      <button onClick={flee}>RUN</button>
    </section>
    );
  }
  export default Controls;