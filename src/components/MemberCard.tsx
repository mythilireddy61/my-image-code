import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MemberCardProps {
  name: string;
  designation?: string;
  image?: string;
  hasImage?: boolean;
}

const MemberCard = ({ name, designation, image, hasImage = false }: MemberCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Avatar className="w-14 h-14 border-2 border-gray-200">
        {hasImage && image ? (
          <AvatarImage src={image} alt={name} />
        ) : null}
        <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        {designation && (
          <p className="text-sm text-gray-600">{designation}</p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;