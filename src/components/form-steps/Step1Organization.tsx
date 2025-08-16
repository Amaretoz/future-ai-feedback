
import { RadioGroup } from './RadioGroup';
import { TextInput } from './TextInput';

interface Step1Props {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

const Step1Organization = ({ data, updateData, errors }: Step1Props) => {
  const handleSectorChange = (value: string) => {
    updateData({
      sector: {
        value,
        other: value === 'Anders' ? data.sector?.other || '' : ''
      }
    });
  };

  const handleSectorOtherChange = (other: string) => {
    updateData({
      sector: {
        value: data.sector?.value || 'Anders',
        other
      }
    });
  };

  const handleRoleChange = (value: string) => {
    updateData({
      role: {
        value,
        other: value === 'Anders' ? data.role?.other || '' : ''
      }
    });
  };

  const handleRoleOtherChange = (other: string) => {
    updateData({
      role: {
        value: data.role?.value || 'Anders',
        other
      }
    });
  };

  const handleRevenueChange = (value: string) => {
    updateData({
      revenue: {
        value,
        other: value === 'Anders' ? data.revenue?.other || '' : ''
      }
    });
  };

  const handleRevenueOtherChange = (other: string) => {
    updateData({
      revenue: {
        value: data.revenue?.value || 'Anders',
        other
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Organization size */}
      <div className="field-group">
        <RadioGroup
          label="Hoeveel medewerkers heeft uw organisatie?"
          required
          name="org_size"
          value={data.org_size || ''}
          onChange={(value) => updateData({ org_size: value })}
          options={[
            { value: '1', label: '1' },
            { value: '2-9', label: '2–9' },
            { value: '10-49', label: '10–49' },
            { value: '50-249', label: '50–249' },
            { value: '250+', label: '250+' },
          ]}
          error={errors.org_size}
        />
      </div>

      {/* Sector */}
      <div className="field-group">
        <RadioGroup
          label="In welke sector is uw organisatie actief?"
          required
          name="sector"
          value={data.sector?.value || ''}
          onChange={handleSectorChange}
          options={[
            { value: 'Zorg', label: 'Zorg' },
            { value: 'Bouw', label: 'Bouw' },
            { value: 'Dienstverlening', label: 'Dienstverlening' },
            { value: 'ICT', label: 'ICT' },
            { value: 'Overheid', label: 'Overheid' },
            { value: 'Onderwijs', label: 'Onderwijs' },
            { value: 'Horeca', label: 'Horeca' },
            { value: 'Anders', label: 'Anders' },
          ]}
          error={errors.sector || errors['sector.other']}
        />
        
        {data.sector?.value === 'Anders' && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere sector"
              value={data.sector?.other || ''}
              onChange={handleSectorOtherChange}
              error={errors['sector.other']}
            />
          </div>
        )}
      </div>

      {/* Role */}
      <div className="field-group">
        <RadioGroup
          label="Wat is uw functie/rol?"
          required
          name="role"
          value={data.role?.value || ''}
          onChange={handleRoleChange}
          options={[
            { value: 'Directie/Management', label: 'Directie/Management' },
            { value: 'ZZP\'er', label: 'ZZP\'er' },
            { value: 'Support', label: 'Support' },
            { value: 'Legal', label: 'Legal' },
            { value: 'Sales', label: 'Sales' },
            { value: 'Marketing', label: 'Marketing' },
            { value: 'Financiën', label: 'Financiën' },
            { value: 'ICT', label: 'ICT' },
            { value: 'Anders', label: 'Anders' },
          ]}
          error={errors.role || errors['role.other']}
        />
        
        {data.role?.value === 'Anders' && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere rol"
              value={data.role?.other || ''}
              onChange={handleRoleOtherChange}
              error={errors['role.other']}
            />
          </div>
        )}
      </div>

      {/* Revenue */}
      <div className="field-group">
        <RadioGroup
          label="Wat is de jaarlijkse omzetcategorie?"
          name="revenue"
          value={data.revenue?.value || ''}
          onChange={handleRevenueChange}
          options={[
            { value: '< €100.000', label: '< €100.000' },
            { value: '€100.000 – €250.000', label: '€100.000 – €250.000' },
            { value: '€250.000 – €2.000.000', label: '€250.000 – €2.000.000' },
            { value: '> €2.000.000', label: '> €2.000.000' },
            { value: 'Anders', label: 'Anders' },
          ]}
          error={errors.revenue || errors['revenue.other']}
        />
        
        {data.revenue?.value === 'Anders' && (
          <div className="ml-6 mt-3">
            <TextInput
              placeholder="Specificeer andere omzetcategorie"
              value={data.revenue?.other || ''}
              onChange={handleRevenueOtherChange}
              error={errors['revenue.other']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Step1Organization;
