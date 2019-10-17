const copy = {
    English: {
        menu: [
            {text: 'models', link: '#',id:1},
            {text: 'news',link:'/news',id:2},
            {text: 'About us',link:'/about', id:3},
            {text: 'Contact',link:'/retailers', id:4}
        ],
        header:{
            title:'Modern Luxury Boats',
            msg:'Elevate Your Escape'
        },
        section: {
            counter: {
                header: 'Check your reading speed',
                describtion: 'Just input the text, click on start, and as soon as you are done with reading, click it again. You will see your results and progress from previous tests.',
                inputtextdesc: 'Paste your chosen text here:',
                timeOfReading: 'Time reading',
                wordsPerMinute: 'Words per minute',
                numberOfWords: 'Words in text',
                latest: 'Latest',
            },
            jumper: {
                header: 'Train your eyes',
                describtion: 'This tool alows you to move your eyes a bit! Just input text, and follow displayed words with your eyes, without moving head. This way you\' force your muscles to work',
            },
            main: {
                header: 'Read faster by making the screen do the work!',
                describtion: 'This tool shows you text displaying it in one place, so you can eliminate jumping your eyes and loosing track of what you read, instead - focus on understanding!',
            },
        },
        controls: {
            speed: 'Speed',
            words: 'Words',
            rows: 'Rows',
            stop: 'Stop',
            start: 'Start',
            restart: 'Restart',
            rewind: 'Rewind',
            reset: 'Reset',
        },
        faq: [
            {
                question: 'Why bother?',
                answear: 'For fun, for checking your skills, and improving them. For keeping eyes sharp and maybe even just to read some text quicker.',
            },
            {
                question: 'How to progress further',
                answear: 'There are tons of useful articles available on fast reading. After that we suggest some additional training.',
            },
            {
                question: 'What did you learn doing this project?',
                answear: 'Making tools like this helps to learn new technologies, in our case it was improving RWD, Vue, Vuex skills as well as our overall project managing experience.',
            },
        ],
        contact: [
            {
                name: 'Michał Mietliński',
                github: 'https://github.com/michalmietlinski',
            },
            {
                name: 'Aleksander Jakubowski',
                github: 'https://github.com/ol3kjak',
            },
        ],
        slider: [
            {
                id: 1,
                src: 'sample-boat-slide.png',
                title: 'Slide 1',
                description: 'This is desc of slide 1',
            },
            {
                id: 2,
                src: 'sample-boat-slide.png',
                title: 'Slide 2',
                description: 'This is desc of slide 2',
            },
            {
                id: 3,
                src: 'sample-boat-slide.png',
                title: 'Slide 3',
                description: 'This is desc of slide 3',
            },
            {
                id: 4,
                src: 'sample-boat-slide.png',
                title: 'Slide 4',
                description: 'This is desc of slide 4',
            },
        ],
        mainpageText: {
            title: 'This is a title. Like seriously.',
            paragraphs: ['First paragraph! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quibusdam, ullam. Ad, architecto cumque deleniti, deserunt eos ex exercitationem illo neque.', 'Second paragraph! Bcaecati perferendis possimus quod suscipit temporibus! Deleniti, porro provident.']
        },
        findRetailer: {
            title: 'Find closest retailer',
            placeholder: 'Type in city name...',
            button: 'See all retailers',
        },
        retailersPage: {
            title: 'D-Retailers nearby',
            paragraph: "Find closest dealer and get your D-Boat today! Don't wait.",
            locationBtn: 'Use my location',
            mapsButton: 'See on Google Maps',
            webButton: 'Visit website',
            mailButton: 'Write to retailer',
        }
    },
    Polski: {
        menu: {
            faq: 'FAQ',
            contact: 'Kontakt',
            jumper: 'Skoczek !',
            timer: 'Czas',
            home: 'Home',
        },
        section: {
            counter: {
                header: 'Sprawdź swoje obecną predkość / tepo czytania',
            },
            jumper: {
                header: 'Tranuj swój wzrok',
                describtion: 'zabawka',
            },
            main: {
                header: 'Czytaj szybciej dzięki pomocy aplikacji',
                describtion: 'zabawka',
            },
        },
        faq: [
            {
                question: 'Pytanie 1',
                answear: 'Odpowiedź 1',
            },
            {
                question: 'Pytanie 2',
                answear: 'Odpowiedź 2',
            },
        ],
        buttton: {
            submit: 'SUBMIT',
        },
        otther:{},
    },
};

export default copy;
