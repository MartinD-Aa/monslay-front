function GameOver(props: {
  player: number;
  monster: number;
  state: Boolean;
  death: Boolean;
  resetGame: Function;
  
}) {
  

  return (
    <section className="container">
      {props.death === false ? <h2>New Game!</h2> : <h2>Game Over!</h2>}
      {props.player > props.monster && props.monster === 0 ? (
        <h3>You won!</h3>
      ) : (
        <p></p>
      )}
      {props.player < props.monster && props.player === 0 ? (
        <h3>You lost!</h3>
      ) : (
        <p></p>
      )}
      {props.player > 0 && props.monster > 0 && props.death === true ? (
        <h3>You ran away!</h3>
      ) : (
        <p></p>
      )}
      {props.player === 0 && props.monster === 0 ? (
        <h3>It's a draw!</h3>
      ) : (
        <p></p>
      )}
      <button onClick={() => props.resetGame()}>Start New Game</button>
    </section>
  );
}
export default GameOver;
