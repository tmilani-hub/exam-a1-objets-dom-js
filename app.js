const citations = [
	{
		Sitation: "Un esprit curieux est un esprit sans limites.",
		Auteur: "Neil de Grasse Tyson",
		Date: 1792,
		Couleur_de_fond: "#44e5ca",
		Couleur_du_bouton: "#4c0f19",
		Origine: "A great Book!",
	},
	{
		Sitation: "L'imagination gouverne le monde.",
		Auteur: "Marie Curie",
		Date: 1792,
		Couleur_de_fond: "#e55744",
		Couleur_du_bouton: "#0f454c",
		Origine: "",
	},
	{
		Sitation: "Le bonheur dépend de nous-mêmes.",
		Auteur: "Marie Curie",
		Date: 1792,
		Couleur_de_fond: "#e55744",
		Couleur_du_bouton: "#0f454c",
		Origine: "",
	},
	{
		Sitation: "Nous sommes faits de poussière d'étoiles.",
		Auteur: "Marie Curie",
		Date: 1792,
		Couleur_de_fond: "#e55744",
		Couleur_du_bouton: "#0f454c",
		Origine: "",
	},
	{
		Sitation:
			"Les ordinateurs sont inutiles, ils ne savent que donner des réponses.",
		Auteur: "Albert Einstein",
		Date: 1907,
		Couleur_de_fond: "#bde544",
		Couleur_du_bouton: "#1e0f4c",
		Origine: "Das Computer",
	},
];

const $body = document.querySelector("body");
const $h1 = document.querySelector("h1");
const $h5 = document.querySelector("h5");
const $p = document.querySelector("p");
const $span = document.querySelector("span");
const $btn = document.querySelector("button");

document.addEventListener("DOMContentLoaded", () => {
	refresh();
});

$btn.addEventListener("click", () => {
	refresh();
});

function refresh() {
	let object = citations[Math.floor(Math.random() * citations.length)];
	$body.style.backgroundColor = object.Couleur_de_fond;
	$h1.textContent = "'" + object.Sitation + "'";
	$h5.textContent = object.Auteur;
	$p.textContent = object.Origine;
	$span.textContent = ", " + object.Date;
	$btn.style.backgroundColor = object.Couleur_du_bouton;
	return object;
}

setInterval(refresh, 10000);
