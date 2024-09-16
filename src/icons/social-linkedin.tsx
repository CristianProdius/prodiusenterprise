import React from "react";

interface SocialLinkedInIconProps {
  className?: string;
}

export const SocialLinkedInIcon: React.FC<SocialLinkedInIconProps> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 7C4.5 5.343 5.843 4 7.5 4H17.5C19.157 4 20.5 5.343 20.5 7V17C20.5 18.657 19.157 20 17.5 20H7.5C5.843 20 4.5 18.657 4.5 17V7ZM9.35 17.393V10.169H6.934V17.393H9.35ZM8.142 9.182C8.984 9.182 9.509 8.628 9.509 7.934C9.493 7.225 8.984 6.686 8.158 6.686C7.331 6.686 6.791 7.225 6.791 7.934C6.791 8.628 7.315 9.182 8.126 9.182H8.142ZM13.104 17.393V13.359C13.104 13.143 13.12 12.928 13.183 12.773C13.358 12.342 13.756 11.895 14.423 11.895C15.298 11.895 15.648 12.557 15.648 13.529V17.393H18.064V13.251C18.064 11.032 16.872 9.999 15.282 9.999C14 9.999 13.425 10.699 13.104 11.192V10.169H10.687C10.719 10.844 10.688 17.352 10.687 17.394L13.104 17.393Z"
        fill="currentColor"
      />
    </svg>
  );
};
