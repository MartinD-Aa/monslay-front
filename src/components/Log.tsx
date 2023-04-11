interface BattleLog {
  actionBy: string,
  actionType: string,
  actionValue: number
}
function Log(props: { log: Array<BattleLog> }) {

  var battleLog = props.log;

    const listItems = battleLog.map((logItem) => 
      <li>{logItem.actionBy} {logItem.actionType} for {logItem.actionValue}</li>
    )

  return (
    <section className="container">
      <h2>Battle Log</h2>
      <ul>
        {listItems}
      </ul>
    </section>
  );
}
export default Log;
