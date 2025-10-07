import React from "react";
import { Star } from "lucide-react"; // Import the "Star" icon from Lucide (or any other icon you want)

const PricingCard = ({ pricingPlan }) => {
  console.log(pricingPlan);

  return (
    <div className="relative flex flex-col bg-amber-200 shadow-lg m-4 p-4 rounded-lg text-center">
      {/* Popular Icon: Display only if 'popular' is true */}
      {pricingPlan.popular && (
        <div className="top-2 left-2 absolute bg-yellow-500 p-2 rounded-full text-white">
          <Star className="w-6 h-6" />
        </div>
      )}

      <h3 className="text-xl">{pricingPlan.planName}</h3>
      <h2 className="text-2xl">${pricingPlan.priceMonthly}/Monthly</h2>

      {pricingPlan.features && (
        <ul className="flex-1 my-4 text-left">
          {pricingPlan.features.map((feature, index) => (
            <li
              key={index}
              className="before:mr-2 before:text-green-500 before:content-['✓']"
            >
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="bg-amber-400 my-4 p-4 rounded-lg">
        <h3 className="text-xl">
          Save ${pricingPlan.priceMonthly * 12 - pricingPlan.priceYearly} with
          Yearly
        </h3>
        <h2 className="font-bold text-2xl">${pricingPlan.priceYearly}!</h2>
      </div>

      <button className="w-full btn btn-warning">Choose Plan</button>
    </div>
  );
};

export default PricingCard;
