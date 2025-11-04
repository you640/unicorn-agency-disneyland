import { Link } from "react-router-dom";

export default function ProjectTwo() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">BORN4PORN</h1>
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
        alt="BORN4PORN"
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 mb-4">
        Cosplay Cyberpunk / Lesbo-Reality. Futuristický vizuál, odvážne témy, kombinácia sci-fi a erotiky v originálnom spracovaní.
      </p>
      <div className="text-gray-800 mb-8">
        BORN4PORN je originálny projekt, ktorý spája prvky cosplay, cyberpunku a lesbo-reality do jedinečného vizuálneho zážitku. Využíva futuristické motívy, odvážne témy a experimentuje s kombináciou sci-fi a erotiky. Každá scéna je navrhnutá tak, aby posúvala hranice žánru, pričom kladie dôraz na detail, atmosféru a autentickosť. Projekt je inšpirovaný popkultúrou, digitálnym umením a subkultúrami, ktoré formujú moderný pohľad na sexualitu. BORN4PORN je o slobode prejavu, kreatívnom prístupe k erotike a o vytváraní priestoru pre rôznorodé identity. Vizuálne efekty, kostýmy a prostredie sú navrhnuté tak, aby podporovali príbeh a zvýraznili individualitu performerov. Projekt je určený pre tých, ktorí hľadajú nové zážitky, neboja sa experimentovať a chcú objavovať nepoznané aspekty erotiky. BORN4PORN je výzvou pre diváka, aby prehodnotil svoje predstavy o tom, čo je možné v rámci žánru a kde sú jeho hranice.
      </div>
      <Link
        to="/projekty"
        className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition font-semibold"
      >
        ← Späť na archív projektov
      </Link>
    </main>
  );
}
