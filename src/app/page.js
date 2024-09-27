"use client"; // Adicione isso no início do arquivo

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  // Animação ao carregar a página
  useEffect(() => {
    const page = document.querySelector(`.${styles.page}`);
    page.style.opacity = 1;
  }, []);

  return (
    <div className={styles.page}>
      {/* Seção de Introdução */}
      <main className={styles.main}>
        <h1 className={styles.title}>Jonathan França - Desenvolvedor de Bots & Web</h1>
        <p className={styles.description}>
          Sou desenvolvedor especializado em automações para WhatsApp e criação de websites. Confira alguns dos meus projetos abaixo.
        </p>

        {/* Seção de Hard Skills */}
        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>Hard Skills</h2>
          <ul className={styles.skillList}>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Supabase</li>
            <li>Venom (para automação do WhatsApp)</li>
            <li>HTML5 e CSS3</li>
            <li>Git e GitHub</li>
          </ul>
        </section>

        {/* Seção de Projetos */}
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <div className={styles.projectList}>
            <div className={styles.projectCard}>
              <h3>Bot para WhatsApp</h3>
              <p>Automação de atendimento via WhatsApp usando Venom e Node.js.</p>
              <a
                href="https://github.com/seu-github/projeto1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Ver no GitHub
              </a>
            </div>
            <div className={styles.projectCard}>
              <h3>Painel de Controle</h3>
              <p>Painel de controle com autenticação usando Supabase e Next.js.</p>
              <a
                href="https://github.com/seu-github/projeto2"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Entre em contato</h2>
          <p>Se você quiser discutir um projeto ou colaboração, entre em contato por:</p>
          <ul>
            <li>Email: <a href="mailto:Jonathanribeiro809@gmail.com">Jonathanribeiro809@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/JhowWatkins" target="_blank" rel="noopener noreferrer">Meu GitHub</a></li>
            <li>WhatsApp: <a href="https://wa.me/5521989845493" target="_blank" rel="noopener noreferrer">Enviar mensagem</a></li>
          </ul>
        </section>
      </main>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>© 2024 Jonathan França. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
