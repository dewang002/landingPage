import { communityLinks, platformLinks, resourcesLinks } from "../constant";

const Footer = () => {
  return (
    <div className="mx-10 lg:mx-40 mt-10">
      <div className="grid grid-cols-12 gap-10">

        <div className="col-span-12 lg:col-span-4">
          <h1 className="font-bold">Resources</h1>
          <ul className="spac-y-2">
            {resourcesLinks.map((elem, index) => (
              <h1 key={index}>
                <a href={elem.href}>{elem.text}</a>
              </h1>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <h1 className="font-bold">Platform</h1>
          <ul className="space-y-2">
            {platformLinks.map((elem, index) => (
              <h1 key={index}>
                <a href={elem.href}>{elem.text}</a>
              </h1>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <h1 className="font-bold">Community</h1>
          <ul className="space-y-2">
            {communityLinks.map((elem, index) => (
              <h1 key={index}>
                <a href={elem.href}>{elem.text}</a>
              </h1>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
