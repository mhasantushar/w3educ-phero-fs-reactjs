import React, { use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ pricingPlansPromise }) => {
  const pricingPlanData = use(pricingPlansPromise);
  // console.log(pricingPlanData);

  return (
    <div className="my-10">
      <h2 className="mb-8 text-4xl text-center">Get Our Membership</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {pricingPlanData.map((pricingPlan) => (
          <PricingCard key={pricingPlan.id} pricingPlan={pricingPlan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
