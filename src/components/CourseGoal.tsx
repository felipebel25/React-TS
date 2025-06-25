import type { FC, PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}>;
export const CourseGoal: FC<CourseGoalProps> = ({
  id,
  title,
  description,
  onDelete,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
      {children}
    </article>
  );
};
