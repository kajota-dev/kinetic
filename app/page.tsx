"use client";
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient'; 

export default function KineticLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    objetivo: '',
    frecuencia: '',
    lugar: 'gimnasio',
    condiciones: '',
    compromiso: ''
  });

  const abrirModal = (paquetePreseleccionado = '') => {
    setFormData({ ...formData, objetivo: paquetePreseleccionado });
    setStatus('idle');
    setIsModalOpen(true);
  };

  const cerrarModal = () => setIsModalOpen(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('leads').insert([formData]);
      if (error) throw error;
      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="relative overflow-x-hidden bg-[#050505] text-white font-sans selection:bg-[#00E5FF] selection:text-black">
      
      {/* 1. BARRA DE URGENCIA RADICAL (Hormozi: Scarcity) */}
      <div className="bg-[#00E5FF] text-black text-[10px] md:text-xs font-black py-3 px-4 text-center sticky top-0 z-50 uppercase tracking-[0.2em]">
        AVISO: Pocas plazas disponibles esta semana.
      </div>

      {/* HEADER */}
      <header className="flex items-center justify-between bg-black/90 backdrop-blur-lg px-6 md:px-12 py-6 border-b border-white/5 sticky top-[40px] z-40">
        <div className="leading-none text-left">
          <h2 className="text-[#00E5FF] text-2xl font-black tracking-tighter uppercase italic">Kinetic</h2>
          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.4em]">Advanced Transformation</p>
        </div>
        <button onClick={() => abrirModal('Nav Action')} className="bg-white text-black px-8 py-2 text-[10px] font-black hover:bg-[#00E5FF] transition-all uppercase italic">
          Aplicar al Cupo
        </button>
      </header>

{/* 2. HERO: INGENIERÍA REAL */}
<section className="relative w-full min-h-[90vh] flex items-center justify-center py-24 overflow-hidden">
  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00E5FF 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
  <div className="relative z-20 container mx-auto px-6 text-center max-w-6xl">

<h1 className="text-4xl sm:text-5xl md:text-[8rem] lg:text-[8.5rem] font-black leading-[0.95] mb-10 uppercase italic tracking-tighter">
  TU RUTINA. <br/>
  <span className="text-transparent" style={{ WebkitTextStroke: '1px #00E5FF' }}>FÁCIL Y RÁPIDO</span>
</h1>
    
    <p className="text-xl md:text-3xl font-medium mb-16 text-zinc-400 max-w-4xl mx-auto leading-tight italic">
  Tu transformación física no es un deseo, es un proyecto. Ejecuta un <span className="text-white font-bold">Plan Maestro de 12 semanas</span> diseñado para tu biología que elimina la duda y garantiza tu llegada a la gloria.
</p>

    {/* CONTENEDOR DEL BOTÓN + CONTADOR */}
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={() => abrirModal('Hero Action')} 
        className="bg-[#00E5FF] text-black text-2xl font-black py-7 px-20 rounded-sm shadow-[0_0_60px_rgba(0,229,255,0.4)] hover:scale-105 transition-all uppercase italic tracking-tighter"
      >
        INICIAR MI transformación — $199
      </button>
      
      {/* EL CONTADOR DE CUPOS */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        <p className="text-[#00E5FF] text-xs md:text-sm font-black uppercase tracking-[0.2em] italic">
          Solo quedan <span className="text-white">3 cupos</span> disponibles para esta semana
        </p>
      </div>
    </div>

  </div>
</section>

      {/* 3. SECCIÓN DE EVIDENCIA (Hormozi: Effort & Sacrifice reduction) */}
      <section className="py-24 bg-zinc-900/10 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none text-balance">Cero fatiga mental. Solo entrena.</h2>
                    <p className="text-zinc-400 text-lg italic mb-8">
                        La mayoría falla porque no sabe qué hacer al llegar al gym. Kinetic elimina el sacrificio de pensar. Abrir la app es recibir tu mapa de victoria del día.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-[#00E5FF] font-black uppercase text-xs tracking-widest">
                            <span className="material-symbols-outlined text-lg">check_circle</span> Plan 100% privado (Adiós a la vergüenza)
                        </li>
                        <li className="flex items-center gap-3 text-[#00E5FF] font-black uppercase text-xs tracking-widest">
                            <span className="material-symbols-outlined text-lg">check_circle</span> Optimización de tiempo para gente ocupada
                        </li>
                    </ul>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-[#00E5FF]/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition"></div>
                    <img 
                        src="/img1.png" 
                        alt="Kinetic App Interface" 
                        className="relative rounded-lg border border-white/10 shadow-2xl"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* 4. TESTIMONIOS */}
      <section className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-20 uppercase italic tracking-tighter text-center">Resultados, no promesas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "Andrés G.", t: "Pasé de tener miedo de entrar al área de pesas a dominar mis marcas. La app me dio el plan que ningún 'coach' de gimnasio supo darme.", g: "Transformación Real" },
              { n: "Sofía R.", t: "Lo que más valoro es la privacidad y la claridad. No tengo que preguntar nada a nadie, Kinetic me dice exactamente cómo progresar.", g: "Transformación Real" },
              { n: "Marcos V.", t: "Ser padre y trabajar no me dejaba tiempo. Con el plan de 30 min de Kinetic, bajé 10kg de grasa sin descuidar mi negocio.", g: "Transformación Real" }
            ].map((test, i) => (
              <div key={i} className="bg-zinc-900/20 p-10 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#00E5FF] mb-6">
                    {[...Array(5)].map((_, s) => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
                  </div>
                  <p className="text-zinc-400 italic mb-8 leading-relaxed font-medium">"{test.t}"</p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <p className="text-white font-black uppercase text-xs italic tracking-widest">{test.n}</p>
                  <p className="text-[#00E5FF] text-[9px] font-black uppercase tracking-[0.3em]">{test.g}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE DETALLE */}
      <section className="py-32 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                <div className="relative w-full lg:w-1/2">
                    <img 
                        src="/img2.png" 
                        alt="Kinetic Training Plan" 
                        className="rounded-lg border border-white/10 shadow-2xl"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-left">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.9]">El Blueprint de tu nueva versión.</h2>
                    <p className="text-zinc-500 text-lg italic mb-10">
                        Cada repetición cuenta. No pierdas más meses en rutinas que no te llevan a ningún lado. Accede a la metodología que usan los que sí obtienen resultados.
                    </p>
                    <button onClick={() => abrirModal('Mid Page Action')} className="text-[#00E5FF] font-black uppercase italic border-b-2 border-[#00E5FF] pb-2 hover:text-white hover:border-white transition-all text-sm tracking-widest">
                        RECLAMAR MI ANÁLISIS PERSONALIZADO
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* 6. MURO DE COMPROMISO (Hormozi: Scarcity + Anti-sell) */}
      <section className="py-40 px-6 bg-[#00E5FF] text-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-[7rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-12 text-center">
            FILTRO DE <br/> ADMISIÓN.
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-tight">
                No somos una app de suscripción masiva. Somos un servicio de alta precisión.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                Aceptamos solo a 10 personas por semana porque cada protocolo es verificado manualmente. Si no estás dispuesto a seguir el plan al 100%, deja el cupo para alguien que sí lo esté. Buscamos casos de éxito, no usuarios pasivos.
            </p>
          </div>
          <button onClick={() => abrirModal('Commitment Section')} className="mt-16 bg-black text-[#00E5FF] text-2xl font-black py-8 px-16 rounded-sm shadow-2xl hover:scale-110 transition-all uppercase italic">
            APLICAR AHORA
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-zinc-800 py-20 px-6 text-center text-[10px] font-black uppercase tracking-[0.8em] border-t border-white/5">
        © 2026 KINETIC BODY ARCHITECTURE — EXCLUSIVE TRANSFORMATION SYSTEM
      </footer>

      {/* MODAL (Hormozi: Qualification process) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={cerrarModal}></div>
          <div className="relative bg-zinc-900 rounded-sm shadow-2xl w-full max-w-lg p-10 border border-[#00E5FF]/20 overflow-y-auto max-h-[90vh]">
            <button onClick={cerrarModal} className="absolute top-4 right-4 text-zinc-500 hover:text-white"><span className="material-symbols-outlined">close</span></button>

            {status === 'success' ? (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-7xl text-[#00E5FF] mb-8 animate-pulse">check_circle</span>
                <h3 className="text-3xl font-black text-white uppercase italic mb-6">Aplicación Recibida</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 italic">Estamos analizando tu perfil. Si cumples con los requisitos para uno de los 10 cupos, te contactaremos por WhatsApp en las próximas 24 horas para finalizar tu ingreso al sistema.</p>
                <button onClick={cerrarModal} className="bg-[#00E5FF] text-black px-10 py-4 font-black uppercase text-xs tracking-[0.2em] italic">Entendido</button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-black text-white mb-2 text-center uppercase italic tracking-tighter">Cuestionario de Cualificación</h3>
                <p className="text-zinc-500 text-[10px] text-center mb-10 uppercase font-black tracking-widest italic">Paso obligatorio para acceder a los 10 cupos semanales</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="Nombre Completo" className="bg-black border border-zinc-800 p-5 text-xs text-white focus:border-[#00E5FF] outline-none italic" onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
                    <input required type="tel" placeholder="WhatsApp (Para confirmación)" className="bg-black border border-zinc-800 p-5 text-xs text-white focus:border-[#00E5FF] outline-none italic" onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                  </div>
                  <input required type="email" placeholder="Correo Electrónico" className="w-full bg-black border border-zinc-800 p-5 text-xs text-white focus:border-[#00E5FF] outline-none italic" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <select required className="bg-black border border-zinc-800 p-5 text-zinc-500 focus:border-[#00E5FF] outline-none appearance-none italic" onChange={(e) => setFormData({...formData, frecuencia: e.target.value})}>
                      <option value="">¿Cuántos días entrenarás?</option>
                      <option value="3">3 días (Mínimo)</option>
                      <option value="4">4 días</option>
                      <option value="5+">5 o más</option>
                    </select>
                    <select required className="bg-black border border-zinc-800 p-5 text-zinc-500 focus:border-[#00E5FF] outline-none appearance-none italic" onChange={(e) => setFormData({...formData, lugar: e.target.value})}>
                      <option value="gym">En el Gimnasio</option>
                      <option value="casa">En Casa</option>
                    </select>
                  </div>

                  <div className="bg-black/50 p-6 border border-[#00E5FF]/10">
                    <label className="block text-[10px] font-black text-[#00E5FF] uppercase mb-4 italic">¿Qué tan comprometido estás del 1 al 10?</label>
                    <textarea required placeholder="Explica por qué debemos elegirte a ti por encima de otros candidatos..." className="w-full bg-black border border-zinc-800 p-5 text-xs text-white h-32 outline-none focus:border-[#00E5FF] italic" onChange={(e) => setFormData({...formData, compromiso: e.target.value})} />
                  </div>
                  
                  <button type="submit" disabled={status === 'loading'} className="w-full bg-[#00E5FF] text-black font-black py-6 rounded-sm shadow-xl hover:bg-white transition-all uppercase tracking-[0.3em] italic disabled:opacity-50">
                    {status === 'loading' ? 'Verificando Disponibilidad...' : 'Enviar mi Aplicación'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}