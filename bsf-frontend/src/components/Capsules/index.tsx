import { CapsuleUI } from '../../types';
import { capitalizeFirstLetter } from '../../utils';
import Button from '../Button';

interface ICapsuleProps extends CapsuleUI {
  onSelect: () => void;
}
const Capsules = ({
  launches,
  reuse,
  serial,
  dragonType,
  water_landings,
  status,
  onSelect,
  id,
}: ICapsuleProps) => {
  return (
    <section
      className="bg-white shadow-bills rounded-lg pb-10"
      data-testid={id}
    >
      <div className="p-6 flex flex-col space-y-4" data-testid="capsule">
        <p className="flex justify-between space-x-10 small">
          <span>Dragon Type</span>
          <span className="font-semibold text-grey-400">{dragonType}</span>
        </p>
        <p className="flex justify-between space-x-10 small ">
          <span>Serial</span>
          <span className="font-semibold text-grey-400">{serial}</span>
        </p>
        <p className="flex justify-between space-x-10 small ">
          <span>No of Lauches</span>
          <span className="font-semibold text-grey-400">{launches}</span>
        </p>
        <p className="flex justify-between space-x-10 small ">
          <span>Water Landings</span>
          <span className="font-semibold text-grey-400">{water_landings}</span>
        </p>
        <p className="flex justify-between space-x-10 small ">
          <span>Resue</span>
          <span className="font-semibold text-grey-400">{reuse}</span>
        </p>
        <p className="flex justify-between space-x-10 small ">
          <span>Status</span>
          <span className="font-semibold text-grey-400">
            {capitalizeFirstLetter(status)}
          </span>
        </p>
      </div>
      <div className="center mt-6">
        <Button onClick={onSelect} type="button" data-testid="view_more">
          View more
        </Button>
      </div>
    </section>
  );
};

export default Capsules;
