interface Props {
  title: string;
  children?: JSX.Element;
}

export const PageTitle = ({ title, children }: Props) => (
  <div className="flex mb-4">
    <div className="flex-1">
      <h2 className="mb-4">{title}</h2>
    </div>
    <div className="flex-2 align-items-end">{children}</div>
  </div>
);
