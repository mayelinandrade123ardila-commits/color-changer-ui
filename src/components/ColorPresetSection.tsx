interface ColorPresetSectionProps {
  onColorChange: (color: string) => void;
}

const presetColors = [
  { name: 'Rojo', color: '#ef4444', bg: 'bg-preset-red' },
  { name: 'Naranja', color: '#f97316', bg: 'bg-preset-orange' },
  { name: 'Amarillo', color: '#eab308', bg: 'bg-preset-yellow' },
  { name: 'Verde', color: '#22c55e', bg: 'bg-preset-green' },
  { name: 'Cian', color: '#14b8a6', bg: 'bg-preset-cyan' },
  { name: 'Azul', color: '#3b82f6', bg: 'bg-preset-blue' },
  { name: 'Púrpura', color: '#8b5cf6', bg: 'bg-preset-purple' },
  { name: 'Rosa', color: '#ec4899', bg: 'bg-preset-pink' },
];

const ColorPresetSection = ({ onColorChange }: ColorPresetSectionProps) => {
  return (
    <section className="glass-card p-6">
      <h2 className="section-title flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary"></span>
        Método 1: Colores Predefinidos
      </h2>
      <p className="text-muted-foreground text-sm mb-5">
        Haz clic en un color para aplicarlo al texto
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {presetColors.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onColorChange(preset.color)}
            className="color-btn"
            style={{ backgroundColor: preset.color }}
            title={preset.name}
            aria-label={`Cambiar a color ${preset.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ColorPresetSection;
