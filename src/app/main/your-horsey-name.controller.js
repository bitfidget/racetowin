(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('NameController', NameController);

  /** @ngInject */
  function NameController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    $scope.horseyNames = [
    	'1 Up', '11 Scent', '24 Carrot Seven', '2lil2late', '3Demon', '40 Winks of Certain', 
    	'60 Grit', 'A Baby Maybe', 'A Day Latte', 'A Dolt Supervision', 'A Freud to Find Out', 
    	'Abettor Mouse', 'Abigail Force', 'Abnegator', 'Above and Abettor', 'Absalom', 
    	'Abundance Grand', 'Acacia Saint', 'Acacian Spring', 'Acapulco Gold', 'Accolady', 
    	'Achilles Kiwi', 'Acid Rein', 'Acorn Palace', 'Active Radio', 'Ad Liberace', 
    	'Adam Fathom', 'Adorn Scorn', 'Adornica', 'Adventure Camping', 'Adventure Capitalism', 
    	'Advertis Miss', 'Advice Squad', 'Aecium', 'Aesthetic Bug', 'Aesthetic Ruin', 
    	'Affluential', 'Agenda to Boot', 'Agent Botox', 'Agent Duh', 'Agent Flow', 
    	'Aggregutter', 'Aglaya', 'Agoura Phobia', 'Agriox', 'Airborne Pickle', 'Airvoyance', 
    	'Akimbo', 'Al Fresco', 'Al Fresco’s', 'Al Indigo', 'Al Kremlin', 'Al Mortal', 
    	'Al Niño', 'Al Pay U. Later', 'Al Told', 'Alan Off', 'Albeit George', 'All Indigo', 
    	'Alpha Mail', 'Alpha Mail Order', 'Alpha Mall', 'Alpha Mile', 'Alpha Miles', 
    	'Altraeon', 'Amagansett Am I', 'Amagansett Go Around', 'Amalgamate', 
    	'Amanda Marigold', 'Amelia Rate', 'American Whey', 'Ample Trample', 'Amy Sanguine', 
    	'Anacho', 'Anadroze', 'Anavenetro', 'Anchors Astray', 'Andershun', 'Andy Brand', 
    	'Anecdotal Science', 'Anger Angel', 'Angryman', 'Angus O’Reilly', 'Anivet', 'Anixang', 
    	'Antimatter', 'Any Luck?', 'Apothecarney', 'Appear to Appear', 'Appy Planet', 
    	'Aqua Duck', 'Aquacine', 'Aquafire', 'AquaQleen', 'Aquasseur', 'Aquazure', 'Aquicin', 
    	'Aquoavo', 'Arboreal Trumpet', 'Arianna', 'Arise and Shinola', 'Arkansassy', 
    	'Arley Bouticher', 'Armor Ollie', 'Arotiaka', 'Artego', 'Article of Clothing', 
    	'Articular Matters', 'Archangel', 'Arch Barker', 'ASAP', 'Astrology', 'Asymilate', 
    	'Atilla Mockingbird', 'Atom Smasher', 'Atomic Conch', 'Atomic Donut', 'Attila the Bunny', 
    	'Attila the Humm', 'Attila The Hunk', 'Auntie Freeze', 'Auntie Nice', 'Auntie Jack', 
    	'Auntie Flow', 'Auntie Horrace', 'Aural Six', 'Auto Bon Bons', 'Avenetro', 'Azurefire', 
    	'Baba Baba', 'Baba Blongata', 'Baba Ghanouj', 'Baba Rum', 'Babblegate', 'Babylon Cheyney', 
    	'Bacon Jack', 'Baby Bunting', 'Bad Rabbit', 'Bad Habbit', 'Baby Maybe', 'Bag of Courage', 
    	'Bait Bait Bait', 'Bakery', 'Balancing Action', 'Bali Who', 'Ball Lightning', 'Balmy Steve', 
    	'Bamboo Gnu', 'Bamboolong', 'Banana Cabana', 'Bandwidth', 'Bandwithout', 'Banned', 'Bapoon', 
    	'Bar Flight', 'Bard’s Bench', 'Barnacle Power', 'Barney', 'Barton Brigadier', 
    	'Basil Bromide', 'Basking Bingo', 'Bates', 'BB Lutz', 'Be My Trotsky', 'Bean Countess', 
    	'Beanie Boyd', 'Bear Trope', 'bEarth', 'Beauteous Maximus', 'Beauty Call', 'Beaver’s Bend', 
    	'Bébé Boom', 'Bee Kindling', 'Bee Salt', 'Bee Saw', 'Beef Patrol', 'Beef Storm', 'Beefbelly', 
    	'Before Breakfast', 'Before Coffee', 'Beg', 'Beige and Briney', 'Bela Bite', 'Belagossi', 
    	'Belfaster', 'Bella Figala', 'Below the Beltway', 'Beluga', 'Beluga Bandit', 'Beluga Banjo',
    	 'Beluga Oblongata', 'Benephisto', 'Best Defense', 'Besto', 'Better Than Money', 
    	 'Bid and Ask', 'Big Bother', 'Big Juicy', 'Big Mother', 'Big Nico', 'Big Potato', 
    	 'Bigdude', 'BigWay', 'Billy Billy', 'Billy Billy’s Boy', 'Biloxi Calm', 'Biloxi Force', 
    	 'Bingo Binge', 'Bingo Bingo', 'Bingo Tinge', 'Bird Casting', 'Bitter Herb', 'Bitter Plaid', 
    	 'Bitterbug', 'Biz', 'Bit on the Slide', 'Black Belt Barbie', 'Black November', 'Blairvado', 
    	 'Blanch DuPont', 'Blanche France', 'Blando', 'Blanet', 'Bleendot', 'Blind Wally', 
    	 'Blongata Sunrise', 'Blow the Dough', 'Blown by Bits', 'Blow-up Rights', 'Blue Ball',
    	  'Blue Horizon', 'Bluez', 'Blur Planet', 'Bob Cratchett', 'Bob Granite', 'Bob Mutton',
    	  'Bob Steps Out', 'Boca Constrictor', 'Bocca Bot', 'Bodega Baby', 'Boilcat', 'Boilhead',
    	  'Bolinas', 'Bolinas Oil', 'Bolt Colt', 'Bolt Cult', 'Bolto', 'Bolton Rash', 'Boltonic', 
    	  'Bon Chovy', 'Bone Free', 'Bonedad', 'Bonefly', 'Bonus Slice', 'Book Bound', 
    	  'Booster Cake', 'Bora Bora Boar Hunt', 'Born Lucky', 'Born to Scrum', 'Bostonic', 
    	  'Botoxic', 'Botoxicating', 'Botoxidermy', 'Bovain', 'Bovine Vanity', 'Box ‘O Guru',
    	   'Brag a Tear', 'Brain Butter', 'Brain Marrow', 'Bran Dandy', 'Brand New Larry', 
    	   'Brass Tactics', 'Bravomissimo', 'Brazen Raisin', 'Break a Leg', 'Break the Clocks', 
    	   'Brew Toil', 'Brewed Attitude', 'Brig-a-Doom', 'Bring it!', 'Bristol Diamond', 
    	   'British Miss', 'Broadway Baggins', 'Broadway Chez', 'Broadway Czar', 'Broadway Dorian',
    	   'Broadway Etiquette', 'Broadway Facade', 'Broadway Imperative', 'Broadway Sanguine', 
    	   'Broadway Trotsky', 'Broken Auntie', 'Broker Puff', 'Bronte Thesaurus', 
    	   'BronteSaurus', 'Bronze Cheese', 'Brood Storm', 'Broom Bunt', 'Brown Nose Derby', 
    	   'Brunchability', 'Brunchilli', 'Brunchilli Sunrise', 'Bubboil', 'Buckley', 
    	   'Buffalo Roman', 'Bug Biter', 'Bug Gloss', 'Bugabug', 'Bull Throttle', 'Bullhorn', 
    	   'Bunga Ding Dang', 'Bungee Bottom', 'Burl', 'Burl Baby Burl', 'Burl Lancaster', 
    	   'Burl Ocea', 'Burl Whirl', 'Burlicious', 'Burn It On!', 'Burning Sand', 
    	   'Busta Buddha', 'Buster Boon', 'Buster Keaton', 'Butane Jane', 'Butter and Grace', 
    	   'Butyl Full', 'Buy The Way', 'Buzz Kilt', 'Buzz Skill', 'Buzzopia', 'Bytrex', 
    	   'Cadillack', 'Cadillackey', 'Caffeine', 'Caffeine Serene', 'Cajun Sation', 
    	   'Cajun-Sation', 'Call it Green', 'Call Randy', 'Calyfornia', 'Camelabra', 
    	   'Campaign Daddy', 'Campoignant', 'Canadiaunt', 'Candide Consulting', 'Candide Opal',
    	    'Candlelight Virgil', 'Candy Ask', 'Cannery Row', 'Canopoly', 'Cantor Bury', 
    	    'Cap Happy', 'Captain Bamboo', 'Captain May I', 'Captain Runaway', 'Captain Zip', 
    	    'Captainstance', 'Carbon Dating', 'Cardio Radio', 'Carma Supra', 'Carnal Logic', 
    	    'Carnal Sanders', 'Carnegie Hall', 'Carnival Knowledge', 'Carson', 'Casa de Botox', 
    	    'Casa de Noche', 'Casa Mañana', 'Cascadence', 'Castillos de Calm', 'Castro Infidel', 
    	    'Casuwalt', 'Casuwalter', 'Catfight', 'Celery Dreams', 'Celestial Pudding', 
    	    'Censor Ship', 'Censortium', 'Center Marigold', 'Center Sanchica', 'Centigrand', 
    	    'Cerki', 'Chain Cheney', 'Chancellor', 'Chapter 12', 'Chapter Elvis', 
    	    'Chateau Low-blow', 'Chateau Yo', 'Chaucer’s Choice', 'Cheek', 'Cheeky', 
    	    'Cheese by DuPont', 'Cheese Panic', 'Cheesy Chopin', 'Cheeze Panic', 
    	    'Chemical Nosedive', 'Chen On Soso', 'Cheney Chain', 'Chenon So So', 'Cher If', 
    	    'Cherry Asphalt', 'Cherry Fodder', 'Chez Kicks', 'Chez Maggie', 'Chez Moi', 
    	    'Chez Naïveté', 'Chez Too', 'Chez Toupee', 'Chief Saskitune', 'Chillinnium', 
    	    'Chinatownhouse', 'Chipotle Power', 'Chips and Guac', 'ChitterChatter', 'Choco Lulu', 
    	    'Chokey Cheese', 'Chompsky', 'Chomsky', 'Choo Choo', 'Choot', 'Chop Chop', 
    	    'Chow Biscuit', 'Chuck Driver', 'Chuck the Wagon', 'Chuggin the Baba', 'Chum', 
    	    'Chumb', 'Ciao Bella', 'Ciaobama', 'Cinaster', 'Cinco Volvo’s', 'Cincyr', 'Cinesanct', 
    	    'Circa Fast', 'Circuitship', 'Circum', 'Circumstantialist', 'Civil Libation', 
    	    'Clarko', 'Class Wire', 'Clever Leather', 'Click Fraud McGraw', 'Clickstorm', 
    	    'Climox', 'Clive', 'Clone Clown', 'Clone Tone', 'Clone Your Own', 'Clones R Us', 
    	    'Closet Palace', 'Closet Santa', 'Clover Dale', 'Clover Deuce', 'Clovis', 
    	    'Clown School', 'Club Medic', 'Clutch', 'Coal Oil Point', 'Coash', 'Cobalt', 
    	    'Cobalt Lightening', 'Cobean', 'Cocoa Clasp', 'Cod', 'Codger Quest', 'Codrail', 
    	    'Coffee Conundrum', 'Coffee School', 'Coffee’s Ready!', 'Coil Your Jets', 
    	    'Colonel Spike', 'Colt Bolt', 'Columbo Logic', 'Combath', 'Comcentric', 'Comdo', 
    	    'Come Heir', 'Comelet', 'Comgo', 'Comlooker', 'Communicate This!', 'Comnivorous', 
    	    'Comp Lament', 'Complimentia', 'Computo', 'Comrush', 'Comup', 'Con Grace', 
    	    'Con Science', 'Condimench', 'Confection Detection', 'Confetti Logic', 
    	    'Confiture Demure', 'Confucius', 'Confusion Seis', 'Constance Cognoscenti', 
    	    'Constant Coffee', 'Constant Comment', 'Constant Coy', 'Constant Planck', 
    	    'Constant Plank', 'Contain Her', 'Contessa Confessa', 'Continent 7', 'Continuity', 
    	    'Continuous', 'Continuous Bison', 'Continuous Screed', 'Contrary Beauty', 
    	    'Conundreampt', 'Conundrum', 'Conundrumist', 'Conundrum Grand', 'Conundrum Judy', 
    	    'Conundrummer', 'Conundrummer Boy', 'Convict', 'Cook Bookie', 'Cook the Books', 
    	    'Cookie Book', 'Cookie Bookie', 'Cookie Butter', 'Cool Tofu', 'Cool Torque', 
    	    'Copabull', 'Copywrong', 'Corepan', 'Corey Flintoff', 'Corn Dog Social', 'Corndog', 
    	    'Coronal Massage', 'Cosmetallic', 'Cosmic Church', 'Cosmic Cocoon', 'Cosmic Crunch', 
    	    'Cosmic Fish', 'Cosmic Saint', 'Cosmo Not', 'Costume Base', 'Cotatti Logic', 
    	    'Could Be Worse', 'Counter Clone', 'Counter Coutier', 'Counter Coy', 'Coupe de Troupe', 
    	    'Courtesy Ovation', 'Cowboy Bob Santa', 'Cowboy Logic', 'Crabkitten', 'Cranky Petunia',
    	     'Crassabout', 'Crazy Matrix', 'Cream Sweep', 'Crew Goo Goo', 'Cricket Ticket', 
    	     'Critical Pig', 'Croutonium', 'Crowd Daddy', 'Cruel Banana', 'Crush Station', 
    	     'Crustacean Prince', 'Cruton', 'Crüton Bomb', 'Crutos', 'Crux O’ the Matter', 
    	     'Cruxter', 'Cubicide', 'Cubicle Machine', 'Cubicoil', 'Cult Order', 'Cultural Divot', 
    	     'Culture Dip', 'Culture Mole', 'Cupcake', 'Cut Fastball', 'Cutie Cult', 'Cutter', 
    	     'Cutter Claw', 'Cuzzles', 'Cycle Suave', 'Cyra-no-no', 'Czar Donic', 'D. E. Light', 
    	     'D.E. Lightful', 'Dacron Dave', 'Dada Data', 'Dada Dwiddle', 'Dag Nabbit', 
    	     'Dagwood Dreams', 'Dagwood Fears', 'Dahmer Pass', 'Dairy Anne', 'Damagansett', 
    	     'Dan Dorfman', 'Dan the Torpedoes', 'Dandit', 'Dandy Layne', 'Dare Demeanor', 
    	     'Darling Particle', 'Darvane', 'Darwanton', 'Darwendy', 'Darwin Again', 
    	     'Darwin Darlose', 'Darwin Sum', 'Dar-Win-Again', 'Darwinium', 'Darwin’s Lagoon', 
    	     'Darwinter', 'Deal Light', 'Dearlescent', 'Deb You Taunt', 'Debut Taunt', 'Debutaunt', 
    	     'Deep Blue Scene', 'Deep Blue See', 'Deep C', 'Deep Issue', 'Defacto Princess', 
    	     'Del Mar Dutch', 'Delicatessen Style', 'Deliveranch', 'Deluth', 'Deminimum', 
    	     'Demo Lotion', 'Denim Minimum', 'Deputy Debutante', 'Deucebra', 'Devil Music', 
    	     'Devilette', 'Deviltoe', 'Deviltrope', 'Dew Diligence', 'Diabolique', 'Dialogue', 
    	     'Diamantra', 'Diamond Sky', 'Diatribe', 'Didantic', 'Die Laughing', 'Diet Smokes', 
    	     'Digifad', 'Digital Jones', 'Dijon Bomb', 'Dilbertio', 'Dilitaunt', 'Dim Summit', 
    	     'Discerning Ted', 'Discretion', 'Distinctive Arms', 'Doc Herr Chicago', 
    	     'Doc Hollandaise', 'Doc Mantra', 'Doctor Sloth', 'Dog Philosophy', 'Doggy Biscotti', 
    	     'Dogma Beware', 'Dolcinea Interlude', 'Dolcinea Ladybird', 'Dole Troll', 
    	     'Dole Your Own', 'Dollar Llama', 'Dom Delki Voodoo', 'Domino Debt', 'Donnerdom', 
    	     'Donut God', 'Dos Pagans', 'Dostoevsky', 'Dot Calm', 'Dot Candy', 'Dot Com Car', 
    	     'Dot Compadre', 'Dot Connie', 'Dot Dog', 'Dot Don', 'Dot Dottie', 'Dot Down and Out', 
    	     'Dot Downtown', 'Dote', 'Double Beige', 'Double Dada', 'Double Felix', 
    	     'Double Happiness', 'Double Taurus', 'Doubtlaw', 'Dove Dude', 'Dove Punch', 
    	     'Downwind Dogs', 'Dr. Boring', 'Dr. Boyle', 'Dr. Burl', 'Dr. Contessa', 
    	     'Dr. Equal', 'Dr. Fangold', 'Dr. Fusspot', 'Dr. Gerbils', 'Dr. Goodfunk', 
    	     'Dr. Grout', 'Dr. Haste', 'Dr. Know', 'Dr. Loop', 'Dr. Lov', 'Dr. Mantra', 
    	     'Dr. Mood', 'Dr. Moody', 'Dr. No', 'Dr. Pain', 'Dr. Pang', 'Dr. Pangloss', 
    	     'Dr. Perish', 'Dr. Princess', 'Dr. Prudent', 'Dr. Rumi', 'Dr. Sorensen', 
    	     'Dr. Successor', 'Dr. Tirade', 'Dr. Vegan', 'Dr. Win', 'Dr. Zeus', 'Drag Racy', 
    	     'Dragon Sooth', 'Drama Mine', 'Drama Trama', 'Dramantra', 'Drastic Plastic', 
    	     'Dream Fire', 'Dream Pavement', 'Dream Trotter', 'Driftwoody', 'Drill Pill', 
    	     'D-Troop', 'Dude Quark', 'Duke Wellington', 'Dune Drone', 'Dung Beetle', 
    	     'Dusty Jewel', 'Dusty Rainbow', 'Dwealth', 'Dynamantra', 'e Me Up Scotty', 
    	     'E.L.O. Quaint', 'Ear Scorn', 'Eargo', 'Earth Cup', 'Earth Kit', 'Earth to Earth', 
    	     'Eartha Kitt', 'Earthmark', 'Earthscope', 'Easy Seed', 'EBIT Dada', 'EC Rises', 
    	     'Eccentrifugal', 'Echo Shack', 'Ecliplicant', 'Eclipsent', 'Eclipto', 'Egypto', 
    	     'El Dainty', 'Electric Waffle', 'Electrolance', 'Elemantra', 'Elemaunt', 'Elephanturi',
    	      'Eligible Golddiggers', 'Elita', 'Elpro', 'Elvis Othello', 'eMantis', 'Emboldened', 
    	      'Emergent', 'Emily LeBronte', 'Eminiece', 'Emo Pigeon', 'Emoltra', 'Empire’s R Us', 
    	      'Empirica', 'Empirical Dana', 'End Council', 'Enervate', 'Enigma on Rye', 'Enormo', 
    	      'Enrondezvous', 'Enterprise Fighter', 'EnTrona', 'Enzo', 'Epilogue', 'Eplode', 
    	      'Epoch Collapse', 'Equity', 'Erie Coincidence', 'Erstwhile', 'Escargot', 'Eschew Crew',
    	      'Estate of Affairs', 'eTarious', 'Eternity Waltz', 'Event You All', 'Everzebra', 
    	      'Eve’s Dropping', 'EviDance', 'Evidends', 'Evidentiary Express', 'Ex Existential', 
    	      'Excrutio', 'Executive Host', 'Exerta', 'Exhibit A', 'Exiand', 'Existential Nudge',
    	       'Existential X', 'Exit Matter', 'Exit Tangential', 'Exo Eccentric', 'Exoblue', 
    	       'ExoMonk', 'ExoPlanet', 'Exospeed', 'ExoStorm', 'ExoTrek', 'Exoville', 
    	       'Expecting Saratoga', 'Extro', 'Exuberanch', 'Eye Handy', 'Fabricate', 'Fabriquat', 
    	       'Fabulous Faux', 'Fallout', 'Fanarina', 'Fanatastic', 'Fanfare', 'Fangold', 
    	       'Far Away Feast', 'Far Horizons', 'Farmer’s Almanac', 'Fast and Furious', 
    	       'Faster Disaster', 'Father Earth', 'FatJet', 'Faux Boil', 'Faux Certain', 
    	       'Faux Fabulous', 'Faux Fax', 'Faux Fire', 'Faux Fum', 'Faux More Years', 'Faux Pa', 
    	       'Faux Phox', 'Faux the Money', 'Faux the Show', 'Faux Ward', 'Fax to London', 
    	       'Fear Cure', 'Fear Cut', 'Fear Fire', 'Fear Foil', 'Fear Tumbler', 'Feather Lace', 
    	       'Featherbaby', 'Fed Candy', 'Feelings', 'Feliner', 'Feral Merrill', 'Few Chore', 
    	       'Fez', 'Fi Fi Faux', 'Fi Fi Faux Fum', 'Fickle Finger', 'Fickle Tickle', 
    	       'Fiddler’s Fig', 'Fill the GAAP', 'Final Consumption', 'Finishing School', 
    	       'Finsta Guana', 'Fire Floss', 'Fire Friendly', 'Fire Monk', 'Fire Sippin’', 
    	       'Fire Strom', 'Fire Waldo', 'Fire Waltz', 'Firefly Friends', 'Firelight Forge', 
    	       'Firenze', 'Firewax', 'First and For Most', 'First Place Haste', 'First Snow', 
    	       'Fitzcaraldo', 'Five Bubbies', 'Five O’clock Shadow', 'Fix n’ Vix', 
    	       'Fixed End Fodder', 'FixerUpper', 'Fixin’ Vixen', 'Flag Hag', 'Flagrant Fish', 
    	       'Flagrant Miss', 'Flambo', 'Flame-Thrower', 'Fleetmix', 'Flew Z', 'Flight Risk', 
    	       'Flora Fiona', 'Floss and a Prayer', 'Flossing Heidi', 'Flost', 'Flotilla the Hun', 
    	       'Flotsam Johnny', 'FlotSam’s Club', 'Flovinzen', 'Flowing Ancient', 'Flush Drawn', 
    	       'Fly Butter', 'Flybar', 'Flying Chaucer', 'Flying Edge', 'Flying Fracas', 
               'Flying Gravity', 'Flying Horse', 'Flying Marsius', 'Flying Monk', 'FlyingFog', 
               'Flypaper', 'Fo Lita', 'Focus Face', 'Fodder Phobe', 'Fog Blob', 'Foil Force', 
               'Folk Smog', 'Fondue Freeze', 'Fonzi Scheme', 'Foo', 'Food Storm', 
               'Fool ‘Em – Rule ‘Em', 'Fool Flavor', 'Foolio', 'Fooly Valued', 'For Allah’s Sock', 
               'Forestville', 'Forever Blonde', 'Forgive and Forfeit', 'Fork Left', 'For-Moolah', 
               'Fort Angus', 'Forte Foray', 'Fortean Chef', 'Fortean Event', 'Fortyfied', 
               'Four Seed Sons', 'Fox Faux', 'Foxy by Proxy', 'Foxy Moron', 'Fractions', 
               'Fragrant Flagrant', 'Fragrant Flyer', 'Fragrant Miss', 'Fran Scene', 'Franscene', 'Fray Ray', 
               'Frazzy Grainger', 'Freakin', 'Freakin Beacon', 'Freakin’ Out', 
               'Free of Science', 'Free Ranger', 'Free the Bees', 'Freedom Friar', 
               'Freetoad', 'Freezer Burn', 'French Horn', 'French Lizard', 
               'French Poodle', 'French Wedding', 'Freon', 'Fresh Frenzy', 'Freshest', 
               'Freud', 'Freudian Slipper', 'Freudian Slippers', 'Friendly Fire', 
               'Frolic Acid', 'Frolique', 'Frothy Logic', 'Fryar Tuck', 'Fuel for Thought', 
               'Full Moon Kathy', 'Functional Freak', 'Funky Butter', 'Furnichorizo', 
               'Future Finder', 'Future Tab', 'Future This!', 'Fuzzy Logic', 'Fuzzy Lozenge', 
               'G2-También', 'Gage and Desoto', 'Gal Van Nuys', 'Galveston Eye', 
               'Garden Variety', 'Gellopax', 'Generation Jane', 'Generation Zero', 
               'Genome', 'Gensana', 'GeoDash', 'Gestalt', 'Giant Bob', 'Giant Path', 
               'Gigi Digit', 'Gincoba', 'Ginger Snapping', 'Ginger Vitro', 'Gingerbread Ban', 
               'Girltawk', 'Give ’em Lip', 'Gizord', 'Glace Lass', 'Glamour and Glitz', 
               'Glaswegian', 'Gleamer', 'Glendale Evans', 'Gliding Light', 'Globo Sphere', 
               'Globoil', 'Glossy Trotsky', 'Glow Wonder', 'Glow Your Own', 'Glucktor', 
               'Glue Belly', 'Glum', 'Gnome Clone', 'Go for the Juggler', 'Go Ned!', 
               'Go with Know', 'God I’ll Be Mighty', 'Golistic', 'Gology', 'Googoily', 
               'Googoyle', 'Goosebump Factor', 'Gorad', 'Gorganic', 'Gorge Us', 
               'GorillaTwenty', 'GoTee', 'GoYenGo', 'Grain Oil Ya', 'Grainspot', 
               'Gram Are', 'Grammburglar', 'Grand Indifference', 'Grand Scale', 
               'Granite Planet', 'Grassmasher', 'Gray Bar', 'Great Conductor', 
               'Great Uncle Bulgaria', 'Green Exit', 'Green Eyed Larry', 'Green Gravity', 
               'Green Louie', 'Green Mole', 'Greenspan', 'Green-T', 'Gregor Samsa', 'Grill', 
               'Grill to Chill', 'Grimley', 'Gristle Epistle', 'Grizzled Heights', 'Groenig', 
               'Groove Thang', 'Groove Thong', 'Grovert', 'Grupoli', 'Guak', 'Guernica', 
               'Gumby Logic', 'Gumby’s Choice', 'Guru', 'Guru Cricket', 'Guru Hopper', 
               'Guru Logic', 'Guru Smile', 'Guru Static', 'Guru Sum', 'Guru To Go', 
               'Guru To-do', 'Guru Too', 'Guru-to-do', 'Gush Cool', 'Gwyneth', 'Habit Taught', 
               'Habitual Church', 'Hactor', 'Haiku Harry', 'Hair Looms', 'Hair Peace', 
               'Hair Test', 'Halap', 'Halcyon Arms', 'Half Full', 'Hall and Oates', 
               'Hallo Hollow', 'Hambone', 'Hambone Martian', 'Handit Bandit', 'Hanky Pancreas', 
               'Happenstance', 'Happy Accident', 'Harbin Jour', 'Harbinger Clive', 
               'Hardy-har-har-able', 'Harkvark', 'Harmonica Lewinsky', 'Harness the Fury', 
               'Harr D.', 'Harry Carry', 'Hastee', 'Hasten', 'Have Full', 'Hawt Nawt', 
               'Head and Toe Purple', 'Headwind', 'Hearts of Palm Inc.', 'Heat Wave Goodbye', 
               'Heaven Forbid', 'Hegemony', 'Hegemony Honey', 'Heidi Heist', 'Heir Bag', 
               'Heir of the Dog', 'Helena Handbasket', 'Helium', 'Helixer', 'Hell Lodi Kitty', 
               'Hell Toupee', 'Hello Lita', 'Helmutt', 'Hemi More', 'Hemline of Fire', 
               'Herbal Underground', 'HERD Research', 'Here 2 4', 'Here Comes Me', 
               'Herniated Disco', 'Hester Bereft', 'Hester Prickpin', 'Hester Pure', 
               'Hetrex', 'Hey Low', 'Hi Que', 'High and Monty', 'High Country', 'High Coup', 
               'High Octane Council', 'High School Fed', 'High Seas Postal', 
               'High Street Modern', 'High Tee', 'High Voltaire', 'HighTee', 'Hiku', 
               'Hill Bully', 'Hillbilly Riviera', 'Hinckley', 'Hip No Therapy', 'HipHop Hooray', 
               'Hipping Boy', 'Historia Fonz', 'Hobgoblin’s Hat', 'Hobo Zo', 'Hog Fog', 
               'Hog Oscar', 'Hold the Malaise', 'Holy Sauce', 'Home Onerous', 'Homeroom Cafe', 
               'Hoodie', 'Hooray Fay', 'Hopalong Cheney', 'Horizon Sky', 'Horpor', 
               'Horrid Crab', 'Horse Code', 'Horsezilla', 'Hot Dogma', 'Hot Geology', 
               'Hot Kafka!', 'Hot Magma!', 'Hot Pot', 'Hot Schenectady', 'Hot Sour and Soar', 
               'Hot Trotsky', 'Hotrod Logic', 'Hover Crank', 'Hue Bris', 'Huffington Heights', 
               'Humblood', 'Hummermer', 'Humvegan', 'Hungry Head', 'Hunters Gathering', 
               'Grumpy Dumpling', 'Chubby Cherub', 
               'Hurrikeynesian', 'I Gotta Have It.', 'I Wood Knot No', 'Icarus', 'Icarus Not', 'Ice Crush', 'Ice Floe Baby', 'IceBird', 'Idego', 'Ignition to Mars', 'Ignore Ants', 'Igoraphobia', 'Illumity', 'Illustrioso', 'Illustrious Oh', 'Imagine Maggie', 'Imperative', 'Imperial Fire', 'Imprecious', 'In Ovation', 'In Ovation Station', 'Inbox', 'Indian Summer', 'Inducing Introducing', 'Industry Magnet', 'inFire', 'Info Mutiny', 'Information Aged', 'Inhabitaunt', 'inHeat', 'Inspect Greatness', 'Inspiracy', 'Inspiration Hat', 'Inspire Choir', 'Integres', 'Intergnat', 'Interknack', 'Internet Bubbly', 'Internet Eternity', 'Internet Police', 'Invest in Mints', 'Iowa Sailor', 'IQ-U', 'Irascible Savvy', 'Iron Horace', 'Irreversible Optimism', 'Irreversible Order', 'Irvine Grind', 'Irvine Wallet', 'IsoMatrix', 'IsoMonk', 'IsoTrek', 'It Takes an Iceberg', 'Ithacan Do', 'It’s in the Bank', 'Ivan Biloxi', 'Ivridse', 'Izzy Bell', 'Jack Addict', 'Jack Swayed', 'Jack the River', 'Jacket Straight', 'Jackie Diamonds', 'Jackson Vile', 'Jalala La La', 'Jalapeño Fireball', 'Jam Chops', 'Jane Cheney', 'Janet Planet', 'Jaws', 'Jay Cruder', 'Jay Krewd', 'Jazzy Jim', 'Jean Jacket Pool', 'Jean Pool', 'Jeer Cheer', 'Jello Tangent', 'Jelly Baby Red', 'Jelly Finch', 'Jellybird', 'Jenny Toil', 'Jet Leg', 'Jetsam’s Club', 'Jetsilk', 'Jezebel’s Joint', 'Jigging Sinatra', 'Jiggy Torpor', 'Jimmy Rogers', 'Jock and Judy', 'Joe Cuzzi', 'Joey Conundrum', 'Jolted by Truth', 'JotBox', 'Joviold', 'Judy Punch', 'Jug Lore', 'Juggler’s Jig', 'Jugulawyer', 'Juice Jones', 'Juice Monster', 'JuiceMaster', 'Juke London', 'Jules and Gems', 'Jumbo Grunion', 'Jump Jack', 'Jumpstack', 'Jumpstart', 'Junkcrusher World', 'Jupiter Trolley', 'Jupitor Place', 'Jurassic Pork', 'Just Say Know', 'Just Sell Baby', 'Justin Time', 'Jute Box', 'Kafka Medecine', 'Kafka’s Klues', 'Kaput Krash', 'Karaoke Dentist', 'Karma', 'Karma Check', 'Karma Farm', 'Karma Suit', 'Karma Suit Trap', 'Karma Suture', 'Keen Clip', 'Keeper’s Promise', 'Keister’s Kiss', 'Ken Dread', 'Ken Dread Spirit', 'Kettle Pa', 'Kibbles and Kitsch', 'Kiddie Wizard', 'Kimono Open', 'King Bling', 'King Chard', 'King Conundrum', 'King Grudge', 'King Pong', 'Kiosk', 'Kioxi', 'Kitty Litter', 'Kiwi Herman', 'Klaus Kinski', 'Kneedles', 'Knock Three Times', 'Know Order', 'Know Show', 'Konnectron', 'K-opec-ked', 'Kudos Falling', 'Kult', 'Kundalini Snort', 'La Loopy', 'Lady Playd', 'Lamb Chowder', 'Lance Ito', 'Landmark of My Youth', 'Landscapel', 'Largemount', 'Larry Skinflint', 'Lartego', 'Lasix', 'Latté Prey', 'Laugh Tax', 'Laughlin Need', 'Lauralight', 'Lava Drone', 'Lavadome', 'Le Gall', 'Leaping Lemur', 'Left Blank', 'Legal Ease', 'Legal Tender', 'Letpro', 'Lettuce Prey', 'Lexington 1 Up', 'Lexington Panache', 'Li Li Chiq', 'Libation Nation', 'Libby Dough', 'Liberace', 'Libido', 'Libido Donut', 'Libido Shuffle', 'Libidon’t', 'Lice on Mars', 'Life Audit', 'Life’s a Hit', 'Lil’ Moriarty', 'Lil ‘Ol Creole', 'Lillytrope', 'Limber Timber', 'LimLim', 'Limozen', 'Lincoln Blvd', 'Lingo Bingo', 'Lip Frog', 'Liquid Ambassador', 'Liquid Kitty', 'Liquid Radiant', 'Liquid Space', 'Liquid Theatre', 'LiquiSpace', 'Little Dostoevsky', 'Little Mussolini', 'Lizzie Borden', 'Loan Wit', 'Loca Mocha', 'Local Focal', 'Local Globe', 'Loco Motion', 'Lolaitan', 'Lolipop Flower', 'Lollilo Lolo', 'Lolly Chelsea', 'Lollytart', 'LoLoILikeThatName', 'Long Planet', 'Looner Crooner', 'Loop Hole', 'Looping Buddha', 'Loopy Tuna', 'Loot', 'Loot 66', 'Lord Chuby Cheeks', 'Lord Debit Card', 'Lord Hatchback', 'Lord Martini', 'Lost Floss', 'Lotto Lita', 'Lotto Love', 'Lotus Boogie', 'Lotuscany', 'Lou Cid', 'Loud Matrix', 'Love Bomb', 'Love Digit', 'Love That Loot', 'Lovebox', 'Lovebox Hotel', 'Lovely Lovely Two', 'LoveMusic', 'Low Bald', 'Low Coil', 'Low Downey', 'L-Spot', 'Lucyd', 'Lunch Rumi', 'Lunchpod', 'Lutheran Luau', 'M80', 'Ma Cranky', 'Mach Epoch', 'Macro Monk', 'Mad Gravity', 'Mad Matrix', 'Mad Nest', 'MadRush', 'Magellanic Dumbo', 'Magellanic Penguin', 'Magic Putter', 'Magma Pure', 'Magma Radiant', 'Magmina', 'Magnemo', 'Magnetic Cocoon', 'Magnetosphere', 'Magnina', 'Major Major Major', 'Make Your Day', 'Malathion', 'Malibu Slide', 'Malingering Doubt', 'Mallard Air', 'Mall-nourished', 'Mama’s Bug', 'Manager Man', 'Mangelica', 'Manglo', 'Maniacal Miss', 'Manic Management', 'Mannequin Mime', 'Mannequin Mogul', 'Manson', 'Mantis', 'Mantis Milk', 'Mantrix', 'Mantro', 'Maple Thor', 'Market Tang', 'Marquis de Sob', 'Marshmallow Man', 'Martha Stalwart', 'Marvain', 'Marvane', 'Marzipansy', 'Masquerade', 'Master Atom Blaster', 'Master Don', 'Master Fate', 'Masters Decree', 'Mastic Fantastic', 'Matre Deviant', 'Matre Devious', 'Matter of Fast', 'Mattermind', 'Matzo Boil', 'Maudelyn Monroe', 'Mauve Certain', 'Mauve Ho', 'Mauve Lava', 'Mauve Over', 'Mauve Rocket', 'Mauve Suave', 'Mauvie', 'Media Darwin', 'Media Mop', 'Media Pet', 'Medulla Mortadella', 'Medulla the Fool', 'Megabeth', 'Melding', 'Memeosphere', 'Memory Loft', 'Memory Works', 'Mench Your Match', 'Menthol', 'Meow', 'Merger Mystery', 'Merlin', 'Mermaidian', 'Methoding', 'Mi Thai Kind of Guy', 'Mia My', 'Miami Over Moon', 'Micro Monk', 'Micro Monkey', 'Micro Morphis', 'Micronaut', 'Midnight Commuter', 'Mike Haste', 'Mile Mannered', 'Mile Monger', 'Miles Alpha', 'Miletus', 'Milieu', 'Milvio', 'Mind Music', 'Mind Over Mayhem', 'Mind Rocket', 'Mine the Zone', 'Mineral Spirits', 'Minga', 'Mini Bar', 'Minimizer’s', 'Minsk Meat', 'Mint Dynasty', 'Minute Matriarch', 'Miqelique', 'Mirror Mirror', 'Mirtha', 'Miss Americana', 'Miss Demeanor', 'Miss Leading', 'Miss Madness', 'Miss Mary Mackin’', 'Miss Thought', 'Missle Epistle', 'Missle Morning', 'Mo Hell', 'Mo Mauve', 'Mobile Huge', 'Mobillowing', 'Mobius Void', 'Mock Epoch', 'Mod Cow', 'Mod Hog', 'Mod Pod', 'Mod Tap', 'Modicrumb', 'Modicrumb Cake', 'Mold Music', 'Moltantric', 'Molten Plaid', 'Moltonic', 'Mon Jovi', 'Mondicil', 'Mondo Bocci', 'Mondo TVA', 'Monk Ease', 'Monkey Double', 'Monque', 'Monsoon Buffoon', 'Montake', 'Montauk Mantra', 'Montoxic', 'Mood Lantern', 'Moon Boon', 'Moon Milk', 'Moonshine Wagon', 'Moose Toe', 'Moot Guru', 'Moral Cowboy', 'Moral Less', 'More Than More', 'Moretoll', 'Moriarty', 'Mosh Potato', 'Mountain Mud', 'Moxi Biloxi', 'Moxy Turtle', 'Mr. 24-7', 'Mr. Big and Tall', 'Mr. Big Bend', 'Mr. Buttondown', 'Mr. Chaser', 'Mr. Cup-a-Soup', 'Mr. Demeanor', 'Mr. Down and Out', 'Mr. Ducky', 'Mr. Flosty', 'Mr. Fortnight', 'Mr. Little Fingers', 'Mr. Losty', 'Mr. Mackin’', 'Mr. Mercurial', 'Mr. Nancy', 'Mr. Particular', 'Mr. Pin Action', 'Mr. Prohibition', 'Mr. Prohibitor', 'Mr. Punnymoon', 'Mr. Rubber Room', 'Mr. Sadie', 'Mr. Scoopy', 'Mr. Shirley', 'Mr. Soil Sample', 'Mr. Successor', 'Mr. Sunnymoon', 'Mr. Surely', 'Mr. Tee', 'Mr. Ten Pin', 'Mr. Unexplainable', 'Mr. Wonderful', 'Mrs. Beasley', 'Mrs. Clean', 'Mrs. Webley', 'Ms. Beehaven', 'Ms. Demeanor', 'Ms. Dialed', 'Ms. Ducky', 'Ms. Excellency', 'Ms. Marx', 'Mud Puppet', 'Mudlyn', 'Mudrick Forest', 'Mum', 'Mumble Be', 'Mumble Bee', 'Mundee', 'Musanpoly', 'Muse Hacker', 'Muse Lee', 'Mustard Plaster', 'My Bad', 'My Oh Guru Mai', 'Mystic Blowout', 'Mystic Poppy', 'Mystic Zilla', 'Mystical Union', 'Nader Ration', 'Naive ET', 'Namby Pam B.', 'Namedness', 'Nanna Banana', 'Nano Bait', 'Nanyxsi', 'Narrow Barrow', 'Nasal Picnic', 'Nasdact', 'Nasdaction', 'Nasdaquiri', 'Nastenka', 'Nasty Good', 'Nastylicious', 'Native ET', 'Natural Silence', 'Navajo Dad', 'Nectar Princess', 'Needles to Say', 'Nefarious Splendor', 'Neitsche', 'Neitsche Forest', 'Neocent', 'Neptide', 'Nerve Saw', 'Nest Vesting', 'Netplosive', 'Netstalgic', 'Neuro-Victory', 'Neutrino', 'Never No', 'Nevsky Prospects', 'New Dad', 'New Gut', 'New Orleans Ivan', 'New Sense', 'New Whirled', 'New Whirled Order', 'New World Odor', 'Newly Wedlock', 'Nexost', 'Next of Kin', 'Nicey Nice', 'Nicolt', 'Nifty Glob', 'Nightwords', 'Niquent', 'No Convent', 'No Harm No Charm', 'No Pun Intended', 'Noble Hill', 'Noise Blossom', 'Norse Code', 'Norse Nurse', 'Norseback', 'North Quark', 'Northern Flourish', 'Nose Blind', 'Nose Curtains', 'Nose Music', 'Noslow', 'Nostalgia Dive', 'Nouveau Ruckus', 'Nouveau Whirled', 'Noxobi', 'Nspire', 'Nude Attitude', 'Nusfat', 'Nutritious Pirate', 'Nuxa', 'NYAccord', 'Nylon Prawn', 'O Jackie', 'Obama Rama', 'Obamanon', 'Occasion Alice', 'Occasion Olly', 'Ocea', 'Oceanary', 'Oceanary Soul', 'Octorex', 'Ode If Ferrous', 'Oedipast', 'Oedipus', 'Of Corsica', 'Off Coffee', 'Off the Cufflinks', 'OffAndOn', 'Officer Lovely', 'Ogle Mogul', 'Oh Jimmy', 'Oh La Canada', 'Oh My Hovercraft', 'Oh That Baby', 'Oil Patched', 'Old Mango', 'OldMenEatCookies', 'Olucore', 'Omahaughty', 'Omahotty', 'Omatom', 'Omnigod', 'Omnipotaunt', 'On Again Cardigan', 'On Any Line', 'On High', 'On The Wagon', 'Once’t', 'One For Al', 'onFire', 'Open the Window', 'Opinion Minion', 'Opt In', 'Optique', 'Orb', 'Orbaxter', 'Orbean', 'Orbin', 'Orbital Logic', 'Orbiting Sister', 'Orbitoil', 'Orbixtar', 'Orchestrata', 'Original Bloom', 'Ornamantis', 'Ornamench', 'Orno', 'Orphan Swells', 'Oscillation', 'Ou Are Tu', 'Ouch Pouch', 'Oui Oui Mr. T', 'Ouija', 'Oulu Bar', 'Oulu Rocinante', 'Out of the Box', 'Outer Granola', 'Outside the Boxers', 'Oval Ocean', 'Ovation Inn', 'Overchurros', 'Overfork', 'Overplex', 'Oxenfree', 'Oy Division', 'Oy to the World', 'Oy Vega', 'Oy Vegas', 'Ozean', 'Pa Cranky', 'Pa Kafka', 'Pablo Pick Ax O', 'Paint By Numbers', 'Painter Lee', 'Palladium Moxy', 'Palms for Psalms', 'Paloma Morganstein', 'Panache', 'Pancho Casanova', 'Pancho Village', 'Pandora’s Boxers', 'Pang', 'Pang Meringue', 'Panic Attack', 'Panic Button', 'Panoptimist', 'Panzent', 'Paper Lass', 'Paper Machete', 'PaperPlastic', 'Pappy’s Veranda', 'Papricut', 'Paraloco', 'Paramedic Pirate', 'Paranoma', 'Paris Taxes', 'Parish Able', 'Partial Toast', 'Particle Farm', 'Parvenu Charlie', 'Parvenu Guru', 'Pass the Glory', 'Pass the Swordfish', 'Pastor Feltbomb', 'Pastor’s Planet', 'Patty Meltdown', 'Paul Tree', 'Paul Treesum', 'Paula Revered', 'Pave to Own', 'Paved Curtain', 'Pay Bach', 'Pay Shunt', 'Peace by Peace', 'Peace Meal', 'Peace of Cake', 'Peace Police', 'Peace Unearth', 'Peacemeal', 'Peach Envy', 'Peach Fuzz', 'Peachy Preachy', 'Peak', 'Peanuts Envoy', 'Pearl on Girl', 'Pearl Unfurl', 'Pearlescient', 'Pearlessa', 'Peek-A-Boo', 'Peer', 'Peerless Dulcinea', 'Pelé Monty', 'Pelvic', 'Pen the Tale', 'Penelope Paj', 'Penelope Sky', 'Penguin Cloud', 'Penny Arcane', 'Penny Foolish', 'Penny Karma', 'Pente Bob Costal', 'Penundral', 'People Pipes', 'Pepp', 'Pepperboard', 'Pepto Mosh', 'Perfomancer', 'Performancierge', 'Peril', 'Periods of Rain', 'Perma Bear', 'Permablonde', 'Permanent Nudge', 'Perplexia', 'Pesto Quest', 'Pet Rock Band', 'Peyote', 'Phaedra', 'Phat Chic', 'Phat Transient', 'Phatsi', 'Phatsie', 'Pheast', 'Pheno', 'Phil Lament', 'Phil Tantric', 'Phit Bit', 'Phoebe Kinks', 'Phoebe Snowtire', 'Pholio', 'Photon', 'Phottie', 'Phox', 'Phrasemonger', 'Phuel', 'Picky Wicket', 'Picnic Train', 'Piece O’ the Action', 'Pier Deer', 'Pier Groupie', 'Pierced by Lugosi', 'Pile Driver', 'Pilgrim Marge', 'Pine Soul', 'Pineapple Day', 'Ping Po', 'Pink Hundred Watt', 'Pinnacoil', 'Pippiripped', 'Pippy Wrongstockings', 'Pirate Bath', 'Pirate School', 'Pirates of Purchase', 'Pistol Whiff', 'Pixel Blossoms', 'Plaid Certain', 'Plan Saphron', 'Planet Harry', 'Planet Haste', 'Planet Paltry', 'Planet Reno', 'Planet Right', 'Planet Terry', 'Planet X', 'Planetary Profit', 'Plank 10', 'Plastic Fantastic', 'Plastic Pasta', 'Plasto', 'Plato’s Crave', 'Plato’s Promise', 'Pleth Aura', 'Plum and Bone', 'Plum Dumb', 'Plumb Magic', 'Plutorque', 'Po', 'Pocket Tones', 'Pod Squad', 'Podunk', 'Podunk and a Prayer', 'Podunk Punch', 'Poifect', 'Poker Prey', 'Pokerture', 'Polar Ocean', 'Polarian', 'Polarium', 'Political Athena', 'Pollyantics', 'Pomegarnet', 'Pomme Juan', 'Pomona Lisa', 'Pomperstance', 'Pond Scam', 'Pondering Rosa', 'Pontoon Eternity', 'Pony Spumoni', 'Poor Trot of a Horse Player', 'Popcorn Born', 'Popcorn Logic', 'Popo', 'Poppy GoGo', 'Poppy Heathcoat', 'Poppydom', 'Portable Bellow', 'Posh Omen', 'Position', 'Post Mortadella', 'Postal', 'Potata Pathos', 'Potato Constant', 'Potato Pathos', 'Potter Training', 'Power Fool', 'Power Shadow', 'Powerhead', 'Pox in Socks', 'Practical Pork', 'Praise Be Retrace', 'Prarie Fire', 'Prawn Logic', 'Prawn Queen', 'Prawn Tong', 'Pray and Play', 'Pray for Latté', 'Preacher Comforts', 'Preacher Perfect', 'Preacher’s Pet', 'Preachy King', 'Predicting Jeanne', 'Prell', 'Prenup and Tuck', 'Presidaunt', 'President of Vice', 'Pretundra', 'Pretzel', 'Prey for Piece', 'Pride Aside', 'Pride Forgery', 'Prim Pricket', 'Primorbit', 'Primordia', 'Prince Myshkin', 'Prince Tool', 'Princess Eschew', 'Princess Fresh', 'Princess Jellybean', 'Princess Mile', 'Princess Nellie', 'Princess Plex', 'Princess Quipp', 'Prior Tease', 'Prison Smarts', 'Prisoner Scratch', 'Prize Flight', 'Probiscus', 'Prodigal Sunburn', 'Productive Panic', 'Prom Thumb', 'Prom Yule Gate', 'Propagander', 'Prophet', 'Prosely', 'Proto Chez', 'Protoshape', 'ProtoSpasm', 'Psycho Kitty', 'Psychotrone', 'Psyclopes', 'Puff Chuck', 'Pull a Fastow', 'Pumping Station', 'Pumpty Dumpty', 'Punacium', 'Puncake', 'Puns and Needles', 'Puppet Box', 'Puppet Show', 'Purb', 'Pure Penguin', 'Purpletown', 'Pyro Hero', 'Qaboos', 'Qimonk', 'Quadvert', 'Quadzoonple', 'Quake Dance', 'Qualm Temptress', 'Quantiful', 'Quarx', 'Quazonor', 'Que Papa', 'Que To Que', 'Que West', 'Queen Beam', 'Queen Conundrum', 'Quencha', 'Question Quest', 'Questionable Behaivor', 'Quick Turtle', 'Quiet Papas', 'Quiltreen', 'Quimby Heights', 'Quincy', 'Quintavi', 'Quintessa', 'Quizmo', 'Quizmu', 'Quiznost', 'Qule', 'Qult', 'Qunder', 'Quz', 'Rabid Rabbit', 'Raccoon Tour', 'Radamus', 'Radiant Butane', 'Radiant Earth', 'Radiant Ease', 'Radiant Fire', 'Radiant Penguin', 'Radiant Swift', 'Radiantix', 'Radio Certainty', 'Rail Jail', 'Rain Fire', 'Rambino', 'Ranch Cross Dressing', 'Rancho Botox', 'Rancho Django', 'Rancho Fiesto', 'Random Excellence', 'Randy', 'Rank', 'Rap Doodle', 'Raspberry Perfect', 'Rasta Static', 'Raw Harm', 'Ray She Oh', 'Razor Horse', 'Razor’s Edge', 'Razzbo', 'Razzle Dazzle', 'Reach For Peace', 'Realm of the Woods', 'Reap the Mercury', 'Rebar', 'Rebuttal Rocket', 'Recess', 'Recordshop', 'Red eScent', 'Red Nerve', 'Red Thunder', 'Reform Torn', 'Remotion', 'Renalator', 'Rendezboom', 'Reno Boy', 'Reno-no', 'Repittance', 'Repo Mantis', 'Rescue Me', 'Resorcerer', 'Restraining Order', 'Retail Dentist', 'Retinal Pinprick', 'Retro', 'Retro Cocoa', 'Retro Plum', 'Retro Ready', 'Retro Rococo', 'Retro Salts', 'Retro Sin', 'Retro-Yo', 'Retsin', 'Reverie Financial', 'Revering Lady', 'Revering Larry', 'Revering Paula', 'Reverse Curse', 'Reversus', 'Revisionass', 'Reward Chord', 'Riboflavin', 'Right Hand Red', 'Right on Broadway', 'Rin Tin Thin', 'Ring Bling', 'Rio Rocinante', 'Ripple Effect', 'Risking Nostalgia', 'Risky Pesto', 'Ritual Wave', 'Road Kool', 'Roadrageous', 'Robin’ the Hood', 'Robo Tox', 'Robotox', 'Rock of Aged', 'Rock Okra', 'Rock Oprah', 'Rocket Logic', 'Rocket Red', 'Rocket Silence', 'Rococo', 'Rodeo Oracle', 'Rogue Temptation', 'Roll the Dole', 'Roll Troll', 'Rolling Bingo', 'Roman Tess', 'Romeo Mauve', 'Ronbert', 'Ronelon', 'Rooster Fuzz', 'Roostin’ Pete', 'Root Cannoli', 'Rosy Slang', 'Rough Age', 'Royal Lush', 'Royal Pudding', 'Royal Tease', 'RSVP', 'Rubber Slapjack', 'Ruby Friday', 'Ruby Suite', 'Rumi', 'Rumor Goddess', 'Run Baba', 'Run Baba Run', 'Run-a-Monk', 'Run-a-Monkey', 'Runaway Proton', 'Running Numbers', 'Runny Norse', 'Rush Limbo', 'Rutabaga Darling', 'Rutabaga Princess', 'Ruthless Toothless', 'Saber Kath', 'Sadat', 'Sadie Blue', 'Saginaw on That', 'Saint Aphasia', 'Salon Da Bomb', 'Salsa Man', 'Salt the Taffy', 'Salty Pudding', 'Salty Thursday', 'Salvador', 'Sam Lambster', 'Samopolis', 'San Francisco Mint', 'Sanchica de Ville', 'Sand Waves', 'Sans Charo', 'Saphire Rose', 'Saphron Sunrise', 'SAR Donic', 'Sara Bellum', 'Sara Soda', 'Sara Vellum', 'Sarasonic', 'Saratoga Surge', 'Sarcasmic', 'Sartepoint', 'Saskatchewonder', 'Sasskatchy!', 'Sassybox', 'Satelite Ranch', 'Sausage', 'Save the Ants', 'Save the Date', 'Scalpel Scrupulous', 'Scatterbox', 'Sceen Seen', 'Scene Beam', 'Scene Not Herd', 'Scene Serene', 'Scentric', 'Scissor Fresh', 'Score 4', 'Scrape By', 'Screaming Tuesday', 'Sea Brisket', 'Sea Edge', 'Sea Quimby', 'Sea Quinn', 'Sea Script', 'Sea Sleigh', 'Sea Spam', 'Sea Tan', 'Sea Windsor', 'SeaMountain', 'SeaSky', 'Season Al', 'Sea-Sought', 'Second That', 'Seedy Beady', 'Selective Depression', 'Señor Circumstance', 'Señor Serene', 'Sensei Wheezy', 'Sensor Ship', 'Sensora', 'September 10th', 'Sequin', 'Sequitur', 'Serendipity', 'Serpent Stance', 'Seven Scentric', 'Sgt. Buttercup', 'Shackled', 'Shakes the Clown', 'Shakespeare', 'Shangrilatte', 'Shape the Scape', 'Share Reef', 'Sharkspot', 'Sheath', 'Shelly Half', 'Shhh!', 'Shirley Ujets', 'Shock and Almonds', 'Shoe Roosevelt', 'Short Change', 'Shostakovich', 'Show Me The Data', 'Shrilly Nilly', 'Sigh Bore', 'Sigh Clone', 'Sigh Girl', 'Signity', 'Silent Swift', 'Silver Demand', 'Silver of Mine', 'Simon Rusty', 'Sin n’ Spin', 'Sin Thesis', 'Sinch', 'Sindromo', 'Single Happiness', 'Sip and Shout', 'Sir Donna', 'Sir Drone', 'Sir Flotsam', 'Sir Jetsam', 'Sir Miser', 'Sir Render', 'Sister Borneo', 'Sister Karen', 'Sister Resister', 'Sisterine', 'Sizzling Brainpan', 'Skeeter Scare', 'Skin Deeper', 'Skinny Boboli', 'Sky Theory', 'SkyMountain', 'Slackered', 'Slam Banjo', 'Slap Sad', 'SlapJack', 'Sleeper Waves', 'Slicer Dicer', 'Slim Tricks', 'Slingshot', 'Slingshot Slice', 'Slope', 'Slush Fund', 'Smackdab Init', 'Smart Ask', 'Smarty Jonestown', 'Smash and Grab', 'Smashed Adam', 'Smashing Adam', 'Smile Quotient', 'Smokin’ the Data', 'Smootch and Potato', 'Smorgas Borgnine', 'Smote', 'Snack Pony', 'Snape', 'Snarkive', 'Snatch Shacks', 'Sniff Test', 'Snore Over', 'Snow Flake', 'Snow Pundit', 'Snowpoke', 'Snub Hall', 'Snunt', 'Snunting', 'So Long Barleycorn', 'So So Choritzo', 'So So Toboso', 'So Young So Cruel', 'Socratease', 'Soda Baking', 'Soft Shark', 'Sola Menthe', 'Solar Bingo', 'Solar Certain', 'Soledad', 'Solevatent', 'Solgan', 'Solvang', 'Solvang Chime', 'Solvang Positive', 'Some Much More', 'Son of a Muggit', 'Sonata Fast', 'Sonny Disposition', 'Sonny Pro-Bono', 'Soprano', 'Sorb', 'Sorrel Bell', 'Soul Centric', 'Soul Combat', 'Soul Depot', 'Soul Kitch', 'Soul Kitsch', 'Soul Massage', 'Soul Ocean', 'Soul Potato', 'Soul Pub', 'Soul Sketch', 'Soul You Know', 'South South South', 'Souther Proper', 'Sow the Know', 'Sow You Know', 'Sox Box', 'Soy Christmas', 'Spam and Deliver', 'Spare a Digm', 'Spavane', 'Spavin', 'Spawn Chalant', 'Spawn Shawn', 'Special Space', 'Speed Seed', 'Speedbolt', 'SpeedSpot', 'Sphere', 'Spigothead', 'Spin Cyclical', 'Splinter', 'Splinter Kiss', 'Spong', 'Spooncake', 'Spore of Kings', 'Sportan', 'SpotOn', 'Spotted Al', 'Spree Squeegee', 'Springbee', 'Sproil', 'Spum Blue', 'Spumoni Rocket', 'Spy Roiling', 'Squeegee Spree', 'Squish', 'Stage Left', 'Stamina', 'Stan Happen', 'Stand Churchill', 'Star Bored', 'Starbuxom', 'State of Fish Oil', 'Stavrogin', 'Stealth Management', 'Steam Beat', 'Stella Starboard', 'Steps Into Living', 'Steve Bomber', 'Stock Operator', 'Stone Error', 'Stone Plenty', 'Stone’s Throw', 'Storybook Omelette', 'Stovk', 'Str8 at Ya', 'Streetsmacker', 'Strideline', 'Striding Light', 'Strombo', 'Strombosis', 'Strozen', 'Strydesdale', 'Stucco', 'Stunt Cake', 'Sub Dude', 'Sub-lime', 'Subterfuse', 'Subterfusion', 'Subtle Relief', 'Subtle Stubble', 'Sudden Debt', 'Sudden Enemy', 'Suffix to Say', 'Sugar and Price', 'Sugar Dog', 'Sugar Doggy', 'Sugarpine', 'Sultrax', 'Sun Bite', 'Sunbit', 'Sunbright Sparrow', 'Sunbright Swallow', 'Sunclipse', 'Sunnyside Street', 'Sunset Bird', 'Super Ciao', 'Super Cog', 'Super Scale', 'SuperHelix', 'Surely You Jones', 'Surrealient', 'Sushi Blue', 'Sushi Spam', 'SUVegan', 'Svelt Smelt', 'Swallow the Sun', 'Swanky Hankie', 'Sweet Virginia', 'Swift Shift', 'Swim Beam', 'Swing Bing', 'Swing Bling', 'Swing Sing', 'Symbiotica', 'Synchro Storm', 'Syndrome Dome', 'Syndromo', 'Tab Bandit', 'Tab for the Future', 'Tae-Can-Do', 'Tale of the Snail', 'Talibanter', 'Tango Bango', 'Tango Latté', 'Tango!', 'Tantric Jones', 'Tanzar', 'Tarnex', 'Tarpedo', 'Tarzana Sunrise', 'Tarzantics', 'Tattoo Pride', 'Taunting Debut', 'Tawney Port', 'Taxi Dance', 'Taxus', 'Té Tango', 'Teacher’s Pet', 'Teaky Freaky', 'Tears for Tours', 'Tech Tech Goose', 'Techmania', 'Technoasis', 'Teeth Wreckage', 'Tele Vangelis', 'Telecommie', 'Telemarket King', 'Telemarket Tear', 'Telligenics', 'Telluride Glide', 'Tellurider', 'Temporal Freeze', 'Temporary Larry', 'Temporary Vegetable', 'Temptatious', 'Tempura Sunrise', 'Ten Pen Alley', 'Tennyson Woodbridge', 'Tequila Mockingbird', 'Terra Cotta Jones', 'Terra Monk', 'Terra Trona', 'Terrago', 'Terrapod', 'Territory Al', 'Terror Firm A', 'Terror Pharma', 'Tersanki', 'Tessid', 'Texx', 'Thackeray', 'Thar Hills', 'That Swing Thing', 'The Adhoc', 'The Atomizer', 'The Baggage', 'The Bakery Rave', 'The Bali Who', 'The Bane', 'The Barkley', 'The Beluga Belt', 'The Bid and Ask', 'The Big One', 'The Brime', 'The Bronsen Account', 'The Captainstance', 'The Chickery', 'The Chute', 'The Contender', 'The Contessa', 'The Cost is Clear', 'The Cranky’s', 'The Critic', 'The Crowd', 'The Crustacean', 'The Cubic', 'The Curmudgeon', 'The Deuce', 'The Dissident', 'The Dollop', 'The Dreamery', 'The Element', 'The Fidget', 'The Flight', 'The Flotsam Jetset', 'The Gipper', 'The Glean', 'The Gleen', 'The Go Lucky', 'The Hedonist', 'The Hermit Wars', 'The Jolt', 'The Jones', 'The Knotch', 'The Loop', 'The Lunch', 'The Lunchroom', 'The Mobe', 'The Monte Magum', 'The Noise', 'The One-Up', 'The Panky', 'The Plutarch', 'The Portion', 'The Possessed', 'The Prudence', 'The Retail Age', 'The Revisionist', 'The Ripper', 'The Sanguine', 'The Secretarian', 'The Sedge', 'The Sedgewick', 'The Sitch', 'The Snark', 'The Snub', 'The Soledad', 'The Spirit', 'The Stranger', 'The Swift', 'The Tawd', 'The Torquemada', 'The Trotsky Leon', 'The Turgenev', 'The Turn', 'The Wedge', 'The Wellborne', 'The Yesterday Guy', 'Then There’s Modell', 'Therapy Wagon', 'Third Eye Focus', 'Thirst and Howl', 'This Damn Planet', 'This Little Big', 'This That and the Phat!', 'Threepenny Oprah', 'Throughput', 'Thumb Butter', 'Thundadendron', 'Thunder Under', 'ThunderBag', 'Tick Talk', 'Tidal Yule', 'Tim Tation', 'Time Squares', 'Tino Cooper', 'Tiny Potatos', 'Tip, Toe and Go', 'Tipper Tape', 'Titonic', 'Toggle', 'Toggles', 'Toilstoy', 'Tokyo Yo', 'Toledo Sunrise', 'Toll Trona', 'Tom Foolery', 'Tom Foolery Inc.', 'Tomorrow', 'Tomorrow’s Jello', 'Tongue and Groove', 'Tongue in Chic', 'Too Chez', 'Too Faux', 'Tool Blue', 'Toot Boot', 'Tooth Fury', 'Tori Bora', 'Tori Spelling', 'Tori Spelling Salts', 'Tori Tori Tori', 'Torpor Larry', 'Torpor Ritz', 'Torpor Royale', 'Torpor Senate', 'Torpor Speedo', 'Torquemada', 'Tort Resort', 'Tortoise Tactics', 'Torvin', 'Tory Tory Tory', 'Touch Zone', 'Towering Baba', 'Toxic Pop', 'Tozy', 'Traffic Storm', 'Traffic Swarm', 'Transfer Station', 'Transluscent', 'Trasola', 'Tre Trio', 'Trench Coat', 'Trend Matter', 'Tres Huggers', 'Trigger Hippy', 'Trinity Trona', 'Trips not Trips', 'Tripsch', 'Troll Tones', 'Troll your own', 'Trollery', 'Trona Trinity', 'Trophyplex', 'Tropicandy', 'Tropicantor', 'Tropicava', 'Tropolis', 'Trouble Bubble', 'True By You', 'True Faux', 'True Fo', 'True Foe', 'Truth Be Tolled', 'Truth or Darren', 'Truth Spock', 'Truth Turtle', 'Tsunami', 'Tsunami Endgame', 'Tulsa Watch', 'Tumblebee', 'Tunapocalypse', 'Tunnel Circuit', 'Turf Builder', 'Turf Damage', 'Turfbuster', 'Turning Radius', 'Turnling', 'Turnpike', 'Turtle Problems', 'Turtle Quick', 'Turtle Soup for One', 'Tuscany Tucson', 'Tustin', 'Tweezerland', 'Tweezy', 'Twelve Foot Flower', 'Twiggery', 'Twiist', 'Twinkies Don’t Count', 'Two Faux', 'Two Like You', 'Two-ply Paradise', 'Tyro Scene', 'Uberlux', 'UberPrawn', 'Uh Oh-Bama', 'Ulti-Mate', 'Ultra Mouse', 'UltraAll', 'Ultrafloxi', 'Ultrasounder', 'Umbrella Wet', 'Umpa Lava', 'Unacho', 'Unbridaled Amy', 'Uncertainty', 'Uncle Billychord', 'Uncle Goldilocks', 'Uncle Thunder', 'Under Thunder', 'Underbelly', 'Undertap', 'Unfurl Faithful', 'Uni', 'Uni Bar', 'Uni Certainty', 'Uni Magic', 'Unit Socrates', 'Universal Impact', 'Un-pleasanton', 'Up Gusty', 'Upper Dinero', 'Urban She', 'Urban Sturgeon', 'Urbanshee', 'Us Festival', 'User Friend Lee', 'Utara', 'Utarian', 'Vacant Lot', 'Valpreal', 'Valreda', 'Van Mango', 'Vanity Veer', 'Varmetta', 'VC Promenade', 'Vegan Cool', 'Vegone', 'Vegoon', 'Velcro', 'Veltiphid', 'Velvet Wage', 'Ventura Capitalist', 'Venus Backlash', 'Venusian', 'Vera Real', 'Veritable Slew', 'Vernon', 'Viaccident', 'Viacrobat', 'Viagabond', 'Viasia', 'Vicadan', 'Vicious Suave', 'Victor He He', 'Victor Yugo', 'Vigration', 'Viokra', 'Vioscillate', 'Vireal', 'Virginia Sweet', 'Virginia Wolf', 'Virile Real', 'Virquile Reality', 'Virtual CEO', 'Visanity', 'Visionary Summit', 'Vitamin Seed', 'Voleme', 'Volthe', 'Volvo Vitae', 'Voodles', 'Voodoo Dating', 'Voodoo Vat', 'Voodude', 'Voodude Ranch', 'Voodulce', 'Vortax', 'Vortes', 'Vortex Mex', 'Vortez', 'Vortox', 'Vow Vagner', 'Vulture Culture', 'Vvirile', 'Waab', 'Waffle Stomper', 'Walla Wild', 'Waltzing Meridian', 'Wannabe Grand', 'Wannabe Heights', 'Wanton Scholar', 'War Auntie', 'War Bonnet', 'War Chess', 'War Chord', 'War Jones', 'War Jonesing', 'War of Attrition', 'Warleg', 'Was Honey’s Money', 'Wasabi Fresh', 'Wasabi Good', 'Water Back', 'Water Whole', 'Wax Planet', 'Wayward Postal', 'We Monsieur', 'We Need an Iceberg', 'Weeeeeeeee', 'Welchommie', 'Welcome To Mind', 'Wellborne Hall', 'Wes World', 'West Bay Adjacent', 'Western Vacation', 'What Ice Age Goes', 'Whip Lass', 'Whirling Turvy', 'Whisper Flower', 'Who Art in Heaven', 'Who Voodoo', 'Whole Loop', 'Whole Lotta’ Lita', 'Why Oh Ming', 'Wicked Bored', 'Wicked Cute', 'Wicker Palace', 'Wicker Script', 'Wig Money', 'Win a Bagel', 'Win Doctor', 'Wind Shear', 'Winky Stinget', 'Winnetka Boom', 'Wire House', 'Wire Lass', 'Wirelass', 'Wisdummy', 'Wise Yankee', 'Wish Kiss', 'Withdraw McGraw', 'Woe Esme', 'Woe is Free', 'Wonka Renewal', 'Word Herd', 'Word Salad', 'Wordlobster', 'Wordmonger', 'Worker B.', 'World Con', 'World Cop', 'World Sage', 'Wrath’s Path', 'Wreck Lass', 'Wren', 'XENO Sphere', 'Xerex', 'Xleen', 'Xoggle', 'XORCat', 'Xorette', 'XORtrak', 'XSeed', 'Xth', 'Xumonk', 'Xylar', 'Xylo', 'Xymonk', 'Y2 Kiki', 'Yahoodoo', 'Yangtze Doodle', 'Yardvark', 'Ye Old Neil Young', 'Yearlove', 'Yeasty Pete', 'Yes Sir Rotisserie', 'Yester Yore', 'Yo Comprehension', 'Yo Phat!', 'Yo Yo Tokyo', 'Yo Yorkshire', 'Yo Yo’s Place', 'Yoga Jones', 'Yoga Prose', 'Yorba Linda Trip', 'You’re So Vein', 'Y-oWhy', 'YoYo Go', 'Yucatango', 'Yumber', 'Zachary All', 'Zaggles', 'Zaj', 'Zamora', 'Zamox', 'Zanymax', 'Zap Shack', 'Zaphire', 'Zboo', 'Zedalis', 'Zeen Scene', 'Zelpo', 'Zen Shin', 'Zen Tax', 'Zen Warship', 'Zenacity', 'Zendo', 'Zenka', 'Zenlighten', 'Zensure', 'Zensus', 'Zentricity', 'Zerb', 'Zero Algorhythm', 'Zero Logic', 'ZeusNoose', 'Zialactic', 'Zidant', 'Ziggles', 'Zilencio', 'Zilidium', 'Zilla Drop', 'Zilla Nation', 'Zillaberry', 'Zillabug', 'Zillactic', 'Zilladelphia', 'Zillagoogle', 'Zillan', 'Zillatide', 'Zilodyne', 'Zinaidia', 'Zinbad', 'Zinch', 'Zinta', 'Ziore', 'Zipak', 'Zizzle', 'Zizzy', 'Zizzy Blue', 'Zoarere', 'Zolar', 'Zolarex', 'Zolarity', 'Zolavo', 'Zombie Logic', 'Zoo Butter', 'Zophie', 'Zuke', 'Zupiter', 'Zutros', 'Zyple', 'Zytrex', 'Batman', 'Bantom Fighter', 'Batman Forever', 'Balisitic Snail', 'Guinea Pig Sunday', 'Heat Seeker', 'Sunday Jonnie', 'Sombrero Malarkey', 'Snail no Fail', 'High Noon', 'Mallory Archer', 'Antagony', 'Frisky Dingo', 'Rainbow Doggie', 'Astral Traveller', 'Revellious', 'Orwellian', 'Clockwork', 'Maine Event', 'Eric Half B', 'Knight Knight', 'Fondue Supreme', 'Orange Sevens', 'Crazy Eighty Eight', 'Pinball Wizard', 'Trompe Le Monde', 'Disco Kitty', 'Orange Whip', 'Penguin Interchange', 'Big Fun', 'Balisitic Biscuit', 'Mild West', 'Victorious Secret', 'Head Start', 'Three Sheets', 'Zero Hour', 'Whinning Smile', 'Toad the Line', 'Bantam of the Opera', 'Turbo Tattoo', 'Indy Cindy', 'Doolittle', 'Velouria', 'Bossanova', 'Lemon Jelly', 'Last Horizons', 'Lost Horizons', 'Friend Indeed', 'Apocalypso', 'Here Comes Your Man', 'Digging For Fire', 'Manta Ray', 'Mr. Grieves', 'Silver', 'Bailey\'s Walk', 'Velvety', 'WinterLong', 'Build High', 'Subbacultcha', 'Letter to Memphis', 'Vamos', 'The Happening', 'Cecilia Ann', 'Is She Weird', 'Stormy Weather', 'Bone Machine', 'Gigantic', 'Tony\'s Theme', 'I\'m Amazed', 'Brick is Red', 'Oh My Golly', 'Nimrod\'s Son', 'Nimrod', 'Son of Sam', 'Levitate me', 'Pilgrim', 'Caribou', 'Amethyst', 'Drop the Bit', 'Bit Fidget', 'Gundanoon', 'Saddle Up', '15 L337res', '40 Odd Foot', 'She.3.P.O.', 'Darth Evader', 'Dial X', 'Dr. Neigh', 'The End is Neigh', 'Romeo and Jubilee', 'Ugly Duckling', 'Sisted Twister', 'Sisty Uglers', 'Snow White', 'Whinnie the Poo', 'Mr Hanky', 'Friend or Pho', 'Friand or Foe', 'Glitch', 'Stitches', 'Young Mi', 'Green Lambton', 'Lord Mare', 'Not Even Trying', 'One Trick', 'Abalone Pony', 'Sweet Surrender', 'AmScray', 'Warp Speed', 'Tesla Quick', 'Budgie Smuggler', 'Tracktastic', 'Wonderfoal', 'Busslington', 'Gidget', 'Groan Apart'
    ];

    $scope.letterScores = {
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8,
        i:9,
        j:10,
        k:11,
        l:12,
        m:13,
        n:14,
        o:15,
        p:16,
        q:17,
        r:18,
        s:19,
        t:20,
        u:21,
        v:22,
        w:23,
        x:24,
        y:25,
        z:26
    }

    $scope.assignName = function() {
        if ($scope.realName.toLowerCase() == 'al pearson') {
            $scope.finalName = 'Stood on a box';
            return;
        };
        if ($scope.realName.toLowerCase() == 'caroline fazzolari') {
            $scope.finalName = 'Fun police';
            return;
        };        
        if ($scope.realName.toLowerCase() == 'john studley') {
            $scope.finalName = 'The StudMeister';
            return;
        };        
        if ($scope.realName.toLowerCase() == 'stuart shinfield') {
            $scope.finalName = 'Mad as a hatter';
            return;
        };

    	var splitName = $scope.realName.toLowerCase().split('');
        var nameTotal = 0;
    	$.each(splitName, function(i,v) {
            if ((v == 'a') || (v == 'b') || (v == 'c') || (v == 'd') || (v == 'e') || (v == 'f') || (v == 'g') || (v == 'h') || (v == 'i') || (v == 'j') || (v == 'k') || (v == 'l') || (v == 'm') || (v == 'n') || (v == 'o') || (v == 'p') || (v == 'q') || (v == 'r') || (v == 's') || (v == 't') || (v == 'u') || (v == 'v') || (v == 'w') || (v == 'x') || (v == 'y') || (v == 'z')) {
                nameTotal += $scope.letterScores[v];
            } else {
                nameTotal += 26;
            }
        });
        $.each(splitName, function(i,v) {
            if ((v == 'a') || (v == 'b') || (v == 'c') || (v == 'd') || (v == 'e') || (v == 'f') || (v == 'g') || (v == 'h') || (v == 'i') || (v == 'j') || (v == 'k') || (v == 'l') || (v == 'm') || (v == 'n') || (v == 'o') || (v == 'p') || (v == 'q') || (v == 'r') || (v == 's') || (v == 't') || (v == 'u') || (v == 'v') || (v == 'w') || (v == 'x') || (v == 'y') || (v == 'z')) {
                console.log(v)
                nameTotal = nameTotal * $scope.letterScores[v];
            }
        });
        var yourTotal = nameTotal % $scope.horseyNames.length;
        console.log(yourTotal);
        console.log($scope.horseyNames[yourTotal])
        $scope.finalName = $scope.horseyNames[yourTotal];
        $scope.finalSpur = $scope.randSpur();
    };

    $scope.spur = [
        'Giddy up!',
        'Yee hah!',
        'Yeah!',
        'Winner!',
        'Oh yeah!',
        'Woah nellie!'
    ];

    $scope.randSpur = function() {
        return $scope.spur[Math.floor(Math.random() * $scope.spur.length)];
    }





    
    

  }
})();
