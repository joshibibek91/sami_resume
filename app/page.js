import Image from 'next/image';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Price', 'Blog', 'Contact'];
const education = [
  {
    title: 'Computer Science',
    meta: 'Cambridge University / 2004 - 2007',
    text: 'Put a little bit details what your degree is about, what you learned most, and so on.'
  },
  {
    title: 'Bachelor Degree',
    meta: 'University of Tokyo / 2008 - 2010',
    text: 'You can add as many degree as possible. Write about your degree is about and so on.'
  },
  {
    title: 'Master Degree',
    meta: 'Harvard University / 2009 - 2011',
    text: 'You can add as many degree as possible. Write about your degree is about and so on.'
  }
];

const experience = [
  {
    title: 'Front End Developer',
    meta: 'Adobe / 2015 - 2017',
    text: 'Put a little bit details about your experiences, your job role, your responsibility and so on.'
  },
  {
    title: 'Senior Developer',
    meta: 'Google / 2017 - 2018',
    text: 'Add more experiences. Put details about your job role, your responsibility and so on.'
  },
  {
    title: 'Full Stack Designer',
    meta: 'Oracle / 2018 - Present',
    text: 'Add more experiences. Put details about your job role, your responsibility and so on.'
  }
];

const services = ['Apps Development', 'UI/UX Design', 'Web Development', 'Strategy Solutions', 'Digital Marketing', 'Social Media'];

const portfolio = [
  { title: 'Hotel Management', img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800' },
  { title: 'Business Consultant', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
  { title: 'Pharmacy Software', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800' },
  { title: 'Make your Dream', img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800' }
];

const blogs = [
  { title: 'Repair your EliteBook when it is not working correctly', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800', date: 'Jul 12, 2020' },
  { title: 'What Gets In The Way Of Strategy', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', date: 'Jun 27, 2020' },
  { title: 'The Best Sale Marketer Of The Next Year', img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800', date: 'Jun 20, 2020' }
];

export default function Home() {
  return (
    <main>
      <header className="container topbar">
        <div className="logo">PikMe</div>
        <nav>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={link === 'Home' ? 'active' : ''}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero section container">
        <div className="hero-copy">
          <h1>I'm Emma Smith</h1>
          <h3>
            I&apos;m a <span>Web Developer</span>
          </h3>
          <p>
            Put your intro here. For example, I am a "Web developer" or whatever your profession is with 5 years of
            experience. In a Personal Portfolio website, this part attracts your prospective clients most.
          </p>
          <button className="btn">Hire Me</button>
        </div>
        <div className="hero-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900"
            alt="Emma standing in hero section"
            width={420}
            height={520}
            className="hero-image"
            priority
          />
        </div>
      </section>

      <section id="about" className="section about-bg">
        <div className="container about-grid">
          <div className="profile-frame">
            <div className="social-col">
              <span>f</span>
              <span>t</span>
              <span>in</span>
              <span>b</span>
            </div>
            <div className="portrait-box">
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900"
                alt="Emma portrait"
                width={320}
                height={420}
                className="portrait"
              />
            </div>
          </div>
          <div className="about-copy">
            <h5>HELLO</h5>
            <h2>I&apos;m Creative Web Developer</h2>
            <p>
              Your future client wants to know about you before they hire. Put some more information about yourself.
              For example, I provide cost-effective and high quality products to meet my client&apos;s needs and so on.
            </p>
            <div className="bio-grid">
              <p>
                <strong>Name:</strong> Emma Smith
              </p>
              <p>
                <strong>Email:</strong> emma@yourdomain.com
              </p>
              <p>
                <strong>Age:</strong> 23 Years
              </p>
              <p>
                <strong>Phone:</strong> +123-456-789-000
              </p>
              <p>
                <strong>Job:</strong> Freelancer
              </p>
              <p>
                <strong>From:</strong> New York
              </p>
            </div>
            <div className="btn-row">
              <button className="btn">Download CV</button>
              <button className="btn btn-outline">Hire Me</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <h3 className="sec-title">Education</h3>
            {education.map((item) => (
              <article key={item.title} className="card entry">
                <h4>{item.title}</h4>
                <small>{item.meta}</small>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div>
            <h3 className="sec-title">Experience</h3>
            {experience.map((item) => (
              <article key={item.title} className="card entry">
                <h4>{item.title}</h4>
                <small>{item.meta}</small>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container center-head">
          <p>What I Do?</p>
          <h2>My Services</h2>
        </div>
        <div className="container service-grid">
          {services.map((service) => (
            <article key={service} className="card service-card">
              <div className="icon-dot" />
              <h4>{service}</h4>
              <p>Show your prospective clients what service you provide with a ready-made service section.</p>
              <a href="#">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stat-grid">
          {[
            ['3', 'Years of Experience'],
            ['215', 'Complete Project'],
            ['2,500', 'Happy Client'],
            ['12', 'Award Winner']
          ].map(([count, label]) => (
            <div className="card stat" key={label}>
              <h3>{count}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container center-head">
          <p>Take A Look At</p>
          <h2>Portfolio</h2>
        </div>
        <div className="container portfolio-grid">
          {portfolio.map((item) => (
            <article key={item.title} className="card portfolio-card">
              <Image src={item.img} alt={item.title} width={260} height={160} className="thumb" />
              <h4>{item.title}</h4>
              <p>Software</p>
              <small>Sample time here looks good</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container center-head">
          <p>My Service Cost</p>
          <h2>Price</h2>
        </div>
        <div className="container price-grid">
          {['Basic', 'Professional', 'Premium'].map((plan, i) => (
            <article key={plan} className="card price-card">
              <h4>{plan}</h4>
              <div className="price">${[99, 399, 599][i]}</div>
              <ul>
                <li>Frontend Builder</li>
                <li>Regular Support</li>
                <li>White Labeling</li>
                <li>{i === 0 ? '1 Years of Updates' : i === 1 ? '2 Years of Updates' : '3 Years of Updates'}</li>
              </ul>
              <button className="btn">Get Started</button>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="section">
        <div className="container center-head">
          <p>Latest News</p>
          <h2>Blog</h2>
        </div>
        <div className="container blog-grid">
          {blogs.map((post) => (
            <article key={post.title} className="card blog-card">
              <Image src={post.img} alt={post.title} width={360} height={180} className="thumb" />
              <h4>{post.title}</h4>
              <small>{post.date}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h3>If you need any project to be done</h3>
            <p>Create your call to action and get more leads.</p>
          </div>
          <button className="btn btn-light">Contact Us</button>
        </div>
      </section>

      <section id="contact" className="section section-soft">
        <div className="container center-head">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>
        </div>
        <div className="container contact-grid">
          <form className="contact-form">
            <input placeholder="Your Name (required)" />
            <input placeholder="Your Email (required)" />
            <input placeholder="Subject" />
            <textarea placeholder="Your Message" rows={6} />
            <button className="btn">Send</button>
          </form>
          <div className="contact-copy">
            <h4>Let&apos;s talk about everything!</h4>
            <p>
              After connecting your clients, let them contact you directly with this functional contact form in the
              PikMe free Portfolio theme.
            </p>
            <p>
              <strong>Address:</strong> 123 Street, New York, USA
            </p>
            <p>
              <strong>Phone:</strong> +123-456-789-000
            </p>
            <p>
              <strong>Email:</strong> info@yourdomain.com
            </p>
            <p>
              <strong>Website:</strong> www.yourdomain.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
