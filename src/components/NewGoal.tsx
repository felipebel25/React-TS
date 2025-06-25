import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAddGoal: (title: string, description: string) => void;
}

export const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredDescription = summary.current!.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredDescription);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your Goal</label>
        <input ref={goal} id="title" type="text" />
      </p>
      <p>
        <label htmlFor="description">Your Description</label>
        <input ref={summary} id="description" type="text" />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};
