
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';
import { TextInput } from './TextInput';

interface Step4Props {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

const Step4Willingness = ({ data, updateData, errors }: Step4Props) => {
  const handleExtraFeaturesChange = (values: string[]) => {
    updateData({
      extra_features: {
        values,
        other: values.includes('Anders') ? data.extra_features?.other || '' : ''
      }
    });
  };

  const handleExtraFeaturesOtherChange = (other: string) => {
    updateData({
      extra_features: {
        values: data.extra_features?.values || ['Anders'],
        other
      }
    });
  };

  const handlePilotOptInChange = (checked: boolean) => {
    updateData({ 
      pilot_opt_in: checked,
      email: checked ? data.email || '' : ''
    });
  };

  return (
    <div className="space-y-8">
      {/* Willing to pay */}
      <div className="field-group">
        <RadioGroup
          label="Wat zou u bereid zijn te betalen?"
          required
          name="willing_to_pay"
          value={data.willing_to_pay || ''}
          onChange={(value) => updateData({ willing_to_pay: value })}
          options={[
            { value: '€10–€25 p/m', label: '€10–€25 per maand' },
            { value: '€25–€50 p/m', label: '€25–€50 per maand' },
            { value: '€50–€100 p/m', label: '€50–€100 per maand' },
            { value: 'Meer dan €100 p/m', label: 'Meer dan €100 per maand' },
            { value: 'Ik wil alleen een gratis versie gebruiken', label: 'Ik wil alleen een gratis versie gebruiken' },
          ]}
          error={errors.willing_to_pay}
        />
      </div>

      {/* Openness */}
      <div className="field-group">
        <RadioGroup
          label="Hoe open staat u voor gebruik/aanschaf?"
          required
          name="openness"
          value={data.openness || ''}
          onChange={(value) => updateData({ openness: value })}
          options={[
            { value: 'Ik wil dit zelf gebruiken én ervoor betalen', label: 'Ik wil dit zelf gebruiken én ervoor betalen' },
            { value: 'Ik wil het gebruiken, maar liever gratis of via mijn werkgever', label: 'Ik wil het gebruiken, maar liever gratis of via mijn werkgever' },
            { value: 'Misschien, als het écht veel oplevert', label: 'Misschien, als het écht veel oplevert' },
            { value: 'Waarschijnlijk niet, ik heb er geen behoefte aan', label: 'Waarschijnlijk niet, ik heb er geen behoefte aan' },
            { value: 'Weet ik nog niet', label: 'Weet ik nog niet' },
          ]}
          error={errors.openness}
        />
      </div>

      {/* Extra features */}
      <div className="field-group">
        <CheckboxGroup
          label="Welke extra functies zijn interessant?"
          name="extra_features"
          values={data.extra_features?.values || []}
          onChange={handleExtraFeaturesChange}
          options={[
            { value: 'Vertalen van documenten', label: 'Vertalen van documenten' },
            { value: 'Afspraken of taken automatisch herkennen', label: 'Afspraken of taken automatisch herkennen' },
            { value: 'Spraak naar tekst (of omgekeerd)', label: 'Spraak naar tekst (of omgekeerd)' },
            { value: 'Integratie met e-mail of agenda', label: 'Integratie met e-mail of agenda' },
            { value: 'Visuele samenvattingen (mindmaps e.d.)', label: 'Visuele samenvattingen (mindmaps e.d.)' },
            { value: 'Anders', label: 'Anders' },
          ]}
          error={errors['extra_features.other']}
        />
        
        {(data.extra_features?.values || []).includes('Anders') && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere functie"
              value={data.extra_features?.other || ''}
              onChange={handleExtraFeaturesOtherChange}
              error={errors['extra_features.other']}
            />
          </div>
        )}
      </div>

      {/* Pilot opt-in */}
      <div className="field-group">
        <div className="space-y-4 p-4 bg-secondary/30 rounded-lg">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="pilot_opt_in"
              checked={data.pilot_opt_in || false}
              onChange={(e) => handlePilotOptInChange(e.target.checked)}
              className="checkbox-input"
            />
            <label htmlFor="pilot_opt_in" className="text-sm text-foreground cursor-pointer leading-relaxed font-medium">
              Ja, ik wil gratis meedoen aan een pilot of vervolggesprek
            </label>
          </div>
          
          {data.pilot_opt_in && (
            <div className="ml-6">
              <TextInput
                label="E-mailadres"
                type="email"
                placeholder="uw.email@bedrijf.nl"
                value={data.email || ''}
                onChange={(value) => updateData({ email: value })}
                required={data.pilot_opt_in}
                error={errors.email}
              />
              <div className="field-help mt-1">
                We nemen contact op voor pilot-deelname
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Marketing opt-in */}
      <div className="field-group">
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="marketing_opt_in"
              checked={data.marketing_opt_in || false}
              onChange={(e) => updateData({ marketing_opt_in: e.target.checked })}
              className="checkbox-input"
            />
            <label htmlFor="marketing_opt_in" className="text-sm text-foreground cursor-pointer leading-relaxed">
              Ik wil updates en aanbiedingen ontvangen per e-mail
            </label>
          </div>
          <div className="field-help mt-2 ml-6">
            U kunt zich altijd uitschrijven. We gebruiken dubbele opt-in voor bevestiging.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Willingness;
