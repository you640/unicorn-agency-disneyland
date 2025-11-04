import { Link } from "react-router-dom";

export default function ProjectThree() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">INTIM8</h1>
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
        alt="INTIM8"
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 mb-4">
        Projekt INTIM8 skúma intimitu v digitálnom veku. Kombinuje vizuálne umenie, text a interakciu, aby vytvoril jedinečný zážitok.
      </p>
      <div className="text-gray-800 mb-8">
        INTIM8 je umelecký projekt, ktorý sa zameriava na skúmanie intimity v kontexte digitálneho veku. Využíva kombináciu vizuálneho umenia, textu a interaktívnych prvkov, aby vytvoril zážitok, ktorý je osobný, hlboký a zároveň univerzálny. Projekt reflektuje zmeny v komunikácii, vzťahoch a vnímaní seba samého v prostredí, kde technológie zohrávajú kľúčovú úlohu. INTIM8 kladie otázky o tom, čo znamená byť intímny, ako sa mení naše prežívanie blízkosti a aké sú nové formy spojenia medzi ľuďmi. Vizuálne prvky sú navrhnuté tak, aby podporovali introspekciu a umožnili divákovi zamyslieť sa nad vlastnými skúsenosťami. Projekt je otvorený, experimentálny a neustále sa vyvíja, pričom zapája publikum do procesu tvorby. INTIM8 je pozvánkou na objavovanie, zdieľanie a prehlbovanie vzťahov v digitálnom svete.
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
