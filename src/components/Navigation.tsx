import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "Online Registration FAQ", variant: "medical" },
    { label: "Doctor Search", variant: "medical" },
    { label: "Home", variant: "medical-nav" },
    { label: "About Us", variant: "medical-nav" },
    { label: "Services", variant: "medical-nav" },
    { label: "Constitution", variant: "medical-nav" },
    { label: "Contact Us", variant: "medical-nav" },
    { label: "Meetings", variant: "medical-nav" },
    { label: "Online Registration", variant: "medical" },
  ];

  return (
    <nav className="bg-medical-orange shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 py-3 overflow-x-auto">
          {navItems.map((item, index) => (
            <Button 
              key={index}
              variant={item.variant as "medical" | "medical-nav"}
              size="sm"
              className="whitespace-nowrap px-4"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;