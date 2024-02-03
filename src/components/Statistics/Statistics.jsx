export function Statistics({ good, neutral, bad, total, procentTotal }) {
  return (
    <ul>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {total()}</li>
      <li>Positive Feetback : {procentTotal()}%</li>
    </ul>
  );
}
