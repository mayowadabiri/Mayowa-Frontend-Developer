import { TailSpin } from 'react-loader-spinner';

interface Props {
  height: number;
  width: number;
  visible: boolean;
  label?: string;
}

const Loader = ({ label, visible, ...props }: Props) => (
  <div className={`center ${label ? 'flex-col' : ''}`}>
    <TailSpin color="#1355FF" {...props} visible={visible} />
    {visible && (
      <p className="mt-4 small text-grey-300" data-testid="loader_text">
        {label}
      </p>
    )}
  </div>
);

Loader.defaultProps = {
  label: '',
};

export default Loader;
