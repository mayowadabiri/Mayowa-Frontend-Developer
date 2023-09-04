import { texts } from '../constants/texts';
import ShowText from './ShowText';

const Banner = () => {
  return (
    <section className="text-white bg-primary-500">
      <div className="flex xl:flex-row flex-col px-18 pt-14">
        <div className="text-center">
          <h1 className="h1 mb-10">
            Showcase your
            <br />
            <span className="md:w-1/3 w-full sm:inline-block block overflow-scroll mr-3 align-middle">
              <span className="animate-slide flex items-center space-x-8 pl-72">
                {texts.map((item) => (
                  <ShowText {...item} key={item.name} />
                ))}
              </span>
            </span>
            and every other showcases
          </h1>
          <p className="mb-10  w-full normal xl:mx-o font-medium">
            Open Source REST API for launch, rocket, core, capsule, starlink,
            launchpad, and landing pad data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
