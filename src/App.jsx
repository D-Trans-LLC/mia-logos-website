import './App.css'
import logo from './assets/branding/mia-logos-logo.svg'

const capabilities = [
  {
    title: 'Shipment Integrity',
    text:
      'See active shipments, assigned equipment, drivers, temperature requirements, documentation and compliance status together.',
  },
  {
    title: 'Equipment Qualification',
    text:
      'Know whether the tractor, trailer or other critical equipment assigned to an operation is qualified, validated and within its required service period.',
  },
  {
    title: 'Temperature Control',
    text:
      'Connect live temperature information with shipment requirements, equipment records and supporting calibration documentation.',
  },
  {
    title: 'Security',
    text:
      'Bring GPS location, security alerts, door activity, route information, stops and other security data into the same operational environment.',
  },
  {
    title: 'Training & Personnel',
    text:
      'Verify that employees supporting an operation have completed the required training and that their qualifications remain current.',
  },
  {
    title: 'Quality Events',
    text:
      'Manage deviations, CAPAs, incidents, change controls and investigations with the operational data connected directly to the event.',
  },
  {
    title: 'Documents & Records',
    text:
      'Connect SOPs, validation records, calibration certificates, forms and supporting documentation directly to the activity they govern.',
  },
  {
    title: 'Suppliers & Partners',
    text:
      'Maintain supplier qualification, documentation, performance and compliance information within the same ecosystem.',
  },
]

const complianceItems = [
  'Shipment requirement: 2–8°C',
  'Trailer qualification: Current',
  'Temperature sensors: Calibrated',
  'Driver training: Current',
  'Security requirements: Satisfied',
  'Operating parameters: Compliant',
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Mia Logos home">
            <img src={logo} alt="Mia Logos" />
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#why">Why Mia Logos</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-small" href="#contact">
            Request a Demo
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                Quality & Security Control Tower
              </p>

              <h1>
                The Control Tower for Life Science Quality & Security
              </h1>

              <p className="hero-lead">
                One connected system. Live visibility. Continuous control.
              </p>

              <p className="hero-description">
                Mia Logos is a 24/7 Quality Management System and Security
                Management System Control Tower built for highly sensitive
                life science operations.
              </p>

              <p className="hero-description">
                Through an open API architecture, Mia Logos connects
                transportation, temperature, equipment, security, training,
                documentation and quality systems into one live source of truth.
              </p>

              <div className="hero-actions">
                <a className="button" href="#contact">
                  Request a Demo
                </a>

                <a className="text-link" href="#platform">
                  See the Difference
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit visual-orbit-large"></div>
              <div className="visual-orbit visual-orbit-small"></div>

              <div className="visual-card visual-card-primary">
                <span className="visual-label">Mia Logos</span>
                <strong>Live Compliance</strong>
                <span className="visual-status">Connected</span>
              </div>

              <div className="visual-card visual-card-small visual-card-top">
                <span>Temperature</span>
                <strong>5.0°C</strong>
              </div>

              <div className="visual-card visual-card-small visual-card-bottom">
                <span>Security</span>
                <strong>Compliant</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="section section-light">
          <div className="container narrow">
            <p className="eyebrow">Connected Operations</p>

            <h2>
              Traditional systems tell you what happened.
              <span>Mia Logos shows you what is happening.</span>
            </h2>

            <p className="section-intro">
              Life science organizations generate enormous amounts of critical
              data, but that data often lives across disconnected systems.
              Mia Logos connects those data points while the operation is still
              happening.
            </p>
          </div>
        </section>

        <section id="capabilities" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">One Source of Truth</p>

              <h2>
                Connect the information that matters most to life science
                operations.
              </h2>

              <p className="section-intro">
                Mia Logos creates a continuously connected view across quality,
                security, transportation, equipment, people and records.
              </p>
            </div>

            <div className="capabilities-grid">
              {capabilities.map((capability, index) => (
                <article className="capability-card" key={capability.title}>
                  <span className="capability-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{capability.title}</h3>

                  <p>{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section section-dark">
          <div className="container why-grid">
            <div className="why-copy">
              <p className="eyebrow eyebrow-light">
                More Than a Dashboard
              </p>

              <h2>
                Dashboards display data.
                <span>Mia Logos connects data to compliance.</span>
              </h2>

              <p>
                Knowing the temperature is 5°C is useful.
              </p>

              <p>
                Knowing that the shipment requires 2–8°C, the trailer is
                validated for that range, its sensors are calibrated, the driver
                is trained, the security requirements are satisfied and the
                shipment remains within approved operating parameters is
                entirely different.
              </p>

              <p className="why-highlight">
                Operational data becomes compliance intelligence.
              </p>
            </div>

            <div className="compliance-panel">
              <div className="compliance-header">
                <div>
                  <span className="compliance-label">
                    Live Compliance View
                  </span>

                  <h3>Shipment operating status</h3>
                </div>

                <span className="compliance-badge">
                  Compliant
                </span>
              </div>

              <div className="temperature-reading">
                <span>Current temperature</span>
                <strong>5.0°C</strong>
              </div>

              <div className="compliance-list">
                {complianceItems.map((item) => (
                  <div className="compliance-item" key={item}>
                    <span className="checkmark">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section connected-section">
          <div className="container connected-grid">
            <div>
              <p className="eyebrow">Connected Ecosystem</p>

              <h2>Your operation is already creating the data.</h2>

              <p className="section-intro">
                Mia Logos makes it work together.
              </p>

              <p className="connected-copy">
                Connect quality, security, transportation, equipment, people and
                live operational data through one Control Tower built for the
                life science industry.
              </p>
            </div>

            <div className="ecosystem-visual" aria-hidden="true">
              <div className="ecosystem-center">
                <span>MIA LOGOS</span>
                <strong>Control Tower</strong>
              </div>

              <span className="ecosystem-pill pill-1">
                Transportation
              </span>

              <span className="ecosystem-pill pill-2">
                Temperature
              </span>

              <span className="ecosystem-pill pill-3">
                Equipment
              </span>

              <span className="ecosystem-pill pill-4">
                Security
              </span>

              <span className="ecosystem-pill pill-5">
                Training
              </span>

              <span className="ecosystem-pill pill-6">
                Quality
              </span>

              <span className="ecosystem-pill pill-7">
                Documents
              </span>

              <span className="ecosystem-pill pill-8">
                Suppliers
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">
                Talk to Mia Logos
              </p>

              <h2>
                See how connected quality and security can work in your
                operation.
              </h2>

              <p className="section-intro">
                Contact our team to learn more about Mia Logos, discuss your
                operational environment, or request a product demonstration.
              </p>

              <div className="contact-email">
                <span>Sales</span>

                <a href="mailto:sales@mialogos.com">
                  sales@mialogos.com
                </a>
              </div>
            </div>

            <div className="demo-card">
              <p className="eyebrow">
                Request a Demo
              </p>

              <h3>
                See Mia Logos in action.
              </h3>

              <form
                className="demo-form"
                name="demo-request"
                method="POST"
                action="/thank-you.html"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="demo-request"
                />

                <p className="hidden-field">
                  <label>
                    Do not fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      minLength={2}
                      maxLength={60}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      minLength={2}
                      maxLength={60}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    minLength={2}
                    maxLength={120}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Business Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    maxLength={150}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+1 941 555 0123"
                      pattern="[0-9+\-().\s]{7,25}"
                      title="Enter a valid phone number, including country code if applicable."
                      maxLength={25}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="jobTitle">
                      Job Title
                    </label>

                    <input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      autoComplete="organization-title"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    What would you like to learn about Mia Logos?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                  ></textarea>
                </div>

                <button
                  className="button form-button"
                  type="submit"
                >
                  Request a Demo
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <img src={logo} alt="Mia Logos" />

            <p>
              Connected Quality. Connected Security. Continuous Visibility.
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:sales@mialogos.com">
              sales@mialogos.com
            </a>

            <span>© 2026 Mia Logos</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App