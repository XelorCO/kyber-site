'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export default function EntrepriseClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ firstName: '', lastName: '', company: '', email: '', teamSize: '1-10', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── HERO ── */}
          <section className="py-16 text-center">
            <div className="inline-flex items-center gap-2 border border-blue-800 bg-blue-950/50 text-blue-300 px-4 py-1.5 rounded-full text-sm mb-6 font-medium">
              Solution équipe &amp; entreprise
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100">
              Kyber pour votre organisation
            </h1>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
              Déployez un gestionnaire de mots de passe post-quantique 100% local dans votre équipe.
              Aucune donnée sur un serveur tiers. Conformité RGPD native. Tarifs dégressifs.
            </p>
          </section>

          {/* ── GRILLE TARIFAIRE ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-stone-100">Tarifs indicatifs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Pro individuel',
                  price: '29 €',
                  sub: 'paiement unique / licence à vie',
                  features: ['1 utilisateur', 'Mots de passe illimités', 'Export CSV', 'Mises à jour à vie', 'Support email'],
                  cta: 'Acheter',
                  href: '/#pricing',
                  highlight: false,
                },
                {
                  name: 'Équipe',
                  price: '19 €',
                  sub: 'par utilisateur / an, minimum 5 postes',
                  features: ['Abonnement annuel sans engagement', 'Multi-utilisateurs', 'Tarifs dégressifs dès 20 postes', 'Support prioritaire', 'Facturation entreprise (TVA, bon de commande)'],
                  cta: 'Nous contacter',
                  href: '#contact',
                  highlight: true,
                },
                {
                  name: 'Entreprise',
                  price: 'Sur devis',
                  sub: 'contrat cadre',
                  features: ['Licences illimitées', 'Intégration AD / LDAP (roadmap)', 'SLA & contrat', 'Formation incluse', 'Déploiement assisté'],
                  cta: 'Prendre RDV',
                  href: '#contact',
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-7 flex flex-col ${plan.highlight ? 'bg-gradient-to-b from-blue-950/40 to-indigo-950/40 border-2 border-blue-700 shadow-md relative' : 'bg-[#151922] border border-stone-700 shadow-sm'}`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                      Le plus choisi
                    </div>
                  )}
                  <div className="mb-5">
                    <div className="text-sm font-medium text-stone-400 mb-1">{plan.name}</div>
                    <div className="text-2xl font-bold text-stone-100">{plan.price}</div>
                    <div className="text-xs text-stone-500 mt-0.5">{plan.sub}</div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-stone-300">
                        <span className="text-green-400 flex-shrink-0 text-xs">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.href}
                    className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${plan.highlight ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90' : 'border border-stone-700 hover:border-stone-700 text-stone-300 hover:bg-stone-900'}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-stone-500 mt-4">
              Tarifs définitifs communiqués sur devis selon le volume et la durée du contrat.
            </p>
          </section>

          {/* ── ARGUMENTS B2B ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-stone-100">Pourquoi les équipes choisissent Kyber</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '◆',
                  title: 'Zéro serveur centralisé',
                  desc: "Chaque collaborateur stocke son coffre en local. Aucune base de données d'identifiants à cibler / la surface d'attaque est éliminée.",
                  color: 'bg-blue-950/50 border-blue-700',
                },
                {
                  icon: 'FR',
                  title: 'RGPD & souveraineté numérique',
                  desc: "Aucune donnée ne quitte le territoire de l'entreprise. Conformité RGPD native / pas de DPA à négocier avec un fournisseur cloud américain.",
                  color: 'bg-green-950/50 border-green-800',
                },
                {
                  icon: '✦',
                  title: "Post-quantique dès aujourd'hui",
                  desc: "Standard NIST FIPS 203 (ML-KEM-1024). Vos mots de passe sont protégés contre les attaques harvest-now-decrypt-later / même sans ordinateur quantique actuel.",
                  color: 'bg-indigo-950/50 border-indigo-700',
                },
                {
                  icon: '⧉',
                  title: 'En route vers la certification ANSSI',
                  desc: "Démarche CSPN en cours d'initiation. Le bon choix pour anticiper les exigences des marchés publics et des OIV.",
                  color: 'bg-amber-950/50 border-amber-800',
                },
                {
                  icon: '▲',
                  title: 'Déploiement sans infrastructure',
                  desc: "Chaque poste s'installe indépendamment en quelques minutes / aucun serveur de gestion / aucun VPN requis.",
                  color: 'bg-purple-950/50 border-purple-800',
                },
                {
                  icon: '⬡',
                  title: 'Activation hors-ligne',
                  desc: "Les licences sont activées localement par signature cryptographique Ed25519 / aucune connexion à un serveur de licences requise.",
                  color: 'bg-indigo-950/50 border-indigo-800',
                },
                {
                  icon: '▤',
                  title: 'Chiffrement de fichiers inclus',
                  desc: "Chiffrez vos documents confidentiels au format .kyber / accessibles uniquement avec la passphrase du coffre de chaque utilisateur.",
                  color: 'bg-amber-950/50 border-amber-800',
                },
                {
                  icon: '▥',
                  title: 'Analyse de sécurité intégrée',
                  desc: "Tableau de bord des mots de passe faibles / réutilisés / ou anciens. Chaque utilisateur visualise le niveau de risque de son coffre.",
                  color: 'bg-teal-50 border-teal-300',
                },
                {
                  icon: '↻',
                  title: 'Mises à jour perpétuelles',
                  desc: "Votre licence inclut toutes les mises à jour de la branche v1.x / pas d'abonnement annuel / pas de surprise sur la facture.",
                  color: 'bg-violet-950/50 border-violet-800',
                },
              ].map((a) => (
                <div key={a.title} className={`${a.color} border rounded-xl p-5`}>
                  <div className="text-2xl mb-3">{a.icon}</div>
                  <h3 className="font-semibold text-stone-100 mb-2">{a.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section id="contact" className="scroll-mt-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3 text-stone-100">Discutons de votre projet</h2>
              <p className="text-stone-400 text-sm max-w-lg mx-auto leading-relaxed">
                Décrivez votre besoin et votre équipe. On vous répond sous 24h avec une proposition adaptée.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:contact@kyber-security.fr?subject=Kyber Enterprise / demande de devis"
                className="flex items-center justify-center gap-2 border border-stone-700 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-xl text-sm font-medium text-stone-300 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                contact@kyber-security.fr
              </a>
            </div>

            {status === 'sent' ? (
              <div className="bg-green-950/50 border border-green-800 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-semibold text-xl mb-2 text-stone-100">Message envoyé !</h3>
                <p className="text-stone-400">Nous vous répondrons dans les 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#151922] border border-stone-700 rounded-2xl p-8 space-y-4 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-stone-400 mb-1.5 block">Prénom *</label>
                    <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-100" />
                  </div>
                  <div>
                    <label className="text-sm text-stone-400 mb-1.5 block">Nom *</label>
                    <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-100" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-stone-400 mb-1.5 block">Société *</label>
                  <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-100" />
                </div>
                <div>
                  <label className="text-sm text-stone-400 mb-1.5 block">Email professionnel *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-100" />
                </div>
                <div>
                  <label className="text-sm text-stone-400 mb-1.5 block">Taille de l&apos;équipe</label>
                  <select value={form.teamSize} onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-100">
                    <option value="1-10">1 / 10 personnes</option>
                    <option value="11-50">11 / 50 personnes</option>
                    <option value="51-200">51 / 200 personnes</option>
                    <option value="200+">200+ personnes</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-stone-400 mb-1.5 block">Votre besoin</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre contexte, vos contraintes de conformité, vos questions sur les licences…"
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none text-stone-100 placeholder:text-stone-500" />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 disabled:opacity-50 py-3.5 rounded-xl text-sm font-semibold transition-all text-white">
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Erreur lors de l&apos;envoi. Contactez-nous directement à contact@kyber-security.fr</p>
                )}
              </form>
            )}
          </section>

          {/* ── FAQ ── */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-stone-100">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Comment fonctionne le déploiement dans une équipe ?',
                  a: "Chaque collaborateur installe Kyber sur son poste. Il crée son propre coffre protégé par sa passphrase personnelle. La licence est activée depuis l'application en entrant la clé reçue par email. Aucune infrastructure centralisée requise.",
                },
                {
                  q: 'Peut-on partager des mots de passe entre collègues ?',
                  a: "Le partage de coffre chiffré entre utilisateurs est sur la roadmap (T4 2026 / 2027). En attendant, l'export CSV chiffré permet un transfert ponctuel. Contactez-nous pour les besoins urgents.",
                },
                {
                  q: "Kyber est-il compatible avec les politiques de sécurité d'entreprise ?",
                  a: "Oui. Kyber ne crée aucune connexion sortante et ne requiert aucun compte en ligne. Il s'installe comme un logiciel standard et respecte les politiques de pare-feu et antivirus. Aucune donnée n'est transmise à l'extérieur.",
                },
                {
                  q: 'Quelle est votre politique de mise à jour ?',
                  a: "Les licences Pro incluent toutes les mises à jour de la branche v1.x. Les nouvelles fonctionnalités majeures sont déployées progressivement. Pas d'abonnement caché / vous payez une fois.",
                },
                {
                  q: 'Proposez-vous une facturation entreprise (bon de commande, TVA) ?',
                  a: "Oui, pour les commandes d'au moins 5 licences, nous émettons une facture avec TVA et pouvons accepter les bons de commande. Contactez-nous via le formulaire ci-dessus.",
                },
              ].map((faq) => (
                <details key={faq.q} className="bg-[#151922] border border-stone-800 rounded-xl px-6 py-4 shadow-sm group">
                  <summary className="font-medium text-stone-100 cursor-pointer list-none flex items-center justify-between gap-3 text-sm">
                    {faq.q}
                    <span className="text-stone-500 group-open:rotate-180 transition-transform text-lg flex-shrink-0">↓</span>
                  </summary>
                  <p className="mt-3 text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA FINAL ── */}
          <section className="mt-16 text-center">
            <p className="text-stone-400 text-sm mb-4">Vous préférez tester avant de commander ?</p>
            <Link
              href="/telechargement"
              className="inline-block border border-stone-700 hover:border-stone-700 px-6 py-3 rounded-xl font-medium text-sm text-stone-300 transition-all"
            >
              Télécharger Kyber gratuitement →
            </Link>
          </section>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
