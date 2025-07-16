// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mobile-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  // Close sidebar on ESC for accessibility
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('nav-open');
    }
  });
});

// shuffle_cards.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  if (!grid) return;

  const cards = Array.from(grid.children);

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  cards.forEach(card => grid.appendChild(card));
});

// Project data
const projectData = {
    'eqpay4all': {
        title: 'EqPay4all',
        description: 'The Erasmus+ funded <i><b>EqPay4all</b></i> project, a collaboration among a seven-partner consortium across Europe, addresses the persistent gender pay gap by raising awareness among youth and empowering youth before they enter the labour market. Rooted in the European Union’s core values of gender equality and social inclusion, the project provides social workers, educators, mentors, and young people with innovative concepts and methods to promote empowerment and systemic change.<br><br>At the heart of the initiative is the <a href="https://vtt.eqpayforall.eu/" target="blank"><b>EqPay4all Virtual Think Tank (VTT)</b></a>, an accessible, eco-friendly online platform built within Moodle, offering forums, mentorship networks, webinar series, and campaign resources designed to support collective action against pay inequality. The platform also connects users with national and EU organizations focused on gender pay equity and provides practical guidance on advocacy and reporting.<br><br>As a freelance Innovation Project Manager contracted by Future Needs, I led Work Package 3, overseeing the design, development, and multilingual translation of the project website and Moodle-based Virtual Think Tank (VTT) platform whilst also authoring the comprehensive <a href="https://www.eqpayforall.eu/dist/manual/EqPay4all%20Moodle%20User%20Manual_EN.pdf" target="blank"><b>Moodle User Manual for the EqPay4all Virtual Think Tank</b></a>, translated into four additional languages to enhance accessibility and impact across diverse communities.',
        status: '-',
        duration: '2023 - 2025',
        org: 'Future Needs',
        funder: 'Erasmus+',
        team: '7 Partner Consortia',
        role: 'Project Manager',
        where: 'Latvia, Poland, Germany, Cyprus, Greece',
        tags: ['Education', 'Gender Equality', 'Social Impact', 'Web Platform'],
        projectUrl: 'https://www.eqpayforall.eu/'
    },
    'plateau589': {
        title: 'Plateau 589',
        description: '<i><b>Plateau_589</b></i> is a collaborative, socially engaged art project occupying a disused shopfront on a faded high street in Melbourne, Australia in 2007-8. We began by placing a call for expressions of interest through <i>MySpace</i> and local media outlets for artists, performers, thinkers to come and interact with the site, the street, the local neighborhood. We intended the space to be one of intervention, a space for punks. Nothing to buy, nothing to sell, no opening times, no advertising, undefined.<br><br>Collaborators include Jade Walsh, Jaguar Lacroix, Richard Higgins, Bonnie Lane, Christina Tester and Ennioa Neoptolemus',
        status: '-',
        duration: '24 months',
        when: '2007-8',
        org: '-',
        funder: '-',
        team: '-',
        role: 'Co-founder',
        where: 'Melbourne, Australia',
        tags: ['Socially Engaged Art', 'Public Art', 'Curation'],
        projectUrl: 'projects/589.html'
    },
    'toots': {
        title: 'Dancing with Toots Benedicta',
        description: '<i><b>Dancing With Toots Benedicta</b></i> is a three-track experimental music EP and a sonic meditation on longing, belonging, and dispossession, woven with themes of love, loss, and grief. Set to a slow, imagined dance across the Indian Ocean, the work explores diasporic memory and ancestral connection. <br>Created using SuperCollider, each piece is composed around the imagined presence of Toots Benedicta, my grandmother, who was born in early 20th-century Ceylon (now Sri Lanka) and emigrated to Australia in 1950. <br>This EP is the outcome of a 12-month practice-as-research project supported by Arts Council England.',
        status: 'Completed',
        duration: '12 months',
        when: '2022',
        org: '-',
        funder: 'Arts Council England',
        role: 'Composer',
        tags: ['Experimental', 'Algorithmic Composition', 'Decolonial', 'South Asian Diaspora'],
        projectUrl: 'https://leeingleton.bandcamp.com/album/dancing-with-toots-benedicta'
    },
    'anon': {
        title: 'Anon',
        description: '<i><b>Anon</b></i> is a site-specific sound installation created in collaboration with Johnny Pavlatos for the 2006 <b>Harvest Festival</b> at <i>CERES Community Environment Park</i> in Victoria, Australia. The work responds to the reintroduction of colonial-era sedition laws under Australia\'s <b>Anti-Terrorism Bill (No. 2) 2005</b>, announced by then-Prime Minister <b>John Howard</b>. Schedule 7 of the bill, intended to target so-called extremist material, was applied\, unsuccessfully but with clear racialised undertones, in 2006 to prosecute Islamist books found in Sydney.<br><br> <b><i>Anon</b></i> draws attention to historical and contemporary censorship by featuring the names of banned authors and book titles inscribed around two repurposed gas cylinders discovered on site. Inside the cylinders, the immersive sound of burning books plays continuously, evoking the erasure of voices across time.',
        status: 'Completed',
        duration: '2006',
        org: '-',
        funder: 'RMIT',
        role: 'Artist',
        where: 'Melbourne Australia',
        tags: ['Public Art', 'Site-specificity', 'Sculpture', 'Australia'],
        projectUrl: '-'
    },
    'as-you-listen': {
        title: 'As You Listen',
        description: '<i><b>As You Listen</b></i> <b><i>As You Listen</b></i> is a collaborative\, site-specific sound installation\, realised in partnership with Johnny Pavlatos. The work is created in response to the sweeping welfare cuts introduced at the onset of austerity in the UK in 2010 under the directive of the Conservative–Liberal Democrat coalition led by David Cameron and Nick Clegg.<br><br>Installed in the then-squatted Lord Napier pub in Hackney Wick during the <i>Hackney Wicked Festival</i> in 2011\, the work blends political speech\, field recordings and processing in Max/MSP. The result is a disquieting sonic reflection on state violence\, social erasure\, and the psychic toll of austerity.',
        status: '-',
        duration: '-',
        org: '-',
        funder: '-',
        role: 'Artist',
        when: '2011',
        where: 'London, UK',
        tags: ['Public Art', 'Site-specificity', 'Sound-sculpture', 'Austerity'],
        projectUrl: '-'
    },
    'channelling': {
        title: 'Channelling',
        description: '<i><b>Channelling</i></b> is a 30-minute stereo electronic composition from the 2022 EP <i>Dancing with Toots Benedicta</i>\, performed live at the <i>Electric Nights Experimental Music Festival\, BuildUp</i> at Romantso\, and broadcast on <i>Fade Radio</i> in Athens\, Greece.<br><br>This immersive\, psychoacoustic meditation explores <i>missing</i> fundamental frequencies\, difference tones\, and combination tones - subtle modulations that shift and entwine across the sonic spectrum.<br><br>As a listening experience\, <i><b>Channelling</i></b> invites reflection on the boundaries between musical and non-musical sound. It engages with dialectical concepts of sameness and difference by blending monophony\, polyphony\, and antiphony through a carefully tuned palette of frequencies derived from Carnatic Shruti and Classical Indian Just Intonation systems.<br><br>Programmed in SuperCollider and performed using a custom-built TouchOSC controller\, the work challenges conventional notions of tone and tuning\, encouraging deep\, embodied listening.<br><br><i>Electric Nights Festival</i>, Municipal Theatre of Piraeus<br>Saturday September 17, 2022<br><br><i>Fade Radio</i><br>Tuesday November 29, 2022<br><br><i>BUILDUP</i>, Romantso<br>Friday December 2, 2022',
        status: '-',
        duration: '-',
        org: '-',
        funder: '-',
        role: 'Composer',
        when: '2022',
        where: 'Athens, Greece',
        tags: ['Experimental', 'Algorithmic Composition', 'Psychoacoustics', 'Athens'],
        projectUrl: 'https://vimeo.com/783711152'
    },
    'crisis': {
        title: 'Crisis Ordinary',
        description: '<b><i>Crisis Ordinary</b></i>, engaging noise politics and aesthetics of the ordinary, questions intimate political attachments – to political identities and histories – where listening and scanning the airwaves reveals its own mechanics of mediation. This piece encounters the noise in the soundspace, within an ongoing activity of social antagonism, to engender forms of “ambient citizenship’ – politics as a scene in which the drama of the distribution of affect/noise meets up with scenarios of movement” to challenge normative distinctions of who has the formal and informal right to take up soundspace (Lauren Berlant, Cruel Optimism).<br><br>Presented as part of <b>Museruole: Women in Experimental Music</b> (2013), <b><i>Crisis Ordinary</b></i> is best experienced through headphone listening in a public place, where private and public perceptions of sound and space begin to blur.',
        status: '-',
        duration: '-',
        org: 'Museruole',
        funder: '-',
        role: 'Composer',
        when: '2013',
        where: 'London, UK',
        tags: ['Experimental', 'Field Recording', 'Ambient Citizenship', 'Museruole'],
        projectUrl: 'https://museruole.tumblr.com/jukebox'
    },
    'femifesto': {
        title: 'Femifesto',
        description: '<b><i>Femifesto</b></i> is an experimental music composition featured in <i>Soundworks</i> at London’s ICA. Created with Max/MSP, it weaves spoken word, samples, and synthesis to interrogate the role of the "woman" composer, gender as category, sexuality, and sound as artistic expression. Inspired by Bruce Nauman’s <i>Days, Femifesto</i> challenges norms in sound art and feminist composition, standing as a bold exploration of voice, identity, and sonic politics.',
        status: '-',
        duration: '-',
        org: 'ICA',
        funder: '-',
        role: 'Composer',
        when: '2012',
        where: 'London, UK',
        tags: ['Experimental music', 'Max/MSP', 'Synthesis'],
        projectUrl: ''
    },
    'hnatate': {
        title: 'Her Noise: Feminisms & the Sonic',
        description: '<i><b>Her Noise: Feminisms & the Sonic</i></b> was a groundbreaking three-day symposium held at London\'s Tate Modern from May 3–5, 2012, exploring how artists engage with gender and identity through sound as a creative medium. This influential event featured talks, performances, discussions, and film screenings highlighting contributions to sonic art and electronic music from queer, feminist, and gender-focused perspectives. The symposium opened with renowned composer Pauline Oliveros presenting her <i>Deep Listening</i> practice through performance on the V-Accordion, setting the tone for an in-depth exploration of how sound intersects with expression and lived experience. This Tate Modern gathering marked a pivotal moment in recognising experimental music, sound art, and electronic composition as powerful tools for community-building and social reflection, firmly establishing <i>Her Noise</i> as a key cultural initiative addressing representation and identity within contemporary sonic arts.',
        status: '-',
        duration: '-',
        org: 'Electra, CRiSAP, Tate',
        funder: 'Arts Council England',
        role: 'Curator',
        when: '2012',
        where: 'Tate Modern, London, UK',
        tags: ['Her Noise', 'Feminist sound art', 'Experimental Music', 'Tate Modern'],
        projectUrl: 'https://hernoise.org/her-noise-feminisms-the-sonic/'
    },
    'ff': {
        title: 'Feminist Frequencies',
        description: '<i><b>Feminist Frequencies</i></b> as writing, explores how socio-political difference and lived experiences of gender, sexuality, race, and ethnicity shape the creation and perception of sound art and experimental music, with a specific focus on works by women and gender-marginalised artists. Drawing on compositions, installations, and archival materials from artists, Lina Džuverović, Anne Hilde Neset, Cathy Lane, Emma Hedditch, Sonia Boyce, Kim Gordon, and Jutta Koether, <i><b>Feminist Frequencies</i></b> examines how the category of “woman” has been historically silenced, erased, misrepresented, and marginalised in dominant narratives of music and sound art history.',
        status: '-',
        duration: '-',
        org: '-',
        funder: '-',
        role: 'Author',
        when: '2014-17',
        where: '-',
        tags: ['Her Noise', 'Feminist sound art', 'Experimental Music', 'Tate Modern'],
        projectUrl: 'https://feministfrequencies.org/'
    },
    'fractured': {
        title: 'Fractured Intimacies',
        description: '<b><i>Fractured Intimacies</i></b> is a collaborative sound project by Lee Ingleton and artist Ain Bailey, commissioned for the <i>Feeling Emotional Friday Late Spectacular</i> at the Wellcome Collection, London. The featured soundwork, <i>Belonging To</I>, draws on psychiatric and asylum records to uncover emotional traces — hesitations, intensities, and manias — embedded in the Wellcome Library Archives. Influenced by Johanna Hedva’s <i>Sick Woman Theory</i>, the work explores the intersections of emotion, illness, and institutional memory through sound.',
        status: '-',
        duration: '-',
        org: '-',
        funder: '-',
        role: 'Composer',
        when: '2016',
        where: 'Wellcome Collection, London, UK',
        tags: ['Sound Art', 'Wellcome Collection'],
        projectUrl: 'https://hernoise.org/her-noise-feminisms-the-sonic/'
    },
    'hna': {
        title: 'Her Noise Archive',
        description: 'In 2010, I began working with the <b><i>Her Noise Archive</i></b>, a pioneering collection of feminist and queer sonic practices initiated as <a href="https://www.electra-productions.com/projects/2005/her_noise/overview.shtml" target="_blank"><i>Her Noise</i></a> by Electra in 2005 and later housed by CRiSAP at the University of the Arts London. I supported the archive’s transition, restored and digitised fragile materials, and co-developed <a href="https://hernoise.org" target="_blank"><em>hernoise.org</em></a>, envisioned as a living, evolving space for critical engagement with sound, gender, and power. Alongside new interviews and curatorial work, I contributed to exhibitions, symposia, and teaching strategies that activated the archive across Europe. While advocating for a more inclusive and decolonial approach, I continue to see <i>Her Noise</i> as an unfinished, generative space connecting past, present, and future transfeminist sound cultures.',
        status: '-',
        duration: '-',
        org: 'Electra, CRiSAP',
        funder: 'Univeristy of the Arts, London',
        role: 'Archivist, Educator',
        when: '2010 - Present',
        where: 'London, UK',
        tags: ['Sound Art', 'Her Noise', 'Experimental Music', 'Electra', 'CRiSAP'],
        projectUrl: 'https://hernoise.org/'
    },
    'never-travel': {
        title: 'You Will Never Travel',
        description: '<i><b>You Will Never Travel</i></b> is a sound composition created for the debut episode of <a href="https://www.colomboscope.lk/athousandchannels-episode-one" target="blank"><em>A Thousand Channels</em></a>, launched on the digital platform of the <i>Colomboscope Interdisciplinary Arts Festival</i>. The piece responds to the Australian government’s racially targeted use of horoscopes in a multi-million-dollar campaign aimed at deterring Sri Lankan immigration, alongside other South Asian and Middle Eastern communities. This campaign, which spanned successive governments, strategically appropriated astrological belief systems as a deterrent, exposing the intersections of racism, state propaganda, and the instrumentalisation of cultural traditions. <br><br>Composed using the SuperCollider audio synthesis language, <i><b>You Will Never Travel</i></b> centres on psychoacoustic effects, specifically combination and difference tones, generated through the manipulation of ‘Major’, ‘Indian’, and ‘Hindu’ scale system presets in the software. These tones are derived from a frequency set based on the so-called “sacred sound scale,” amplifying the uneasy resonance between coded systems, identity, and state control. <br><br>The title references a formative personal experience. As a young Sri Lankan-Australian in Melbourne, I once received an unsolicited palm reading from a white Australian psychic, who looked at my hands and declared: “You will never travel.” <br><br><i>A Thousand Channels</i> is curated by Syma Tariq, in collaboration with Francesca Savoldi, Natasha Ginwala, and Anushka Rajendran.',
        status: '-',
        duration: '-',
        org: 'A Thousand Channels',
        funder: 'ColomboScope Interdisciplinary Arts Festival',
        role: 'Composer',
        when: '2020',
        where: 'Colombo, Sri Lanka & Online',
        tags: ['Colomboscope', 'A Thousand Channels', 'Experimental Music', 'SuperCollider', 'Psychoacoustics'],
        projectUrl: 'https://www.colomboscope.lk/athousandchannels-episode-one'
    },
    'owiob': {
        title: 'our word is our bond',
        description: '<b><i>our word is our bond</b></i> is a collaborative performance developed through a joint commission by <a href="https://www.electra-productions.com/projects/2015/wysing/ourwordisourbond.shtml" target=blank><i>Electra</i></a> and the <i>Women’s Art Register</i> of Australia. The work was realised during Electra’s <i>Entanglement: The Multiversal Score</i> residency at Wysing Arts Centre in 2015 and first performed on <b>Saturday 5th September 2015</b> at Wysing, UK.<br><br>Structured around a performance score derived from colonial immigration legislation, the piece engages processes of narrative performativity, informed by queer feminist theorist Lynne Huffer’s <i>Are the Lips a Grave? A Queer Feminist on the Ethics of Sex</i> (2013). It interrogates the demand to “speak the truth” embedded in contemporary discourses of nationality and citizenship, proposing instead an ethical mode of listening—one attuned to rupture, contradiction, and the spaces between self and other.<br><br>A second performance took place on <b>Saturday 7th November 2015</b> at <i>West Space</i> in Melbourne, Australia, as part of <a href="https://www.sanjapahoki.com/blog/2015/11/7/as-if-echoes-from-london" target=blank><i>AS IF: Echoes from London</i></a>. Performed by Sanja Pahoki, Makiko Yamamoto, and Eric Demetriou, and curated by Laura Castagnini, the event marked the conclusion of the <i>AS IF</i> festival.',
        status: '-',
        duration: '-',
        org: 'Electra & Women\'s Art Register Australia',
        funder: '',
        role: 'Composer',
        when: '2015',
        where: 'Wysing UK & Melbourne Australia',
        tags: ['performance score', 'ethical listening', 'spoken word', 'Wysing', 'Electra'],
        projectUrl: 'https://www.electra-productions.com/projects/2015/wysing/ourwordisourbond.shtml'
    },
    'scores': {
        title: 'Here are some scores for you to do',
        description: 'An intensive weekend-long exploration of the feminist performance score through a number of modalities including reading, listening, watching, discussion, play and performance.<br><br>The avant-garde score, deriving instruction for performance from the toss of a dice, the I Ching, a series of notes or a text, can be seen as a basis for <i>free</i> composition based upon utopian and emancipatory ideals. While the sonic results of an open work could be appreciated as <i>randomly generated, natural</i> or spontaneous, in fact the outcome may be tightly regulated by the specific political economy of the compositional structure. This intensive workshop, occurring over two days, seeks to examine some of the ways in which the feminist performance score may operate through and produce alternative logics, examining the processes and outcomes that set the feminist score apart from traditional processes embedded within the avant-garde open score.<br><br>The workshop investigates works such as Pauline Oliveros\' <i>To Valerie Solanas and Marilyn Monroe in Recognition of Their Desperation</i> (1970) and Annea Lockwood\'s <i>Piano Transplants</i> (1968-), among other more recent scores and related texts, recordings and moving image, across multiple generations, and through collaboration between attendees, seeking to experience the feminist score as a social event. The workshop derives its title from the introduction to Alison Knowles and Annea Lockwood\'s self-published <i>Womens Work</i>, which gathered in its two volumes of 1975 and 1978, performance scores by a diverse range of women practitioners from Simone Forti to Christina Kubisch.',
        status: '-',
        duration: '-',
        org: 'Electra & CRiSAP',
        funder: 'Creative Vouchers/ AHRC',
        role: 'Researcher, Workshop Lead',
        when: '2014',
        where: 'London, UK',
        tags: ['performance score', 'social composition', 'workshop', 'research', 'education', 'Electra'],
        projectUrl: 'https://www.electra-productions.com/projects/2014/here/overview.shtml'
    },
    'sgfa': {
        title: 'SGFA',
        description: '<b><i>Sound::Gender::Feminism::Activism (SGFA)</i></b> is an international forum focused on the role of gender in sound-based arts and experimental musics. Initiated in 2012 at CRiSAP (Creative Research into Sound Arts Practice), London College of Communication, <b><i>SGFA</i></b> emerged as a critical continuation of the <em>Her Noise: Feminisms and the Sonic</em> symposium at Tate Modern. It brings together artists, researchers, musicians, and theorists to collectively interrogate how gender and power shape sonic practices. <br><br><b>SGFA::2012</b> laid the foundation for a fluid, transdisciplinary feminist network in sound. <br><b>SGFA::2014</b> asked: “What, in the historical present, might constitute an activist life in sound?” <br><b>SGFA::2016</b> listened through the lens of White Noise, questioning whose voices are heard in UK sound arts. <br><br><b>SGFA::2019::Tokyo</b> extended the network to Japan, fostering international exchange around sound, gender, and political praxis. The <b>SGFA Zine</b>, published in 2016, celebrated the wide range of feminist and queer sonic research and creative practice emerging from the project.',
        status: '-',
        duration: '-',
        org: 'CRiSAP',
        funder: 'Univeristy of the Arts, London',
        role: 'Co-founder',
        when: '2012 - 2019',
        where: 'London, UK & Tokyo, Japan',
        tags: ['SGFA', 'social composition', 'research', 'education', 'CRiSAP'],
        projectUrl: 'https://hernoise.org/events-responses/sgfa-2012/'
    },
    'swdg': {
        title: 'Still Waiting Discussion Group',
        description: '<i><b>Still Waiting Discussion Group (SWDG)</b></i> is a student-led research collective formed in 2016 at London College of Communication, University of the Arts London. Funded by a UAL Curriculum Development Fund, the group was initiated by BA Sound Arts and Design students in response to the lack of diversity and representation within their course curriculum.<br><br>Meeting weekly for over a year, the group created a space to share lived experiences and critically engage with concepts, ideas, artworks, and readings that had been excluded from the formal programme. Collaborative learning focused on themes of race, gender, migration, sexuality, and decolonial practices in sound.<br><br><b>SWDG\'s</b> work culminated in several public-facing outputs. These included a live performance at <i>Sound::Gender::Feminism::Activism::2016</i>, a satirical Tumblr blog titled <i>S-A-D Boyz</i> critiquing the predominance of “pale, male, and stale” reading lists, and a podcast series exploring affective histories of migration, institutional decolonisation, and transgender culture in sound.<br><br>By combining research, creative expression, and activism, <b><i>SWDG</i></b> challenged structural inequalities in sound arts education and laid the groundwork for more inclusive and critical approaches to the field.',
        status: '-',
        duration: '1 year',
        org: 'University of the Arts, London',
        funder: 'UAL Curricculum Development Fund',
        role: 'Principle Investigator',
        when: '2016',
        where: 'UAL London, UK',
        tags: ['SGFA', 'SWDG', 'TransCulture', 'InclusiveEducation', 'SoundStudies', 'UAL'],
        projectUrl: 'https://hernoise.org/events-responses/swdg/'
    },
    'valerie': {
        title: 'To Valerie Solanas and Marilyn Monroe in Recognition of Their Desperation',
        description: '<b><i>To Valerie Solanas and Marilyn Monroe in Recognition of Their Desperation</i></b> is a 1970 ensemble score by composer Pauline Oliveros. Inspired by the radical feminist principles of Solanas\' <i>SCUM Manifesto</I>, which Oliveros encountered in 1968, the piece responds to the rising energy of the women\'s movement and the artist\'s own desire to engage with questions of gender inequality through sound.<br><br>By naming both Monroe and Solanas in the title, Oliveros highlights how each woman, in different ways, was trapped by social systems that denied them recognition and support for their creative potential. The score is dedicated to their shared sense of desperation and remains a powerful example of feminist composition and collective performance practice.<br><br><b><i>To Valerie Solanas and Marilyn Monroe in Recognition of Their Desperation</i></b> is performed in the Turbine Hall, Tate Modern, by a specially convened ensemble of 14 musicians and conducted by Claudia Molito, for the opening of the Her Noise: Feminisms and the Sonic, event in 2012.',
        status: '-',
        duration: '',
        org: 'CRiSAP, Electra',
        funder: 'Arts Council England',
        role: 'Performer',
        when: '2012',
        where: 'Tate Modern, London, UK',
        tags: ['Her Noise', 'Pauline Oliveros', 'Experimental Music', 'Tate Modern'],
        projectUrl: 'https://hernoise.org/her-noise-feminisms-the-sonic/#solanas-monroe'
    },
    'wrpm': {
        title: 'The WRPM Game',
        description: '<b><i>The WRPM Game</i></b> was developed during a residency at the <a href="https://www.gold.ac.uk/library/special-collections/wrpmcollection/" target="blank"><i>Women’s Revolutions Per Minute (WRPM)</i></a> archive, held within Goldsmiths University Special Collections and Archives, in collaboration with composer <a href="https://lisabusby.com/index.html" target="blank">Lisa Busby</a>.<br><br>Designed as a method to activate and engage with the archive, the game blends performance and play, using a custom deck of cards alongside a graphic score for live use with one pitch-variable turntable, one pitch-variable tape deck, one pitch-variable CDJ, plus performers and audience participation.<br><br>Founded in 1977 as part of the Women’s Art Collective, WRPM supported the Women’s Liberation Movement through the promotion of music festivals and recordings by women. The archive remains a vital record of feminist sonic history and creative resistance.',
        status: '-',
        duration: '',
        org: 'Goldsmiths Library Special Collections & Archives',
        funder: '-',
        role: 'Composer',
        when: '2017',
        where: 'Goldsmiths University, London, UK',
        tags: ['WRPM', 'Archive', 'Experimental Music', 'Goldsmiths', 'Residency'],
        projectUrl: ''
    },
    'genderpanic': {
        title: 'Gender Panic',
        description: '<b><i>Gender Panic</i></b> is an LGBTQIA++ refugee, immigrant, and diasporan collective, originally based in Athens, Greece, dedicated to up-cycling pre-loved t-shirts into bold, one-of-a-kind statements of queer pride. Each shirt is hand screen-printed with original messages and slogans that celebrate queer life in all its vibrant, intersectional expressions.<br><br>The project began in 2018 as an art commission for the <i>Aphrodite Film Festival</i> in Athens, under the name <i>T-Shirtaat</i>. Originating from a series of get-togethers, the initiative brought together displaced LGBTQIA++ folx, immigrants and diaspora to design and print t-shirts, share stories, laugh, and build solidarity. The collective also created and screened the short film <a href="http://youtu.be/zpTwKqN-NjQ" target="blank"><i>T-Shirtaat</i></a> as part of the <i>Aphrodite*</i>festival programme in 2018.<br><br>Since its inception, <b><i>Gender Panic</i></b> continued making and sharing t-shirts through queer festivals, workshops, and allied organisations across Europe and the U.S. More than just apparel, these t-shirts serve as wearable acts of resistance—supporting the global fight against LGBTQIAphobia while uplifting joy, visibility, and community through queer expression.',
        status: '-',
        duration: '2 years',
        org: '-',
        funder: 'Greek Minstry of Culture and Sport, Critical Social Policy Solidarity Fund',
        role: 'Lead Artist',
        when: '2018-19',
        where: 'Athens, Greece',
        tags: ['GenderPanic', 'LGBTQIA+', 'Socially Engaged Art', 'Athens'],
        projectUrl: 'http://youtu.be/zpTwKqN-NjQ'
    },
    'avelo': {
        title: 'AveloSpace',
        description: '<b><i>AveloSpace</i></b> was a trans-queer-feminist, anti-capitalist makerspace located in the heart of Athens, Greece. Founded in 2017, it began as a DIY renovation project—re-plastering walls, rewiring electrics, painting, and rebuilding from the ground up. Over time, it evolved into a self-organised collective for radical creativity, collaboration, and resistance.<br><br><b><i>AveloSpace</i></b>  was a non-hierarchical platform for experimental practices in art, sound, education, and social change. The space included sound studios, a stencil and painting workshop, a community kitchen, a screening area, and a transfeminist, LGBTQIA+, and critical race library. The space hosted workshops, meetings, music sessions, language exchanges, and collective gatherings that cultivated alternative forms of living, learning, and making.<br><br>As a trans-queer-feminist radical collective, we operated through solidarity, critical reflection, and collective care. Our work sought to challenge normative systems and build counter-spaces rooted in anti-racism, prison abolition, border resistance, and the redistribution of resources. We valued non-competitive collaboration and experimented with sustainable, inclusive and non-normative ways of being together.<br><br>The backgrounds of our collective were varied, with different skills and bringing a wide range of experiences to our working commitments together. We are activists, artists, academics, students, cooks, hairdressers, teachers, graphic designers, law graduates, translators and journalists. Between us we speak nine languages, Arabic, Farsi, Kurdish, Russian, French, German, Spanish, Greek and English. We have expertise in International and European protections of human rights, sociocultural studies of migration and gender, social policy, queer-feminist & anti-racist cultures, critical pedagogies, theater studies and LGBTQIA+ refugees and EU law. We will always be the OG Fam <3.',
        status: '-',
        duration: '5 years',
        org: '-',
        funder: 'AveloSpace grew from love and labour—self-funded, self-made, and sustained by the dedication of those who believed in building something together.',
        role: 'Founder',
        when: '2017-22',
        where: 'Athens, Greece',
        tags: ['AveloSpace', 'LGBTQIA+', 'Social Center', 'Athens'],
        projectUrl: 'http://youtu.be/zpTwKqN-NjQ'
    },
};

function openDrawer(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Populate drawer content
    document.getElementById('drawer-title').textContent = project.title;
    
    // Handle image safely
    const imageElement = document.getElementById('drawer-image');
    if (imageElement && project.image) {
        imageElement.src = project.image;
    }
    
    document.getElementById('drawer-description').innerHTML = project.description;

    
    // Handle optional fields safely
        const statusElement = document.getElementById('project-status');
    if (statusElement) {
        statusElement.textContent = project.status || 'Not specified';
    }

        const durationElement = document.getElementById('project-duration');
    if (durationElement) {
        durationElement.textContent = project.duration || 'Not specified';
    }

    const roleElement = document.getElementById('project-role');
    if (roleElement) {
        roleElement.textContent = project.role || 'Not specified';
    }

    const orgElement = document.getElementById('project-org');
    if (orgElement) {
        orgElement.textContent = project.org || 'Not specified';
    }

    const funderElement = document.getElementById('project-funder');
    if (funderElement) {
        funderElement.textContent = project.funder || 'Not specified';
    }

    const whereElement = document.getElementById('project-where');
    if (whereElement) {
        whereElement.textContent = project.where || 'Not specified';
    }

    const whenElement = document.getElementById('project-when');
    if (whenElement) {
        whenElement.textContent = project.when || 'Not specified';
    }

    const teamElement = document.getElementById('project-team');
    if (teamElement) {
        teamElement.textContent = project.team || 'Not specified';
    }

    const viewProjectBtn = document.getElementById('view-project-btn');

    if (viewProjectBtn) {
        if (project?.projectUrl && project.projectUrl !== '' && project.projectUrl !== '-') {
            // Show button and set up link
            viewProjectBtn.href = project.projectUrl;
            viewProjectBtn.target = '_blank';
            viewProjectBtn.rel = 'noopener noreferrer';
            viewProjectBtn.style.display = ''; // Show button
        } else {
            // Hide button when no valid URL
            viewProjectBtn.removeAttribute('href');
            viewProjectBtn.removeAttribute('target');
            viewProjectBtn.removeAttribute('rel');
            viewProjectBtn.style.display = 'none';
        }
    }


    // Populate tags
    const tagsContainer = document.getElementById('project-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // Show drawer
    document.querySelector('.drawer-backdrop').classList.add('show');
    document.getElementById('project-drawer').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    document.querySelector('.drawer-backdrop').classList.remove('show');
    document.getElementById('project-drawer').classList.remove('open');
    document.body.style.overflow = '';
}

// Close drawer on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDrawer();
    }
} );