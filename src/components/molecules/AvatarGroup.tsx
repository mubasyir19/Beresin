import React from "react";
import { getInitialsFromTwoWords } from "../../helpers/initialName";
import { AvatarGroupProps } from "@/types";

export default function AvatarGroup({ members, maxVisible }: AvatarGroupProps) {
  const visibleMembers = members.slice(0, maxVisible);
  const remainingMembersCount = members.length - visibleMembers.length;

  return (
    <div className="flex items-center -space-x-2">
      {visibleMembers.map((member) => (
        <div
          key={member.id}
          className={`flex size-6 items-center justify-center overflow-hidden rounded-full bg-${member.colorsPhoto}-600`}
          title={member.name}
        >
          <p className="text-xs text-white">
            {getInitialsFromTwoWords(member.name)}
          </p>
        </div>
      ))}
      {remainingMembersCount > 0 && (
        <div
          className="flex size-6 items-center justify-center rounded-full border border-white bg-neutral-600 text-xs font-medium text-neutral-100"
          title={`+${remainingMembersCount} lainnya`}
        >
          +{remainingMembersCount}
        </div>
      )}
    </div>
  );
}
