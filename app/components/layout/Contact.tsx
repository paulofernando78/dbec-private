const patron: ContactItem[] = [
  // buy me a coffee
  {
    link: "https://www.buymeacoffee.com/paulofernando78",
    icon: "/media/images/icons/contacts/coffee.png?v=2",
    alt: "Buy me a coffee",
    className: "h-auto w-30 pl-1 rounded-xl",
  },
];

type ContactProps = {
  className?: string;
};

type ContactItem = {
  link: string;
  icon: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export const Contact = ({ className }: ContactProps) => {
  return (
    <div className="flex gap-4">
      <ul>
        {patron.map((contact) => (
          <li key={contact.link}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={contact.icon}
                alt={contact.alt}
                className={`block ${contact.className ?? ""}`}
                width={1090}
                height={306}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
