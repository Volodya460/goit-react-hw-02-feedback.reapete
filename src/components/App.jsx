import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counter = evt => {
    const { name } = evt.target;

    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  totalCounter = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total || 0;
  };

  procentTotal = () => {
    const { good, neutral, bad } = this.state;
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback!">
          <FeedbackOptions counter={this.counter} />
        </Section>

        <Section title="Statistics">
          {this.totalCounter() === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalCounter}
              procentTotal={this.procentTotal}
            />
          )}
        </Section>
      </div>
    );
  }
}
