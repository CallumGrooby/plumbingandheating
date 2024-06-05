import { ServiceArticle } from "../ultilities/ultFunctions";

export const ServicesSection = ({ services }) => {
  return (
    <section className="container mx-auto">
      <header className="flex flex-col flex-wrap content-center">
        <h1 className="font-Exo text-4xl my-8">What Can We Help You With?</h1>
      </header>

      {/* flex flex-col lg:flex-row lg:flex-nowrap flex-wrap container gap-4 mx-auto content-center justify-between */}
      <div className="flex items-center justify-center">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((serviceInfo, index) => {
            return <ServiceArticle key={index} serviceInfo={serviceInfo} />;
          })}
        </section>
      </div>
    </section>
  );
};
