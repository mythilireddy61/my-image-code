import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-medical-teal text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="text-medical-teal text-2xl font-bold">TMC</div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">TELANGANA MEDICAL COUNCIL</h1>
            </div>
          </div>
          
          {/* Officials */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-white text-medical-teal">AR</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-semibold">Sri Anumula Revanth Reddy</div>
                <div className="text-medical-teal-light">Hon'ble Chief Minister of Telangana</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-white text-medical-teal">DR</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-semibold">Sri Damodar Rajanarasimha</div>
                <div className="text-medical-teal-light">The Hon'ble Health, Medical & Family Welfare Minister</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;