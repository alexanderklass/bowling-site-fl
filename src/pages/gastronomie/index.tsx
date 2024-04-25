import schnitzel from './assets/schnitzel.png';
import pizza from './assets/pizza.png';
import FadeAnimation from '../../components/FadeAnimation.tsx';
import GridBackground from './components/GridBackground.tsx';
import GridItem from './components/GridItem.tsx';
import onStartUp from '../../utils/documentHelper.ts';
import GridDisclosure from '../../components/GridDisclosure.tsx';
import { useEffect } from 'react';
import Image from '../../components/Image.tsx';

const Index = () => {
    useEffect(() => {
        onStartUp('Gastronomie');
    }, []);

    return (
        <main className={'flex flex-col items-center justify-center gap-5 md:gap-5'}>
            <section className={'flex flex-col items-center justify-center gap-20'}>
                <FadeAnimation>
                    <p className={'mb-1 text-xl font-bold'}>Nur für kurze Zeit</p>
                    <div className={'flex flex-col items-center gap-10 md:flex-row'}>
                        <Image src={pizza} alt={'pizza'} />
                        <div className={'flex-col gap-2'}>
                            <p className={'text-base font-bold text-blue-500 2xl:text-[20px]'}>Große Pizza 🍕</p>
                            <p className={'text-gray-600'}>
                                Ca. 60x60cm Belag nach Wahl: Salami, Schinken, Margherita und Gemüse
                            </p>
                            <p className={'text-base font-bold text-black 2xl:text-[18px]'}>27,00 €</p>
                        </div>
                    </div>
                </FadeAnimation>

                <FadeAnimation>
                    <div className={'flex flex-col items-center gap-2 md:flex-row-reverse'}>
                        <Image src={schnitzel} alt={'schnitzel'} />
                        <div className={'flex flex-col gap-2'}>
                            <p className={'text-base font-bold text-blue-500 2xl:text-[20px]'}>Schnitzel Satt 🥩</p>
                            <p className={'text-gray-600'}>
                                Ab 10 Personen Mit Champignon- und Paprikasoße, dazu Bratkartoffeln und Pommes. Auf
                                Wunsch auch Putenschnitzel oder Vegetarische Schnitzel
                            </p>
                            <p className={'text-base font-bold text-black 2xl:text-[18px]'}>22,50 € p.P</p>
                        </div>
                    </div>
                </FadeAnimation>
            </section>

            <FadeAnimation>
                <p className={'mb-1 text-xl font-bold'}>Speisekarte 📖</p>
                <section
                    className={
                        'grid w-full grid-cols-1 items-start justify-center gap-y-2 rounded-md bg-blue-50 p-2 ring-1 md:grid-cols-2 md:gap-x-4 md:gap-y-2'
                    }
                >
                    <GridDisclosure title={'PIZZA'}>
                        <GridBackground backgroundColor={'bg-blue-200 rounded'}>
                            <GridItem cols={'grid-cols-3'} titles={['', 'Klein', 'Groß']} />
                            <GridItem cols={'grid-cols-3'} texts={['Margherita', '9,50€', '10,50€']} />
                            <GridItem
                                cols={'grid-cols-3'}
                                texts={['Salami, Schinken oder Thunfisch', '10,90€', '12,90€']}
                            />
                            <GridItem cols={'grid-cols-3'} texts={['Veggie', '11,50€', '14,50€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Hawaii', '11,50€', '14,50€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Hackfleisch(Rind)', '12,50€', '15,50€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'PIZZABRÖTCHEN'}>
                        <GridBackground backgroundColor={'bg-blue-200 rounded'}>
                            <GridItem cols={'grid-cols-3'} titles={['', 'Käse', 'Schinken, Salami, Thunfisch']} />
                            <GridItem cols={'grid-cols-3'} texts={['8 Stück + Dip', '7,50€', '8,50€']} />
                            <div className={'mt-5 text-[13px] text-blue-700'}>
                                <p>Dips: Aioli, Hollondaise oder Cocktail</p>
                                <p>Extra Dip: 1,00€</p>
                            </div>
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'SCHNITZEL'}>
                        <GridBackground backgroundColor={'bg-blue-200 rounded'}>
                            <GridItem cols={'grid-cols-2'} titles={['', '']} />
                            <GridItem cols={'grid-cols-2'} texts={['"Wiener Art" mit Salatbeilage', '15,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Holsteiner Art(mit Spiegelei)', '16,90€']} />
                            <GridItem
                                cols={'grid-cols-2'}
                                texts={['Mit Champignonrahmsoße, Paprikarahmsoße oder Zwiebelsoße', '17,50€']}
                            />
                            <div className={'mt-5 text-[13px] text-blue-700'}>
                                <p>Inklusive Salat und einer Beilage nach Wahl:</p>
                                <p>Pommes, Kroketten oder Bratkartoffeln</p>
                            </div>
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'NUDELGERICHTE'}>
                        <GridBackground backgroundColor={'bg-blue-200 rounded'}>
                            <GridItem cols={'grid-cols-2'} titles={['', '']} />
                            <GridItem cols={'grid-cols-2'} texts={['Penne mit Schweinegeschnetzeltem', '13,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Penne mit Garnelen in Knoblauchsoße', '16,50€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'BURGER'}>
                        <GridBackground backgroundColor={'bg-blue-200 rounded'}>
                            <GridItem cols={'grid-cols-2'} titles={['', '']} />
                            <GridItem cols={'grid-cols-2'} texts={['Hamburger mit Pommes', '10,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Cheeseburger mit Pommes', '11,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Veggieburger mit Pommes', '11,50€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'WEITER HIGHLIGHTS'}>
                        <GridBackground backgroundColor={'bg-blue-200 rounded'}>
                            <GridItem cols={'grid-cols-2'} titles={['', '']} />
                            <GridItem cols={'grid-cols-2'} texts={['Nuggets mit Pommes', '7,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Pommes mit Ketchup/Mayo', '5,00€']} />
                            <GridItem
                                cols={'grid-cols-2'}
                                texts={['Gebackener Camembert mit Preiselbeeren', '8,90€']}
                            />
                            <GridItem cols={'grid-cols-2'} texts={['Currywurst mit Pommes', '9,50€']} />
                            <GridItem
                                cols={'grid-cols-2'}
                                texts={['Garnelen mit Aioli, Salatbeilage und Baguettebrot', '14,90€']}
                            />
                            <GridItem cols={'grid-cols-2'} texts={['Bauernfrühstück', '10,50€']} />
                            <GridItem cols={'grid-cols-2 text-blue-700'} texts={['Ketchup oder Mayo extra', '0,50€']} />
                        </GridBackground>
                    </GridDisclosure>
                </section>
            </FadeAnimation>

            <FadeAnimation>
                <p className={'mb-1 text-xl font-bold'}>Getränke 🍹</p>
                <section
                    className={
                        'grid w-full grid-cols-1 items-start justify-start gap-2 rounded-md bg-blue-50 p-2 ring-1 md:grid-cols-2 md:gap-x-4'
                    }
                >
                    <GridDisclosure title={'ALKOHOLFREIE GETRÄNKE'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-4'} titles={['', '0,3L', '0,5L', 'FLASCHE']} />
                            <GridItem
                                cols={'grid-cols-4'}
                                texts={['Wasser (Classic, Medium, Still)', '3,20€', '4,10€', '5,50€']}
                            />
                            <GridItem cols={'grid-cols-4'} texts={['Coca Cola', '3,50€', '4,30€', '6,00€']} />
                            <GridItem
                                cols={'grid-cols-4'}
                                texts={['Coca Cola light/zero', '3,50€', '4,30€', '6,00€']}
                            />
                            <GridItem
                                cols={'grid-cols-4'}
                                texts={['Fanta, Sprite, Mezzo Mix', '3,50€', '4,30€', '6,00€']}
                            />
                            <GridItem cols={'grid-cols-4'} texts={['Sport Vital', '3,50€', '4,30€', '6,00€']} />
                            <GridItem
                                cols={'grid-cols-4'}
                                texts={['Schweppes Ginger, Ale Bitter , Lemon Tonic Water', '3,70€', '4,50€', '6,50€']}
                            />
                            <GridItem cols={'grid-cols-4'} texts={['Red Bull 0,25l', '4,00€', '-', '-']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'SÄFTE & NEKTAR'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-3'} titles={['', '0,3L', '0,5L']} />
                            <GridItem cols={'grid-cols-3'} texts={['Apfel', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Banane', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Kirsche', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Orange', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Maracuja', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Kiba', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Ananas', '3,90€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Rhabarber', '3,90€', '4,90€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'WARME GETRÄNKE'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', 'TASSE/BECHER']} />
                            <GridItem cols={'grid-cols-2'} texts={['Kaffee', '3,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Capuccino', '4,10€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Latte Machiato', '4,10€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Espresso', '3,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Tee', '3,10€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'SEKT & WEIN'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-3'} titles={['', '0,1L', '0,2L']} />
                            <GridItem cols={'grid-cols-3'} texts={['Sekt Hausmarke', '4,30€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Prosecco Hausmarke', '4,70€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Weißwein/Rotwein Hausmarke', '-', '4,70€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Weißweinschorle', '-', '3,60€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'BIER'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-3'} titles={['', '0,3L', '0,5L']} />
                            <GridItem cols={'grid-cols-3'} texts={['Flensburger vom Fass', '3,80€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Alster vom Fass', '3,80€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Original Hofbräu vom Fass', '3,80€', '4,90€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Schneider Weizen hell vom Fass', '-', '4,90€']} />
                            <GridItem
                                cols={'grid-cols-3'}
                                texts={['Schneider Weizen Original, Kristall, Alkoholfrei', '-', '4,90€']}
                            />
                            <GridItem cols={'grid-cols-3'} texts={['Bananenweizen', '-', '5,10€']} />
                            <GridItem
                                cols={'grid-cols-3'}
                                texts={['Flens Flasche(0,33l), Edles Helles, Dunkel, Gold, Frei, Malz', '3,80€', '-']}
                            />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'RUM/VODKA/LIKÖR'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', 'LONGDRINKS 4CL']} />
                            <GridItem cols={'grid-cols-2'} texts={['Bacardi', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Havana 3 Jahre', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Havana 7 Jahre', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Captain Morgan', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Rum 1878', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Wodka Gorbatschow', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Wodka Danzka', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Capmari', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Amaretto', '6,00€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'SPIRITUOSEN & GIN'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', 'LONGDRINKS 4CL']} />
                            <GridItem cols={'grid-cols-2'} texts={['Pernod', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Oldesloer Korn', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Sternmarke', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Bombay Gin', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Gordons Gin', '6,00€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'WHISKEY & BOURBON'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', 'LONGDRINKS 4CL']} />
                            <GridItem cols={'grid-cols-2'} texts={['Ballantines', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jim Beam', '6,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Tullamore Dew', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jack Daniels', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Canadian Club', '7,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Southern Comfort', '6,00€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'FLASCHE + 2 FLASCHEN SOFTGETRÄNKE'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', 'PREIS']} />
                            <GridItem cols={'grid-cols-2'} texts={['STERNMARKE', '25,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Oldesloer', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Wodka Gorbatschow', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Ballantines', '50,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jim Beam', '50,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Tullamore', '60,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Flasche Sekt(Hausmarke)', '18,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Flasche Wein(Hausmarke)', '20,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jack Daniels', '60,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Havana Club 3 Jahre', '50,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Havana Club 7 Jahre', '60,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Captain Morgan', '50,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Bacardi', '50,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Wodka Danzka', '60,00€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'KURZE'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', '2CL']} />
                            <GridItem cols={'grid-cols-2'} texts={['Ramazotti', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jägermeister', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Ouzo', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Bommerlunder', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Gammel Danks', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Wodka', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Korn/Apfelkorn', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Tequila Silber/Gold', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Berliner Luft', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Saurer Apfel', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Sambuca', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Sangrita rot/grün', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Kleiner Feigling', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Nr.3', '2,50€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Dooley oder Baileys', '3,50€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'PÖTTE MIT SOFTGETRÄNKEN'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', 'PREIS']} />
                            <GridItem cols={'grid-cols-2'} texts={['Sternmarke', '15,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Oldesloer Korn', '20,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Wodka', '20,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Bacardi', '25,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Captain Morgan', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Havana Club 3 Jahre', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Havana Club 7 Jahre', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jack Daniels', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Jim Beam', '30,00€']} />
                            <GridItem cols={'grid-cols-2'} texts={['Tullamore', '30,00€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'COCKTAILS'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-3'} titles={['', 'MIT ALKOHOL', 'OHNE ALKOHOL']} />
                            <GridItem cols={'grid-cols-3'} texts={['Aperol Spritz', '7,00€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Andalö/Sekt', '5,00€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Sex on the Beach', '7,00€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Pina Colada', '7,50€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Mai Tai', '7,00€', '-']} />
                            <GridItem cols={'grid-cols-3'} texts={['Strawberry Colada', '-', '6,00€']} />
                            <GridItem cols={'grid-cols-3'} texts={['Sportsmann', '-', '6,00€']} />
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'GRAPPA'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', '2CL']}></GridItem>
                            <GridItem cols={'grid-cols-2'} texts={['Di Otto Lune', '8,50€']}></GridItem>
                            <GridItem cols={'grid-cols-2'} texts={['Prime Uve', '9,00€']}></GridItem>
                        </GridBackground>
                    </GridDisclosure>

                    <GridDisclosure title={'EINZELFLASCHEN'}>
                        <GridBackground>
                            <GridItem cols={'grid-cols-2'} titles={['', '0,7L']}></GridItem>
                            <GridItem cols={'grid-cols-2'} texts={['Nr.3(Hausgemacht)', '20,00€']}></GridItem>
                            <GridItem cols={'grid-cols-2'} texts={['Apfelkorn(Hausgemacht)', '20,00€']}></GridItem>
                            <GridItem cols={'grid-cols-2'} texts={['Berliner Luft', '25,00€']}></GridItem>
                        </GridBackground>
                    </GridDisclosure>
                </section>
            </FadeAnimation>
        </main>
    );
};

export default Index;
