import { Link } from "react-router-dom";

const projects = [
  {
    id: "projekt1",
    name: "GAMETUSY (F4CKTUSY)",
    description:
      "Soft-porn video projekt, ktorý skúma hranice vizuálnej estetiky a sexuality. Provokatívny, umelecký, s dôrazom na autenticitu a experiment.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "/projekt1",
  },
  {
    id: "projekt2",
    name: "BORN4PORN",
    description:
      "Cosplay Cyberpunk / Lesbo-Reality. Futuristický vizuál, odvážne témy, kombinácia sci-fi a erotiky v originálnom spracovaní.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "/projekt2",
  },
  {
    id: "projekt3",
    name: "INTIM8",
    description:
      "Projekt INTIM8 skúma intimitu v digitálnom veku. Kombinuje vizuálne umenie, text a interakciu, aby vytvoril jedinečný zážitok.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "/projekt3",
  },
];

export default function ProjectsArchive() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Archív projektov</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link
                to={project.link}
                className="mt-auto inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition font-semibold text-center"
              >
                Zobraziť projekt
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
