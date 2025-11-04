import { Link } from "react-router-dom";

export default function ProjectOne() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">GAMETUSY (F4CKTUSY)</h1>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="GAMETUSY"
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 mb-4">
        Soft-porn video projekt, ktorý skúma hranice vizuálnej estetiky a sexuality. Provokatívny, umelecký, s dôrazom na autenticitu a experiment.
      </p>
      <div className="text-gray-800 mb-8">
        GAMETUSY (F4CKTUSY) je experimentálny soft-porn video projekt, ktorý sa zameriava na vizuálnu estetiku, autenticitu a hranice sexuality v modernom digitálnom svete. Projekt vznikol ako reakcia na stereotypy v zobrazovaní erotiky a snaží sa poskytnúť nový pohľad na intímne zážitky prostredníctvom umeleckého spracovania. Každé video je starostlivo komponované, využíva netradičné svetlo, farby a pohyb, aby vytvorilo atmosféru, ktorá je provokatívna, ale zároveň citlivá a esteticky hodnotná. GAMETUSY kladie dôraz na individuálny prejav, experimentuje s formou a obsahom, čím rozširuje možnosti vizuálneho rozprávania. Projekt je určený pre publikum, ktoré hľadá niečo viac než len povrchnú zábavu – je to výzva na zamyslenie, objavovanie a redefinovanie vlastných hraníc. Vďaka spolupráci s rôznymi umelcami a performerami vznikajú diela, ktoré sú jedinečné, autentické a často kontroverzné. GAMETUSY je o slobode, kreativite a odvahe byť iný.
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
