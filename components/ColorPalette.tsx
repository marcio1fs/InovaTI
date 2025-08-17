
import React from 'react';

interface ColorPaletteProps {
  colors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-300 mb-3">Color Palette</h3>
      <div className="flex flex-wrap gap-3">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleCopy(color)}
            className="relative w-16 h-16 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-110 border-2 border-transparent hover:border-sky-400"
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 rounded-md">
              <span className="text-white text-xs font-mono select-none">{copiedColor === color ? 'Copied!' : 'Copy'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
