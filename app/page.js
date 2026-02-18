import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';
import SkillBar from './components/SkillBar';
import TypeWriter from './components/TypeWriter';
import MobileNav from './components/MobileNav';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding,
  FaMoneyCheckAlt, FaHandshake, FaChartBar, FaFileInvoiceDollar,
  FaClipboardCheck, FaUsers, FaCalendarAlt
} from 'react-icons/fa';
import {
  HiOutlineLightBulb, HiOutlineClipboardList, HiOutlineCog,
  HiOutlineCheckCircle, HiOutlineRefresh, HiOutlinePresentationChartBar
} from 'react-icons/hi';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'];

const education = [
  {
    title: 'Bachelor of Business Administration',
    meta: 'Tribhuvan University / 2010 - 2014',
    text: 'Focused on business management, accounting principles, and organizational development with emphasis on corporate finance.'
  },
  {
    title: 'Graduate Diploma in Accounting',
    meta: 'Charles Darwin University / 2016 - 2017',
    text: 'Specialized in financial accounting, taxation, auditing, and corporate governance within the Australian regulatory framework.'
  },
  {
    title: 'Certificate IV in Government',
    meta: 'NTG Training / 2019 - 2020',
    text: 'Professional development in public sector administration, policy implementation, and government service delivery standards.'
  }
];

const experience = [
  {
    title: 'Accounts Receivable Officer',
    meta: 'NTG - Dept. of Corporate & Digital Development / 2018 - 2021',
    text: 'Managed accounts receivable processes, reconciled client accounts, processed invoices, and ensured compliance with government financial regulations.'
  },
  {
    title: 'Senior Client Service Officer',
    meta: 'NTG - Dept. of Corporate & Digital Development / 2021 - Present',
    text: 'Leading client service operations in the Account Receivable Unit, managing stakeholder relationships, and driving process improvements across the department.'
  }
];

const skills = [
  { name: 'Accounts Receivable Management', percent: 95 },
  { name: 'Client Relationship Management', percent: 90 },
  { name: 'Financial Reporting & Analysis', percent: 88 },
  { name: 'Government Compliance & Policy', percent: 85 },
  { name: 'Microsoft Office / Excel', percent: 92 },
  { name: 'Stakeholder Communication', percent: 90 }
];

const services = [
  { name: 'Accounts Receivable', Icon: FaMoneyCheckAlt },
  { name: 'Client Service Management', Icon: FaHandshake },
  { name: 'Financial Reconciliation', Icon: FaChartBar },
  { name: 'Invoice Processing', Icon: FaFileInvoiceDollar },
  { name: 'Compliance & Auditing', Icon: FaClipboardCheck },
  { name: 'Stakeholder Relations', Icon: FaUsers }
];

const portfolio = [
  { title: 'AR Process Optimization', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800' },
  { title: 'Client Portal Implementation', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
  { title: 'Financial Reporting Dashboard', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
  { title: 'Debt Recovery Framework', img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800' },
  { title: 'Digital Invoice System', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800' },
  { title: 'Compliance Audit Project', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800' },
  { title: 'Stakeholder Engagement Plan', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800' },
  { title: 'Training & Development Program', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800' },
  { title: 'Process Documentation', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800' }
];

const workProcess = [
  { step: 'Client Consultation', Icon: HiOutlineLightBulb },
  { step: 'Assessment & Planning', Icon: HiOutlineClipboardList },
  { step: 'Implementation', Icon: HiOutlineCog },
  { step: 'Quality Review', Icon: HiOutlineCheckCircle },
  { step: 'Continuous Improvement', Icon: HiOutlineRefresh },
  { step: 'Reporting & Delivery', Icon: HiOutlinePresentationChartBar }
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Director, Corporate Services',
    text: 'Samikshya has been instrumental in transforming our accounts receivable processes. Her attention to detail and commitment to client service excellence is outstanding.'
  },
  {
    name: 'David Thompson',
    role: 'Finance Manager, NTG',
    text: 'Working with Samikshya has been a pleasure. She brings a proactive approach to problem-solving and consistently delivers results that exceed expectations.'
  },
  {
    name: 'Rebecca Chen',
    role: 'Senior Policy Advisor',
    text: 'Samikshya\'s ability to manage complex stakeholder relationships while maintaining accuracy in financial operations is truly remarkable. A valued team member.'
  }
];

const blogs = [
  { title: 'Best Practices in Government Accounts Receivable Management', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', date: 'Jan 15, 2026' },
  { title: 'Streamlining Client Service Operations in the Public Sector', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', date: 'Dec 10, 2025' },
  { title: 'The Future of Digital Transformation in Government Finance', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', date: 'Nov 28, 2025' }
];

const socialLinks = [
  { Icon: FaFacebookF, href: '#' },
  { Icon: FaTwitter, href: '#' },
  { Icon: FaLinkedinIn, href: '#' },
  { Icon: FaInstagram, href: '#' }
];

export default function Home() {
  return (
    <main>
      {/* ── Navbar ── */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="logo">Samikshya<span className="accent">.</span></div>
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className={link === 'Home' ? 'active' : ''}>
                {link}
              </a>
            ))}
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="home" className="hero-section">
        <div className="container hero">
          <div className="hero-copy">
            <ScrollReveal direction="left">
              <h1>I&apos;m Samikshya Joshi</h1>
              <h3>
                I&apos;m a <TypeWriter />
              </h3>
              <p>
                Senior Client Service Officer at the Account Receivable Unit,
                Department of Corporate and Digital Development, Northern Territory
                Government, Australia. Dedicated to delivering excellence in government
                financial services and client relations.
              </p>
              <button className="btn btn-hover-glow">Contact Me</button>
            </ScrollReveal>
          </div>
          <div className="hero-image-wrap hide-mobile">
            <ScrollReveal direction="right">
              <div className="hero-img-frame">
                <Image
                  src="/images/samikshya.png"
                  alt="Samikshya Joshi"
                  width={420}
                  height={520}
                  className="hero-image"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section about-bg">
        <div className="container about-grid">
          <ScrollReveal direction="left">
            <div className="profile-frame">
              <div className="social-col">
                {socialLinks.map(({ Icon, href }) => (
                  <a key={Icon.name} href={href} className="social-icon">
                    <Icon />
                  </a>
                ))}
              </div>
              <div className="portrait-wrap">
                <div className="portrait-box">
                  <Image
                    src="/images/samikshya.png"
                    alt="Samikshya Joshi portrait"
                    width={320}
                    height={420}
                    className="portrait"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="about-copy">
              <div className="hello-line">
                <span className="accent-label">Hello</span>
                <span className="line-dash" />
              </div>
              <h2>I&apos;m a Senior Client Service Officer</h2>
              <p>
                With extensive experience in government financial services, I specialize in
                accounts receivable management, client relationship building, and process
                optimization. I am passionate about delivering high-quality service and driving
                efficiency within the Department of Corporate and Digital Development at the
                Northern Territory Government, Australia.
              </p>
              <div className="bio-grid">
                <p><strong>Name:</strong><br />Samikshya Joshi</p>
                <p><strong>Email:</strong><br />samikshya@ntg.gov.au</p>
                <p><strong>Department:</strong><br />Corporate &amp; Digital Dev.</p>
                <p><strong>Phone:</strong><br />+61 8 8999 XXXX</p>
                <p><strong>Role:</strong><br />Sr. Client Service Officer</p>
                <p><strong>Location:</strong><br />Darwin, NT, Australia</p>
              </div>
              <div className="btn-row">
                <button className="btn btn-outline btn-hover-glow">Download CV</button>
                <button className="btn btn-outline btn-hover-glow">Hire Me</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Education & Experience ── */}
      <section className="section">
        <div className="container two-col">
          <ScrollReveal direction="left">
            <div>
              <h3 className="sec-title">Education</h3>
              <div className="entries-list">
                {education.map((item) => (
                  <article key={item.title} className="entry">
                    <div className="entry-arrow" />
                    <div className="entry-content">
                      <h4>{item.title}</h4>
                      <small>{item.meta}</small>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div>
              <h3 className="sec-title">Experience</h3>
              <div className="entries-list">
                {experience.map((item) => (
                  <article key={item.title} className="entry">
                    <div className="entry-arrow" />
                    <div className="entry-content">
                      <h4>{item.title}</h4>
                      <small>{item.meta}</small>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">What I Know</p>
              <h2>My Skills</h2>
            </div>
          </ScrollReveal>
          <div className="skills-list">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="section">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">What I Do</p>
              <h2>My Services</h2>
            </div>
          </ScrollReveal>
          <div className="service-grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 100}>
                <article className="card service-card hover-lift">
                  <div className="service-icon-wrap">
                    <service.Icon className="service-svg-icon" />
                  </div>
                  <h4>{service.name}</h4>
                  <p>Professional expertise in {service.name.toLowerCase()} with a focus on government standards and client satisfaction.</p>
                  <a href="#" className="read-more">Learn More &rarr;</a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="portfolio" className="section section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">Take a Look At</p>
              <h2>Portfolio</h2>
            </div>
          </ScrollReveal>
          <div className="portfolio-grid">
            {portfolio.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <article className="card portfolio-card">
                  <div className="portfolio-img-wrap">
                    <Image src={item.img} alt={item.title} width={400} height={240} className="thumb" />
                    <div className="portfolio-overlay">
                      <span className="overlay-icon">+</span>
                    </div>
                  </div>
                  <h4>{item.title}</h4>
                  <small>Government Financial Services</small>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Process ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">How I Work</p>
              <h2>My Work Process</h2>
            </div>
          </ScrollReveal>
          <div className="process-grid">
            {workProcess.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 120}>
                <div className="process-step">
                  <div className="process-number">
                    <item.Icon className="process-icon" />
                  </div>
                  <h4>{item.step}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="section section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">What People Say</p>
              <h2>Testimonials</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-list">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150}>
                <div className="card testimonial-card hover-lift">
                  <div className="quote-mark">&ldquo;</div>
                  <p>{t.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.name[0]}</div>
                    <div>
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section id="blog" className="section">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">Latest Insights</p>
              <h2>Blog</h2>
            </div>
          </ScrollReveal>
          <div className="blog-grid">
            {blogs.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 150}>
                <article className="card blog-card hover-lift">
                  <div className="blog-img-wrap">
                    <Image src={post.img} alt={post.title} width={400} height={200} className="thumb" />
                  </div>
                  <div className="blog-card-body">
                    <small><FaCalendarAlt className="inline-icon" /> {post.date}</small>
                    <h4>{post.title}</h4>
                    <a href="#" className="read-more">Read More &rarr;</a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="container cta-inner">
          <ScrollReveal direction="left">
            <div>
              <h3>Looking for professional financial service expertise?</h3>
              <p>Let&apos;s connect and discuss how I can help your organization</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <button className="btn btn-light btn-hover-glow">Contact Me</button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center-head">
              <p className="sub-label">Get in Touch</p>
              <h2>Contact Me</h2>
            </div>
          </ScrollReveal>
          <div className="contact-grid">
            <ScrollReveal direction="left">
              <form className="contact-form">
                <input placeholder="Your Name (required)" />
                <input placeholder="Your Email (required)" />
                <input placeholder="Subject" />
                <textarea placeholder="Your Message" rows={6} />
                <button className="btn btn-hover-glow" type="button">Send Message</button>
              </form>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="contact-copy">
                <h4>Let&apos;s talk about everything!</h4>
                <p>
                  Whether you have questions about accounts receivable processes, client service
                  management, or government finance operations, feel free to reach out. I&apos;m
                  always happy to connect and share insights.
                </p>
                <div className="contact-info">
                  <div className="contact-info-item">
                    <FaMapMarkerAlt className="contact-icon-svg" />
                    <div><strong>Address</strong><br />Darwin, Northern Territory, Australia</div>
                  </div>
                  <div className="contact-info-item">
                    <FaPhoneAlt className="contact-icon-svg" />
                    <div><strong>Phone</strong><br />+61 8 8999 XXXX</div>
                  </div>
                  <div className="contact-info-item">
                    <FaEnvelope className="contact-icon-svg" />
                    <div><strong>Email</strong><br />samikshya@ntg.gov.au</div>
                  </div>
                  <div className="contact-info-item">
                    <FaBuilding className="contact-icon-svg" />
                    <div><strong>Organization</strong><br />Northern Territory Government</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; Samikshya Joshi. All Rights Reserved. 2026</p>
          <div className="footer-socials">
            {socialLinks.map(({ Icon, href }) => (
              <a key={Icon.name} href={href} className="footer-social-icon">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
