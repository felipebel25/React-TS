import { CourseGoal } from "./CourseGoal";

import type { CGoal } from "../types/CourseGoalTypes";

interface CourseGoalListProps {
  goals: CGoal[];
  onDeleteGlobal: (id: number) => void;
}

export const CourseGoalList = ({
  goals,
  onDeleteGlobal,
}: CourseGoalListProps) => (
  <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <CourseGoal
          id={goal.id}
          title={goal.title}
          description={goal.description}
          onDelete={onDeleteGlobal}
        ></CourseGoal>
      </li>
    ))}
  </ul>
);
