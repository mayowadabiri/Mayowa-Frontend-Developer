import ReactSelect, { GroupBase, Props, components } from 'react-select';

import { useMemo } from 'react';
import { Icon, Icons } from './Icon';

interface ISelectProps {
  label?: string;
  value?: string | number;
  className?: string;
}

const Control = ({ children, ...props }: any) => {
  const { selectProps } = props;

  return (
    <components.Control {...props}>
      <div className={`${selectProps.className || 'small text-grey-300'}`}>
        {children}
      </div>
      <Icon name={Icons.CaretDown} />
    </components.Control>
  );
};

const Option = ({ children, ...props }: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center space-x-3">
        {props.isSelected && <Icon name={Icons.Mark} fill="#1355FF" />}
        <p className={`${props.isSelected ? 'text-accent-400' : ''}`}>
          {children}
        </p>
      </div>
    </components.Option>
  );
};

export default function Select<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>({
  label,
  value,
  ...selectProps
}: Omit<Props<OptionType, IsMulti, GroupType>, 'value'> & ISelectProps) {
  const selectedValue = useMemo(() => {
    if ((value !== undefined || value !== null) && selectProps.options) {
      const selectedOption = selectProps.options.find(
        (each: any) => each.value === value
      );

      if (!selectedOption) {
        return null;
      }

      return selectedOption;
    }

    return null;
  }, [value, selectProps.options]);

  return (
    <div>
      {' '}
      <label className="small text-grey-300 mb-2 block">
        {' '}
        {label}
      </label>
      {' '}
      <ReactSelect
        value={selectedValue as OptionType}
        className="react-select-container"
        classNamePrefix="customized-react-select"
        components={{
          Control,
          Option,
        }}
        {...selectProps}
        isSearchable={false}
      />
      {' '}
    </div>
  );
}

Select.defaultProps = {
  label: '',
  className: '',
  value: '',
};
