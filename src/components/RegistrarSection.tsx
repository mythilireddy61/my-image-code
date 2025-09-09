import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const RegistrarSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Registrar</h2>
      
      <Card className="mb-8 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-gray-200 text-gray-700 text-lg font-medium">DL</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. D. Lalaiah</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Role</h3>
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            Patients' interests are best served by independent, accountable regulation. We are therefore independent 
            of the government, although authorized by it. We are independent of any other group or organisation and 
            are publicly accountable for the outcome of our functions. Independent, accountable regulation must:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-medical-teal text-xl font-bold">→</span>
              <span>Put patient safety first</span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-medical-teal text-xl font-bold">→</span>
              <span>Support good medical practice</span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-medical-teal text-xl font-bold">→</span>
              <span>Promote fairness and equality and value diversity</span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-medical-teal text-xl font-bold">→</span>
              <span>
                Respect the principles of good regulation: proportionality, accountability, consistency, transparency 
                and targeting.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrarSection;