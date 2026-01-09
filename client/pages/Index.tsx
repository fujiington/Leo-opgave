import { useState } from "react";

export default function Index() {
  const [demoMessage, setDemoMessage] = useState<string>("");

  const handleDemoClick = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = await response.json();
      setDemoMessage(data.message);
    } catch (error) {
      setDemoMessage("Error fetching demo");
    }
  };

  return (
    <div className="min-h-screen bg-leo-gray">
      {/* Navigation */}
      <nav className="w-full bg-leo-gray shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-0">
          <div className="flex items-center justify-between h-[55px]">
            <div className="text-leo-blue font-inter text-xs space-x-4">
              <a href="/" className="hover:underline">Hjem</a>
              <span>|</span>
              <a href="#team" className="hover:underline">Advokaterne</a>
              <span>|</span>
              <a href="#about" className="hover:underline">Om LeoLov</a>
              <span>|</span>
              <a href="#contact" className="hover:underline">Kontakt</a>
            </div>
            <div className="font-jura text-[32px] leading-none">
              <span className="text-leo-blue">Leo</span>
              <span className="text-leo-black">-Lov</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[7px] bg-leo-blue"></div>
      </nav>

      {/* Hero Section */}
      <section className="w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ad279ebb474e08536226ddd1e4e3cdd18f6a652d?width=2747"
          alt="Leo-Lov Law Firm Office"
          className="w-full h-auto object-cover max-h-[742px]"
        />
      </section>

      {/* Service Cards */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-11 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[37px]">
          {/* Card 1: Familieret */}
          <div className="bg-leo-gray rounded-lg shadow-[0_0_6px_1px_rgba(0,0,0,0.25)] p-8 flex flex-col">
            <h3 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              Familieret
            </h3>
            <p className="text-leo-black font-inter text-base">
              Familieret er en ret alle har. Har du en familie har du sikkert
              ret til familieret. Medmindre du altid er den der tror du har ret.
              Så kan vi desværre ikke hjælpe dig.
            </p>
          </div>

          {/* Card 2: Ejendomsret */}
          <div className="bg-leo-gray rounded-lg shadow-[0_0_6px_1px_rgba(0,0,0,0.25)] p-8 flex flex-col">
            <h3 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              Ejendomsret
            </h3>
            <p className="text-leo-black font-inter text-base">
              Har du købt et hus og fortrudt eller er du blevet svindlet?
              Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller
              eventuelt sagsøge vedkommende der solgte dig det.
            </p>
          </div>

          {/* Card 3: Konkurs */}
          <div className="bg-leo-gray rounded-lg shadow-[0_0_6px_1px_rgba(0,0,0,0.25)] p-8 flex flex-col">
            <h3 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              Konkurs
            </h3>
            <p className="text-leo-black font-inter text-base">
              Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi
              desværre ikke. Vi er alle advokater med fede biler her så har du
              ingen penge får du ingen hjælp
            </p>
          </div>

          {/* Card 4: Selskabsret */}
          <div className="bg-leo-gray rounded-lg shadow-[0_0_6px_1px_rgba(0,0,0,0.25)] p-8 flex flex-col">
            <h3 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              Selskabsret
            </h3>
            <p className="text-leo-black font-inter text-base">
              Selskabsret. Ved du heller aldrig hvilken ret du skal servere til
              et stort selskab? Heller ikke os. Heldigvis har vi en mand i
              udlandet der ved en masse om dette så henvend dig i dag.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: INTET PROBLEM */}
      <section id="about" className="max-w-[1280px] mx-auto px-4 lg:px-11 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border-[8px] border-leo-dark-blue bg-leo-gray">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/293d2852d491c97b8f5d71fd6044c20a89aadc50?width=1192"
              alt="Legal consultation"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[530px]"
            />
          </div>
          <div className="border-[8px] border-leo-dark-blue bg-leo-gray p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              INTET PROBLEM
            </h2>
            <p className="text-leo-black font-inter text-base leading-relaxed">
              Leo-lov har altid været det bedste advokatfirma i verden. Der er
              simpelthen ingen der kan måle sig med os. Vi kan løse alle
              problemer så længe du har penge. Hvis du mod alt forventning
              skulle oplevel at støde på et retsligt problem som leo-lov ikke
              kan løse får du halvdelen af beløbet igen.
            </p>
            <p className="text-leo-black font-inter text-base leading-relaxed mt-4">
              Det er sådan vi har skabt en forretning der ikke kan andet end at
              vokse!
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <button 
                onClick={handleDemoClick}
                className="px-4 py-2 rounded-md font-medium text-white bg-leo-blue hover:bg-leo-dark-blue transition-colors"
              >
                Test API Connection
              </button>
              {demoMessage && (
                <p className="text-leo-blue font-inter text-sm">{demoMessage}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: EVIG GARANTI */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-11 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border-[8px] border-leo-dark-blue bg-leo-gray p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              EVIG GARANTI
            </h2>
            <p className="text-leo-black font-inter text-base leading-relaxed">
              Leo-lov har altid været det bedste advokatfirma i verden. Der er
              simpelthen ingen der kan måle sig med os. Vi kan løse alle
              problemer så længe du har penge. Hvis du mod alt forventning
              skulle oplevel at støde på et retsligt problem som leo-lov ikke
              kan løse får du halvdelen af beløbet igen.
            </p>
            <p className="text-leo-black font-inter text-base leading-relaxed mt-4">
              Det er sådan vi har skabt en forretning der ikke kan andet end at
              vokse!
            </p>
          </div>
          <div className="border-[8px] border-leo-dark-blue bg-leo-gray order-1 lg:order-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ef675f56fdfacea75aef24a726b652b49a2b47d9?width=1192"
              alt="City buildings"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[530px]"
            />
          </div>
        </div>
      </section>

      {/* Team Section: MØD HOLDET */}
      <section id="team" className="max-w-[1280px] mx-auto px-4 lg:px-11 py-16">
        <h2 className="text-leo-blue font-jura text-[48px] text-center mb-16">
          MØD HOLDET
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full border-[8px] border-leo-dark-blue overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="John Harbinger"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-leo-blue font-inter text-sm mb-4">
              John Harbinger
            </h3>
            <p className="text-leo-black font-inter text-sm text-center">
              "Jeg er den mest successfulde advokat i firmaet. I hvert fald mere
              end Peter."
            </p>
            <div className="w-full h-[8px] bg-leo-dark-blue mt-6"></div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full border-[8px] border-leo-dark-blue overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                alt="Peter Parker"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-leo-blue font-inter text-sm mb-4">
              Peter Parker
            </h3>
            <p className="text-leo-black font-inter text-sm text-center">
              "Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget
              mere end John"
            </p>
            <div className="w-full h-[8px] bg-leo-dark-blue mt-6"></div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full border-[8px] border-leo-dark-blue overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Elise Li"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-leo-blue font-inter text-sm mb-4">Elise Li</h3>
            <p className="text-leo-black font-inter text-sm text-center">
              "Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg
              altid sagt."
            </p>
            <div className="w-full h-[8px] bg-leo-dark-blue mt-6"></div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full border-[8px] border-leo-dark-blue overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
                alt="Morten Nate"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-leo-blue font-inter text-sm mb-4">
              Morten Nate
            </h3>
            <p className="text-leo-black font-inter text-sm text-center">
              "Jeg er født på landet. På landet er der ingen ret og lov. Det er
              det vilde vest derude."
            </p>
            <div className="w-full h-[8px] bg-leo-dark-blue mt-6"></div>
          </div>
        </div>
      </section>

      {/* Location Section: HER BOR VI */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-11 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border-[8px] border-leo-dark-blue bg-leo-gray overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Maldive+rd.+22,+Seychelles&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '400px' }}
              referrerPolicy="no-referrer-when-downgrade"
              title="Leo-Lov ApS Location - Maldive rd. 22, Seychelles"
              className="border-none"
            ></iframe>
          </div>
          <div className="border-[8px] border-leo-dark-blue bg-leo-gray p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-leo-blue font-jura text-[32px] text-center mb-8">
              HER BOR VI
            </h2>
            <p className="text-leo-black font-inter text-base leading-relaxed">
              Vi har valgt at bosætte os i solen!
            </p>
            <p className="text-leo-black font-inter text-base leading-relaxed mt-4">
              Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder
              vi rigtig meget.
            </p>
            <p className="text-leo-black font-inter text-base leading-relaxed mt-4">
              "Hvis du har råd til at tage til Sechellerne har du råd til os".
              Det er et af vores utallige motto´er.
            </p>
            <div className="text-leo-dark-blue font-jura text-base mt-8 leading-relaxed">
              Leo-Lov ApS
              <br />
              Maldive rd. 22
              <br />
              Seychelles
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-leo-dark-blue mt-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-11 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Adresse */}
            <div>
              <h3 className="text-white font-jura text-[32px] mb-6 text-center lg:text-left">
                Adresse
              </h3>
              <p className="text-white font-inter text-base leading-relaxed">
                Find os her:
                <br />
                <br />
                Maldive rd. 22,
                <br />
                Seychelle Islands
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-white font-jura text-[32px] mb-6 text-center lg:text-left">
                Kontakt
              </h3>
              <p className="text-white font-inter text-base leading-relaxed">
                Kontakt os her:
                <br />
                <br />
                email@mail.dk
                <br />
                Tlf: 0192 3023
              </p>
            </div>

            {/* Politik */}
            <div>
              <h3 className="text-white font-jura text-[32px] mb-6 text-center lg:text-left">
                Politik
              </h3>
              <p className="text-white font-inter text-base leading-relaxed">
                Vores politikker:
                <br />
                <br />
                Privatlivspolitk
                <br />
                Cookiepolitik
                <br />
                Generalle betingelse
              </p>
            </div>

            {/* Sociale medier */}
            <div>
              <h3 className="text-white font-jura text-[32px] mb-6 text-center lg:text-left">
                Sociale medier
              </h3>
              <div className="flex gap-6 justify-center lg:justify-start mt-8">
                {/* Facebook Icon */}
                <svg
                  width="43"
                  height="41"
                  viewBox="0 0 43 41"
                  fill="none"
                  className="stroke-white"
                >
                  <path
                    d="M21.5 40.1655C18.6766 40.1655 15.8808 39.6461 13.2723 38.6368C10.6638 37.6276 8.29366 36.1483 6.2972 34.2834C4.30074 32.4186 2.71707 30.2047 1.63659 27.7681C0.556114 25.3315 0 22.7201 0 20.0828C0 17.4455 0.556114 14.834 1.63659 12.3974C2.71707 9.96087 4.30074 7.74696 6.2972 5.8821C8.29366 4.01725 10.6638 2.53796 13.2723 1.52871C15.8808 0.519456 18.6766 -3.92989e-08 21.5 0C27.2022 7.93677e-08 32.6708 2.11586 36.7028 5.8821C40.7348 9.64835 43 14.7565 43 20.0828C43 25.409 40.7348 30.5172 36.7028 34.2834C32.6708 38.0497 27.2022 40.1655 21.5 40.1655ZM21.5 40.1655V17.2138C21.5 15.692 22.1472 14.2325 23.2992 13.1565C24.4512 12.0804 26.0137 11.4759 27.6429 11.4759H29.1786M13.8214 22.9517H29.1786"
                    strokeWidth="1"
                  />
                </svg>

                {/* LinkedIn Icon */}
                <svg
                  width="43"
                  height="41"
                  viewBox="0 0 43 41"
                  fill="none"
                  className="stroke-white"
                >
                  <path
                    d="M12.2857 15.7793V30.1241M30.7143 30.1241V22.9517C30.7143 21.4299 30.0671 19.9705 28.9151 18.8944C27.7631 17.8183 26.2006 17.2138 24.5714 17.2138C22.9422 17.2138 21.3798 17.8183 20.2278 18.8944C19.0758 19.9705 18.4286 21.4299 18.4286 22.9517V30.1241V15.7793M10.75 11.4759H13.8214M3.07143 0H39.9286C40.7432 0 41.5244 0.302265 42.1004 0.840301C42.6764 1.37834 43 2.10807 43 2.86897V37.2966C43 38.0575 42.6764 38.7872 42.1004 39.3252C41.5244 39.8633 40.7432 40.1655 39.9286 40.1655H3.07143C2.25684 40.1655 1.47561 39.8633 0.899601 39.3252C0.323596 38.7872 0 38.0575 0 37.2966V2.86897C0 2.10807 0.323596 1.37834 0.899601 0.840301C1.47561 0.302265 2.25684 0 3.07143 0Z"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
