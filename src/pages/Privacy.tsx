import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('privacy.title')}
            </h1>
          </div>

          <p className="text-gray-400 text-sm mb-12">Laatste update: 16/03/2026</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Identiteit van de verwerkingsverantwoordelijke</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dit privacybeleid beschrijft hoe <strong>Neuritas-AI</strong> persoonsgegevens verwerkt en beschermt.
              </p>
              <div className="text-gray-300 leading-relaxed mb-4">
                <p className="mb-2"><strong>Neuritas-AI</strong></p>
                <p>Besloten vennootschap met beperkte aansprakelijkheid</p>
                <p>Maatschappelijke zetel: Groeneweg 53, 2400 Mol</p>
                <p>Ondernemingsnummer: 1035.569.723</p>
                <p>E-mail: chat@neuritas-ai.com</p>
                <p>Website: <a href="https://www.neuritas-ai.com/" className="text-cyan-400 hover:text-cyan-300">https://www.neuritas-ai.com/</a></p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                (hierna: <strong>"Neuritas-AI"</strong>)
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Neuritas-AI treedt op als verwerkingsverantwoordelijke overeenkomstig de <strong>Algemene Verordening Gegevensbescherming (GDPR)</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Engagement inzake gegevensbescherming</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI hecht groot belang aan een zorgvuldige en veilige verwerking van persoonsgegevens.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">Bij de verwerking van gegevens streeft Neuritas-AI ernaar om:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>persoonsgegevens enkel te verwerken voor duidelijke en rechtmatige doeleinden;</li>
                <li>niet meer gegevens te verzamelen dan noodzakelijk;</li>
                <li>gegevens correct en actueel te houden;</li>
                <li>passende beveiligingsmaatregelen toe te passen;</li>
                <li>ongeautoriseerde toegang of verlies van gegevens te voorkomen;</li>
                <li>transparant te communiceren over gegevensverwerking.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Deze principes worden toegepast gedurende de volledige levenscyclus van persoonsgegevens.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Toepassingsgebied</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Dit privacybeleid is van toepassing op persoonsgegevens verwerkt in het kader van:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>het gebruik van de website;</li>
                <li>aanvragen via contactformulieren;</li>
                <li>klant- en prospectrelaties;</li>
                <li>uitvoering van overeenkomsten;</li>
                <li>levering van AI-consultancy, software en digitale diensten;</li>
                <li>communicatie met zakelijke contacten.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Wanneer Neuritas-AI persoonsgegevens verwerkt in opdracht van een klant, gebeurt dit als <strong>verwerker</strong> en gelden afzonderlijke contractuele afspraken.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Welke persoonsgegevens worden verwerkt</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Afhankelijk van de samenwerking kan Neuritas-AI volgende persoonsgegevens verwerken:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Identificatie- en contactgegevens</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>naam en voornaam;</li>
                <li>bedrijfsnaam;</li>
                <li>e-mailadres;</li>
                <li>telefoonnummer;</li>
                <li>facturatiegegevens.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Professionele en communicatiegegevens</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>correspondentie;</li>
                <li>projectinformatie;</li>
                <li>contractuele gegevens.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Technische gegevens</h3>
              <p className="text-gray-300 leading-relaxed mb-2">Bij gebruik van de website of digitale diensten:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>IP-adres;</li>
                <li>browser- en apparaat informatie;</li>
                <li>log- en gebruiksgegevens.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Gegevens verwerkt binnen AI-systemen</h3>
              <p className="text-gray-300 leading-relaxed mb-2">Bij gebruik van AI-oplossingen kunnen gegevens verwerkt worden die door de klant of gebruiker worden aangeleverd, zoals:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>tekstinvoer of prompts;</li>
                <li>documenten of datasets;</li>
                <li>gegenereerde output.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                De gebruiker blijft verantwoordelijk voor de inhoud van aangeleverde gegevens.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Doeleinden van verwerking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Neuritas-AI verwerkt persoonsgegevens voor:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>uitvoering en beheer van overeenkomsten;</li>
                <li>levering en ondersteuning van diensten;</li>
                <li>communicatie met klanten en prospecten;</li>
                <li>administratie en facturatie;</li>
                <li>naleving van wettelijke verplichtingen;</li>
                <li>beveiliging en optimalisatie van systemen;</li>
                <li>verbetering van diensten en technologie;</li>
                <li>het informeren over gelijkaardige diensten of updates, tenzij hiertegen bezwaar wordt gemaakt.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Rechtsgrond van verwerking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Persoonsgegevens worden verwerkt op basis van:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>uitvoering van een overeenkomst;</li>
                <li>wettelijke verplichtingen;</li>
                <li>gerechtvaardigd belang van Neuritas-AI;</li>
                <li>toestemming wanneer vereist.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Indien verwerking gebaseerd is op toestemming, kan deze steeds worden ingetrokken.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Delen van persoonsgegevens</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI kan persoonsgegevens delen met derden voor zover noodzakelijk voor haar dienstverlening, zoals:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>cloud- en hostingproviders;</li>
                <li>AI- en softwareleveranciers;</li>
                <li>IT-dienstverleners;</li>
                <li>professionele adviseurs;</li>
                <li>bevoegde overheidsinstanties.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Deze partijen verwerken gegevens uitsluitend binnen het kader van contractuele en wettelijke verplichtingen.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Persoonsgegevens worden nooit verkocht aan derden.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. Internationale gegevensoverdracht</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In het kader van digitale en cloudgebaseerde dienstverlening kunnen persoonsgegevens buiten de Europese Economische Ruimte worden verwerkt.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In dat geval zorgt Neuritas-AI voor passende beschermingsmaatregelen conform de GDPR, zoals Standard Contractual Clauses of gelijkwaardige waarborgen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. Bewaartermijnen</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor zij werden verzameld.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Gegevens die verband houden met contractuele of wettelijke verplichtingen kunnen worden bewaard gedurende maximaal <strong>10 jaar</strong> na beëindiging van de samenwerking.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Beveiliging van persoonsgegevens</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI neemt redelijke technische en organisatorische maatregelen om persoonsgegevens te beschermen, waaronder:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>toegangsbeperkingen;</li>
                <li>beveiligde IT-infrastructuur;</li>
                <li>monitoring en logging;</li>
                <li>vertrouwelijkheidsverplichtingen voor medewerkers en partners.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Rechten van betrokkenen</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Iedere betrokkene beschikt over volgende rechten:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>recht op inzage;</li>
                <li>recht op verbetering;</li>
                <li>recht op verwijdering;</li>
                <li>recht op beperking van verwerking;</li>
                <li>recht op overdraagbaarheid;</li>
                <li>recht van bezwaar tegen verwerking;</li>
                <li>recht om toestemming in te trekken.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">Verzoeken kunnen worden gericht aan:</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                📧 <a href="mailto:chat@neuritas-ai.com" className="text-cyan-400 hover:text-cyan-300">chat@neuritas-ai.com</a>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Neuritas-AI behandelt verzoeken binnen een redelijke termijn en uiterlijk binnen 30 dagen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                De website van Neuritas-AI kan gebruik maken van cookies om functionaliteit, veiligheid en gebruikerservaring te verbeteren.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Voor niet-noodzakelijke cookies wordt toestemming gevraagd via een cookiebanner.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">13. Klachten</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Indien u meent dat uw persoonsgegevens onrechtmatig worden verwerkt, kan u een klacht indienen bij:
              </p>
              <div className="text-gray-300 leading-relaxed">
                <p className="font-semibold mb-2">Gegevensbeschermingsautoriteit (GBA)</p>
                <p>Drukpersstraat 35</p>
                <p>1000 Brussel</p>
                <p><a href="https://www.gegevensbeschermingsautoriteit.be" className="text-cyan-400 hover:text-cyan-300">https://www.gegevensbeschermingsautoriteit.be</a></p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">14. Wijzigingen aan dit privacybeleid</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI behoudt zich het recht voor dit privacybeleid te wijzigen.
              </p>
              <p className="text-gray-300 leading-relaxed">
                De meest recente versie is steeds beschikbaar via de website en treedt in werking vanaf publicatie.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
