function InputRadioTheme({ value, children, currentTheme, setCurrentTheme }) {
  return (
    <label className="flex gap-2 cursor-pointer items-center text-sm">
      <input
        type="radio"
        name="theme-radios"
        className="radio radio-sm theme-controller input-primary"
        value={value}
        checked={currentTheme === value}
        onChange={() => setCurrentTheme(value)}
      />
      {children}
    </label>
  );
}

export default InputRadioTheme;
