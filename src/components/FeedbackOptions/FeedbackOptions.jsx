export function FeedbackOptions({ counter }) {
  return (
    <ul>
      <li>
        <button type="button" name="good" onClick={evt => counter(evt)}>
          Good
        </button>
      </li>
      <li>
        <button type="button" name="neutral" onClick={evt => counter(evt)}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" name="bad" onClick={evt => counter(evt)}>
          Bad
        </button>
      </li>
    </ul>
  );
}
