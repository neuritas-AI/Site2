import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="Terms of Service | Neuritas-AI" description="Terms of service for Neuritas-AI solutions." url="/terms" />
      <main className="min-h-screen bg-black text-white pt-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('terms.title')}
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 1 – Identiteit van de onderneming</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Deze algemene voorwaarden zijn van toepassing op alle offertes opgesteld door en overeenkomsten aangegaan door:
              </p>
              <p className="text-gray-300 leading-relaxed mb-2">
                <strong>Neuritas-AI</strong>, Besloten vennootschap met beperkte aansprakelijkheid,<br />
                met maatschappelijke zetel te 2400 Mol, Groeneweg 53<br />
                ingeschreven in de Kruispuntbank van Ondernemingen onder het nummer 1035.569.723
              </p>
              <p className="text-gray-300 leading-relaxed">
                Website: <a href="https://www.neuritas-ai.com/" className="text-cyan-400 hover:text-cyan-300">https://www.neuritas-ai.com/</a>
              </p>
              <p className="text-gray-300 leading-relaxed">
                (hierna: <strong>"Neuritas-AI"</strong>).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 2 – Toepasselijkheid</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten, leveringen en diensten van Neuritas-AI.</li>
                <li>De Klant ontvangt deze algemene voorwaarden bij de offerte, als bijlage bij de overeenkomst en, specifiek wat de betalingsmodaliteiten betreft, bij de facturen van Neuritas-AI.</li>
                <li>Door instemming met de offerte of van zodra Neuritas-AI enige dienstverlening verricht in het voordeel van de Klant, erkent de Klant kennis genomen te hebben van en in te stemmen met deze algemene voorwaarden.</li>
                <li>De (impliciete) aanvaarding van een factuur van Neuritas-AI door de Klant houdt een onweerlegbaar vermoeden in van aanvaarding van deze algemene voorwaarden.</li>
                <li>Eventuele aankoop- of andere voorwaarden van de Klant zijn niet van toepassing, tenzij deze voorafgaand en schriftelijk door Neuritas-AI werden aanvaard.</li>
                <li>Deze algemene voorwaarden zijn geldig voor alle klanten, leveranciers en derden (hierna: de <strong>"Klant"</strong>) die handelen met of diensten afnemen van Neuritas-AI.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 3 – Diensten</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Neuritas-AI biedt onder meer:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>AI-consultancy en strategisch advies</li>
                <li>ontwikkeling van AI-software en automatiseringen</li>
                <li>implementatie van AI-oplossingen</li>
                <li>data-analyse en machine learning toepassingen</li>
                <li>training, workshops en ondersteuning</li>
                <li>digitale en cloudgebaseerde AI-diensten (SaaS)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                De exacte scope van de dienstverlening wordt bepaald in een afzonderlijke overeenkomst of offerte.
              </p>
              <p className="text-gray-300 leading-relaxed">
                De verbintenissen van Neuritas-AI betreffen steeds <strong>inspanningsverbintenissen</strong>, tenzij uitdrukkelijk schriftelijk anders overeengekomen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 4 – Offertes en overeenkomsten</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Offertes zijn vrijblijvend tenzij anders vermeld.</li>
                <li>Offertes opgesteld door Neuritas-AI zijn geldig gedurende 30 dagen en vervallen nadien automatisch.</li>
                <li>Een overeenkomst komt tot stand door:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>schriftelijke of digitale aanvaarding van de offerte;</li>
                    <li>elke andere bevestiging door de Klant; of</li>
                    <li>het verzoek tot aanvang van de werkzaamheden.</li>
                  </ul>
                </li>
                <li>Alle prijzen zijn exclusief BTW tenzij anders vermeld.</li>
                <li>Offertes gelden niet automatisch voor toekomstige opdrachten.</li>
                <li>Uitvoeringstermijnen zijn indicatief en overschrijding ervan geeft geen recht op schadevergoeding of ontbinding.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 5 – Verplichtingen van de Klant</h2>
              <p className="text-gray-300 leading-relaxed mb-4">De Klant verbindt zich ertoe:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>correcte en volledige informatie aan te leveren;</li>
                <li>tijdig feedback en goedkeuring te geven;</li>
                <li>noodzakelijke toegang tot systemen, software of data te voorzien;</li>
                <li>de diensten enkel wettelijk en ethisch te gebruiken.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                De Klant blijft verantwoordelijk voor de juistheid van aangeleverde gegevens en voor het gebruik van de geleverde oplossingen.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Gebrekkige of laattijdige medewerking kan aanleiding geven tot termijnverlenging en/of bijkomende kosten.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 6 – Gebruik van AI-systemen</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>AI-output wordt gegenereerd op basis van probabilistische modellen.</li>
                <li>Neuritas-AI garandeert geen foutloze, volledige of continue werking van AI-systemen.</li>
                <li>De Klant blijft uitsluitend verantwoordelijk voor:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>validatie van gegenereerde output;</li>
                    <li>beslissingen gebaseerd op AI-resultaten;</li>
                    <li>naleving van toepasselijke wetgeving.</li>
                  </ul>
                </li>
              </ol>
              <p className="text-gray-300 leading-relaxed mt-4">
                AI-resultaten vormen geen juridisch, financieel, medisch of professioneel advies tenzij uitdrukkelijk overeengekomen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 7 – Beroep op derden</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI kan voor de uitvoering van haar diensten beroep doen op derden, waaronder cloud-, software- of AI-platformleveranciers.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">Neuritas-AI kan niet aansprakelijk worden gesteld voor:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>fouten,</li>
                <li>onderbrekingen,</li>
                <li>prijswijzigingen,</li>
                <li>of onbeschikbaarheid</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">veroorzaakt door deze externe partijen.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 8 – Intellectuele eigendom</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Alle intellectuele eigendomsrechten verbonden aan door Neuritas-AI ontwikkelde modellen, software, methodologieën, prompts, documentatie en knowhow blijven eigendom van Neuritas-AI.</li>
                <li>De Klant verkrijgt na volledige betaling een niet-exclusief en niet-overdraagbaar gebruiksrecht zoals bepaald in de overeenkomst.</li>
                <li>Door de Klant aangeleverd materiaal blijft eigendom van de Klant, die garandeert over alle nodige rechten te beschikken.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 9 – Vergoeding en betaling</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Facturen zijn betaalbaar binnen 14 dagen na factuurdatum tenzij anders vermeld.</li>
                <li>Facturen dienen, op straffe van verval, binnen acht kalenderdagen na factuurdatum schriftelijk en gemotiveerd te worden betwist.</li>
                <li>Bij niet-betaling op vervaldag is van rechtswege en zonder ingebrekestelling verschuldigd:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>de wettelijke interest overeenkomstig de Wet van 2 augustus 2002 betreffende betalingsachterstand bij handelstransacties;</li>
                    <li>een forfaitaire schadevergoeding van 10% met een minimum van €150.</li>
                  </ul>
                </li>
                <li>Neuritas-AI heeft het recht haar dienstverlening op te schorten bij wanbetaling.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 10 – Aansprakelijkheid</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Neuritas-AI is enkel aansprakelijk voor schade die het rechtstreeks gevolg is van bewezen zware fout of opzet.</li>
                <li>Neuritas-AI is nooit aansprakelijk voor indirecte schade waaronder:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>winstverlies,</li>
                    <li>reputatieschade,</li>
                    <li>dataverlies,</li>
                    <li>bedrijfsonderbreking.</li>
                  </ul>
                </li>
                <li>De totale aansprakelijkheid is beperkt tot het bedrag gelijk aan de facturen van de laatste drie maanden met betrekking tot de betreffende opdracht.</li>
                <li>De Klant vrijwaart Neuritas-AI voor aanspraken van derden voortvloeiend uit het gebruik van de geleverde diensten.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 11 – Vertrouwelijkheid en gegevensbescherming</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Beide partijen verbinden zich ertoe alle vertrouwelijke informatie strikt geheim te houden.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI verwerkt persoonsgegevens conform de toepasselijke GDPR-wetgeving en uitsluitend in het kader van de uitvoering van de overeenkomst.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Indien vereist kan een afzonderlijke Data Processing Agreement worden afgesloten.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 12 – Overmacht</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI is niet aansprakelijk indien uitvoering onmogelijk wordt door omstandigheden buiten haar redelijke controle, waaronder:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>storingen bij cloud- of AI-providers;</li>
                <li>cyberincidenten;</li>
                <li>netwerk- of elektriciteitsstoringen;</li>
                <li>overheidsmaatregelen;</li>
                <li>handelingen van derden.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 13 – Duur en beëindiging</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Overeenkomsten kunnen worden beëindigd overeenkomstig de overeengekomen modaliteiten.</li>
                <li>Reeds uitgevoerde prestaties blijven verschuldigd.</li>
                <li>Neuritas-AI kan dienstverlening onmiddellijk opschorten of beëindigen bij:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>illegaal gebruik;</li>
                    <li>misbruik van systemen;</li>
                    <li>ernstige contractuele tekortkoming;</li>
                    <li>aanhoudende betalingsachterstand.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 14 – Niet-exclusiviteit</h2>
              <p className="text-gray-300 leading-relaxed">
                Tenzij schriftelijk anders overeengekomen staat het Neuritas-AI vrij gelijkaardige diensten te leveren aan andere klanten, inclusief concurrenten van de Klant.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 15 – Nietigheid</h2>
              <p className="text-gray-300 leading-relaxed">
                Indien één bepaling geheel of gedeeltelijk nietig of onafdwingbaar blijkt, blijven de overige bepalingen volledig van kracht.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 16 – Toepasselijk recht en bevoegde rechtbank</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Op alle rechtsverhoudingen is uitsluitend het Belgisch recht van toepassing.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alle geschillen behoren tot de exclusieve bevoegdheid van de rechtbanken van het gerechtelijk arrondissement van de maatschappelijke zetel van Neuritas-AI.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 17 – Wijzigingen</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Neuritas-AI behoudt zich het recht voor deze algemene voorwaarden te wijzigen.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                De meest recente versie is beschikbaar via de website of op eenvoudig verzoek.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Wijzigingen treden in werking 30 dagen na bekendmaking aan de Klant of publicatie op de website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
      </>
  );
}