const ContactItem = ({ text, href, children }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="flex items-center justify-start space-x-2 text-sm text-muted link group"
    >
      {children}
      <span>{text}</span>
    </a>
  );
};

export default ContactItem;
