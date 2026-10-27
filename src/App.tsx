import fotoPerfil from './assets/foto-perfil/foto-ricardo.jpeg'
import './App.css'

interface Projeto {
  titulo: string;
  descricao: string;
  imagem?: string;
  linkDeploy?: string;
}

function App() {
  const tecnologias: string[] = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
    'React', 'Node.js', 'Express', 'MySQL',
    'Bootstrap', 'Git', 'GitHub'
  ];

  const imagensGlob = import.meta.glob('./assets/imagens-projetos/*.{png,jpg,jpeg}', { eager: true });

  const imagensProjetos: string[] = Object.entries(imagensGlob)
    .sort(([caminhoA], [caminhoB]) => caminhoA.localeCompare(caminhoB, 'pt-BR', { numeric: true }))
    .map(
      ([, img]) => (img as { default: string }).default
    );

  const listaProjetos: Projeto[] = [
    {
      titulo: "Quiz Interativo",
      descricao: "Meu projeto de estreia no desenvolvimento web, focado na estruturação de conteúdo e na estilização de uma interface interativa.",
      imagem: imagensProjetos[0],
      linkDeploy: "https://ricardo-viniicius.github.io/meu-primeiro-projeto/"
    },
    {
      titulo: "Landing Page de Cafeteria",
      descricao: "Landing page desenvolvida para apresentar uma cafeteria de forma visual, organizada e convidativa.",
      imagem: imagensProjetos[1],
      linkDeploy: "https://ricardo-viniicius.github.io/landing-page-cafeteria/"
    },
    {
      titulo: "Página de Login Simples",
      descricao: "Interface de login com foco em clareza visual, organização dos campos e boa experiência de uso.",
      imagem: imagensProjetos[2],
      linkDeploy: "https://ricardo-viniicius.github.io/p-gina-de-login-simples/"
    },
    {
      titulo: "Página de Login 2.0",
      descricao: "Evolução de uma tela de autenticação, explorando composição, cores e elementos visuais modernos.",
      imagem: imagensProjetos[3],
      linkDeploy: "https://ricardo-viniicius.github.io/login-2.0/"
    },
    {
      titulo: "Página de Links",
      descricao: "Página centralizadora de links para redes sociais e conteúdos importantes de uma pessoa ou marca.",
      imagem: imagensProjetos[4],
      linkDeploy: "https://ricardo-viniicius.github.io/Dev-Links"
    },
    {
      titulo: "Landing Page Amanda",
      descricao: "Landing page com foco em apresentação profissional e organização clara das informações.",
      imagem: imagensProjetos[5],
      linkDeploy: "https://ricardo-viniicius.github.io/"
    },
    {
      titulo: "Landing Page de Bebidas",
      descricao: "Projeto visual para divulgação de bebidas, com destaque para produtos e chamadas de ação.",
      imagem: imagensProjetos[6],
      linkDeploy: "https://ricardo-viniicius.github.io/landing-page-Bebidas/"
    },
    {
      titulo: "Loja de Eletrônicos",
      descricao: "Landing page para uma loja de eletrônicos, com visual futurista, tema escuro e carrossel de produtos em JavaScript.",
      imagem: imagensProjetos[7],
      linkDeploy: "https://ricardo-viniicius.github.io/landing-page-eletronicos/"
    },
    {
      titulo: "Landing Page Fanta",
      descricao: "Projeto de landing page com uma identidade visual marcante e foco na apresentação de produto.",
      imagem: imagensProjetos[8],
      linkDeploy: "https://ricardo-viniicius.github.io/Landing-Page-Fanta/"
    },
  ];

  return (
    <>
      {/* Navegação Centralizada */}
      <nav className="site-navbar navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">Ricardo Vinincius</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilidades">Tecnologias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projetos">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal Centralizado */}
      <main className="site-main container my-5">

        {/* Seção Início / Sobre Mim */}
        <section id="inicio" className="hero-section row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div className="hero-card card border-0 p-3 p-md-4">
              <div className="row g-4 align-items-center">

                {/* Imagem de Perfil Centralizada */}
                <div className="col-12 col-md-4 text-center">
                  <img
                    src={fotoPerfil}
                    className="hero-image img-fluid rounded"
                    alt="Foto de perfil de Ricardo Vinícius"
                  />
                </div>

                {/* Texto Apresentação */}
                <div className="col-12 col-md-8">
                  <div className="card-body p-0 text-center text-md-start">
                    <span className="section-kicker text-uppercase fw-bold small">Portfólio Pessoal</span>
                    <h1 className="h3 card-title fw-bold mt-1 mb-3">Entre café, tecnologia e um novo caminho</h1>

                    <p className="lead fw-semibold mb-3">Olá, eu sou o Ricardo Vinícius!</p>

                    <p>Natural de Garanhuns - Pernambuco, trago das minhas raízes o valor pelas coisas simples: uma boa conversa, um café recém-passado e o orgulho de construir algo com as próprias mãos.</p>

                    <p>Atualmente, vivencio uma transição de carreira rumo à tecnologia. Mais do que uma mudança profissional, busco um propósito: um ecossistema dinâmico para aprender constantemente, criar e resolver problemas do mundo real.</p>

                    <p>Minha trajetória une o rigor analítico do raciocínio lógico — cultivado na época em que fui monitor de matemática — com a empatia, organização e resiliência desenvolvidas na área da saúde e no atendimento ao cliente.</p>

                    <p>Como estudante de Desenvolvimento Web e Full Stack em formação, vejo a programação além da sintaxe. Para mim, programar é traduzir necessidades em soluções funcionais, elegantes e acessíveis. Dedico minha rotina aos estudos práticos, construindo projetos com HTML, CSS, JavaScript, React, TypeScript e Node.js, sempre focado em usabilidade, responsividade e código limpo.</p>

                    <blockquote className="blockquote mt-4 pt-2 border-top text-center text-md-start">
                      <p className="fst-italic fs-6 text-muted mb-0">💡 “Transformando desafios em linhas de código.” ☕</p>
                    </blockquote>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Seção Habilidades / Tecnologias */}
        <section id="habilidades" className="row justify-content-center text-center my-5">
          <div className="col-12 col-md-8">
            <span className="section-kicker text-uppercase fw-bold small">Tecnologias</span>
            <h2 className="fw-bold mb-4">O que estou aprendendo</h2>

            <div className="d-flex flex-wrap justify-content-center gap-2">
              {tecnologias.map((tech) => (
                <span key={tech} className="tech-pill badge px-3 py-2 fs-6">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
        <section className="row justify-content-center text-center my-5" id="projetos">
          <div className="col-12 mb-4">
            <span className="section-kicker text-uppercase fw-bold small">Portfólio</span>
            <h2 className="fw-bold">Projetos</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {listaProjetos.map((projeto, index) => (
              <div className="col" key={index}>
                <div className="project-card card h-100 border-0 text-start">
                  {projeto.imagem ? (
                    <img
                      src={projeto.imagem}
                      className="card-img-top"
                      alt={`Captura de tela do projeto ${projeto.titulo}`}
                      loading="lazy"
                      decoding="async"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="project-image-placeholder text-center py-5 rounded-top">
                      <span>Sem imagem</span>
                    </div>
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{projeto.titulo}</h5>
                    <p className="card-text text-muted flex-grow-1">{projeto.descricao}</p>

                    <a
                      href={projeto.linkDeploy}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-link btn btn-sm flex-fill mt-2'
                    >
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Seção de Contato / Rodapé Centralizado */}
      <footer id='contato' className="site-footer py-5">
        <div className="container text-center">
          <span className="section-kicker text-uppercase fw-bold small">Vamos conversar?</span>
          <h2 className="fw-bold mb-4">Contatos</h2>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://github.com/Ricardo-Viniicius"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link btn d-inline-flex align-items-center gap-2"
            >
              <ion-icon name="logo-github" aria-hidden="true"></ion-icon> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ricardo-viniicius/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link btn d-inline-flex align-items-center gap-2"
            >
              <ion-icon name="logo-linkedin" aria-hidden="true"></ion-icon> LinkedIn
            </a>

            <a
              href="https://wa.me/5587981593646"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link btn d-inline-flex align-items-center gap-2"
            >
              <ion-icon name="logo-whatsapp" aria-hidden="true"></ion-icon> WhatsApp
            </a>

            <a
              href="mailto:capitoneeves@gmail.com"
              className="contact-link btn d-inline-flex align-items-center gap-2"
            >
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon> E-mail
            </a>

            <a
              href="https://www.instagram.com/ricardo__capito"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link btn d-inline-flex align-items-center gap-2"
            >
              <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> Instagram
            </a>
          </div>

          <p className="text-muted small mt-4 mb-0">
            © {new Date().getFullYear()} Ricardo Vinícius. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;