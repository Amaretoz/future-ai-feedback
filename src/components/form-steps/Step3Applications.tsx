
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';
import { LikertScale } from './LikertScale';
import { TextInput } from './TextInput';

interface Step3Props {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

const Step3Applications = ({ data, updateData, errors }: Step3Props) => {
  const handleTasksChange = (values: string[]) => {
    updateData({
      ai_tasks: {
        values,
        other: values.includes('Anders') ? data.ai_tasks?.other || '' : ''
      }
    });
  };

  const handleTasksOtherChange = (other: string) => {
    updateData({
      ai_tasks: {
        values: data.ai_tasks?.values || ['Anders'],
        other
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* AI Tasks support */}
      <div className="field-group">
        <CheckboxGroup
          label="Op welke taken zou AI u het meeste kunnen ondersteunen?"
          required
          name="ai_tasks"
          values={data.ai_tasks?.values || []}
          onChange={handleTasksChange}
          options={[
            { value: 'Samenvatten van documenten of e-mails', label: 'Samenvatten van documenten of e-mails' },
            { value: 'Opstellen van teksten of voorstellen', label: 'Opstellen van teksten of voorstellen' },
            { value: 'Informatie opzoeken of analyseren', label: 'Informatie opzoeken of analyseren' },
            { value: 'Brainstormen of ideeën genereren', label: 'Brainstormen of ideeën genereren' },
            { value: 'Communicatie met klanten of collega\'s', label: 'Communicatie met klanten of collega\'s' },
            { value: 'Nalezen of controleren van documenten', label: 'Nalezen of controleren van documenten' },
            { value: 'Ik zie voorlopig geen duidelijke toepassing', label: 'Ik zie voorlopig geen duidelijke toepassing' },
            { value: 'Anders', label: 'Anders' },
          ]}
          mutuallyExclusive={['Ik zie voorlopig geen duidelijke toepassing']}
          error={errors.ai_tasks || errors['ai_tasks.other']}
        />
        
        {(data.ai_tasks?.values || []).includes('Anders') && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere taak"
              value={data.ai_tasks?.other || ''}
              onChange={handleTasksOtherChange}
              error={errors['ai_tasks.other']}
            />
          </div>
        )}
      </div>

      {/* AI fit */}
      <div className="field-group">
        <RadioGroup
          label="Hoe goed past AI volgens u bij uw manier van werken?"
          required
          name="ai_fit"
          value={data.ai_fit || ''}
          onChange={(value) => updateData({ ai_fit: value })}
          options={[
            { value: 'Heel goed – ik zie veel toepassingen', label: 'Heel goed – ik zie veel toepassingen' },
            { value: 'Redelijk – op sommige taken kan het helpen', label: 'Redelijk – op sommige taken kan het helpen' },
            { value: 'Matig – ik weet nog niet goed wat het toevoegt', label: 'Matig – ik weet nog niet goed wat het toevoegt' },
            { value: 'Slecht – ik zie weinig tot geen meerwaarde', label: 'Slecht – ik zie weinig tot geen meerwaarde' },
            { value: 'Geen mening / weet ik (nog) niet', label: 'Geen mening / weet ik (nog) niet' },
          ]}
          error={errors.ai_fit}
        />
      </div>

      {/* Document Q&A value */}
      <div className="field-group">
        <LikertScale
          label="Hoe waardevol is het om een document te uploaden en er vragen over te stellen?"
          required
          name="value_doc_qa"
          value={data.value_doc_qa || ''}
          onChange={(value) => updateData({ value_doc_qa: value })}
          leftLabel="Niet waardevol"
          rightLabel="Heel waardevol"
          error={errors.value_doc_qa}
        />
      </div>

      {/* Co-creation value */}
      <div className="field-group">
        <LikertScale
          label="Hoe waardevol is co-creëren met AI (ideeën op basis van bestaande tekst)?"
          required
          name="value_cocreation"
          value={data.value_cocreation || ''}
          onChange={(value) => updateData({ value_cocreation: value })}
          leftLabel="Niet waardevol"
          rightLabel="Heel waardevol"
          error={errors.value_cocreation}
        />
      </div>

      {/* Auto summary usefulness */}
      <div className="field-group">
        <LikertScale
          label="Hoe nuttig is automatische samenvatting + actiepunten?"
          required
          name="usefulness_autosummary"
          value={data.usefulness_autosummary || ''}
          onChange={(value) => updateData({ usefulness_autosummary: value })}
          leftLabel="Niet nuttig"
          rightLabel="Heel nuttig"
          error={errors.usefulness_autosummary}
        />
      </div>
    </div>
  );
};

export default Step3Applications;
