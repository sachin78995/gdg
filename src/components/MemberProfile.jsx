import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMemberBySlug } from '../data/team';
import MagicBento from '../reactbits/MagicBento/MagicBento';
import './MemberProfile.css';

const SocialIcon = ({ type }) => {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
        />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
      />
    </svg>
  );
};

const MemberProfile = () => {
  const { slug } = useParams();

  const member = useMemo(() => getMemberBySlug(slug), [slug]);

  if (!member) {
    return (
      <section className="member-profile">
        <div className="member-profile__container">
          <div className="member-profile__notfound">
            <h2 className="member-profile__title">Member not found</h2>
            <p className="member-profile__subtitle">This profile doesn’t exist (or the link is incorrect).</p>
            <Link className="member-profile__back" to="/" state={{ scrollTo: 'team' }}>
              ← Back to Team
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const socials = [
    member.social?.github ? { type: 'github', href: member.social.github } : null,
    member.social?.linkedin ? { type: 'linkedin', href: member.social.linkedin } : null,
    member.social?.instagram ? { type: 'instagram', href: member.social.instagram } : null
  ].filter(Boolean);

  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

  const bentoCards = [
    // Profile card first (left side), then text cards
    {
      id: 'profile',
      className: 'member-bento member-bento--profile',
      render: () => (
        <>
          <div className="member-bento__profile-header">
            <div className="member-bento__photo">
              <img src={member.image} alt={member.name} onError={(e) => (e.currentTarget.style.display = 'none')} />
              <div className="member-bento__photo-fallback" aria-hidden="true">
                {initials}
              </div>
            </div>

            <div className="member-bento__identity">
              <div className="member-bento__kicker">{member.role}</div>
              <h1 className="member-bento__name">{member.name}</h1>
              <p className="member-bento__dept">{member.department}</p>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="member-bento__socials">
              {socials.map((s) => (
                <a
                  key={s.type}
                  className="member-bento__social"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} ${s.type}`}
                >
                  <SocialIcon type={s.type} />
                </a>
              ))}
            </div>
          )}
        </>
      )
    },
    {
      id: 'responsibilities',
      className: 'member-bento member-bento--list',
      render: () => (
        <>
          <div className="member-bento__kicker">Responsibilities</div>
          <h2 className="member-bento__title">What I’m responsible for</h2>
          <ul className="member-bento__list">
            {(member.responsibilities || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'goals',
      className: 'member-bento member-bento--list',
      render: () => (
        <>
          <div className="member-bento__kicker">Goals</div>
          <h2 className="member-bento__title">Goals for the club</h2>
          <ul className="member-bento__list">
            {(member.goals || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="member-profile">
      <div className="member-profile__container">
        <Link className="member-profile__back" to="/" state={{ scrollTo: 'team' }}>
          ← Back to Team
        </Link>

        <div className="member-profile__bento" style={{ '--member-gradient': member.gradient, '--member-accent': member.roleColor }}>
          <MagicBento
            cards={bentoCards}
            textAutoHide={false}
            enableSpotlight
            enableBorderGlow
            enableStars
            enableTilt={false}
            clickEffect={false}
            enableMagnetism={false}
            glowColor="66, 133, 244"
            spotlightRadius={520}
            particleCount={10}
          />
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;

