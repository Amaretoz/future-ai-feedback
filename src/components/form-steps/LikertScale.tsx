
interface LikertScaleProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  leftLabel: string;
  rightLabel: string;
  required?: boolean;
  error?: string;
}

export const LikertScale = ({ 
  label, 
  name, 
  value, 
  onChange, 
  leftLabel, 
  rightLabel, 
  required = false, 
  error 
}: LikertScaleProps) => {
  const scales = ['1', '2', '3', '4', '5'];

  return (
    <fieldset className="field-group">
      <legend className="field-label">
        {label}
        {required && <span className="field-required"> *</span>}
      </legend>
      
      <div className="mt-4">
        <div className="likert-scale" role="radiogroup" aria-labelledby={`${name}-label`}>
          <div className="likert-item">
            <span className="likert-label">{leftLabel}</span>
          </div>
          
          {scales.map((scale) => (
            <div key={scale} className="likert-item">
              <input
                type="radio"
                id={`${name}-${scale}`}
                name={name}
                value={scale}
                checked={value === scale}
                onChange={(e) => onChange(e.target.value)}
                className="likert-radio"
                aria-describedby={error ? `${name}-error` : undefined}
              />
              <label 
                htmlFor={`${name}-${scale}`}
                className="likert-label cursor-pointer"
              >
                {scale}
              </label>
            </div>
          ))}
          
          <div className="likert-item">
            <span className="likert-label">{rightLabel}</span>
          </div>
        </div>
      </div>
      
      {error && (
        <div id={`${name}-error`} className="field-error" role="alert">
          {error}
        </div>
      )}
    </fieldset>
  );
};
