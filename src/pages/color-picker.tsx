import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {
  const change = (args: any) => {
    const container = document.getElementById("preview");
    if (container) {
      container.style.backgroundColor = args?.currentValue?.hex;
    }
  };
  return (
      <div className="h-screen p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
        <Header category="App" title="Color Picker" />
        <div className="text-center ">
          <div id="preview">
            <div className="flex items-center justify-center gap-20 ">
              <div>
                <p className="mt-20 mb-4 text-2xl font-semibold">
                  Inline Pallete
                </p>
                <ColorPickerComponent
                    id="inline-pallete"
                    mode="Palette"
                    modeSwitcher={false}
                    inline
                    showButtons={false}
                    change={change}
                />
              </div>
              <div>
                <p className="mt-20 mb-4 text-2xl font-semibold">Inline Picker</p>
                <ColorPickerComponent
                    id="inline-pallete"
                    mode="Picker"
                    modeSwitcher={false}
                    inline
                    showButtons={false}
                    change={change}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ColorPicker;