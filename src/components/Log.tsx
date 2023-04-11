interface BattleLog {
  actionBy: string;
  actionType: string;
  actionValue: number;
}
function Log(props: { log: Array<BattleLog> }) {
  var battleLog = props.log;

  const listItems = battleLog.map((logItem) => (
    <li key={battleLog.indexOf(logItem)}>
      <span id={logItem.actionBy}>{logItem.actionBy}</span> -{" "}
      {logItem.actionType} -{" "}
      <span id={logItem.actionType}>{logItem.actionValue}</span>
    </li>
  ));

  return (
    <section className="container" id="log">
      <h2>Battle Log</h2>
      <ul>{listItems}</ul>
    </section>
  );
}
export default Log;
