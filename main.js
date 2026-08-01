/**
 * Klasa reprezentująca bazę danych dla listy zadań i znajdziek.
 */
class ChecklistData {
    constructor() {
        this.categories = {
            npc: {
                title: "Questy NPC",
                groups: [
                    {
                        name: "Greirat z Osady Nieboszczyków",
                        items: [
                            { id: "npc_g_1", name: "Krok 1: Uwolnienie z celi", desc: "Zdobądź Cell Key na High Wall of Lothric, otwórz jego celę na dole i zgódź się odnaleźć Loretta." },
                            { id: "npc_g_2", name: "Krok 2: Loretta's Bone", desc: "Znajdź Loretta's Bone na balkonie w Undead Settlement. Wręcz kość Greiratowi w Kaplicy Zjednoczenia. Zresetuj lokację i porozmawiaj z nim ponownie (Otrzymasz Blue Tearstone Ring)." },
                            { id: "npc_g_3", name: "Krok 3: Wyprawa 1 (Undead Settlement)", desc: "Wysłać go na rabunek po pokonaniu dowolnego pierwszego bossa. Powróci po zabiciu kolejnego bossa z nowymi przedmiotami." },
                            { id: "npc_g_4", name: "Krok 4: Wyprawa 2 (Irithyll) - Warunki przeżycia", desc: "Wyślij go po dotarciu do Irithyll. ABY PRZEŻYŁ: 1) Siegward musi siedzieć przy kominku w Irithyll ZANIM wyślesz Greirata ORAZ nie wchodź do Irithyll Dungeon LUB 2) Nie kupuj zbroi Siegwarda od Patchesa i powiedz Patchesowi o wyprawie Greirata." },
                            { id: "npc_g_5", name: "Krok 5: Wyprawa 3 (Lothric Castle) - Śmierć", desc: "Wyślij go do Lothric Castle. Greirat NIEUCHRONNIE ginie na dachach Grand Archives. Zdobądź jego popiół (Greirat's Ashes) i przekaż Shrine Handmaiden." }
                        ]
                    },
                    {
                        name: "Siegward z Catariny (Cebulowy Rycerz)",
                        items: [
                            { id: "npc_s_1", name: "Krok 1: Winda w Undead Settlement", desc: "Porozmawiaj z nim przy windzie w wieży. Wjedź na górę, zjedź na półpiętro, porozmawiaj na balkonie i pomóż mu pokonać ognistego demona. Otrzymasz Siegbräu oraz gesty Toast i Sleep." },
                            { id: "npc_s_2", name: "Krok 2: Studnia przy Katedrze", desc: "Cathedral of the Deep: Otwarciu głównych wstrętnych drzwi Katedry sprawi, że Siegward pojawi się w studni przed wejściem. Odkup jego zbroję od Patchesa i wrzuć mu ją do studni." },
                            { id: "npc_s_3", name: "Krok 3: Kuchnia w Irithyll", desc: "Porozmawiaj z nim przy kominku w kuchni w Irithyll of the Boreal Valley. Zjedz z nim zupę (daje gest Toast i czar Emit Force)." },
                            { id: "npc_s_4", name: "Krok 4: Cela w Irithyll Dungeon", desc: "Profaned Capital: Zdobądź Old Cell Key w ruinach z toksynami. Przeskocz z dachu budynku z magiem do okna celi i uwolnij Siegwarda (otrzymasz Titanite Slab)." },
                            { id: "npc_s_5", name: "Krok 5: Finał z Yhormem", desc: "Wejdź do walki z Yhorm the Giant w Profaned Capital. Siegward dołączy w przerywniku filmowym. Po walce wypij z nim po raz ostatni i zgarnij jego zestaw uzbrojenia." }
                        ]
                    },
                    {
                        name: "Anri z Astory i Horace Niemy – Ścieżka Dobra (Slayer of Aldrich)",
                        items: [
                            { id: "npc_anri_1", name: "Krok 1: Halfway Fortress", desc: "Porozmawiaj z Anri i Horace'em przy ognisku na Road of Sacrifices. Horace da przymierze Blue Sentinels." },
                            { id: "npc_anri_2", name: "Krok 2: Firelink Shrine", desc: "Porozmawiaj z nimi w Kaplicy po pokonaniu Deacons of the Deep." },
                            { id: "npc_anri_3", name: "Krok 3: Catacombs of Carthus", desc: "Porozmawiaj z Anri w dwóch miejscach w katakumbach przed drewnianym mostem. Pytają o brakującego Horace'a." },
                            { id: "npc_anri_4", name: "Krok 4: Smouldering Lake", desc: "Zejdź na dno Smouldering Lake, odnajdź Horace'a w jaskini i go zabij. Wróć do Anri i powiedz jej, gdzie był (lub zataj informację)." },
                            { id: "npc_anri_5", name: "Krok 5: Church of Yorshka", desc: "Porozmawiaj z Anri przy ognisku w Irithyll. ZABIJ skrytobójcę ukrytego pod postacią statuy w kącie pomieszczenia!" },
                            { id: "npc_anri_6", name: "Krok 6: Pomoc w Anor Londo", desc: "Użyj znaku przyzwania Anri przed drzwiami katedry w Anor Londo i pomóż jej pokonać Aldricha." },
                            { id: "npc_anri_7", name: "Krok 7: Zakończenie", desc: "Odbierz Anri's Straight Sword od Ludletha w Kaplicy. Anri stanie się pustym i znajdziesz ją przy ognisku Cathedral of the Deep lub Smouldering Lake." }
                        ]
                    },
                    {
                        name: "Anri z Astory – Ścieżka Zła (Lord of Hollows / Ślub)",
                        items: [
                            { id: "npc_anri_bad_1", name: "Krok 1-4: Standardowe postępowanie", desc: "Wykonaj kroki 1-4 z wątku Anri (Halfway Fortress, Firelink, Katakumby, Horace)." },
                            { id: "npc_anri_bad_2", name: "Krok 5: Church of Yorshka (Ostrzeżenie!)", desc: "Porozmawiaj z Anri w Kościele Yorshki. NIE ZABIJAJ skrytobójcy w rogu! Pozwól mu przeżyć." },
                            { id: "npc_anri_bad_3", name: "Krok 6: Rozmowa z Yuria", desc: "Po pokonaniu Pontiff Sulyvahna wróć do Kaplicy i porozmawiaj z Yuria z Londor. Poinformuje cię, że twój małżonek jest gotowy." },
                            { id: "npc_anri_bad_4", name: "Krok 7: Rytuał Ślubny", desc: "Udaj się do ukrytej komnaty pod Anor Londo (za iluzoryczną ścianą przed ruchem obrotowym). Odbierz miecz od Pielgrzyma i uderz ciało Anri (otrzymasz 3 Dark Sigils)." }
                        ]
                    },
                    {
                        name: "Yoel z Londor",
                        items: [
                            { id: "npc_yoel_1", name: "Krok 1: Rekrutacja", desc: "Foot of the High Wall: Odnajdź Yoela wśród klęczących pielgrzymów i porozmawiaj z nim, wysyłając go do Firelink Shrine." },
                            { id: "npc_yoel_2", name: "Krok 2: Draw True Strength (5 razy)", desc: "Awansuj u Yoela 5 razy za darmo, celowo ginąc, aby podnosić poziom Poziomu Pustki (Hollowing) i Mrocznych Pieczęci. WYKONAJ TO PRZED wejściem do Catacombs of Carthus!" },
                            { id: "npc_yoel_3", name: "Krok 3: Śmierć Yoela", desc: "Po uzyskaniu 5 Dark Sigils lub wejściu do Katakumb Yoel ginie. Jeśli uzyskałeś 5 pieczęci, w jego miejscu pojawi się Yuria." }
                        ]
                    },
                    {
                        name: "Yuria z Londor",
                        items: [
                            { id: "npc_yuria_1", name: "Krok 1: Pojawienie się w Kaplicy", desc: "Pojawi się obok zwłok Yoela, jeśli uzyskałeś od niego 5 Dark Sigils. Daje gest Dignified Bow." },
                            { id: "npc_yuria_2", name: "Krok 2: Prowadzenie Ślubu", desc: "Podążaj za jej instrukcjami odnośnie Anri aż do wykonania rytuału ślubnego w Anor Londo." },
                            { id: "npc_yuria_3", name: "Krok 3: Zakończenie Lord of Hollows", desc: "Przyzwij Yuria do finałowej walki z Soul of Cinder LUB po ukończeniu gry i wybraniu zakończenia 'Usurpation of Fire' zgarnij jej sprzęt z Kaplicy." }
                        ]
                    },
                    {
                        name: "Sirris z Bezchmurnego Królestwa",
                        items: [
                            { id: "npc_sirris_1", name: "Krok 1: Pierwsze spotkanie", desc: "Pojawia się w Firelink Shrine po rozmowie z Anri w Halfway Fortress." },
                            { id: "npc_sirris_2", name: "Krok 2: Dreamchaser's Ashes", desc: "Znajdź te popioły przy wilku w Farron Keep i oddaj Shrine Handmaiden. Porozmawiaj z Sirris w Kaplicy (daje gest Loyal Bow)." },
                            { id: "npc_sirris_3", name: "Krok 3: Pomoc w Irithyll", desc: "Użyj jej znaku przyzwania na moście w Irithyll (po zabiciu bestii) i pomóż jej pokonać Creightona." },
                            { id: "npc_sirris_4", name: "Krok 4: Pomoc z Hodrickiem", desc: "Po pokonaniu Aldricha użyj jej znaku przed wejściem do Rotted Greatwood i pomóż jej zabić jej dziadka Hodricka." },
                            { id: "npc_sirris_5", name: "Krok 5: Złożenie Przysięgi", desc: "Porozmawiaj z nią w Kaplicy i przyjmij jej służbę. Po pokonaniu Twin Princes znajdziesz jej ciało przy grobie z Sunset Shield." },
                            { id: "npc_sirris_fail", name: "KROK OSTRZEGAWCZY", desc: "Oddanie chociaż 1 Pale Tongue Rosarii LUB założenie wyposażenia Rosaria's Fingers ZAFAŁSZUJE ten quest – Sirris stanie się wrogiem!" }
                        ]
                    },
                    {
                        name: "Niezłomny Patches",
                        items: [
                            { id: "npc_patches_1", name: "Krok 1: Pułapka w Katedrze", desc: "Cathedral of the Deep: Daj się oszukać Patchesowi przebranemu za Siegwarda na obniżonym moście." },
                            { id: "npc_patches_2", name: "Krok 2: Zamknięcie w Wieży", desc: "Kup Tower Key za 20k dusz, wjedź windą na górę wieży w Kaplicy – Patches zamknie drzwi na dół." },
                            { id: "npc_patches_3", name: "Krok 3: Przebaczenie", desc: "Zeskocz na dół, odnajdź go na górnym piętrze Kaplicy i wybierz opcję 'Do not forgive'. Daje gest Prostration i staje się handlarzem." }
                        ]
                    },
                    {
                        name: "Irina z Carim – Święta Ścieżka (Dobra)",
                        items: [
                            { id: "npc_irina_good_1", name: "Krok 1: Uwolnienie", desc: "Undead Settlement: Kup Grave Key od Handmaiden, przejdź przez kanały i uwolnij Irinę. Eygon stanie się sprzymierzeńcem." },
                            { id: "npc_irina_good_2", name: "Krok 2: Kupowanie Świętych Cudów", desc: "Dostarczaj jej Braille Divine Tome of Carim oraz Lothric. Kup WSZYSTKIE święte cuda." },
                            { id: "npc_irina_good_3", name: "Krok 3: Stanie się Firekeeperem", desc: "Po wykupieniu wszystkich świętych cudów Irina przeniesie się do wnętrza wieży obok Kaplicy i stanie się nową Powierniczką Ognia." }
                        ]
                    },
                    {
                        name: "Irina z Carim – Mroczna Ścieżka (Zła)",
                        items: [
                            { id: "npc_irina_bad_1", name: "Krok 1: Przekazanie Mrocznych Tomów", desc: "Wręcz Irinie Londor lub Deep Braille Divine Tome." },
                            { id: "npc_irina_bad_2", name: "Krok 2: Kupowanie Mrocznych Cudów", desc: "Kup przynajmniej jeden Mroczny Czas. Irina zacznie tracić zmysły." },
                            { id: "npc_irina_bad_3", name: "Krok 3: Porwanie przez Eygona", desc: "Po wykupieniu mrocznych cudów Eygon zabierze ją pod bramę Iudex Gundyr. Zabij Eygona, aby odzyskać zszokowaną Irinę." }
                        ]
                    },
                    {
                        name: "Hawkwood Dezerter",
                        items: [
                            { id: "npc_hawk_1", name: "Krok 1: Rozmowy w Kaplicy", desc: "Rozmawiaj z nim regularnie w Firelink Shrine (daje gest Collapse oraz Heavy Gem po pokonaniu wybranych bossów)." },
                            { id: "npc_hawk_2", name: "Krok 2: Opuści Kaplicę", desc: "Po pokonaniu Abyss Watchers Hawkwood opuści Kaplicę, zostawiając Hawkwood's Shield przy grobie na zewnątrz." },
                            { id: "npc_hawk_3", name: "Krok 3: Dragon Torso Stone", desc: "Porozmawiaj z nim na Archdragon Peak, gdzie przyzwiesz go do wspólnej drogi na szczyt." },
                            { id: "npc_hawk_4", name: "Krok 4: Pojedynek w Arenie", desc: "Porozmawiaj z Andre w Kaplicy (przekaże wiadomość od Hawkwooda). Udaj się do areny Abyss Watchers i pokonaj Hawkwooda w pojedynku o Dragon Head Stone." }
                        ]
                    },
                    {
                        name: "Leonhard (Ringfinger Leonhard)",
                        items: [
                            { id: "npc_leo_1", name: "Krok 1: Kula Czerwonego Oka", desc: "Porozmawiaj z nim przy tronie Lothrica w Kaplicy. Daje Crack Red Eye Orbs. Po pokonaniu Cursed-Rotted Greatwood da Lift Chamber Key." },
                            { id: "npc_leo_2", name: "Krok 2: Zabij Darkwraitha", desc: "Użyj klucza pod dzwonnicą na High Wall of Lothric, zjedź windą i zabij Darkwraitha, by zdobyć Red Eye Orb." },
                            { id: "npc_leo_3", name: "Krok 3: Służba Rosarii", desc: "Dołącz do Rosaria's Fingers i zaoferuj przynajmniej 1 Pale Tongue. Leonhard pojawi się przy drzwiach do komnaty Rosarii." },
                            { id: "npc_leo_4", name: "Krok 4: Zabójstwo Rosarii", desc: "Po dotarciu do Profaned Capital wróć do komnaty Rosarii i podnieś z jej zwłok Black Eye Orb." },
                            { id: "npc_leo_5", name: "Krok 5: Zemsta w Anor Londo", desc: "Udaj się do komnaty Gwynevere w Anor Londo. Użyj Black Eye Orb, najedź świat Leonharda i zabij go (otrzymasz jego broń, maskę i duszę Rosarii)." }
                        ]
                    },
                    {
                        name: "Orbeck z Vinheim",
                        items: [
                            { id: "npc_orb_1", name: "Krok 1: Rekrutacja", desc: "Road of Sacrifices: Porozmawiaj z nim na piętrze ruin przed Crystal Sage (WYMAGANE MINIMUM 10 INTELIGENCJI)." },
                            { id: "npc_orb_2", name: "Krok 2: Umowa Zwojów", desc: "Musisz przynieść mu przynajmniej 1 Zwój przed zabiciem 4 kolejnych bossów, inaczej opuści Kaplicę na zawsze!" },
                            { id: "npc_orb_3", name: "Krok 3: Nagrody za zakupy", desc: "Kupuj u niego czary. Po zakupieniu wybranych zaklęć wręczy ci Young Dragon Ring, Slumbering Dragoncrest Ring oraz gest Clandestine." },
                            { id: "npc_orb_4", name: "Krok 4: Finał", desc: "Wykup WSZYSTKIE jego czary i przekaż mu 4 Zwoje. Przeniesie się do Grand Archives jako przyzwanie, a po Twin Princes jego zwłoki znajdziesz na piętrze biblioteki." }
                        ]
                    },
                    {
                        name: "Cornyx z Great Swamp",
                        items: [
                            { id: "npc_corn_1", name: "Krok 1: Uwolnienie", desc: "Undead Settlement: Zeskocz z dachu budynku przy klifie i uwolnij Cornyxa z klatki." },
                            { id: "npc_corn_2", name: "Krok 2: Nauki Piromancji", desc: "Rozmawiaj z nim w Kaplicy (daje Pyromancy Flame i gest Welcome). Wręczaj mu Tomy Piromancji (oprócz Quelana i Izalith, których odmówi)." }
                        ]
                    },
                    {
                        name: "Karla",
                        items: [
                            { id: "npc_karla_1", name: "Krok 1: Uwolnienie z celi", desc: "Irithyll Dungeon: Zdobądź Jailer's Keyring w Profaned Capital, otwórz celę Karli na samym dole dungeonu i wybierz opcje wybaczenia." },
                            { id: "npc_karla_2", name: "Krok 2: Mroczna Magia", desc: "Przekazuj jej Mroczne Tomy Czasów (Londor i Deep) oraz Mroczne Tomy Piromancji (Quelana, Izalith, Grave Warden), których odmówili inni nauczyciele." }
                        ]
                    }
                ]
            },
            sorceries: {
                title: "Czary (34)",
                groups: [
                    {
                        name: "Sprzedawane przez Orbecka z Vinheim",
                        items: [
                            { id: "s_1", name: "Soul Arrow", desc: "Kup u Orbecka / Melkinty." },
                            { id: "s_2", name: "Great Soul Arrow", desc: "Kup u Orbecka." },
                            { id: "s_3", name: "Heavy Soul Arrow", desc: "Kup u Orbecka." },
                            { id: "s_4", name: "Great Heavy Soul Arrow", desc: "Kup u Orbecka." },
                            { id: "s_5", name: "Farron Dart", desc: "Kup u Orbecka." },
                            { id: "s_6", name: "Greater Farron Dart", desc: "Kup u Orbecka po przekazaniu Sage's Scroll." },
                            { id: "s_7", name: "Farron Flashsword", desc: "Kup u Orbecka." },
                            { id: "s_8", name: "Homing Soulmass", desc: "Kup u Orbecka po przekazaniu Logan's Scroll." },
                            { id: "s_9", name: "Homing Crystal Soulmass", desc: "Kup u Orbecka po przekazaniu Crystal Scroll." },
                            { id: "s_10", name: "Soul Spear", desc: "Kup u Orbecka po przekazaniu Logan's Scroll." },
                            { id: "s_11", name: "Crystal Soul Spear", desc: "Kup u Orbecka po przekazaniu Crystal Scroll." },
                            { id: "s_12", name: "Magic Weapon", desc: "Kup u Orbecka." },
                            { id: "s_13", name: "Great Magic Weapon", desc: "Kup u Orbecka po przekazaniu Farron Scroll." },
                            { id: "s_14", name: "Crystal Magic Weapon", desc: "Kup u Orbecka po przekazaniu Crystal Scroll." },
                            { id: "s_15", name: "Magic Shield", desc: "Kup u Orbecka." },
                            { id: "s_16", name: "Great Magic Shield", desc: "Kup u Orbecka." },
                            { id: "s_17", name: "Spook", desc: "Kup u Orbecka." },
                            { id: "s_18", name: "Aural Decoy", desc: "Kup u Orbecka." },
                            { id: "s_19", name: "Pestilent Mist", desc: "Kup u Orbecka po przekazaniu dowolnego zwoju." },
                            { id: "s_20", name: "Hidden Weapon", desc: "Kup u Orbecka po przekazaniu Farron Scroll." },
                            { id: "s_21", name: "Hidden Body", desc: "Kup u Orbecka po przekazaniu Farron Scroll." },
                            { id: "s_22", name: "Cast Light", desc: "Kup u Orbecka po przekazaniu Golden Scroll." },
                            { id: "s_23", name: "Repair", desc: "Kup u Orbecka po przekazaniu Golden Scroll." },
                            { id: "s_24", name: "Chameleon", desc: "Kup u Orbecka po przekazaniu Golden Scroll." }
                        ]
                    },
                    {
                        name: "Znajdźki, Dusz Bossów i Karli",
                        items: [
                            { id: "s_25", name: "Soul Stream", desc: "Grand Archives: W ukrytej komnacie za iluzoryczną ścianą." },
                            { id: "s_26", name: "Flash Sword", desc: "Road of Sacrifices: W wodzie przy ustronnym miejscu." },
                            { id: "s_27", name: "Twisted Wall of Light", desc: "Kup u Orbecka po przekazaniu Golden Scroll." },
                            { id: "s_28", name: "Deep Soul", desc: "Transmutacja Duszy Deacons of the Deep u Ludletha." },
                            { id: "s_29", name: "Great Deep Soul", desc: "Nagroda za 1. rangę w przymierzu Aldrich Faithful (10 Human Dregs)." },
                            { id: "s_30", name: "Affinity", desc: "Kup u Karli." },
                            { id: "s_31", name: "Dark Edge", desc: "Kup u Karli." },
                            { id: "s_32", name: "Great Soul Beacon", desc: "Profaned Capital: Ciało w bagnie z toksynami." },
                            { id: "s_33", name: "Soul Geyser", desc: "Lothric Castle: Skrzynia przed bossem Dragonslayer Armour." },
                            { id: "s_34", name: "White Dragon Breath", desc: "Transmutacja Duszy Oceirosa u Ludletha." }
                        ]
                    }
                ]
            },
            miracles: {
                title: "Cuda (35)",
                groups: [
                    {
                        name: "Sprzedawane przez Irinę / Karlę",
                        items: [
                            { id: "m_1", name: "Heal Aid", desc: "Kup u Iriny z Carim." },
                            { id: "m_2", name: "Heal", desc: "Kup u Iriny." },
                            { id: "m_3", name: "Med Heal", desc: "Kup u Iriny po przekazaniu Braille Divine Tome of Carim." },
                            { id: "m_4", name: "Great Heal", desc: "Irithyll of the Boreal Valley: W wodzie pod mostem z pająkami." },
                            { id: "m_5", name: "Soothing Sunlight", desc: "Transmutacja Duszy Dancera u Ludletha." },
                            { id: "m_6", name: "Replenishment", desc: "Kup u Iriny." },
                            { id: "m_7", name: "Bountiful Light", desc: "Kup u Iriny po przekazaniu Braille Divine Tome of Lothric." },
                            { id: "m_8", name: "Bountiful Sunlight", desc: "Transmutacja Duszy Rosarii u Ludletha." },
                            { id: "m_9", name: "Caressing Tears", desc: "Kup u Iriny." },
                            { id: "m_10", name: "Tears of Denial", desc: "Kup u Iriny po przekazaniu Braille Divine Tome of Carim." },
                            { id: "m_11", name: "Homeward", desc: "Kup u Iriny." },
                            { id: "m_12", name: "Force", desc: "Kup u Iriny po przekazaniu Braille Divine Tome of Carim." },
                            { id: "m_13", name: "Wrath of the Gods", desc: "Profaned Capital: Na dachu budynku w bagnie toksyn." },
                            { id: "m_14", name: "Emit Force", desc: "Nagroda od Siegwarda po rozmowie w kuchni w Irithyll." },
                            { id: "m_15", name: "Seek Guidance", desc: "Cathedral of the Deep: Przy ciele na dachu." },
                            { id: "m_16", name: "Sacred Oath", desc: "Nagroda za 1. rangę w przymierzu Warriors of Sunlight (10 Sunlight Medals)." },
                            { id: "m_17", name: "Magic Barrier", desc: "Kup u Iriny po przekazaniu Braille Divine Tome of Lothric." },
                            { id: "m_18", name: "Great Magic Barrier", desc: "Archdragon Peak: Za chowanym przejście przy ruinach." },
                            { id: "m_19", name: "Lightning Blade", desc: "Irithyll Dungeon: Przy windzie łączącej dungeony." },
                            { id: "m_20", name: "Darkmoon Blade", desc: "Nagroda za 2. rangę w przymierzu Blades of the Darkmoon (30 Proof of a Concord Kept)." },
                            { id: "m_21", name: "Blessed Weapon", desc: "Kup u Iriny po przekazaniu Braille Divine Tome of Lothric." },
                            { id: "m_22", name: "Lightning Spear", desc: "Farron Keep: Przy martwym demonie na szczycie." },
                            { id: "m_23", name: "Great Lightning Spear", desc: "Nagroda za 2. rangę w przymierzu Warriors of Sunlight (30 Sunlight Medals)." },
                            { id: "m_24", name: "Sunlight Spear", desc: "Transmutacja Duszy Soul of Cinder u Ludletha." },
                            { id: "m_25", name: "Lightning Stake", desc: "Smouldering Lake: Upuszczany przez wyłaniającego się Robaka (Carthus Worm)." },
                            { id: "m_26", name: "Lightning Storm", desc: "Transmutacja Duszy Nameless Kinga u Ludletha." },
                            { id: "m_27", name: "Divine Pillars of Light", desc: "Grand Archives: Na samej górze w klatce." },
                            { id: "m_28", name: "Atonement", desc: "Farron Keep: W trtrujacej jaskini." },
                            { id: "m_29", name: "Deep Protection", desc: "Kup u Karli po przekazaniu Deep Braille Divine Tome." },
                            { id: "m_30", name: "Gnaw", desc: "Kup u Karli po przekazaniu Deep Braille Divine Tome." },
                            { id: "m_31", name: "Dorrhy's Gnaw", desc: "Irithyll: Zbij grubą ewangelistkę za iluzoryczną ścianą." },
                            { id: "m_32", name: "Lifehunt Scythe", desc: "Transmutacja Duszy Aldricha u Ludletha." },
                            { id: "m_33", name: "Dead Again", desc: "Kup u Karli po przekazaniu Londor Braille Divine Tome." },
                            { id: "m_34", name: "Dark Blade", desc: "Kup u Karli po przekazaniu Londor Braille Divine Tome." },
                            { id: "m_35", name: "Vow of Silence", desc: "Kup u Karli po przekazaniu Londor Braille Divine Tome." }
                        ]
                    }
                ]
            },
            pyromancies: {
                title: "Piromancje (27)",
                groups: [
                    {
                        name: "Sprzedawane przez Cornyxa / Karlę",
                        items: [
                            { id: "p_1", name: "Fireball", desc: "Kup u Cornyxa." },
                            { id: "p_2", name: "Fire Orb", desc: "Kup u Cornyxa po przekazaniu Great Swamp Pyromancy Tome." },
                            { id: "p_3", name: "Bursting Fireball", desc: "Kup u Cornyxa po przekazaniu Great Swamp Pyromancy Tome." },
                            { id: "p_4", name: "Great Chaos Fire Orb", desc: "Kup u Cornyxa po przekazaniu Izalith Pyromancy Tome." },
                            { id: "p_5", name: "Chaos Bed Vestiges", desc: "Transmutacja Duszy Old Demon Kinga u Ludletha." },
                            { id: "p_6", name: "Fire Surge", desc: "Kup u Cornyxa." },
                            { id: "p_7", name: "Fire Whip", desc: "Kup u Cornyxa po przekazaniu Quelana Pyromancy Tome." },
                            { id: "p_8", name: "Fire Storm", desc: "Kup u Karli po przekazaniu Quelana Pyromancy Tome." },
                            { id: "p_9", name: "Chaos Storm", desc: "Kup u Karli po przekazaniu Izalith Pyromancy Tome." },
                            { id: "p_10", name: "Combustion", desc: "Kup u Cornyxa." },
                            { id: "p_11", name: "Great Combustion", desc: "Kup u Cornyxa po przekazaniu Great Swamp Pyromancy Tome." },
                            { id: "p_12", name: "Fire Arc", desc: "Kup u Cornyxa." },
                            { id: "p_13", name: "Boulder Heave", desc: "Transmutacja Duszy Stray Demona u Ludletha." },
                            { id: "p_14", name: "Flash Sweat", desc: "Kup u Cornyxa." },
                            { id: "p_15", name: "Profuse Sweat", desc: "Kup u Cornyxa po przekazaniu Great Swamp Pyromancy Tome." },
                            { id: "p_16", name: "Iron Flesh", desc: "Farron Keep: W trtrującym bagnie przy ciele." },
                            { id: "p_17", name: "Power Within", desc: "Grand Archives: Za ukrytą dźwignią w bibliotece." },
                            { id: "p_18", name: "Carthus Beacon", desc: "Kup u Cornyxa po przekazaniu Carthus Pyromancy Tome." },
                            { id: "p_19", name: "Carthus Flame Arc", desc: "Kup u Cornyxa po przekazaniu Carthus Pyromancy Tome." },
                            { id: "p_20", name: "Warmth", desc: "Nagroda za 2. rangę w przymierzu Mound-Makers (30 Vertebra Shackles)." },
                            { id: "p_21", name: "Poison Mist", desc: "Kup u Cornyxa po przekazaniu Great Swamp Pyromancy Tome." },
                            { id: "p_22", name: "Toxic Mist", desc: "Smouldering Lake: W lawie pod ruinami." },
                            { id: "p_23", name: "Acid Surge", desc: "Kup u Cornyxa po przekazaniu Carthus Pyromancy Tome." },
                            { id: "p_24", name: "Black Flame", desc: "Kup u Karli po przekazaniu Grave Warden Pyromancy Tome." },
                            { id: "p_25", name: "Black Fire Orb", desc: "Kup u Karli po przekazaniu Grave Warden Pyromancy Tome." },
                            { id: "p_26", name: "Rapport", desc: "Kup u Karli po przekazaniu Quelana Pyromancy Tome." },
                            { id: "p_27", name: "Sacred Flame", desc: "Smouldering Lake: W głębokiej lawie pod ruinami." }
                        ]
                    }
                ]
            },
            rings: {
                title: "Pierścienie (107)",
                groups: [
                    {
                        name: "Pierścienie Bazowe (NG) - Część 1",
                        items: [
                            { id: "r_1", name: "Life Ring", desc: "Klasa startowa lub zakup u Shrine Handmaiden." },
                            { id: "r_2", name: "Sun Princess Ring", desc: "Anor Londo: W komnacie Gwynevere po walce z Aldrichem." },
                            { id: "r_3", name: "Estus Ring", desc: "Firelink Shrine: Na dnie wieży (wymaga Tower Key)." },
                            { id: "r_4", name: "Ashen Estus Ring", desc: "Untended Graves: Przy ciele na samym początku lokacji." },
                            { id: "r_5", name: "Chloranthy Ring", desc: "Undead Settlement: Wieża przy demonie Siegwarda." },
                            { id: "r_6", name: "Havel's Ring", desc: "Transmutacja Duszy Stray Demona u Ludletha." },
                            { id: "r_7", name: "Ring of Favor", desc: "Irithyll: Po pokonaniu dwóch Sulyvahn's Beasts za iluzoryczną ścianą." },
                            { id: "r_8", name: "Prisoner's Chain", desc: "Transmutacja Duszy Championa Gundyra u Ludletha." },
                            { id: "r_9", name: "Ring of Steel Protection", desc: "Archdragon Peak: Przy wejściu do ruin." },
                            { id: "r_10", name: "Magic Stoneplate Ring", desc: "Consumed King's Garden: Przy ciele rycerza." },
                            { id: "r_11", name: "Flame Stoneplate Ring", desc: "Undead Settlement: Wiszące ciało na klatce." },
                            { id: "r_12", name: "Thunder Stoneplate Ring", desc: "Archdragon Peak: Przy ruinach na szczycie." },
                            { id: "r_13", name: "Dark Stoneplate Ring", desc: "Cathedral of the Deep: Przy ciele na balkonie." },
                            { id: "r_14", name: "Speckled Stoneplate Ring", desc: "Smouldering Lake: Za zniszczalną ścianą pod wyłaniającym się robakiem." },
                            { id: "r_15", name: "Bloodbite Ring", desc: "Undead Settlement: Upuszczany przez Szczura w kanałach." },
                            { id: "r_16", name: "Poisonbite Ring", desc: "Cathedral of the Deep: Przy ciele w bagnie za ogrem." },
                            { id: "r_17", name: "Cursebite Ring", desc: "Profaned Capital: W bagnie z toksynami." },
                            { id: "r_18", name: "Fleshbite Ring", desc: "Grand Archives: Na dachu za drewnianymi skrzyniami." },
                            { id: "r_19", name: "Knight's Ring", desc: "Lothric Castle: Przed wejściem do kaplicy Rycerzy." },
                            { id: "r_20", name: "Hunter's Ring", desc: "Grand Archives: Na szczycie wieży z trzema rycerzami." },
                            { id: "r_21", name: "Scholar Ring", desc: "Grand Archives: Przy dźwigni w bibliotece." },
                            { id: "r_22", name: "Priestess Ring", desc: "Kup u Shrine Handmaiden w Untended Graves." },
                            { id: "r_23", name: "Covetous Gold Serpent Ring", desc: "Profaned Capital: W celi Siegwarda." },
                            { id: "r_24", name: "Covetous Silver Serpent Ring", desc: "Firelink Shrine: Ukryty skarb na dachu za iluzoryczną ścianą." },
                            { id: "r_25", name: "Saint's Ring", desc: "Kup u Iriny z Carim." },
                            { id: "r_26", name: "Deep Ring", desc: "Cathedral of the Deep: Droga do Rosarii od diakona." },
                            { id: "r_27", name: "Darkmoon Ring", desc: "Nagroda za 1. rangę w przymierzu Blades of the Darkmoon (10 Proof of a Concord Kept)." },
                            { id: "r_28", name: "Young Dragon Ring", desc: "Klasa startowa Sorcerer lub dar od Orbecka po zakupie 3 czarów." },
                            { id: "r_29", name: "Bellowing Dragoncrest Ring", desc: "Irithyll Dungeon: Za zamkniętą kratą w dolnej hali z strażnikami." },
                            { id: "r_30", name: "Great Swamp Ring", desc: "Road of Sacrifices: W wodzie przy wielkim krabie." }
                        ]
                    },
                    {
                        name: "Pierścienie Bazowe (NG) - Część 2",
                        items: [
                            { id: "r_31", name: "Witch's Ring", desc: "Catacombs of Carthus: Przy ciele pod koniec katakumb." },
                            { id: "r_32", name: "Morne's Ring", desc: "Road of Sacrifices: Pod mostem z psem." },
                            { id: "r_33", name: "Ring of the Sun's First Born", desc: "Irithyll: Przed wejściem do Anor Londo na ambonie." },
                            { id: "r_34", name: "Lingering Dragoncrest Ring", desc: "Farron Keep: Zabij gigantycznego kraba na bagnie." },
                            { id: "r_35", name: "Sage Ring", desc: "Road of Sacrifices: W zalanej budowli." },
                            { id: "r_36", name: "Dusk Crown Ring", desc: "Irithyll Dungeon: Skrzynia w celi ze strażnikami." },
                            { id: "r_37", name: "Leo Ring", desc: "Irithyll: W skrzyni na piętrze nad kominkiem Siegwarda." },
                            { id: "r_38", name: "Wolf Ring", desc: "Nagroda za 2. rangę w przymierzu Watchdogs of Farron (30 Wolf's Blood Swordgrass)." },
                            { id: "r_39", name: "Hawk Ring", desc: "Upuszczany przez Olbrzyma strzelającego z łuku w Undead Settlement." },
                            { id: "r_40", name: "Hornet Ring", desc: "Untended Graves: Przy grobie przed ruinami." },
                            { id: "r_41", name: "Knight Slayer's Ring", desc: "Catacombs of Carthus: Zabij najeźdźcę Knight Slayer Tsoriga." },
                            { id: "r_42", name: "Ring of Evil Eye", desc: "Dostajesz od Anri w trakcie jej questa w Irithyll." },
                            { id: "r_43", name: "Farron Ring", desc: "Dostajesz od Hawkwooda w Firelink Shrine po pokonaniu Abyss Watchers." },
                            { id: "r_44", name: "Dragonscale Ring", desc: "Consumed King's Garden: W skrzyni na skrócie." },
                            { id: "r_45", name: "Horsehoof Ring", desc: "Kup u Patchesa w Firelink Shrine." },
                            { id: "r_46", name: "Wood Grain Ring", desc: "Kup u Shrine Handmaiden po przekazaniu Easterner's Ashes." },
                            { id: "r_47", name: "Flynn's Ring", desc: "Undead Settlement: Na dachu w budowli obok ognistego demona." },
                            { id: "r_48", name: "Magic Clutch Ring", desc: "Irithyll: Za iluzoryczną ścianą przed kościołem Yorshki." },
                            { id: "r_49", name: "Lightning Clutch Ring", desc: "Archdragon Peak: Przy drewnianym podeście." },
                            { id: "r_50", name: "Fire Clutch Ring", desc: "Undead Settlement: Na wiszącej desce przy moście." },
                            { id: "r_51", name: "Dark Clutch Ring", desc: "Profaned Capital: Przy ciele na moście z magiem." },
                            { id: "r_52", name: "Red Tearstone Ring", desc: "Lothric Castle: Na balkonie przed Dragonslayer Armour." },
                            { id: "r_53", name: "Blue Tearstone Ring", desc: "Daje Greirat w Firelink Shrine po odzyskaniu Loretta's Bone." },
                            { id: "r_54", name: "Lloyd's Sword Ring", desc: "Cathedral of the Deep: Na gzymsie nad pierwszym olbrzymem." },
                            { id: "r_55", name: "Lloyd's Shield Ring", desc: "Kup u Shrine Handmaiden po przekazaniu Paladin's Ashes." },
                            { id: "r_56", name: "Carthus Milkring", desc: "Catacombs of Carthus: W komnacie z wazami." },
                            { id: "r_57", name: "Carthus Bloodring", desc: "Catacombs of Carthus: Przy ciele za kościotrupami." },
                            { id: "r_58", name: "Pontiff's Right Eye", desc: "Irithyll: Zabij bestię na moście wejściowym." },
                            { id: "r_59", name: "Pontiff's Left Eye", desc: "Transmutacja Duszy Vordta u Ludletha." },
                            { id: "r_60", name: "Aldrich's Ruby", desc: "Anor Londo: Zabij wielkiego pająka w katedrze." },
                            { id: "r_61", name: "Aldrich's Sapphire", desc: "Cathedral of the Deep: Zabij wielkiego pająka w ruinach." },
                            { id: "r_62", name: "Silvercat Ring", desc: "Dostajesz od Sirris w Firelink Shrine po pomocy na moście." },
                            { id: "r_63", name: "Slumbering Dragoncrest Ring", desc: "Dostajesz od Orbecka po zakupie czarów typu Spook/Aural Decoy." },
                            { id: "r_64", name: "Obscuring Ring", desc: "Nagroda za 1. rangę w przymierzu Rosaria's Fingers (10 Pale Tongues)." },
                            { id: "r_65", name: "Untrue White Ring", desc: "Kup u Yurii z Londor w Firelink Shrine." },
                            { id: "r_66", name: "Untrue Dark Ring", desc: "Kup u Yurii z Londor w Firelink Shrine." },
                            { id: "r_67", name: "Reversal Ring", desc: "Anor Londo: W komnacie ślubnej za iluzoryczną ścianą." },
                            { id: "r_68", name: "Skull Ring", desc: "Upuszczany przez Ludletha z Courland po jego śmierci na tronie." },
                            { id: "r_69", name: "Calamity Ring", desc: "Archdragon Peak: Użyj gestu Path of the Dragon przed ołtarzem." },
                            { id: "r_70", name: "Ring of Sacrifice", desc: "Sprzedawany przez Yuria / Patches / Shrine Handmaiden lub znajdowany w świecie." }
                        ]
                    },
                    {
                        name: "Pierścienie Ekskluzywne dla NG+ (21)",
                        items: [
                            { id: "rng_1", name: "Life Ring +1", desc: "NG+: Undead Settlement za wieżą przy resztkach gilotyny." },
                            { id: "rng_2", name: "Chloranthy Ring +1", desc: "NG+: Irithyll za podium z statuą w katedrze." },
                            { id: "rng_3", name: "Havel's Ring +1", desc: "NG+: Archdragon Peak przy ruinach." },
                            { id: "rng_4", name: "Ring of Favor +1", desc: "NG+: Pontiff Sulyvahn arena - górne piętro." },
                            { id: "rng_5", name: "Ring of Steel Protection +1", desc: "NG+: Untended Graves za wieżą." },
                            { id: "rng_6", name: "Magic Stoneplate Ring +1", desc: "NG+: Farron Keep przy ruinach w bagnie." },
                            { id: "rng_7", name: "Flame Stoneplate Ring +1", desc: "NG+: Profaned Capital na dachu." },
                            { id: "rng_8", name: "Thunder Stoneplate Ring +1", desc: "NG+: Catacombs of Carthus przy potworze z wazami." },
                            { id: "rng_9", name: "Dark Stoneplate Ring +1", desc: "NG+: Lothric Castle pod mostem z smokami." },
                            { id: "rng_10", name: "Bloodbite Ring +1", desc: "NG+: Smouldering Lake przed krabami." },
                            { id: "rng_11", name: "Poisonbite Ring +1", desc: "NG+: Undead Settlement przy studni w osadzie." },
                            { id: "rng_12", name: "Cursebite Ring +1", desc: "NG+: Cathedral of the Deep przy dachu." },
                            { id: "rng_13", name: "Fleshbite Ring +1", desc: "NG+: High Wall of Lothric przy dachu." },
                            { id: "rng_14", name: "Covetous Gold Serpent Ring +1", desc: "NG+: Irithyll Dungeon na balkonie." },
                            { id: "rng_15", name: "Covetous Silver Serpent Ring +1", desc: "NG+: Farron Keep przy drabinie do wilka." },
                            { id: "rng_16", name: "Lingering Dragoncrest Ring +1", desc: "NG+: Road of Sacrifices przy rufie wargi." },
                            { id: "rng_17", name: "Sage Ring +1", desc: "NG+: Grand Archives na gzymsie." },
                            { id: "rng_18", name: "Wood Grain Ring +1", desc: "NG+: Consumed King's Garden za windą." },
                            { id: "rng_19", name: "Ring of Evil Eye +1", desc: "NG+: Deacons of the Deep arena za ołtarzem." },
                            { id: "rng_20", name: "Magic Clutch Ring +1", desc: "NG+: Irithyll przy ogrodzie." },
                            { id: "rng_21", name: "Lightning Clutch Ring +1", desc: "NG+: Wyvern arena w Archdragon Peak." }
                        ]
                    },
                    {
                        name: "Pierścienie Ekskluzywne dla NG++ (16)",
                        items: [
                            { id: "rng2_1", name: "Life Ring +2", desc: "NG++: Lothric Castle na dachu obok rycerza." },
                            { id: "rng2_2", name: "Life Ring +3", desc: "NG++: Untended Graves za tronem w nocy." },
                            { id: "rng2_3", name: "Chloranthy Ring +2", desc: "NG++: Road of Sacrifices pod drabiną." },
                            { id: "rng2_4", name: "Havel's Ring +2", desc: "NG++: Catacombs of Carthus na skałach." },
                            { id: "rng2_5", name: "Ring of Favor +2", desc: "NG++: Cathedral of the Deep na dachu." },
                            { id: "rng2_6", name: "Ring of Steel Protection +2", desc: "NG++: Catacombs of Carthus przy moście." },
                            { id: "rng2_7", name: "Magic Stoneplate Ring +2", desc: "NG++: Profaned Capital przy pająku." },
                            { id: "rng2_8", name: "Flame Stoneplate Ring +2", desc: "NG++: Smouldering Lake w ruinach." },
                            { id: "rng2_9", name: "Thunder Stoneplate Ring +2", desc: "NG++: Lothric Castle na balkonie." },
                            { id: "rng2_10", name: "Dark Stoneplate Ring +2", desc: "NG++: Farron Keep za ścianą z basztą." },
                            { id: "rng2_11", name: "Covetous Gold Serpent Ring +2", desc: "NG++: Archdragon Peak za Nameless Kingiem." },
                            { id: "rng2_12", name: "Covetous Silver Serpent Ring +2", desc: "NG++: Undead Settlement na dachu przy demonie." },
                            { id: "rng2_13", name: "Lingering Dragoncrest Ring +2", desc: "NG++: Grand Archives na dachu wieży." },
                            { id: "rng2_14", name: "Sage Ring +2", desc: "NG++: Consumed King's Garden przy halabardniku." },
                            { id: "rng2_15", name: "Wood Grain Ring +2", desc: "NG++: Irithyll of the Boreal Valley za ścianą." },
                            { id: "rng2_16", name: "Ring of Evil Eye +2", desc: "NG++: High Wall of Lothric w wieży z kluczem." }
                        ]
                    }
                ]
            }
        };
    }

    getCategories() {
        return this.categories;
    }
}

/**
 * Klasa zarządzająca stanem aplikacji i zapisem w localStorage.
 */
class StateManager {
    constructor() {
        this.storageKey = "ds3_checklist_state_full_v2";
        this.state = this.loadState();
    }

    loadState() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {};
    }

    saveState() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }

    isChecked(itemId) {
        return !!this.state[itemId];
    }

    toggleItem(itemId) {
        this.state[itemId] = !this.state[itemId];
        this.saveState();
        return this.state[itemId];
    }

    clearAll() {
        this.state = {};
        this.saveState();
    }
}

/**
 * Klasa odpowiedzialna za renderowanie interfejsu użytkownika.
 */
class UIRenderer {
    constructor(dataManager, stateManager) {
        this.dataManager = dataManager;
        this.stateManager = stateManager;
        this.tabContainer = document.getElementById("tabContainer");
        this.contentContainer = document.getElementById("contentContainer");
        this.activeTab = Object.keys(this.dataManager.getCategories())[0];
    }

    init() {
        this.renderTabs();
        this.renderContent();
        this.attachGlobalEvents();
    }

    renderTabs() {
        this.tabContainer.innerHTML = "";
        const categories = this.dataManager.getCategories();

        Object.keys(categories).forEach(key => {
            const button = document.createElement("button");
            button.className = `tab-btn ${key === this.activeTab ? 'active' : ''}`;
            button.textContent = categories[key].title;
            button.addEventListener("click", () => this.switchTab(key));
            this.tabContainer.appendChild(button);
        });
    }

    switchTab(categoryKey) {
        this.activeTab = categoryKey;
        this.renderTabs();
        this.renderContent();
    }

    renderContent() {
        this.contentContainer.innerHTML = "";
        const categories = this.dataManager.getCategories();

        Object.keys(categories).forEach(key => {
            const category = categories[key];
            const contentDiv = document.createElement("div");
            contentDiv.className = `tab-content ${key === this.activeTab ? 'active' : ''}`;

            category.groups.forEach(group => {
                const groupDiv = document.createElement("div");
                groupDiv.className = "checklist-group";
                
                const groupTitle = document.createElement("h3");
                groupTitle.textContent = group.name;
                groupDiv.appendChild(groupTitle);

                group.items.forEach(item => {
                    const isChecked = this.stateManager.isChecked(item.id);
                    const itemDiv = document.createElement("div");
                    itemDiv.className = `item ${isChecked ? 'completed' : ''}`;

                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.id = item.id;
                    checkbox.checked = isChecked;
                    checkbox.addEventListener("change", () => this.handleItemToggle(item.id, itemDiv));

                    const label = document.createElement("label");
                    label.htmlFor = item.id;
                    label.innerHTML = `${item.name} <span class="desc">${item.desc}</span>`;

                    itemDiv.appendChild(checkbox);
                    itemDiv.appendChild(label);
                    groupDiv.appendChild(itemDiv);
                });

                contentDiv.appendChild(groupDiv);
            });

            this.contentContainer.appendChild(contentDiv);
        });
    }

    handleItemToggle(itemId, itemDiv) {
        const newState = this.stateManager.toggleItem(itemId);
        if (newState) {
            itemDiv.classList.add("completed");
        } else {
            itemDiv.classList.remove("completed");
        }
    }

    attachGlobalEvents() {
        const resetBtn = document.getElementById("resetBtn");
        resetBtn.addEventListener("click", () => {
            if (confirm("Czy na pewno chcesz zresetować wszystkie zaznaczone pola?")) {
                this.stateManager.clearAll();
                this.renderContent();
            }
        });
    }
}

// Inicjalizacja po załadowaniu drzewa DOM
document.addEventListener("DOMContentLoaded", () => {
    const dataManager = new ChecklistData();
    const stateManager = new StateManager();
    const app = new UIRenderer(dataManager, stateManager);
    app.init();
});