const copy = {
    English: {
        menu: [
            {
                text: 'models', link: '#', id: 1, submenu: [
                    {
                        text: 'DIAMOND 550',
                        link: '/diamond-550',
                        id: 1.1,
                        img: 'sample-boat-slide.png'
                    },
                    {
                        text: 'Coming soon',
                        link: '/diamond-550',
                        id: 1.2,
                        img: 'sample-boat-slide.png'
                    }
                ]
            },
            { text: 'News', link: '/news', id: 2 },
            { text: 'About us', link: '/about', id: 3 },
            { text: 'Contact', link: '/contact', id: 4 }
        ],
        header: {
            title: 'Modern Luxury Boats',
            msg: 'Elevate Your Escape'
        },
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
        form: {
            name:'Name',
            email:'Email Address',
            country:'Country',
            city:'City',
            boat:'Do You own our Boat?',
            message:'Message'
        },
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
        otther: {},
    },
};

export default copy;
