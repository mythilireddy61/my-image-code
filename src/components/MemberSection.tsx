import MemberCard from "./MemberCard";

interface Member {
  name: string;
  designation?: string;
  image?: string;
  hasImage?: boolean;
}

interface MemberSectionProps {
  title: string;
  members: Member[];
  titleColor?: string;
}

const MemberSection = ({ title, members, titleColor = "text-gray-800" }: MemberSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className={`text-2xl font-bold mb-6 ${titleColor}`}>{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            designation={member.designation}
            image={member.image}
            hasImage={member.hasImage}
          />
        ))}
      </div>
    </section>
  );
};

export default MemberSection;