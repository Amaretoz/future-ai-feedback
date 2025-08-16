
interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  name: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: CheckboxOption[];
  required?: boolean;
  error?: string;
  mutuallyExclusive?: string[];
}

export const CheckboxGroup = ({ 
  label, 
  name, 
  values, 
  onChange, 
  options, 
  required = false, 
  error,
  mutuallyExclusive = []
}: CheckboxGroupProps) => {
  
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      // If this is a mutually exclusive option, clear others
      if (mutuallyExclusive.includes(optionValue)) {
        onChange([optionValue]);
      } else {
        // If adding a regular option, remove mutually exclusive ones
        const newValues = values.filter(v => !mutuallyExclusive.includes(v));
        onChange([...newValues, optionValue]);
      }
    } else {
      onChange(values.filter(v => v !== optionValue));
    }
  };

  return (
    <fieldset className="field-group">
      <legend className="field-label">
        {label}
        {required && <span className="field-required"> *</span>}
      </legend>
      
      <div className="checkbox-group mt-3">
        {options.map((option) => (
          <div key={option.value} className="checkbox-item">
            <input
              type="checkbox"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)}
              className="checkbox-input"
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <label 
              htmlFor={`${name}-${option.value}`}
              className="text-sm text-foreground cursor-pointer leading-relaxed"
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
