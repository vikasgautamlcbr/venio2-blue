import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [cases, setCases] = useState(25);
  const [gb, setGB] = useState(300);
  const [savings, setSavings] = useState(0);
  const [savingsPercentage, setSavingsPercentage] = useState(0);

  const calculateROI = useCallback(() => {
    const clampedCases = Math.max(25, cases);
    const clampedGB = Math.max(25, gb);
    const totalGB = clampedCases * clampedGB;
    const totalTB = totalGB / 1000;

    // Determine tier based on cases and totalTB
    let processingRate: number, hostingRate: number;
    
    if (clampedCases <= 16 && totalTB <= 10) {
      processingRate = 20;
      hostingRate = 1500;
    } else if (clampedCases <= 32 && totalTB <= 20) {
      processingRate = 15;
      hostingRate = 1200;
    } else if (clampedCases <= 50 && totalTB <= 200) {
      processingRate = 8;
      hostingRate = 600;
    } else {
      processingRate = 8;
      hostingRate = 600;
    }

    // Current Costs (Without Venio)
    const currentProcessing = totalGB * processingRate;
    const currentHosting = totalTB * hostingRate;
    const currentReview = totalGB * 2 * 75;
    const currentLicenses = clampedCases * 8000;
    const currentTotal = currentProcessing + currentHosting + currentReview + currentLicenses;

    // Venio Costs (With Venio)
    const venioReview = currentReview * 0.7;

    // Calculate required instances (1 instance handles 10 cases)
    const requiredInstances = Math.ceil(clampedCases / 10);

    // Venio License Calculation based on instances and storage
    let venioLicense = 0;
    if (requiredInstances <= 16 && totalTB <= 3) {
      venioLicense = 164000;
    } else if (requiredInstances <= 24 && totalTB <= 10) {
      venioLicense = 240000;
    } else if (requiredInstances <= 32 && totalTB <= 20) {
      venioLicense = 480000;
    } else if (requiredInstances <= 50 && totalTB <= 200) {
      venioLicense = 640000;
    } else {
      // Extrapolate for larger deployments
      const tbRate = 3200;
      const instanceRate = 12800;
      venioLicense = (totalTB * tbRate) + (requiredInstances * instanceRate);
    }

    const venioTotal = venioReview + venioLicense;
    const totalSavings = currentTotal - venioTotal;
    const percentage = currentTotal > 0 ? (totalSavings / currentTotal) * 100 : 0;

    setSavings(totalSavings);
    setSavingsPercentage(percentage);
  }, [cases, gb]);

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateROI();
    }, 500);

    return () => clearTimeout(timer);
  }, [calculateROI]);

  const formatCurrency = (num: number) => {
    return num >= 0 ? `$${Math.round(num).toLocaleString()}` : `-$${Math.round(-num).toLocaleString()}`;
  };

  const isPositiveSavings = savings >= 0;

  return (
    <div className="max-w-[940px] mx-auto bg-card p-8 rounded-[20px] shadow-lg">
      <div className="flex flex-wrap gap-8 items-stretch">
        {/* LEFT SIDE: INPUTS */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-6 py-7">
          <div>
            <h2 className="text-foreground text-4xl font-extrabold leading-tight mb-3">
              Discover your potential savings with Venio
            </h2>
            <p className="text-foreground/80 text-base leading-relaxed">
              Transform your eDiscovery workflow with AI automation and predictable pricing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-foreground text-[0.95rem] font-semibold">
              Cases per year
            </Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[cases]}
                onValueChange={(value) => setCases(value[0])}
                min={25}
                max={500}
                step={1}
                className="flex-1"
              />
              <Input
                type="number"
                value={cases}
                onChange={(e) => setCases(Number(e.target.value))}
                min={25}
                max={1000}
                className="w-16 text-center font-semibold bg-primary/10 border-primary/20"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-foreground text-[0.95rem] font-semibold">
              Average GB per case
            </Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[gb]}
                onValueChange={(value) => setGB(value[0])}
                min={25}
                max={2000}
                step={1}
                className="flex-1"
              />
              <Input
                type="number"
                value={gb}
                onChange={(e) => setGB(Number(e.target.value))}
                min={25}
                max={10000}
                className="w-16 text-center font-semibold bg-primary/10 border-primary/20"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: RESULTS */}
        <div className="flex-1 min-w-[300px] bg-primary/10 p-7 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="bg-foreground text-background text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Potential Annual Savings
          </span>

          {/* TOTAL SAVED BOX */}
          <div className="mt-5 text-center">
            <div className="text-sm text-foreground/80 mb-2">
              Total amount saved
            </div>
            <div
              className={`text-4xl font-extrabold text-white px-4 py-3 rounded-xl min-w-[170px] transition-all duration-300 ${
                isPositiveSavings ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {formatCurrency(savings)}
            </div>
          </div>

          {/* PERCENTAGE STATEMENT */}
          <div className="mt-6 text-center text-lg text-foreground leading-relaxed">
            That's a savings of{" "}
            <span
              className={`font-extrabold ${
                isPositiveSavings ? "text-green-500" : "text-red-500"
              }`}
            >
              {savingsPercentage.toFixed(1)}%
            </span>{" "}
            on your annual eDiscovery costs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
