import type { FC, PropsWithChildren } from "react";

// 1)
// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children: ReactNode;
// }
// 2)
// interface CourseGoalProps extends PropsWithChildren {
//   title: string;
//   description: string;
//   children: ReactNode;
// }
// 3)
type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;
export const CourseGoal: FC<CourseGoalProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
      {children}
    </article>
  );
};
