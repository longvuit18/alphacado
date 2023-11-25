import './switch.css'

type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  id: string;
  isOn?: boolean;
  handleToggle?: () => void;
}

export default function Switch({ id, isOn, handleToggle }: Props) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch-${id}`}
        type="checkbox"
      />
      <label
        style={{ background: isOn ? '#6AE485' : '#AAB0AF' }}
        className="switch-label"
        htmlFor={`switch-${id}`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};