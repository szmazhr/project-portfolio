import { CSSProperties } from 'react';

type ExternalLinkProps = {
  href: string;
  text: string;
  icon?: React.ReactNode;
};

const Styles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function ExternalLink({ href, text, icon }: ExternalLinkProps) {
  return (
    <a
      style={Styles}
      href={href}
      aria-label={text}
      target="_blank"
      rel="noreferrer"
    >
      {icon || text}
    </a>
  );
}
export default ExternalLink;
