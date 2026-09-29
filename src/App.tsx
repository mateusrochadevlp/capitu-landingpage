import fotoSamantha from './assets/image_capitu.png'
import { useState } from 'react'

const WHATSAPP = '5598688574489'

const NAV_LINKS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
]

const SERVICES = [
  {
    icon: '🔮',
    title: 'Tiragem geral - Mandala astrológica',
    desc: 'É uma leitura de Tarot que analisa várias áreas da sua vida, como amor, dinheiro, trabalho, família e futuro, usando 12 cartas baseadas nas casas astrológicas.',
    price: 'R$ 40,00',
  },
  {
    icon: '🃏',
    title: 'Pergunta simples',
    desc: 'É uma pergunta direta sobre algo que você quer entender ou refletir.',
    price: 'R$ 5,00',
  },
  {
    icon: '✨',
    title: 'Método simples',
    desc: 'Um método simples é uma forma direta de fazer a tiragem, com 5 cartas ou mais, para responder uma pergunta específica.',
    price: 'R$ 15,00',
  },
]

const TAROT_CARDS = ['☽', '⊕', '✦', '⟡', '✧', '⋆']

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: 'linear-gradient(180deg, rgba(6,3,15,0.95) 0%, transparent 100%)', backdropFilter: 'blur(8px)' }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl animate-shimmer">🌙</span>
          <span className="gold-text text-xl" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.15em', fontWeight: 600 }}>
            Samantha Alencar
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-[#c4a3f7] hover:text-[#d4af5a] transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.08em' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#c4a3f7] text-2xl">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-4 border-t border-[rgba(124,58,237,0.2)]">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block py-3 px-6 text-[#c4a3f7] hover:text-[#d4af5a] transition-colors"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.08em' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 stars opacity-60" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(42,17,85,0.8) 0%, rgba(6,3,15,0) 70%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(124,58,237,0.15) 0%, transparent 60%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(232,121,160,0.1) 0%, transparent 50%)' }} />

      {/* Floating symbols */}
      {TAROT_CARDS.map((sym, i) => (
        <span
          key={i}
          className="absolute text-[#7c3aed] select-none pointer-events-none animate-float"
          style={{
            left: `${10 + i * 16}%`,
            top: `${15 + (i % 3) * 25}%`,
            fontSize: `${14 + (i % 3) * 6}px`,
            opacity: 0.3 + (i % 3) * 0.15,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i * 0.5}s`,
          }}
        >
          {sym}
        </span>
      ))}

      {/* Central orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-rotate-slow pointer-events-none" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(124,58,237,0.08) 25%, transparent 50%, rgba(212,175,90,0.06) 75%, transparent 100%)', border: '1px solid rgba(124,58,237,0.1)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#d4af5a] text-xs tracking-[0.4em] mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
          ✦ Cartomante & Taróloga ✦
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none" style={{ fontFamily: 'Cinzel, serif' }}>
          <span className="gold-text">Samantha</span>
          <br />
          <span className="text-[#e8dff5] violet-glow">Alencar</span>
        </h1>

        <div className="divider-mystical my-8 text-[#d4af5a] text-sm" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.3em' }}>
          ✦ ✦ ✦
        </div>

        <p className="text-[#c4a3f7] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ fontStyle: 'italic' }}>
          "As cartas não revelam o que vai acontecer —<br />
          revelam o que está acontecendo dentro de você."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato" className="btn-primary px-8 py-4 rounded text-base">
            Agendar Consulta
          </a>
          <a href="#servicos" className="btn-ghost px-8 py-4 rounded text-base">
            Ver Serviços
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7c3aed] animate-float" style={{ animationDuration: '2s' }}>
        <span className="text-xs tracking-widest text-[#c4a3f7]" style={{ fontFamily: 'Cinzel, serif' }}>ROLAR</span>
        <span className="text-xl">↓</span>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="py-32 px-6 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(42,17,85,0.4) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#d4af5a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            ✦ O que ofereço ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8dff5] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Portais de <span className="gold-text">Revelação</span>
          </h2>
          <p className="text-[#c4a3f7] text-lg max-w-xl mx-auto" style={{ fontStyle: 'italic' }}>
            Cada consulta é uma jornada única. Escolha o caminho que ressoa com o que você busca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="card-mystical rounded-2xl p-8 flex flex-col gap-4 transition-all duration-400 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#e8dff5]" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}>
                {service.title}
              </h3>
              <p className="text-[#c4a3f7] text-sm leading-relaxed flex-1" style={{ fontStyle: 'italic' }}>
                {service.desc}
              </p>
              <div className="pt-4 border-t border-[rgba(124,58,237,0.2)] mt-auto">
                <span className="gold-text text-2xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary inline-block px-10 py-4 rounded">
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20" style={{ background: 'radial-gradient(ellipse at right center, rgba(124,58,237,0.5) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            <div className="absolute inset-0 rounded-full animate-glow" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(42,17,85,0.5) 60%, transparent 100%)' }} />
            <div className="absolute inset-4 rounded-full overflow-hidden border border-[rgba(212,175,90,0.4)]">
              <img
                src={fotoSamantha}
                alt="Samantha Alencar, cartomante e taróloga"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(232,121,160,0.15) 100%)' }} />
            </div>
            {/* Orbiting rune */}
            <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '20s' }}>
              {['✦', '☽', '✧', '⊕'].map((r, i) => (
                <span
                  key={i}
                  className="absolute text-[#d4af5a] text-sm"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 90}deg) translateY(-200px) rotate(-${i * 90}deg)`,
                    opacity: 0.7,
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[#d4af5a] text-xs tracking-[0.4em] uppercase mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            ✦ Quem sou eu ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8dff5] mb-8 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Conheça mais<br /><span className="gold-text">sobre meu trabalho</span>
          </h2>
          <div className="space-y-5 text-[#c4a3f7] leading-relaxed text-base">
            <p>
              Meu nome é <strong className="text-[#e8dff5]">Samantha</strong>, tenho mais de 5 anos de experiência com tiragens.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Acredito que as cartas mostram os padrões que criamos e que, ao enxergá-los, temos o poder de transformá-los.
            </p>
            <p>
              Aprofundo minha prática com estudos em astrologia, numerologia e tradições esotéricas diversas.
            </p>
          </div>

          <div className="mt-10 flex items-start gap-3">
            <span className="text-xl">🌍</span>
            <div>
              <div className="text-[#d4af5a] text-xs tracking-wider mb-1" style={{ fontFamily: 'Cinzel, serif' }}>Atendimento</div>
              <div className="text-[#e8dff5] text-sm">Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', service: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const mensagem = `Olá, Samantha! Meu nome é ${form.name} e gostaria de agendar: ${form.service}.`
    const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`

    window.open(link, '_blank')
    setSent(true)
  }

  return (
    <section id="contato" className="py-32 px-6 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(42,17,85,0.5) 0%, transparent 60%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#d4af5a] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            ✦ Iniciar a jornada ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8dff5] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Agende sua <span className="gold-text">Consulta</span>
          </h2>
          <p className="text-[#c4a3f7] text-lg" style={{ fontStyle: 'italic' }}>
            Preencha os campos e você será direcionado ao WhatsApp para confirmar data e horário.
          </p>
        </div>

        <div className="card-mystical rounded-2xl p-8 md:p-12">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6 animate-float">🔮</div>
              <h3 className="text-2xl font-bold text-[#e8dff5] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                As cartas já sabem que você vem.
              </h3>
              <p className="text-[#c4a3f7]" style={{ fontStyle: 'italic' }}>
                Abrimos o WhatsApp com sua mensagem. É só enviar para continuar a conversa.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#d4af5a] text-xs tracking-wider mb-2" style={{ fontFamily: 'Cinzel, serif' }}>Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[#d4af5a] text-xs tracking-wider mb-2" style={{ fontFamily: 'Cinzel, serif' }}>Serviço desejado</label>
                <select
                  required
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg appearance-none"
                  style={{ background: 'rgba(22,10,48,0.8)', border: '1px solid rgba(124,58,237,0.3)', color: form.service ? '#e8dff5' : 'rgba(196,163,247,0.4)', fontFamily: 'Lora, serif' }}
                >
                  <option value="">Selecione um serviço...</option>
                  {SERVICES.map(s => (
                    <option key={s.title} value={s.title}>{s.title} — {s.price}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary w-full py-4 rounded-lg text-base">
                Enviar pelo WhatsApp
              </button>
            </form>
          )}
        </div>


      </div>
    </section>
  )
}
function Footer() {
  return (
    <footer className="border-t border-[rgba(124,58,237,0.2)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <span className="text-xl">🌙</span>
        <span className="gold-text text-lg" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.15em', fontWeight: 600 }}>
          SAMANTHA ALENCAR
        </span>
      </div>
      <p className="text-center text-[rgba(196,163,247,0.2)] text-xs mt-8">
        © 2026 Mateus Batista · Todos os direitos reservados
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: '#06030f' }}>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}