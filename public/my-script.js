var eriadorDetails = 'In the northwest of Middle-earth, Eriador was the region between the Ered Luin and the Misty Mountains. In the Second Age, the northern kingdom of Arnor founded by Elendil occupied much of the region. After its collapse, much of Eriador became wild. In the Third Age, a small part of the region was occupied by hobbits to form the Shire. To the northwest lay Lake Evendim, once called Nenuial by the Elves. A remnant of the ancient forest of Eriador survived throughout the Third Age just to the east of the Shire as the Old Forest, the domain of Tom Bombadil. Northeast of there is Bree, the only place where hobbits and Men live in the same villages. Further east from there is the hill of Weathertop, the hill with the ancient fortress of Amon Sul, and then Rivendell, the home of Elrond. South from there is the ancient land of Hollin, once the elvish land of Eregion where the Rings of Power were forged. At the Grey Havens (Mithlond), on the Gulf of Lune, Cirdan built the ships in which the Elves departed from Middle-earth to Valinor.';

var HobbitSettlement = class {
	constructor(name, founding, founders) {
		this.name = name;
		this.founding = founding;
		this.founders = founders;
		this.originalSettlement = { name: 'Eriador', details: eriadorDetails };
	}
};

var theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', 'Blanco']);

var bree = new HobbitSettlement('Bree', 473, 'Atanatári who did not reach Beleriand');

var buckland = new HobbitSettlement('Buckland', 2340, 'Gorhendad Oldbuck');

var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;