import { CapsuleUI } from '../../types';
import { capitalizeFirstLetter } from '../../utils';
import { Icon, Icons } from '../Icon';

interface ICapsuleProps {
  capsule: CapsuleUI;
  close: () => void;
}
const Capsule = ({ capsule, close }: ICapsuleProps) => {
  return (
    <div className="bg-[#14212140] fixed w-full z-50 left-0 top-0 h-screen">
      <div className="tablet:w-[50%] w-[80%] mx-auto mt-56">
        <div
          className="bg-white rounded-2xl border border-grey-50 flex flex-col md:py-32 py-16 px-32 space-y-9 relative"
          data-testid="capsule_wrapper"
        >
          <button
            className="absolute right-6 top-6"
            type="button"
            onClick={close}
            data-testid="close"
          >
            <Icon name={Icons.Close} fill="#000000" height={20} width={20} />
          </button>
          <p className="flex justify-between space-x-10 small ">
            <span>Dragon Type</span>
            <span className="font-semibold text-grey-400">
              {capsule.dragonType}
            </span>
          </p>
          <p className="flex justify-between space-x-10 small ">
            <span>Last update</span>
            <span className="font-semibold text-grey-400">
              {capsule.last_update}
            </span>
          </p>
          <p className="flex justify-between space-x-10 small ">
            <span>Serial</span>
            <span className="font-semibold text-grey-400">
              {capsule.serial}
            </span>
          </p>
          <p className="flex justify-between space-x-10 small ">
            <span>No of Lauches</span>
            <span className="font-semibold text-grey-400">
              {capsule.launches}
            </span>
          </p>
          <p className="flex justify-between space-x-10 small ">
            <span>Water Landings</span>
            <span className="font-semibold text-grey-400">
              {capsule.water_landings}
            </span>
          </p>
          <p className="flex justify-between space-x-10 small ">
            <span>Resue</span>
            <span className="font-semibold text-grey-400">{capsule.reuse}</span>
          </p>
          <p className="flex justify-between space-x-10 small ">
            <span>Status</span>
            <span className="font-semibold text-grey-400">
              {capitalizeFirstLetter(capsule.status)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capsule;
