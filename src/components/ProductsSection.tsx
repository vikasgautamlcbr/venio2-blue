import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("legal-hold");

  const products = [
    {
      id: "legal-hold",
      name: "Venio Legal Hold",
      description: "Streamline legal hold management with automated workflows and compliance tracking.",
      features: [
        "Automated custodian notifications",
        "Real-time compliance tracking",
        "Audit trail documentation",
        "Seamless integration"
      ]
    },
    {
      id: "eca",
      name: "Venio ECA",
      description: "Early Case Assessment tools to quickly evaluate case merit and scope.",
      features: [
        "Rapid data analysis",
        "Cost estimation tools",
        "Risk assessment",
        "Data visualization"
      ]
    },
    {
      id: "review",
      name: "Venio Review",
      description: "Comprehensive document review platform with advanced AI capabilities.",
      features: [
        "AI-powered document classification",
        "Collaborative review workspace",
        "Advanced search and filtering",
        "Quality control tools"
      ]
    },
    {
      id: "ai-review",
      name: "Venio AI Review",
      description: "Next-generation AI-powered review with continuous active learning.",
      features: [
        "Predictive coding",
        "Continuous active learning (CAL)",
        "Email threading",
        "Near-duplicate detection"
      ]
    },
    {
      id: "production",
      name: "Venio Production",
      description: "Efficient document production with customizable output formats.",
      features: [
        "Multiple output formats",
        "Redaction tools",
        "Production tracking",
        "Quality assurance"
      ]
    }
  ];

  const currentProduct = products.find(p => p.id === activeTab);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 bg-muted/50 p-2 h-auto mb-12">
              {products.map((product) => (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id} className="mt-0">
                <Card className="glass p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        {product.name}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-8 font-body">
                        {product.description}
                      </p>
                      <ul className="space-y-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-accent"></div>
                            </div>
                            <span className="text-muted-foreground font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Placeholder for product mockup/screenshot */}
                    <div className="glass-dark rounded-2xl overflow-hidden h-[400px] flex items-center justify-center">
                      <div className="text-center text-white/70 p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-body">Product Dashboard Preview</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
