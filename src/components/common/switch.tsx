import './switch.css'

type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  isOn?: boolean;
  handleToggle?: () => void;
}

export default function Switch({ isOn, handleToggle }: Props) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        style={{ background: isOn ? '#6AE485' : '#AAB0AF' }}
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};