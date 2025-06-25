import { useState } from "react";
import { Header } from "./components/Header";

import { CourseGoalList } from "./components/CourseGoalList";
import { NewGoal } from "./components/NewGoal";

import goalsImg from "./assets/goals.jpg";

import type { CGoal } from "./types/CourseGoalTypes";

export default function App() {
  const [goals, setGoals] = useState<CGoal[]>([]);
  
  const addGoal = (title: string, description: string) => {
    setGoals((prevState) => [
      ...prevState,
      { id: Math.random(), title, description },
    ]);
  };

  const removeGoal = (id: number) => {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  };

  return (
    <main>
      <Header
        img={{
          src: goalsImg,
          alt: "A list of goals",
        }}
      >
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoal} />
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <CourseGoalList goals={goals} onDeleteGlobal={removeGoal} />
    </main>
  );
}
