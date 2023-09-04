import { ITextsProps } from '../types';

const ShowText = ({ name, color }: ITextsProps) => (
  <div className="flex items-center space-x-10">
    <p className={`whitespace-nowrap ${color}`}>{name}</p>
  </div>
);

export default ShowText;
