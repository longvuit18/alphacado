type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children?: React.ReactNode;
}

export default function PlusButton({ children, className, ...props }: Props) {
  return (
    <div>
      <p className="text-lg font-semibold">+</p>
    </div>
  );
}
