import { Slider } from "@/components/ui/slider";

interface RGBSliderSectionProps {
  rgb: { r: number; g: number; b: number };
  onRGBChange: (channel: 'r' | 'g' | 'b', value: number) => void;
}

const RGBSliderSection = ({ rgb, onRGBChange }: RGBSliderSectionProps) => {
  const rgbToHex = () => {
    return `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
  };

  return (
    <section className="glass-card p-6">
      <h2 className="section-title flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-preset-green"></span>
        Método 3: Controles RGB
      </h2>
      <p className="text-muted-foreground text-sm mb-5">
        Ajusta los valores de Rojo, Verde y Azul
      </p>
      
      <div className="space-y-5">
        {/* Red Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-preset-red">Rojo (R)</label>
            <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded">{rgb.r}</span>
          </div>
          <Slider
            value={[rgb.r]}
            onValueChange={(value) => onRGBChange('r', value[0])}
            max={255}
            step={1}
            className="[&_[role=slider]]:bg-preset-red [&_[role=slider]]:border-preset-red [&_.relative]:bg-preset-red/20"
          />
        </div>

        {/* Green Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-preset-green">Verde (G)</label>
            <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded">{rgb.g}</span>
          </div>
          <Slider
            value={[rgb.g]}
            onValueChange={(value) => onRGBChange('g', value[0])}
            max={255}
            step={1}
            className="[&_[role=slider]]:bg-preset-green [&_[role=slider]]:border-preset-green [&_.relative]:bg-preset-green/20"
          />
        </div>

        {/* Blue Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-preset-blue">Azul (B)</label>
            <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded">{rgb.b}</span>
          </div>
          <Slider
            value={[rgb.b]}
            onValueChange={(value) => onRGBChange('b', value[0])}
            max={255}
            step={1}
            className="[&_[role=slider]]:bg-preset-blue [&_[role=slider]]:border-preset-blue [&_.relative]:bg-preset-blue/20"
          />
        </div>

        <div className="pt-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Valor RGB</p>
          <code className="font-mono text-sm text-foreground bg-secondary px-3 py-1.5 rounded-lg inline-block">
            rgb({rgb.r}, {rgb.g}, {rgb.b}) = {rgbToHex().toUpperCase()}
          </code>
        </div>
      </div>
    </section>
  );
};

export default RGBSliderSection;
