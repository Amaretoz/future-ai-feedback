
interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: 'text' | 'email';
}

export const TextInput = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = false, 
  error,
  type = 'text'
}: TextInputProps) => {
  const id = label ? label.toLowerCase().replace(/\s+/g, '-') : 'text-input';
  
  return (
    <div className="field-group">
      {label && (
        <label htmlFor={id} className="field-label">
          {label}
          {required && <span className="field-required"> *</span>}
        </label>
      )}
      
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
          error ? 'border-destructive' : 'border-input'
        }`}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : 'false'}
      />
      
      {error && (
        <div id={`${id}-error`} className="field-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
