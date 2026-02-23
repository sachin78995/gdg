import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventDetail.css';
import Events from './Events';

const EVENT_RECORD_FALLBACK = '/events/event-1/event-record.docx';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: 'GDG x Ad Astra Collaborative Workshop on Embedded Systems',
      date: 'March 15, 2024',
      location: 'Virtual Event',
      images: [
        '/events/event-1/img-1.jpg',
        '/events/event-1/img-2.jpg',
        '/events/event-1/img-3.jpg'
      ],
      summary:
        'The GDG x Ad Astra Collaborative Workshop on Embedded Systems was an immersive, insightful, and highly engaging learning experience that offered participants a strong foundation in embedded systems and their role in solving real-world challenges. The workshop was thoughtfully designed to introduce both theoretical concepts and practical applications, helping attendees understand how embedded technology powers many of the innovations we interact with in everyday life.\n\nKey Highlights of the Workshop\n\nStrong Conceptual Foundation\nThe session provided a clear and structured overview of the fundamentals of embedded systems, including their architecture, components, and real-life use cases. This helped participants connect abstract concepts with practical implementations across various domains.\n\nExpert Leadership and Interactive Learning\nThe workshop was led by the club Leads — Shreya Upadhyay (GDG Lead) and S Nishaath (Ad Astra Lead) — along with the Embedded Systems Leads — Sankarshan V Sastry (GDG Embedded Systems Lead) and Yashas Mahesh (Ad Astra Embedded Systems Lead). Their guidance fostered an open, interactive environment, encouraging participants to ask questions, share ideas, and actively engage in discussions throughout the session.\n\nHands-On Practical Exposure\nOne of the major highlights was the hands-on session, where participants were introduced to simulation tools used in embedded system design. This practical exposure allowed learners to visualize system behavior, experiment with designs, and gain confidence in applying theoretical knowledge in a realistic and exciting manner.\n\nEngaged and Enthusiastic Participation\nThe workshop atmosphere was filled with curiosity, enthusiasm, and collaborative energy. Participants demonstrated a strong eagerness to learn, explore emerging technologies, and work toward creating meaningful, real-world solutions using embedded systems.\n\nOverall Impact\n\nOverall, the workshop was a well-structured and impactful learning experience that successfully strengthened participants\' technical understanding while inspiring them to think innovatively and creatively. It not only enhanced knowledge of embedded systems but also motivated attendees to explore how technology can be leveraged for real-world breakthroughs and future innovations.',
      recordDocx: EVENT_RECORD_FALLBACK
    },
    {
      id: 2,
      title: 'PulseX – Leveraging the Power of AI',
      date: 'December 22, 2025 - January 16, 2026',
      location: 'CHOSS Space, CIT Bengaluru',
      images: [
        '/events/event-2/img-1.jpg',
        '/events/event-2/img-2.jpg',
        '/events/event-2/img-3.jpg',
        '/events/event-2/img-4.jpg',
        '/events/event-2/img-5.jpg'
      ],
      summary:
        'PulseX – Leveraging the Power of AI was an open-innovation hackathon organized by GDGoC – CIT, aimed at encouraging students to identify real-world and social problem statements and build impactful, feasible solutions using Google technologies. The event emphasized practical implementation, innovation, and real-world relevance over mere technical complexity.\n\nThe hackathon was conducted across three structured phases, guiding participants through a complete innovation journey — from idea conceptualization to the development of a fully functional prototype. This phased approach enabled systematic evaluation, continuous refinement, and focused technical execution at each stage.\n\nPhase 1: Idea Pitching (Ideathon)\n\nThe first phase was held on 22nd December 2025 at the CHOSS venue, witnessing strong participation with 31 team registrations. This round focused exclusively on problem identification, innovation, feasibility, and applicability, without requiring a prototype. Teams presented their ideas using a standardized PPT format and were evaluated on multiple parameters including innovation, relevance, technical design, and future impact. Based on the evaluation, 10 teams were shortlisted to advance to the next phase.\n\nPhase 2: Partial Prototype Phase\n\nConducted on 8th January 2026, this phase evaluated the technical progress and partial implementation of the shortlisted teams. Participants demonstrated basic or partially working prototypes, explaining system architecture, core functionalities, and the integration of Google technologies. The evaluation focused on technical depth, implementation progress, and readiness for completion. From this round, 6 teams were selected for the final phase.\n\nPhase 3: Full Working Prototype\n\nThe final phase took place on 16th January 2026 at the CHOSS Space, CIT Bengaluru, where the shortlisted teams presented their fully functional, end-to-end solutions. This phase emphasized completeness, usability, scalability, and real-world readiness. Teams demonstrated live prototypes and addressed questions from the judging panel, who assessed technical execution, UI/UX, integration depth, and presentation clarity. Based on the final evaluations, 3 teams emerged as winners.',
      recordDocx: '/events/event-2/PulseX Report (final).docx'
    },
    {
      id: 3,
      title: 'Workshops',
      date: 'May 10, 2024',
      location: 'Tech Hub Conference Center',
      image: '/images/up.png',
      summary:
        'The GDG x Ad Astra Collaborative Workshop on Embedded Systems was an immersive, insightful, and highly engaging learning experience that offered participants a strong foundation in embedded systems and their role in solving real-world challenges. The workshop was thoughtfully designed to introduce both theoretical concepts and practical applications, helping attendees understand how embedded technology powers many of the innovations we interact with in everyday life.\n\nKey Highlights of the Workshop\n\nStrong Conceptual Foundation\nThe session provided a clear and structured overview of the fundamentals of embedded systems, including their architecture, components, and real-life use cases. This helped participants connect abstract concepts with practical implementations across various domains.\n\nExpert Leadership and Interactive Learning\nThe workshop was led by the club Leads — Shreya Upadhyay (GDG Lead) and S Nishaath (Ad Astra Lead) — along with the Embedded Systems Leads — Sankarshan V Sastry (GDG Embedded Systems Lead) and Yashas Mahesh (Ad Astra Embedded Systems Lead). Their guidance fostered an open, interactive environment, encouraging participants to ask questions, share ideas, and actively engage in discussions throughout the session.\n\nHands-On Practical Exposure\nOne of the major highlights was the hands-on session, where participants were introduced to simulation tools used in embedded system design. This practical exposure allowed learners to visualize system behavior, experiment with designs, and gain confidence in applying theoretical knowledge in a realistic and exciting manner.\n\nEngaged and Enthusiastic Participation\nThe workshop atmosphere was filled with curiosity, enthusiasm, and collaborative energy. Participants demonstrated a strong eagerness to learn, explore emerging technologies, and work toward creating meaningful, real-world solutions using embedded systems.\n\nOverall Impact\n\nOverall, the workshop was a well-structured and impactful learning experience that successfully strengthened participants\' technical understanding while inspiring them to think innovatively and creatively. It not only enhanced knowledge of embedded systems but also motivated attendees to explore how technology can be leveraged for real-world breakthroughs and future innovations.'
    }
  ];

  const event = events.find((e) => e.id === Number.parseInt(id ?? '', 10));

  if (!event) {
    return (
      <motion.div
        className="eventDetailPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="eventDetailCard"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="eventDetailTitle">Event not found</h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="eventDetailBack"
          >
            Back to Events
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const galleryImages = event.images ?? (event.image ? [event.image] : []);

  return (
    <motion.div
      className="eventDetailPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="eventDetailShell">
        <motion.button
          type="button"
          onClick={() => navigate('/')}
          className="eventDetailBack"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ← Back to Events
        </motion.button>

        <motion.article
          className="eventDetailCard"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.header
            className="eventDetailHeader"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="eventDetailTitle">{event.title}</h1>
          </motion.header>

          <motion.section
            className="eventDetailGallery eventDetailGalleryScrolling"
            aria-label="Event photos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="eventDetailScrollingGallery">
              <div className="eventDetailScrollingTrack">
                {[...galleryImages, ...galleryImages].map((src, index) => (
                  <img
                    key={`${src}-${index}`}
                    className="eventDetailScrollingImage"
                    src={src}
                    alt={`${event.title} photo ${(index % galleryImages.length) + 1}`}
                    loading={index < galleryImages.length ? (index === 0 ? 'eager' : 'lazy') : 'lazy'}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="eventDetailContent"
            aria-label="Event summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="eventDetailSummary">
              {event.summary.split('\n\n').map((paragraph, index) => {
                // Check if paragraph starts with a heading pattern
                const isHeading = /^[A-Z][^.!?]*$/.test(paragraph.trim()) && paragraph.length < 100;
                if (isHeading) {
                  return (
                    <h3 key={index} className="eventDetailSummaryHeading">
                      {paragraph.trim()}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="eventDetailSummaryParagraph">
                    {paragraph.trim()}
                  </p>
                );
              })}
            </div>
          </motion.section>

          <motion.footer
            className="eventDetailFooter"
            aria-label="Download event record"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {/* --- for future use ---  */}
            {/* <a
              className="eventDetailDocsBtn"
              href={event.recordDocx ?? EVENT_RECORD_FALLBACK}
              download
            >
              <svg
                className="eventDetailDocsIcon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Docs
            </a> */}
          </motion.footer>
        </motion.article>
      </div>
    </motion.div>
  );
};

export default EventDetail;