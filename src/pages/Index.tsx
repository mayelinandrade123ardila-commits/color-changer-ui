import { useState, useEffect } from "react";
import ColorPresetSection from "@/components/ColorPresetSection";
import ColorPickerSection from "@/components/ColorPickerSection";
import RGBSliderSection from "@/components/RGBSliderSection";

const Index = () => {
  const [textColor, setTextColor] = useState("#8b5cf6");
  const [rgb, setRgb] = useState({ r: 139, g: 92, b: 246 });

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  // Handle color change from presets or picker
  const handleColorChange = (color: string) => {
    setTextColor(color);
    setRgb(hexToRgb(color));
  };

  // Handle RGB slider changes
  const handleRGBChange = (channel: "r" | "g" | "b", value: number) => {
    const newRgb = { ...rgb, [channel]: value };
    setRgb(newRgb);
    setTextColor(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">
            Cambiador de Color de Texto
          </h1>
          <p className="text-muted-foreground text-lg">
            Explora tres métodos diferentes para cambiar colores con JavaScript
          </p>
        </header>

        {/* Preview Text */}
        <div className="glass-card p-8 mb-8 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
            Texto de ejemplo
          </p>
          <p
            id="textoAColor"
            className="text-3xl md:text-4xl font-bold transition-all duration-500 animate-glow"
            style={{ color: textColor }}
          >
            ¡Este texto cambia de color!
          </p>
          <p
            className="text-lg md:text-xl mt-3 transition-colors duration-500"
            style={{ color: textColor, opacity: 0.7 }}
          >
            Utiliza los controles de abajo para modificarlo
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              className="w-8 h-8 rounded-lg border-2 border-glass-border transition-colors duration-300"
              style={{ backgroundColor: textColor }}
            />
            <code className="font-mono text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg">
              {textColor.toUpperCase()}
            </code>
          </div>
        </div>

        {/* Control Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ColorPresetSection onColorChange={handleColorChange} />
          <ColorPickerSection color={textColor} onColorChange={handleColorChange} />
          <RGBSliderSection rgb={rgb} onRGBChange={handleRGBChange} />
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-muted-foreground text-sm">
          <p>
            Creado con <span className="text-preset-red">♥</span> usando React y
            Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
