import type { Copy } from "../types/portfolio";
import type { ProfileConfig } from "../config/profile";

type Props = {
  contact: Copy["contact"];
  profile: ProfileConfig;
};

export function ContactSection({ contact, profile }: Props) {
  return (
    <section id="contact" className="content-section contact-card">
      <h2>{contact.title}</h2>
      <p>{contact.intro}</p>
      <p>
        <strong>{contact.emailLabel}:</strong> {profile.email}
      </p>
      <p>
        <strong>{contact.locationLabel}:</strong> {profile.location}
      </p>
      <p className="open-to-work">{contact.openToWork}</p>

      <div className="social-links">
        <a href={profile.social.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
