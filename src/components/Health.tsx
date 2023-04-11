function MonsterHealth(props: { player: number; monster: number }) {
  return (
    <div>
      <section className="container">
      <section id="monster" >
        <h2>Monster Health</h2>
        <div className="healthbar">
          <div
            className="healthbar__value"
            style={{ width: `${props.monster}%` }}
          ></div>
        </div>
      </section>
      <section id="player" >
        <h2>Player Health</h2>
        <div className="healthbar">
          <div
            className="healthbar__value"
            style={{ width: `${props.player}%` }}
          ></div>
        </div>
      </section>
      </section>
    </div>
  );
}
export default MonsterHealth;
