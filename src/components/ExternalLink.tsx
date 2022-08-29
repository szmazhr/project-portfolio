type ExternalLinkProps = {
  href: string;
  text: string;
  icon?: React.ReactNode;
};

const Styles = {
  display: 'flex',
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
