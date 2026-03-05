"use client";
import React, { useState } from 'react';

export default function KineticLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirModal = () => setIsModalOpen(true);
  const cerrarModal = () => setIsModalOpen(false);

  return (
    <main className="relative overflow-x-hidden bg-[#050505] text-white font-sans selection:bg-[#00E5FF] selection:text-black">
      
      {/* 1. BARRA DE ESTADO DEL PROYECTO */}
      <div className="bg-[#00E5FF] text-black text-[10px] md:text-xs font-black py-3 px-4 text-center sticky top-0 z-50 uppercase tracking-[0.2em]">
        PROYECTO KINETIC: DÍA 0 / 180 — FASE DE RECLUTAMIENTO ACTIVA
      </div>

      {/* HEADER */}
      <header className="flex items-center justify-between bg-black/80 backdrop-blur-xl px-6 md:px-12 py-6 border-b border-white/5 sticky top-[40px] z-40">
        <div className="leading-none text-left">
          <h2 className="text-[#00E5FF] text-2xl font-black tracking-tighter uppercase italic">Kinetic</h2>
          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.4em]">Breaking Inertia</p>
        </div>
        <button onClick={abrirModal} className="bg-white text-black px-8 py-2 text-[10px] font-black hover:bg-[#00E5FF] transition-all uppercase italic">
          Unirse al Grupo
        </button>
      </header>

      {/* 2. HERO: EL MANIFIESTO */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#00E5FF 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}></div>
        <div className="relative z-20 container mx-auto px-6 text-center max-w-6xl">
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] lg:text-[9rem] font-black leading-[0.85] mb-10 uppercase italic tracking-tighter">
            ROMPER LA <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00E5FF' }}>INERCIA.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-16 text-zinc-400 max-w-3xl mx-auto leading-tight italic">
            Como desarrollador, creé el sistema para que miles entrenen... mientras yo perdía mi salud en un escritorio. <br/>
            <span className="text-white font-bold text-2xl md:text-4xl block mt-4 uppercase">180 días para recuperar el movimiento.</span>
          </p>
          <button 
            onClick={abrirModal} 
            className="bg-[#00E5FF] text-black text-xl md:text-2xl font-black py-8 px-16 rounded-sm shadow-[0_0_80px_rgba(0,229,255,0.3)] hover:scale-105 transition-all uppercase italic tracking-tighter"
          >
            ACCEDER A LA COMUNIDAD — GRATIS
          </button>
        </div>
      </section>

      {/* 3. SECCIÓN DE LA HISTORIA */}
      <section className="py-24 bg-zinc-900/10 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">Del código al origen.</h2>
                    <p className="text-zinc-400 text-lg italic mb-8 leading-relaxed">
                        Cambié las rutas en bici por líneas de código. Durante años, mi éxito profesional fue proporcional a mi descuido personal. Gané 30kg, perdí mi esencia, pero conservé la tecnología.
                    </p>
                    <p className="text-[#00E5FF] font-black uppercase text-xs tracking-[0.3em] border-l-2 border-[#00E5FF] pl-6 py-2 italic">
                        Usaré mi propia App para salvar mi vida.
                    </p>
                </div>
                <div className="relative group aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-transparent"></div>
                    <span className="relative z-10 text-zinc-600 font-black uppercase italic tracking-widest text-xs">Video: Proyecto Kinetic 180</span>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-zinc-800 py-20 px-6 text-center text-[10px] font-black uppercase tracking-[0.8em] border-t border-white/5">
        © 2026 KINETIC — POWERED BY FIT MANAGE APP TECHNOLOGY
      </footer>

      {/* MODAL INFORMATIVO DE ACCESO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={cerrarModal}></div>
          <div className="relative bg-zinc-900 rounded-sm shadow-2xl w-full max-w-lg p-10 border border-[#00E5FF]/20 overflow-y-auto max-h-[90vh]">
            <button onClick={cerrarModal} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="text-center">
              <span className="material-symbols-outlined text-7xl text-[#00E5FF] mb-6 animate-pulse">groups</span>
              <h3 className="text-3xl font-black text-white uppercase italic mb-4 tracking-tighter">Instrucciones de Acceso</h3>
              <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-10 italic">Lee las reglas antes de unirte al equipo</p>
              
              <div className="text-left bg-black/50 p-8 border border-[#00E5FF]/10 mb-10 space-y-6">
                <div className="space-y-2">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest italic text-[#00E5FF]">01. Protocolo de entrada</p>
                  <p className="text-zinc-400 text-xs italic leading-relaxed">Al entrar, solicita unirte. Un administrador validará tu perfil manualmente para asegurar que somos personas reales buscando un cambio real.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest italic text-[#00E5FF]">02. Reglas de la comunidad</p>
                  <p className="text-zinc-400 text-xs italic leading-relaxed">Cero spam, respeto absoluto y participación activa. Este es un espacio de trabajo personal, no un chat de ocio.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest italic text-[#00E5FF]">03. El Compromiso</p>
                  <p className="text-zinc-400 text-xs italic leading-relaxed">Entrar significa que estás listo para romper la inercia. Compartiremos el proceso, las fallas y las victorias.</p>
                </div>
              </div>

              <a 
                href="https://chat.whatsapp.com/LLrLMfypv0k2xLxK1Xf9Ox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-4 bg-[#00E5FF] text-black font-black py-7 rounded-sm shadow-[0_0_40px_rgba(0,229,255,0.2)] hover:bg-white hover:scale-[1.02] transition-all uppercase tracking-[0.2em] italic"
              >
                ENTRAR AL GRUPO DE WHATSAPP
              </a>
              
              <p className="mt-6 text-[9px] text-zinc-600 font-bold uppercase tracking-widest italic">
                Paso final para iniciar tu transformación
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}