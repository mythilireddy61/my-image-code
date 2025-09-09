import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const mainMenuItems = [
    "Notifications",
    "Members of TSMC", 
    "Officers",
    "Registration Act",
    "Academic Calendar",
    "Downloads"
  ];

  return (
    <aside className="w-72 bg-white shadow-lg">
      {/* Main Menu */}
      <div className="mb-6">
        <div className="bg-medical-orange text-white px-4 py-3 font-semibold">
          Main Menu
        </div>
        <div className="p-4 space-y-2">
          {mainMenuItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 text-gray-700 hover:text-medical-teal cursor-pointer border-b border-gray-100">
              <span>{item}</span>
              <ChevronRight size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Bulletin */}
      <div>
        <div className="bg-medical-orange text-white px-4 py-3 font-semibold">
          Bulletin
        </div>
        <div className="p-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-bold text-red-700 mb-2">FOREIGN MEDICAL GRADUATES (FMG's) TO NOTE</h3>
            <p className="text-sm text-gray-700">
              As per the latest instructions given by the Government of Telangana, the allotment of internship will be given only to the <strong className="text-red-600">TELANGANA NATIVES</strong>.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;