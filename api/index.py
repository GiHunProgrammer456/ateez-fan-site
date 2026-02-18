from flask import Flask, render_template
import json
import os

app = Flask(__name__,
    template_folder=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'templates'))

left_characters = [
    {'name': 'JJOONGrami', 'src': '/images/aniteez/jjoongrami.jpg'},
    {'name': 'DDEONGbyeoli', 'src': '/images/aniteez/ddeongbyeoli.jpg'},
    {'name': 'TYUdeongi', 'src': '/images/aniteez/tyudeongi.jpg'},
    {'name': 'HETmongi', 'src': '/images/aniteez/hetmongi.jpg'},
]

right_characters = [
    {'name': 'SANdeoki', 'src': '/images/aniteez/sandeoki.jpg'},
    {'name': 'bbyongMING', 'src': '/images/aniteez/bbyongming.jpg'},
    {'name': 'WOOYOnyang', 'src': '/images/aniteez/wooyonyang.jpg'},
    {'name': 'JJONGbear', 'src': '/images/aniteez/jjongbear.jpg'},
]

members = [
    {
        'name': 'Hongjoong', 'hangul': '\ud64d\uc911',
        'fullName': 'Kim Hongjoong (\uae40\ud64d\uc911)',
        'role': 'Leader, Rapper, Producer, Songwriter',
        'birthday': 'November 7, 1998', 'color': '#e11d48',
        'photo': '/images/members/hongjoong.jpeg',
        'height': '172 cm', 'mbti': 'INFP', 'instagram': '@no1likeme8_8',
        'facts': 'Known for his creative vision and unique fashion style. Produces and writes many ATEEZ songs.',
        'bio': 'Kim Hongjoong is the captain and main rapper of ATEEZ. He is heavily involved in songwriting and production, having co-written the majority of ATEEZ\'s discography. Known for his bold fashion choices and creative leadership, he guides the group\'s artistic direction. Before debut, he was part of the pre-debut group KQ Fellaz.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'Debut era with powerful pirate concept. "Pirate King" and "Say My Name" showcased his fierce rap style.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': 'Evolved into more experimental sounds. Known for his iconic "Thanxx" and "Fireworks" performances.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'Dark, intense concept. "Guerrilla" showed his growth as a performer and leader.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Mature, refined artistry. "Work" and "Lemon Drop" highlighted his versatility as an artist.'},
        ],
    },
    {
        'name': 'Seonghwa', 'hangul': '\uc131\ud654',
        'fullName': 'Park Seonghwa (\ubc15\uc131\ud654)',
        'role': 'Vocalist, Visual',
        'birthday': 'April 3, 1998', 'color': '#8b5cf6',
        'photo': '/images/members/seonghwa.jpeg',
        'height': '178 cm', 'mbti': 'ISFP', 'instagram': '@_starhwa_',
        'facts': 'The eldest member, known for his stunning visuals and powerful emotional performances on stage.',
        'bio': 'Park Seonghwa is the eldest member and visual of ATEEZ. He is known for his dual charm \u2014 gentle and caring off-stage, but powerful and charismatic on stage. His emotional vocal delivery and stunning visuals have earned him a massive fanbase. He is also known for being the "mom" of the group, taking care of other members.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'Debuted with elegant, princely visuals. His performance in "Hala Hala" became legendary.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': 'Showcased incredible duality with dark concepts. "Inception" era Seonghwa was iconic.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'His "Guerrilla" and "Halazia" looks went viral. Peak visual era.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Warm, golden aesthetics. His vocals in "Empty Box" touched fans deeply.'},
        ],
    },
    {
        'name': 'Yunho', 'hangul': '\uc724\ud638',
        'fullName': 'Jeong Yunho (\uc815\uc724\ud638)',
        'role': 'Main Dancer, Vocalist',
        'birthday': 'March 23, 1999', 'color': '#3b82f6',
        'photo': '/images/members/yunho.jpeg',
        'height': '184 cm', 'mbti': 'ENFP', 'instagram': '@yunou._.u',
        'facts': 'The tallest member (184cm). An incredible dancer with a warm personality loved by all fans.',
        'bio': 'Jeong Yunho is the main dancer and one of the tallest members of ATEEZ. Known for his powerful yet graceful dance style and warm, positive personality. He is often called a "golden retriever" by fans due to his bright and energetic demeanor. His long limbs and sharp movements make him stand out in choreography.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'His tall frame and powerful dance style were immediately noticeable. "Wave" era showed his bright side.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': 'Became known for his versatile dance skills. "Deja Vu" choreography was a standout.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'Sharp, intense performances. His dancing in "Bouncy" was incredibly powerful.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Continued to impress with mature choreography and improved vocals.'},
        ],
    },
    {
        'name': 'Yeosang', 'hangul': '\uc5ec\uc0c1',
        'fullName': 'Kang Yeosang (\uac15\uc5ec\uc0c1)',
        'role': 'Vocalist, Dancer',
        'birthday': 'June 15, 1999', 'color': '#06b6d4',
        'photo': '/images/members/yeosang.jpeg',
        'height': '173 cm', 'mbti': 'ISTJ', 'instagram': '@im_ovation',
        'facts': 'Known for his striking visuals and calm demeanor. Former Big Hit trainee before joining KQ.',
        'bio': 'Kang Yeosang was formerly a trainee at Big Hit Entertainment (now HYBE) before transferring to KQ Entertainment. Known for his ethereal, sculpture-like visuals and quiet personality, he contrasts his calm off-stage persona with powerful performances. He has shown tremendous growth as a performer over the years.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'Debuted with a mysterious aura. His visuals in "Pirate King" MV became a fan favorite moment.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': 'Gained more lines and center moments. "Eternal Sunshine" era showed his bright charm.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'Massive growth as a performer. His fierce looks in "Crazy Form" were viral.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Gained significant center time and vocal moments. Fan favorite era.'},
        ],
    },
    {
        'name': 'San', 'hangul': '\uc0b0',
        'fullName': 'Choi San (\ucd5c\uc0b0)',
        'role': 'Vocalist, Main Dancer, Center',
        'birthday': 'July 10, 1999', 'color': '#ef4444',
        'photo': '/images/members/san.jpeg',
        'height': '176 cm', 'mbti': 'INFP', 'instagram': '@choi3an',
        'facts': 'Famous for his incredibly intense stage presence and duality between on and off stage.',
        'bio': 'Choi San is known worldwide for his extraordinary stage presence and the extreme duality between his soft, cuddly off-stage personality and his fierce, intense on-stage persona. He is considered one of the best performers in 4th generation K-pop. His fancams regularly go viral with millions of views.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'His intense expressions in "Hala Hala" and "Wonderland" went viral, putting ATEEZ on the map.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': '"Inception" San became legendary. His "Deja Vu" performance is considered one of the best K-pop fancams.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': '"Guerrilla" and "Bouncy" showcased peak San intensity. Main Dancer position made official in 2024.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Showed a more mature, controlled intensity. "Work" era San was mesmerizing.'},
        ],
    },
    {
        'name': 'Mingi', 'hangul': '\ubbfc\uae30',
        'fullName': 'Song Mingi (\uc1a1\ubbfc\uae30)',
        'role': 'Rapper, Dancer',
        'birthday': 'August 9, 1999', 'color': '#f59e0b',
        'photo': '/images/members/mingi.jpeg',
        'height': '183 cm', 'mbti': 'ENTP', 'instagram': '@fixon_n_on',
        'facts': 'Known for his deep voice and charismatic rap style. One of the tallest members (183cm).',
        'bio': 'Song Mingi is a rapper and dancer with one of the deepest, most recognizable voices in K-pop. His tall stature and powerful rap delivery make him an imposing presence on stage. He took a hiatus in 2021 for health reasons but returned stronger than ever, showing his dedication to ATEEZ and ATINY.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'His deep voice rap in "Pirate King" and "Wonderland" established his signature style.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': 'Took a health hiatus and returned triumphantly. "Fireworks" era marked his powerful comeback.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'Fully back and thriving. His rap in "Guerrilla" and "Bouncy" was fire.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Most confident era. His verses show incredible growth and versatility.'},
        ],
    },
    {
        'name': 'Wooyoung', 'hangul': '\uc6b0\uc601',
        'fullName': 'Jung Wooyoung (\uc815\uc6b0\uc601)',
        'role': 'Main Dancer, Vocalist',
        'birthday': 'November 26, 1999', 'color': '#ec4899',
        'photo': '/images/members/wooyoung.jpeg',
        'height': '173 cm', 'mbti': 'ESFJ', 'instagram': '@wooyounggg__',
        'facts': 'An energetic performer and variety show natural. Known as the mood maker of ATEEZ.',
        'bio': 'Jung Wooyoung is a main dancer and vocalist known for his incredible energy both on and off stage. He is often called the "mood maker" of the group due to his bright and playful personality. His freestyle dance skills and charismatic stage presence make him a standout performer.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'Showcased his natural charisma from debut. His energy in "Wave" was infectious.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': '"Deja Vu" era Wooyoung was iconic. His dance covers went viral on social media.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'Peak performance energy. "Crazy Form" center moments were unforgettable.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Continued to shine as a performer. His variety show appearances gained many new fans.'},
        ],
    },
    {
        'name': 'Jongho', 'hangul': '\uc885\ud638',
        'fullName': 'Choi Jongho (\ucd5c\uc885\ud638)',
        'role': 'Main Vocalist, Maknae',
        'birthday': 'October 12, 2000', 'color': '#10b981',
        'photo': '/images/members/jongho.jpeg',
        'height': '176 cm', 'mbti': 'ISFJ', 'instagram': '@imfinalho_',
        'facts': 'The youngest member with an extraordinary vocal range. Famous for splitting apples with his bare hands.',
        'bio': 'Choi Jongho is the youngest member (maknae) and main vocalist of ATEEZ. Despite being the youngest, he possesses one of the most powerful vocal ranges in K-pop. He is famous for his party trick of splitting apples with his bare hands, showcasing his incredible physical strength. His high notes in ATEEZ songs are legendary.',
        'eras': [
            {'name': 'Treasure Era', 'year': '2018-2019', 'desc': 'His powerful vocals in "Answer" blew everyone away. Established himself as a top vocalist from debut.'},
            {'name': 'Fever Era', 'year': '2020-2022', 'desc': '"Inception" high notes became legendary. Apple-splitting videos went viral worldwide.'},
            {'name': 'The World Era', 'year': '2022-2023', 'desc': 'Vocal powerhouse era. His live vocals at concerts amazed audiences globally.'},
            {'name': 'Golden Hour Era', 'year': '2024-2025', 'desc': 'Showed emotional depth in ballads. "Empty Box" vocals were stunning.'},
        ],
    },
]

albums = [
    {'title': 'TREASURE EP.1: All to Zero', 'year': '2018', 'type': 'Mini Album', 'cover': '/images/albums/treasure-ep1.jpg', 'titleTrack': 'Pirate King', 'tracks': ['Intro: Long Journey', 'Pirate King', 'Treasure', 'Twilight', 'Stay', 'My Way']},
    {'title': 'TREASURE EP.2: Zero to One', 'year': '2019', 'type': 'Mini Album', 'cover': '/images/albums/treasure-ep2.jpeg', 'titleTrack': 'Say My Name', 'tracks': ['HALA HALA (Hearts Awakened, Live Alive)', 'Say My Name', 'Desire', 'Light', 'Promise', 'From']},
    {'title': 'TREASURE EP.3: One to All', 'year': '2019', 'type': 'Mini Album', 'cover': '/images/albums/treasure-ep3.jpg', 'titleTrack': 'WAVE', 'tracks': ['UTOPIA', 'ILLUSION', 'Crescent', 'WAVE', 'AURORA', 'Dancing Like Butterfly Wings']},
    {'title': 'TREASURE EP.FIN: All to Action', 'year': '2019', 'type': 'Full Album', 'cover': '/images/albums/treasure-epfin.jpg', 'titleTrack': 'Wonderland', 'tracks': ['End of the Beginning', 'Wonderland', 'Dazzling Light', 'Mist', 'Precious (Overture)', 'Win', 'If Without You', 'Thank U', 'Sunrise', 'With U', 'Beginning of the End']},
    {'title': 'TREASURE EPILOGUE: Action to Answer', 'year': '2020', 'type': 'Mini Album', 'cover': '/images/albums/treasure-epilogue.png', 'titleTrack': 'Answer', 'tracks': ['Answer', 'Horizon', 'Star 1117', 'Precious', 'Outro: Long Journey']},
    {'title': 'ZERO: FEVER Part.1', 'year': '2020', 'type': 'Mini Album', 'cover': '/images/albums/fever-pt1.jpg', 'titleTrack': 'Inception', 'tracks': ['Dear Diary: 2016.07.29', 'FEVER', 'THANXX', 'TO THE BEAT', 'INCEPTION', 'Good Lil Boy', 'One Day At A Time']},
    {'title': 'ZERO: FEVER Part.2', 'year': '2021', 'type': 'Mini Album', 'cover': '/images/albums/fever-pt2.jpeg', 'titleTrack': "Fireworks (I'm The One)", 'tracks': ["Fireworks (I'm The One)", 'The Leaders', 'Time Of Love', 'Take Me Home', 'Celebrate']},
    {'title': 'ZERO: FEVER Part.3', 'year': '2021', 'type': 'Mini Album', 'cover': '/images/albums/fever-pt3.jpg', 'titleTrack': 'Deja Vu', 'tracks': ['Eternal Sunshine', 'Feeling Like I Do', 'Deja Vu', 'Rocky', 'All About You', 'Not Too Late']},
    {'title': 'Dreamers', 'year': '2021', 'type': 'Japanese Single', 'cover': '/images/albums/dreamers.jpg', 'titleTrack': 'Dreamers', 'tracks': ['Dreamers', 'Blue Summer', 'Dreamers (Instrumental)']},
    {'title': 'The Real (\uba4b)', 'year': '2021', 'type': 'Single', 'cover': '/images/albums/the-real.jpg', 'titleTrack': 'The Real (\uba4b)', 'tracks': ['The Real (\uba4b)']},
    {'title': 'ZERO: FEVER EPILOGUE', 'year': '2021', 'type': 'Repackage', 'cover': '/images/albums/fever-epilogue.jpeg', 'titleTrack': 'Turbulence', 'tracks': ['Turbulence', 'Be With You', 'The Letter', 'Still Here (Korean Ver.)', 'Better (Korean Ver.)', 'The Real (Heung Ver.)', 'WAVE (Overture)', 'WONDERLAND (Symphony No.9)', 'Answer (Ode to Joy)', 'Outro: Over the Horizon']},
    {'title': 'THE WORLD EP.1: MOVEMENT', 'year': '2022', 'type': 'Mini Album', 'cover': '/images/albums/the-world-ep1.jpg', 'titleTrack': 'Guerrilla', 'tracks': ['PROPAGANDA', 'Sector 1', 'Cyberpunk', 'Guerrilla', 'The Ring', 'WDIG (Where Do I Go)', 'New World']},
    {'title': 'Spin Off: From The Witness', 'year': '2022', 'type': 'Single Album', 'cover': '/images/albums/halazia.jpg', 'titleTrack': 'HALAZIA', 'tracks': ['HALAZIA', 'WIN (June One of Glen Check Remix)', 'Take Me Home (IDIOTAPE Remix)', "I'm The One (Eden-ary Remix)", 'Outro: Blue Bird']},
    {'title': 'THE WORLD EP.2: OUTLAW', 'year': '2023', 'type': 'Mini Album', 'cover': '/images/albums/the-world-ep2.jpg', 'titleTrack': 'BOUNCY (K-HOT CHILLI PEPPERS)', 'tracks': ['This World', 'Dune', 'BOUNCY (K-HOT CHILLI PEPPERS)', 'DJANGO', 'Wake Up', 'Outlaw']},
    {'title': 'Limitless', 'year': '2023', 'type': 'Japanese Single', 'cover': '/images/albums/limitless.jpg', 'titleTrack': 'Limitless', 'tracks': ['Limitless', 'Limitless (Japanese Ver.)']},
    {'title': 'THE WORLD EP.FIN: WILL', 'year': '2023', 'type': 'Full Album', 'cover': '/images/albums/the-world-epfin.jpg', 'titleTrack': 'Crazy Form', 'tracks': ['WE KNOW', 'Emergency', 'Crazy Form', 'ARRIBA', 'Silver Light', 'Crescent Pt. 2', 'Dreamy Day', 'MATZ', "IT's You", 'Youth', 'Everything', 'FIN: WILL']},
    {'title': 'NOT OKAY', 'year': '2024', 'type': 'Japanese Single', 'cover': '/images/albums/not-okay.jpg', 'titleTrack': 'NOT OKAY', 'tracks': ['NOT OKAY', 'NOT OKAY (Japanese Ver.)', 'Limitless (Japanese Ver.)']},
    {'title': 'GOLDEN HOUR: Part.1', 'year': '2024', 'type': 'Mini Album', 'cover': '/images/albums/golden-hour-pt1.jpg', 'titleTrack': 'WORK', 'tracks': ['Golden Hour', 'Blind', 'WORK', 'Empty Box', 'Shaboom', 'Siren']},
    {'title': 'GOLDEN HOUR: Part.2', 'year': '2024', 'type': 'Mini Album', 'cover': '/images/albums/golden-hour-pt2.jpg', 'titleTrack': 'Ice On My Teeth', 'tracks': ['Deep Dive', 'Scene 1: Value', 'Ice On My Teeth', 'Man On Fire', 'Selfish Waltz', 'Enough']},
    {'title': 'Birthday', 'year': '2024', 'type': 'Japanese Single', 'cover': '/images/albums/birthday.jpg', 'titleTrack': 'Birthday', 'tracks': ['Birthday', 'Birthday (Japanese Ver.)']},
    {'title': 'GOLDEN HOUR: Part.3', 'year': '2025', 'type': 'Mini Album', 'cover': '/images/albums/golden-hour-pt3.jpg', 'titleTrack': 'Lemon Drop', 'tracks': ['Lemon Drop', 'Masterpiece', "Now This House Ain't a Home", 'Castle', 'Bridge: The Edge of Reality']},
    {'title': 'GOLDEN HOUR: Part.3 In Your Fantasy Edition', 'year': '2025', 'type': 'Repackage', 'cover': '/images/albums/golden-hour-pt3-fantasy.jpg', 'titleTrack': 'In Your Fantasy', 'tracks': ['Lemon Drop', 'Masterpiece', "Now This House Ain't a Home", 'Castle', 'Bridge: The Edge of Reality', 'In Your Fantasy', 'NO1 (Hongjoong Solo)', 'Skin (Seonghwa Solo)', 'Slide to Me (Yunho Solo)', 'Legacy (Yeosang Solo)', 'Creep (San Solo)', 'ROAR (Mingi Solo)', 'Sagittarius (Wooyoung Solo)', 'To Be Your Light (Jongho Solo)', 'In Your Fantasy (Korean Ver.)']},
    {'title': 'GOLDEN HOUR: Part.4', 'year': '2026', 'type': 'Mini Album', 'cover': '/images/albums/golden-hour-pt4.jpeg', 'titleTrack': 'Adrenaline', 'tracks': ['Ghost', 'Adrenaline', 'NASA', 'On The Road', 'Choose']},
]


@app.route('/')
def index():
    return render_template('index.html',
        left_characters=left_characters,
        right_characters=right_characters,
        members=members,
        albums=albums,
        members_json=json.dumps(members, ensure_ascii=False),
        albums_json=json.dumps(albums, ensure_ascii=False),
    )
