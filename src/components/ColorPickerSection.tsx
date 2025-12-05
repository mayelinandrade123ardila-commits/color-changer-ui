interface ColorPickerSectionProps {
  color: string;
  onColorChange: (color: string) => void;
}

const ColorPickerSection = ({ color, onColorChange }: ColorPickerSectionProps) => {
  return (
    <section className="glass-card p-6">
      <h2 className="section-title flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent"></span>
        Método 2: Selector de Color
      </h2>
      <p className="text-muted-foreground text-sm mb-5">
        Usa el selector para elegir cualquier color
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-20 h-20 rounded-xl cursor-pointer border-2 border-glass-border bg-transparent"
            aria-label="Selector de color"
          />
        </div>
        <div className="text-left">
          <p className="text-xs text-muted-foreground mb-1">Color seleccionado</p>
          <code className="font-mono text-lg text-foreground bg-secondary px-3 py-1 rounded-lg">
            {color.toUpperCase()}
          </code>
        </div>
      </div>
    </section>
  );
};

export default ColorPickerSection;
