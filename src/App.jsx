import React, { useState, useMemo, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    const [theme, setTheme] = useState('purple');
    const [greeting, setGreeting] = useState('Hello!');
    const [name, setName] = useState('');
    const [aspirations, setAspirations] = useState('');
    const [greetingImage, setGreetingImage] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [projectImage, setProjectImage] = useState('');
    const [projects, setProjects] = useState([]);
    const [contactIncentive, setContactIncentive] = useState('Please get in touch if you think our work could be mutually beneficial!');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const themeColors = useMemo(() => ({
        purple: { accent: '#6f42c1', bg: '#efe5ff', projectBg: '#e9d9ff', contactBg: '#d9c2ff' },
        green: { accent: '#28a745', bg: '#e6ffed', projectBg: '#d0f7dc', contactBg: '#b7e5c4' },
        blue: { accent: '#007bff', bg: '#e6f3ff', projectBg: '#d0e7ff', contactBg: '#b8daff' },
        orange: { accent: '#fd7e14', bg: '#ffede0', projectBg: '#ffe0c4', contactBg: '#ffd0a6' },
        black: { accent: '#6c757d', bg: '#f0f2f5', projectBg: '#e4e7ed', contactBg: '#dce0e5' }
    }), []);

    const addProject = (e) => {
        e.preventDefault();
        if (projectTitle && projectDesc) {
            setProjects([...projects, { title: projectTitle, desc: projectDesc, link: projectLink, image: projectImage }]);
            setProjectTitle(''); setProjectDesc(''); setProjectLink(''); setProjectImage('');
        }
    };

    const deleteProject = (index) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(index, 1);
        setProjects(updatedProjects);
    };

    const generateHTML = () => {
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
  <style>
    body { 
      background: ${themeColors[theme].bg}; 
      font-family: Arial, sans-serif; 
      font-size: 1.2rem; 
      font-weight: 500; 
    }
    .content-wrapper { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    header { 
      position: sticky; 
      top: 0; 
      z-index: 1000; 
      background: ${themeColors[theme].accent}; 
      padding: 1rem; 
      box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
    } 
    header nav { display: flex; flex-direction: row; gap: 1.5rem; }
    header h1 { margin-bottom: 0; color: white; font-weight: 600; }
    header .container { 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      max-width: 1200px; 
      margin: 0 auto; 
    }
    .nav-link { 
      color: white; 
      text-decoration: none; 
      font-weight: 500;
      font-size: 1.1rem;
      margin-left: 1.5rem;
    }
    section { padding: 5rem 0; }
    h2 { font-size: 2.2rem; font-weight: 600; margin-bottom: 1.5rem; }
    h3 { font-size: 1.8rem; font-weight: 600; }
    h4 { font-weight: 600; }
    p { font-size: 1.2rem; }
    .greeting-container { display: flex; justify-content: space-between; align-items: center; gap: 4rem; flex-wrap: wrap; }
    .greeting-text { flex: 1; min-width: 300px; font-weight: bold }
    .greeting-image { flex: 1; min-width: 300px; display: flex; justify-content: center; }
    .greeting-image img { width: 100%; max-width: 450px; height: auto; object-fit: contain; }
    .name, .aspirations { color: ${themeColors[theme].accent}; font-weight: 600; }
    .about { background: ${themeColors[theme].contactBg}; }
    .projects { background: ${themeColors[theme].bg}; }
    .project-card { 
      margin-bottom: 2rem; 
      background: ${themeColors[theme].projectBg}; 
      padding: 1.5rem; 
      border-radius: 0.5rem; 
      box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
    }
    .project-card img { width: 100%; height: 250px; object-fit: cover; border-radius: 0.3rem; }
    .contact { background: ${themeColors[theme].contactBg}; }
    .contact-container { display: flex; justify-content: space-between; gap: 4rem; flex-wrap: wrap; }
    .contact-info { flex: 1; min-width: 300px; }
    .contact-image { flex: 1; min-width: 300px; display: flex; justify-content: center; }
    .contact-image img { width: 100%; max-width: 500px; height: auto; }
    .contact-details p { margin-bottom: 1rem; }
    .contact-details i { width: 25px; }
    .btn { font-weight: 500; }
    @media (max-width: 768px) {
      .greeting-container, .contact-container { flex-direction: column; gap: 2rem; }
      .greeting-image, .contact-image { width: 100%; }
      .content-wrapper { padding: 0 1rem; }
      header .container { flex-direction: column; gap: 1rem; }
      .nav-link { margin-left: 1rem; }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <h1>My Portfolio</h1>
      <nav>
        <a class="nav-link" href="#greeting">Greeting</a>
        ${aboutMe && aboutMe.trim().length > 0 ? `<a class="nav-link" href="#about">About</a>` : ''}
        ${projects.length > 0 ? `<a class="nav-link" href="#projects">Projects</a>` : ''}
        ${(contactIncentive.trim() || location.trim() || email.trim() || phone.trim() || github.trim() || linkedin.trim()) ?
            `<a class="nav-link" href="#contact">Contact</a>` : ''}
      </nav>
    </div>
  </header>
  
  <section id="greeting">
    <div class="content-wrapper greeting-container">
      <div class="greeting-text">
        <h2>${greeting}</h2>
        <h3>I am <span class="name">${name}</span></h3>
        <p class="aspirations">${aspirations}</p>
      </div>
      ${greetingImage ? `
      <div class="greeting-image">
        <img src="${greetingImage}" alt="Greeting Image">
      </div>` : ''}
    </div>
  </section>
  
  ${aboutMe && aboutMe.trim().length > 0 ? `
  <section id="about" class="about">
    <div class="content-wrapper">
      <h2>About Me</h2>
      <p>${aboutMe.replace(/\n/g, '<br>')}</p>
    </div>
  </section>` : ''}
  
  ${projects.length > 0 ? `
  <section id="projects" class="projects">
    <div class="content-wrapper">
      <h2>My Projects</h2>
      <div class="row">
        ${projects.map(p => `
          <div class="col-lg-4 col-md-6">
            <div class="project-card">
              ${p.image ? `<img src="${p.image}" alt="${p.title}" class="mb-3">` : ''}
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="mb-0">${p.title}</h4>
                ${p.link ? `<a href="${p.link}" target="_blank" class="btn btn-sm" style="background-color: ${themeColors[theme].accent}; color: white;"><i class="fas fa-link"></i> View</a>` : ''}
              </div>
              <p>${p.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>` : ''}
  
  ${(contactIncentive.trim() || location.trim() || email.trim() || phone.trim() || github.trim() || linkedin.trim()) ? `
  <section id="contact" class="contact">
    <div class="content-wrapper contact-container">
      <div class="contact-info">
        <h2>Contact Me</h2>
        ${contactIncentive.trim() ? `<p class="lead mb-4">${contactIncentive}</p>` : ''}
        <div class="contact-details">
          ${location.trim() ? `<p><i class="fas fa-map-marker-alt me-2"></i> ${location}</p>` : ''}
          ${email.trim() ? `<p><i class="fas fa-envelope me-2"></i> <a href="mailto:${email}">${email}</a></p>` : ''}
          ${phone.trim() ? `<p><i class="fas fa-phone me-2"></i> ${phone}</p>` : ''}
          ${github.trim() ? `<p><i class="fab fa-github me-2"></i> <a href="${github}" target="_blank">${github}</a></p>` : ''}
          ${linkedin.trim() ? `<p><i class="fab fa-linkedin me-2"></i> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ''}
        </div>
      </div>
      <div class="contact-image">
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/10260238/cover_image/retina_1708x683/02-Developer%20Hiring%20and%20Skills%20%281%29-17ad0cc6d97bc316c1c37d495059d41d.png" alt="Contact">
      </div>
    </div>
  </section>` : ''}
</body>
</html>
    `;
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'website_portfolio.html';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Function to check if contact section has any content
    const hasContactInfo = () => {
        return contactIncentive.trim() || location.trim() || email.trim() ||
            phone.trim() || github.trim() || linkedin.trim();
    };

    return (
        <div style={{ background: themeColors[theme].bg, fontWeight: '500', fontSize: '1.2rem' }}>
            <header
                style={{ background: themeColors[theme].accent}}
                className="sticky-top shadow py-2 px-4"
            >
                <div className="d-flex justify-content-between align-items-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ color: "white", marginBottom: 0, fontWeight: 600 }}>My Portfolio</h1>

                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        style={{ height: '38px' }}
                        className="d-none d-md-block"
                    >
                        {Object.keys(themeColors).map(t =>
                            <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                        )}
                    </select>

                    <nav className="d-flex align-items-center">
                        <a href="#greeting" style={{ color: "white", textDecoration: "none", marginLeft: '1.5rem', fontWeight: 500 }}>Greeting</a>
                        {aboutMe && aboutMe.trim().length > 0 && (
                            <a href="#about" style={{ color: "white", textDecoration: "none", marginLeft: '1.5rem', fontWeight: 500 }}>About</a>
                        )}
                        {projects.length > 0 && (
                            <a href="#projects" style={{ color: "white", textDecoration: "none", marginLeft: '1.5rem', fontWeight: 500 }}>Projects</a>
                        )}
                        {hasContactInfo() && (
                            <a href="#contact" style={{ color: "white", textDecoration: "none", marginLeft: '1.5rem', fontWeight: 500 }}>Contact</a>
                        )}
                    </nav>
                </div>
            </header>

            <section id="greeting" className="py-5">
                <div className="d-flex justify-content-between flex-wrap gap-5" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="flex-grow-1" style={{ minWidth: '300px' }}>
                        <h2 className="mb-4" style={{ fontWeight: 600, fontSize: '2.2rem' }}>Greeting</h2>
                        <input className="form-control mb-3 py-2" value={greeting} onChange={e => setGreeting(e.target.value)} placeholder="Greeting" />
                        <div className="mb-3">
                            <span style={{ fontSize: '1.2rem' }}>I am </span>
                            <input className="form-control d-inline w-auto py-2" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ color: themeColors[theme].accent, fontWeight: 600 }} required />
                        </div>
                        <input className="form-control py-2" value={aspirations} onChange={e => setAspirations(e.target.value)} placeholder="Career aspirations" style={{ color: themeColors[theme].accent, fontWeight: 600 }} required />
                    </div>
                    <div style={{ minWidth: '300px', flex: '1' }}>
                        <input className="form-control mb-3 py-2" value={greetingImage} onChange={e => setGreetingImage(e.target.value)} placeholder="Greeting image URL" />
                        <div className="d-flex justify-content-center">
                            {greetingImage && <img src={greetingImage} alt="Greeting" style={{ width: '100%', maxWidth: '450px', height: 'auto', objectFit: 'contain' }} />}
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-5">
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2 className="mb-4" style={{ fontWeight: 600, fontSize: '2.2rem' }}>About Me</h2>
                    <textarea className="form-control py-2" value={aboutMe} onChange={e => setAboutMe(e.target.value)} maxLength={1000} rows={5} placeholder="Describe yourself" style={{ fontSize: '1.2rem' }} />
                    {!aboutMe.trim() && (
                        <div className="text-muted mt-2">
                            <small>This section will not appear in the generated website until you add content.</small>
                        </div>
                    )}
                </div>
            </section>

            <section id="projects" className="py-5">
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2 className="mb-4" style={{ fontWeight: 600, fontSize: '2.2rem' }}>My Projects</h2>
                    <form onSubmit={addProject} className="mb-4 p-4 bg-white rounded shadow-sm">
                        <input className="form-control mb-3 py-2" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} placeholder="Project title" required />
                        <textarea className="form-control mb-3 py-2" value={projectDesc} onChange={e => setProjectDesc(e.target.value)} placeholder="Project description" required style={{ fontSize: '1.2rem' }} />
                        <input className="form-control mb-3 py-2" value={projectLink} onChange={e => setProjectLink(e.target.value)} placeholder="Project link (optional)" />
                        <input className="form-control mb-3 py-2" value={projectImage} onChange={e => setProjectImage(e.target.value)} placeholder="Project image URL (optional)" />
                        <button type="submit" className="btn" style={{ background: themeColors[theme].accent, color: 'white', fontWeight: 500 }}>Add Project</button>
                    </form>
                    {projects.length === 0 && (
                        <div className="text-muted">
                            <p>This section will not appear in the generated website until you add at least one project.</p>
                        </div>
                    )}
                    <div className="row">
                        {projects.map((p, i) => (
                            <div key={i} className="col-lg-4 col-md-6 mb-4">
                                <div className="p-4 rounded shadow-sm h-100" style={{ background: themeColors[theme].projectBg }}>
                                    {p.image && <img src={p.image} alt={p.title} className="img-fluid mb-3 rounded" style={{ height: 250, width: '100%', objectFit: 'cover' }} />}
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="m-0" style={{ fontWeight: 600 }}>{p.title}</h4>
                                        <div>
                                            {p.link && (
                                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm me-2" style={{ background: themeColors[theme].accent, color: 'white', fontWeight: 500 }}>
                                                    <i className="fas fa-link"></i> View
                                                </a>
                                            )}
                                            <button
                                                onClick={() => deleteProject(i)}
                                                className="btn btn-sm btn-danger"
                                                title="Delete project"
                                                style={{ fontWeight: 500 }}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '1.2rem' }}>{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-5" style={{ background: themeColors[theme].contactBg }}>
                <div className="d-flex justify-content-between flex-wrap gap-5" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="flex-grow-1" style={{ minWidth: '300px' }}>
                        <h2 className="mb-4" style={{ fontWeight: 600, fontSize: '2.2rem' }}>Contact Me</h2>
                        <textarea className="form-control mb-3 py-2" value={contactIncentive} onChange={e => setContactIncentive(e.target.value)} placeholder="Contact incentive" style={{ fontSize: '1.2rem' }} />
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                            <input className="form-control py-2" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                            <input className="form-control py-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-phone"></i></span>
                            <input className="form-control py-2" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fab fa-github"></i></span>
                            <input className="form-control py-2" value={github} onChange={e => setGithub(e.target.value)} placeholder="GitHub URL (optional)" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fab fa-linkedin"></i></span>
                            <input className="form-control py-2" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="LinkedIn URL (optional)" />
                        </div>
                        {!hasContactInfo() && (
                            <div className="text-muted mt-2">
                                <small>This section will not appear in the generated website until you add contact information.</small>
                            </div>
                        )}
                    </div>
                    <div style={{ minWidth: '300px', flex: '1', display: 'flex', justifyContent: 'center' }}>
                        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/10260238/cover_image/retina_1708x683/02-Developer%20Hiring%20and%20Skills%20%281%29-17ad0cc6d97bc316c1c37d495059d41d.png" alt="Contact" className="img-fluid" style={{ width: '100%', maxWidth: '500px' }} />
                    </div>
                </div>
            </section>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <button onClick={generateHTML} className="btn w-100 py-3" style={{ background: themeColors[theme].accent, color: 'white', fontWeight: 500, fontSize: '1.2rem' }}>Finish Website</button>
            </div>
        </div>
    );
};

export default App;