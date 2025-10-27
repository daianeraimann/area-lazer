import { useState, useMemo } from "react";
import { motion } from "framer-motion";
// Ícones atualizados: Sprout -> PartyPopper, adicionado Users e Utensils, removido Mail, Instagram, Clock, Shield
import { PartyPopper, Menu, X, MapPin, Phone, CheckCircle2, Users, Utensils } from "lucide-react";

// Imports das novas imagens (coloque-as na pasta 'src/assets')
import espacoLazerImage from '../assets/espaco-lazer.webp'; // Imagem principal do Hero
import fotocasalImage from '../assets/fotocasal.webp'; // Foto de Zé e Cirley
import foto1Image from '../assets/foto1.webp';
import foto2Image from '../assets/foto2.webp';
import foto3Image from '../assets/foto3.webp';
import foto4Image from '../assets/foto4.webp';

// Sua paleta de cores (mantida do código anterior)
const c = { base:"#1693a5", teal:"#f0f0d8", tealDark:"#d8d8c0", deep:"#1693a5", darkest:"#000000" };

// Itens de navegação atualizados
const navItems = [
  { id:"sobre", label:"Sobre Nós" },
  { id:"espaco", label:"O Espaço" },
  { id:"cardapios", label:"Cardápios" },
  { id:"localizacao", label:"Localização" },
  { id:"contato", label:"Contato" },
];

function useScrollTo(){ return (id)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); }

function Logo(){
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="grid place-items-center w-10 h-10 rounded-2xl" style={{background:c.teal,color:c.base}}>
        {/* Ícone atualizado */}
        <PartyPopper className="w-5 h-5" />
      </div>
      <div className="leading-tight">
        {/* Textos atualizados */}
        <p className="font-semibold tracking-wide" style={{color:c.base}}>Espaço de Lazer Zé Tomen</p>
        <p className="text-xs opacity-80" style={{color:c.base}}>Eventos, Almoços e Jantares</p>
      </div>
    </div>
  );
}

function Header(){
  const [open,setOpen]=useState(false);
  const scrollTo = useScrollTo();
  return (
    <header className="sticky top-0 z-40 backdrop-blur" style={{background:"rgba(74, 72, 87, 0.4)"}}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(i=>(
              <button key={i.id} onClick={()=>scrollTo(i.id)} className="text-sm font-medium hover:opacity-90" style={{color:c.base}}>
                {i.label}
              </button>
            ))}
            <a href="#contato" onClick={(e)=>{e.preventDefault();scrollTo("contato");}}
               className="px-4 py-2 rounded-xl text-sm font-semibold shadow-sm"
               style={{background:c.teal,color:c.base}}>
              {/* Botão atualizado */}
              Fale Conosco
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-xl border" style={{borderColor:c.deep,color:c.base}}
                  onClick={()=>setOpen(v=>!v)} aria-label="Abrir menu">
            {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{borderColor:c.deep,background:c.darkest}}>
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navItems.map(i=>(
              <button key={i.id} onClick={()=>{setOpen(false);document.getElementById(i.id)?.scrollIntoView({behavior:"smooth"});}}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium"
                      style={{color:c.base,background:c.deep+"22"}}>
                {i.label}
              </button>
            ))}
            <a href="#contato" onClick={(e)=>{e.preventDefault();setOpen(false);document.getElementById("contato")?.scrollIntoView({behavior:"smooth"});}}
               className="mt-1 w-full text-center px-4 py-3 rounded-xl text-sm font-semibold"
               style={{background:c.teal,color:c.base}}>
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Badge({icon,text}) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
         style={{background:c.deep+"22",color:c.base,border:`1px solid ${c.tealDark}33`}}>
      {icon}<span>{text}</span>
    </div>
  );
}

function Hero(){
  return (
    <section className="relative" style={{background:`linear-gradient(180deg, ${c.darkest} 0%, ${c.deep} 100%)`}}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{color:c.base}}>
              O lugar perfeito para seus<br className="hidden sm:block"/> momentos especiais.
            </h1>
            <p className="text-base sm:text-lg max-w-prose opacity-90" style={{color:c.base}}>
              Realize seu evento, de reuniões familiares a casamentos, em um ambiente familiar e completo. Oferecemos serviço de refeição (almoço e jantar) com a especialidade da casa: um delicioso churrasco.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#cardapios" className="px-5 py-3 rounded-xl text-sm font-semibold shadow-md text-center" style={{background:c.teal,color:c.base}}>Ver Cardápios</a>
              <a href="#contato" className="px-5 py-3 rounded-xl text-sm font-semibold text-center border" style={{borderColor:c.teal,color:c.base}}>Fale Conosco</a>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Badge icon={<Users className="w-4 h-4" />} text="Ambiente Familiar" />
              <Badge icon={<CheckCircle2 className="w-4 h-4" />} text="Eventos até 200 Pessoas" />
              <Badge icon={<Utensils className="w-4 h-4" />} text="Serviço de Refeição" />
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}} className="relative">
            <img 
              // IMPORTANTE: Coloque sua imagem principal na pasta 'src/assets/espaco-lazer.webp'
              src={espacoLazerImage}
              alt="Foto do Espaço de Lazer Zé Tomen"
              className="aspect-[4/5] w-full object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Section({id,title,subtitle,children}){
  return (
    <section id={id} className="py-14 sm:py-20" style={{background:c.darkest}}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{color:c.base}}>{title}</h2>
          {subtitle && <p className="mt-2 text-sm sm:text-base opacity-90" style={{color:c.base}}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About(){
  return (
    <Section id="sobre" title="Sobre Nós: Zé Tomen & Cirley Tomen" subtitle="Uma administração familiar para que você e seus convidados se sintam em casa.">
      <div className="grid md:grid-cols-[280px,1fr] gap-8 items-start">
        
        {/* IMPORTANTE: Coloque a foto do casal em 'src/assets/fotocasal.webp' */}
        <img 
          src={fotocasalImage}
          alt="Foto de Zé Tomen e Cirley Tomen" 
          className="w-full h-auto rounded-3xl object-contain border md:h-72" 
          style={{borderColor:c.deep}} 
        />

        <div className="space-y-4">
          <p className="text-sm sm:text-base leading-relaxed" style={{color:c.base}}>
            Somos Zé Tomen e Cirley Tomen, administradores do Espaço de Lazer. Nosso objetivo é oferecer um ambiente acolhedor e familiar para que você, sua família e amigos possam aproveitar bons momentos e criar memórias inesquecíveis. 
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{color:c.base}}>
            Cuidamos de cada detalhe, desde a organização do espaço até o serviço de refeição (almoço ou jantar), garantindo o sucesso do seu evento, seja ele uma reunião familiar, um aniversário ou um casamento.
          </p>
        </div>
      </div>
    </Section>
  );
}

// Card de Cardápio (antigo PlanCard)
function MenuCard({ name, price, per, features, highlight }) {
  return (
    <div className={`rounded-3xl p-6 border shadow-sm flex flex-col ${highlight ? "scale-[1.02]" : ""}`} style={{ borderColor: c.deep, background: c.darkest }}>
      <div className="mb-4">
        <h3 className="text-xl font-bold" style={{ color: c.base }}>{name}</h3>
        <p className="text-3xl font-extrabold mt-2" style={{ color: c.base }}>
          {price} <span className="text-sm font-medium opacity-80">/{per}</span>
        </p>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2" style={{ color: c.base }}>
            <CheckCircle2 className="mt-0.5 w-4 h-4 flex-shrink-0" style={{color:c.deep}} />
            <span className="text-sm">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contato" className="mt-auto text-center px-4 py-2 rounded-xl font-semibold" style={{ background: c.tealDark, color: c.darkest }}>
        Consultar Cardápio
      </a>
    </div>
  );
}

// Seção de Cardápios (antiga Plans)
function Menus() {
  const menus = useMemo(() => [
    { 
      name: "Churrasco Completo", 
      price: "R$ 90,00", // Projeção de preço
      per: "por pessoa", 
      features: ["Seleção de carnes nobres", "Acompanhamentos (arroz, maionese, saladas)", "Entrada (linguicinha, farofa, pão de alho)", "Sobremesa inclusa"], 
      highlight: true 
    },
    { 
      name: "Churrasco Simples", 
      price: "R$ 75,00", // Projeção de preço
      per: "por pessoa", 
      features: ["Seleção de carnes nobres", "Acompanhamentos (arroz, maionese, saladas)"], 
    },
    {
  name: "Massas Diversas",
  price: "R$ 60,00",
  per: "por pessoa",
  features: [
    "Variedade de massas: espaguete, penne, nhoque e lasanha",
    "Molhos à escolha: bolonhesa, branco, pesto e quatro queijos",
    "Acompanhamentos: queijos, pães e saladas frescas",
    "Bebidas não alcoólicas inclusas"
  ],
},
{
  name: "Feijoada Completa",
  price: "R$ 65,00",
  per: "por pessoa",
  features: [
    "Feijoada tradicional com carnes selecionadas",
    "Acompanhamentos: arroz, couve refogada, farofa e laranja",
    "Torresmo crocante",
    
  ],
},
  ], []);

  return (
    <Section id="cardapios" title="Nossos Cardápios" subtitle="Opções deliciosas para seu evento, com a especialidade da casa: Churrasco.">
      <div className="grid md:grid-cols-3 gap-6">
        {menus.map((m) => <MenuCard key={m.name} {...m} />)}
      </div>
      <p className="text-xs opacity-70 mt-4" style={{ color: c.base }}>* Valores projetados. O preço final varia conforme o cardápio escolhido e número de convidados. Consulte-nos.</p>
    </Section>
  );
}

// Seção "O Espaço" (Galeria + Piscinas)
function TheSpace() {
  const images = [foto1Image, foto2Image, foto3Image, foto4Image];
  const items = [
    { 
      title: "Locação do Espaço", 
      text: "Você pode locar o espaço para momentos especiais com sua família e amigos, sem a necessidade de contratar refeições. Ideal para aniversários, encontros e eventos particulares." 
    },
    { 
      title: "Piscinas Adulto e Infantil", 
      text: "Disponíveis para locação, mediante consulta de disponibilidade e condições. Aproveite para se refrescar e relaxar em um ambiente tranquilo." 
    },
    { 
      title: "Eventos com Jantar ou Almoço", 
      text: "Também oferecemos a opção de contratar o espaço junto com o serviço de jantar ou almoço completo, conforme o cardápio desejado." 
    },
    { 
      title: "Capacidade do Salão", 
      text: "Nosso salão comporta confortavelmente até 200 pessoas sentadas, ideal para festas, confraternizações e eventos corporativos." 
    },
    { 
      title: "Ambiente Familiar", 
      text: "Um espaço administrado por Zé Tomen e Cirley Tomen, voltado para o convívio familiar, com atendimento acolhedor e cuidadoso." 
    },
  ];

  return (
    <Section id="espaco" title="Conheça o Espaço" subtitle="Infraestrutura completa para o seu evento.">

      {/* Galeria de fotos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {images.map((imgSrc, index) => (
          <motion.img
            key={index}
            src={imgSrc}
            alt={`Foto ${index + 1} do Espaço de Lazer Zé Tomen`}
            className="w-full h-48 object-cover rounded-2xl border"
            style={{ borderColor: c.deep }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* Blocos de informações */}
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl p-6 border" style={{ borderColor: c.deep, background: c.darkest }}>
            <h3 className="font-semibold mb-2" style={{ color: c.base }}>{it.title}</h3>
            <p className="text-sm opacity-90" style={{ color: c.base }}>{it.text}</p>
          </div>
        ))}
      </div>

    </Section>
  );
}


function Location() {
  return (
    <Section id="localizacao" title="Nossa Localização" subtitle="Fácil acesso para você e seus convidados.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna do Mapa */}
        <div className="rounded-3xl overflow-hidden border" style={{ borderColor: c.deep }}>
          <iframe
            // IMPORTANTE: Link do mapa atualizado
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1521.0371101956466!2d-51.86878985888196!3d-24.94377574538769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1761503500485!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        {/* Coluna de Texto/Endereço */}
        <div className="rounded-3xl p-6 border" style={{ borderColor: c.deep, background: c.darkest }}>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 w-5 h-5 flex-shrink-0" style={{color:c.deep}}/>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: c.base }}>Onde Estamos</h3>
              <p className="text-sm opacity-90" style={{ color: c.base }}>
                {/** IMPORTANTE: Adicione o endereço aqui */}
                R. João Prestes de Carvalho Ferreira - Santa Maria do Oeste, PR
                <br /><br />
                Utilize o mapa ao lado para traçar sua rota facilmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contato" title="Fale Conosco" subtitle="Entre em contato para agendar uma visita, verificar datas disponíveis e tirar suas dúvidas.">
      <div className="max-w-md mx-auto">
        <div className="rounded-3xl p-6 border" style={{ borderColor: c.deep, background: c.darkest }}>
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* IMPORTANTE: Substitua '5500000000001' pelo número do Zé Tomen */}
            <a 
              href="https://wa.me/55042991232438" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border font-semibold" 
              style={{ borderColor: c.tealDark, color: c.base, background: c.tealDark + '22' }}
            >
              <Phone className="w-4 h-4" /> WhatsApp (Zé Tomen)
            </a>
            
            {/* IMPORTANTE: Substitua '5500000000002' pelo número da Cirley Tomen */}
            <a 
              href="https://wa.me/55042991188770" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border font-semibold" 
              style={{ borderColor: c.tealDark, color: c.base, background: c.tealDark + '22' }}
            >
              <Phone className="w-4 h-4" /> WhatsApp (Cirley)
            </a>
          
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="pt-10" style={{ background: c.darkest }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 border-t" style={{ borderColor: c.deep }}>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl grid place-items-center" style={{ background: c.teal }}>
              <PartyPopper className="w-4 h-4" style={{ color: c.base }} />
            </div>
            <p className="text-sm text-center" style={{ color: c.base }}>© {new Date().getFullYear()} Espaço de Lazer Zé Tomen — Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-5 text-sm" style={{ color: c.base }}>
            <a href="#sobre" className="hover:opacity-80">Sobre</a>
            <a href="#espaco" className="hover:opacity-80">O Espaço</a>
            <a href="#cardapios" className="hover:opacity-80">Cardápios</a>
            <a href="#contato" className="hover:opacity-80">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingEspacoLazer(){
  return (
    <div className="min-h-screen" style={{background:c.darkest}}>
      <style>{`html{scroll-behavior:smooth}`}</style>
      <Header />
      <main>
        <Hero />
        <About />
        <TheSpace /> 
        <Menus />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}