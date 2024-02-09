export function Statistics({ good, neutral, bad, total }) {
  // let procent = total().totalProcent;
  // let totalNumber = total().totalNumber;

  return (
    <ul>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {total().totalNumber}</li>
      <li>Positive Feetback : {total().totalProcen}%</li>
    </ul>
  );
}
