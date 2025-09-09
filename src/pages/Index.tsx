import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import MemberSection from "@/components/MemberSection";
import RegistrarSection from "@/components/RegistrarSection";

const Index = () => {
  const electedMembers = [
    { name: "Dr. K Mahesh Kumar", designation: "Chairman - TSMC" },
    { name: "Dr. G Srinivas", designation: "Vice Chairman" },
    { name: "Dr. Pratibha Lakshmi" },
    { name: "Dr. Bandari Rajkumar", hasImage: true },
    { name: "Dr. Kiran Kumar Thotawar" },
    { name: "Dr. S Anand" },
    { name: "Dr. Nareshkumar Vemulapalli", hasImage: true },
    { name: "Dr. Yeggana Srinivas" },
    { name: "Dr. Kusumaraju Ravi Kumar" },
    { name: "Dr. Srikanth Jukuru", hasImage: true },
    { name: "Dr. A Sunny Davis" },
    { name: "Dr. Vishnu K U N" },
    { name: "Dr. Syed Khaja Imran Ali" }
  ];

  const govNominatedMembers = [
    { name: "Dr. V Rajalingam", hasImage: true },
    { name: "Dr. D Chandra Reddy", hasImage: true },
    { name: "Dr. N Krishna Reddy", hasImage: true },
    { name: "Dr. D. Ramesh", hasImage: true },
    { name: "Dr. Ch Amith Kumar", hasImage: true },
    { name: "Dr. S K Agarwal", hasImage: true }
  ];

  const universityNominees = [
    { name: "Dr. M Seshu Madhav", hasImage: true },
    { name: "Dr. B Satish Kumar" }
  ];

  const exOfficioMembers = [
    { 
      name: "Dr. P V Nanda Kumar Reddy", 
      designation: "Vice-Chancellor, KNR UHS",
      hasImage: true 
    },
    { 
      name: "Dr. A Narendra Kumar", 
      designation: "Director of Medical Education",
      hasImage: true 
    },
    { 
      name: "Dr. B. Ravinder Nayak", 
      designation: "Director of Public Health",
      hasImage: true 
    },
    { 
      name: "Dr. J. Ajay Kumar", 
      designation: "TVVP Commissioner",
      hasImage: true 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <div className="container mx-auto flex gap-6 py-6">
        <Sidebar />
        
        <main className="flex-1 px-6">
          <MemberSection 
            title="Elected Members of TGMC" 
            members={electedMembers}
          />
          
          <MemberSection 
            title="Govt. Nominated Members of TGMC" 
            members={govNominatedMembers}
            titleColor="text-red-700"
          />
          
          <MemberSection 
            title="University Nominees" 
            members={universityNominees}
            titleColor="text-red-700"
          />
          
          <MemberSection 
            title="Ex-Officio Members" 
            members={exOfficioMembers}
            titleColor="text-red-700"
          />
          
          <RegistrarSection />
        </main>
      </div>
    </div>
  );
};

export default Index;