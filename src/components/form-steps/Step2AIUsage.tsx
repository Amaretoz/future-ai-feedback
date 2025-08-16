
import { CheckboxGroup } from './CheckboxGroup';
import { LikertScale } from './LikertScale';
import { TextInput } from './TextInput';

interface Step2Props {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

const Step2AIUsage = ({ data, updateData, errors }: Step2Props) => {
  const handleAIToolsChange = (values: string[]) => {
    updateData({
      ai_tools: {
        values,
        other: values.includes('Anders') ? data.ai_tools?.other || '' : ''
      }
    });
  };

  const handleAIToolsOtherChange = (other: string) => {
    updateData({
      ai_tools: {
        values: data.ai_tools?.values || ['Anders'],
        other
      }
    });
  };

  const handleBarriersChange = (values: string[]) => {
    updateData({
      ai_barriers: {
        values,
        other: values.includes('Anders') ? data.ai_barriers?.other || '' : ''
      }
    });
  };

  const handleBarriersOtherChange = (other: string) => {
    updateData({
      ai_barriers: {
        values: data.ai_barriers?.values || ['Anders'],
        other
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* AI Tools currently used */}
      <div className="field-group">
        <CheckboxGroup
          label="Welke AI-tools gebruikt u nu?"
          required
          name="ai_tools"
          values={data.ai_tools?.values || []}
          onChange={handleAIToolsChange}
          options={[
            { value: 'ChatGPT', label: 'ChatGPT' },
            { value: 'Gemini', label: 'Gemini' },
            { value: 'DeepSeek', label: 'DeepSeek' },
            { value: 'Geen', label: 'Geen' },
            { value: 'Anders', label: 'Anders' },
          ]}
          mutuallyExclusive={['Geen']}
          error={errors.ai_tools || errors['ai_tools.other']}
        />
        
        {(data.ai_tools?.values || []).includes('Anders') && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere AI-tool"
              value={data.ai_tools?.other || ''}
              onChange={handleAIToolsOtherChange}
              error={errors['ai_tools.other']}
            />
          </div>
        )}
      </div>

      {/* Usage frequency */}
      <div className="field-group">
        <LikertScale
          label="Hoe vaak gebruikt u AI-tools in uw werk?"
          required
          name="ai_usage_frequency"
          value={data.ai_usage_frequency || ''}
          onChange={(value) => updateData({ ai_usage_frequency: value })}
          leftLabel="Nooit"
          rightLabel="Dagelijks"
          error={errors.ai_usage_frequency}
        />
      </div>

      {/* Satisfaction */}
      <div className="field-group">
        <LikertScale
          label="Hoe tevreden bent u over uw huidige AI-tools?"
          required
          name="ai_satisfaction"
          value={data.ai_satisfaction || ''}
          onChange={(value) => updateData({ ai_satisfaction: value })}
          leftLabel="Helemaal ontevreden"
          rightLabel="Heel tevreden"
          error={errors.ai_satisfaction}
        />
      </div>

      {/* Barriers */}
      <div className="field-group">
        <CheckboxGroup
          label="Wat houdt u tegen om AI vaker te gebruiken?"
          required
          name="ai_barriers"
          values={data.ai_barriers?.values || []}
          onChange={handleBarriersChange}
          options={[
            { value: 'Ik weet niet goed waar te beginnen', label: 'Ik weet niet goed waar te beginnen' },
            { value: 'Gebrek aan tijd om het uit te proberen', label: 'Gebrek aan tijd om het uit te proberen' },
            { value: 'Twijfels over betrouwbaarheid van AI-antwoorden', label: 'Twijfels over betrouwbaarheid van AI-antwoorden' },
            { value: 'Onzekerheid over privacy en dataveiligheid', label: 'Onzekerheid over privacy en dataveiligheid' },
            { value: 'Het past niet goed in mijn huidige werkproces', label: 'Het past niet goed in mijn huidige werkproces' },
            { value: 'Te veel tools / lastig te kiezen', label: 'Te veel tools / lastig te kiezen' },
            { value: 'Ik heb er (nog) geen behoefte aan', label: 'Ik heb er (nog) geen behoefte aan' },
            { value: 'Anders', label: 'Anders' },
          ]}
          error={errors.ai_barriers || errors['ai_barriers.other']}
        />
        
        {(data.ai_barriers?.values || []).includes('Anders') && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere barrière"
              value={data.ai_barriers?.other || ''}
              onChange={handleBarriersOtherChange}
              error={errors['ai_barriers.other']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2AIUsage;
