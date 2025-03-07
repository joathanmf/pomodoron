import InputRadioTheme from "./InputRadioTheme.jsx";

function FieldsetThemes({ currentTheme, setCurrentTheme }) {
  return (
    <div className="space-y-1">
      <h4 className="font-medium">Temas</h4>
      <fieldset className="fieldset flex flex-row justify-around">
        <InputRadioTheme
          value="lofi"
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          Padrão
        </InputRadioTheme>
        <InputRadioTheme
          value="cupcake"
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          Cupcake
        </InputRadioTheme>
        <InputRadioTheme
          value="dark"
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          Dark
        </InputRadioTheme>
        <InputRadioTheme
          value="forest"
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          Forest
        </InputRadioTheme>
        <InputRadioTheme
          value="dracula"
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          Dracula
        </InputRadioTheme>
      </fieldset>
    </div>
  );
}

export default FieldsetThemes;
