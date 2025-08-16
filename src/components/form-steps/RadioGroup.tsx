
interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  required?: boolean;
  error?: string;
}

export const RadioGroup = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options, 
  required = false, 
  error 
}: RadioGroupProps) => {
  return (
    <fieldset className="field-group">
      <legend className="field-label">
        {label}
        {required && <span className="field-required"> *</span>}
      </legend>
      
      <div className="radio-group mt-3" role="radiogroup" aria-labelledby={`${name}-label`}>
        {options.map((option) => (
          <div key={option.value} className="radio-item">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="radio-input"
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <label 
              htmlFor={`${name}-${option.value}`}
              className="text-sm text-foreground cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      {error && (
        <div id={`${name}-error`} className="field-error" role="alert">
          {error}
        </div>
      )}
    </fieldset>
  );
};
