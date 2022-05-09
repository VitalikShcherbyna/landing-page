export const getCities = [
  "Warszawa",
  "Kraków",
  "Łódź",
  "Trójmiasto",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Szczecin",
  "Bydgoszcz",
  "Lublin",
  "Białystok",
  "Katowice",
  "Gdynia",
  "Częstochowa",
  "Radom",
  "Sosnowiec",
  "Toruń",
  "Kielce",
  "Augustów",
  "Bartoszyce",
  "Bełchatów",
  "Biała Podlaska",
  "Białogard",
  "Bielawa",
  "Bielsk Podlaski",
  "Bielsko-Biała",
  "Biłgoraj",
  "Bochnia",
  "Bolesławiec",
  "Brodnica",
  "Brzeg",
  "Brzesko",
  "Bytom",
  "Będzin",
  "Chełm",
  "Chojnice",
  "Chorzów",
  "Chrzanów",
  "Ciechanów",
  "Cieszyn",
  "Czechowice-Dziedzice",
  "Czeladź",
  "Czerwionka-Leszczyny",
  "Działdowo",
  "Dzierżoniów",
  "Dąbrowa Górnicza",
  "Dębica",
  "Elbląg",
  "Ełk",
  "Giżycko",
  "Gliwice",
  "Gniezno",
  "Goleniów",
  "Gorlice",
  "Gorzów Wielkopolski",
  "Grodzisk Mazowiecki",
  "Grudziądz",
  "Głogów",
  "Inowrocław",
  "Iława",
  "Jarocin",
  "Jarosław",
  "Jastrzębie-Zdrój",
  "Jasło",
  "Jawor",
  "Jaworzno",
  "Jelenia Góra",
  "Kalisz",
  "Kluczbork",
  "Knurów",
  "Kobyłka",
  "Konin",
  "Koszalin",
  "Kołobrzeg",
  "Kościan",
  "Kościerzyna",
  "Kraśnik",
  "Krosno",
  "Krotoszyn",
  "Kutno",
  "Kwidzyn",
  "Kędzierzyn-Koźle",
  "Kętrzyn",
  "Kłodzko",
  "Legionowo",
  "Legnica",
  "Leszno",
  "Lidzbark",
  "Lubawa",
  "Lubin",
  "Lubliniec",
  "Luboń",
  "Lębork",
  "Malbork",
  "Marki",
  "Mielec",
  "Mikołów",
  "Mińsk Mazowiecki",
  "Myszków",
  "Mysłowice",
  "Mława",
  "Nidzica",
  "Nowa Ruda",
  "Nowa Sól",
  "Nowy Dwór Mazowiecki",
  "Nowy Sącz",
  "Nowy Targ",
  "Nysa",
  "Oleśnica",
  "Olkusz",
  "Olsztyn",
  "Opatów",
  "Opole",
  "Ostrowiec Świętokrzyski",
  "Ostrołęka",
  "Ostróda",
  "Ostrów Mazowiecka",
  "Ostrów Wielkopolski",
  "Otwock",
  "Oława",
  "Oświęcim",
  "Pabianice",
  "Piaseczno",
  "Piastów",
  "Piekary Śląskie",
  "Piotrków Trybunalski",
  "Piła",
  "Police",
  "Polkowice",
  "Pruszcz Gdański",
  "Pruszków",
  "Przasnysz",
  "Przemyśl",
  "Pszczyna",
  "Puławy",
  "Płock",
  "Racibórz",
  "Radomsko",
  "Reda",
  "Ruda Śląska",
  "Rumia",
  "Rybnik",
  "Rybno",
  "Rzeszów",
  "Sandomierz",
  "Sanok",
  "Siedlce",
  "Siemianowice Śląskie",
  "Sieradz",
  "Sierpc",
  "Skarżysko-Kamienna",
  "Skawina",
  "Skierniewice",
  "Sochaczew",
  "Sopot",
  "Stalowa Wola",
  "Starachowice",
  "Stargard",
  "Starogard Gdański",
  "Suwałki",
  "Swarzędz",
  "Szczecinek",
  "Szczytno",
  "Słupsk",
  "Tarnobrzeg",
  "Tarnowskie Góry",
  "Tarnów",
  "Tczew",
  "Tomaszów Mazowiecki",
  "Turek",
  "Tychy",
  "Wałbrzych",
  "Wałcz",
  "Wejherowo",
  "Wieliczka",
  "Wieluń",
  "Wodzisław Śląski",
  "Wołomin",
  "Września",
  "Wyszków",
  "Wągrowiec",
  "Włocławek",
  "Zabrze",
  "Zakopane",
  "Zamość",
  "Zawiercie",
  "Zduńska Wola",
  "Zgierz",
  "Zgorzelec",
  "Zielona Góra",
  "Zieluń",
  "Ząbki",
  "Łaziska Górne",
  "Łomża",
  "Łowicz",
  "Łuków",
  "Śrem",
  "Środa Wielkopolska",
  "Świdnica",
  "Świdnik",
  "Świebodzice",
  "Świecie",
  "Świnoujście",
  "Świętochłowice",
  "Żagań",
  "Żary",
  "Żory",
  "Żuromin",
  "Żyrardów",
  "Żywiec",
  "Przeczyce",
  "Pyrzowice",
  "Ożarowice",
  "Mierzęcice",
  "Andrychów",
  "Wadowice",
  "Zator",
  "Kalwaria Zebrzydowska",
  "Przeciszów",
  "Osiek",
  "Brzeszcze",
  "Myślenice",
  "Wodzisław Śląski",
]

const formatCities = (city1, city2) => `${city1}, ${city2}`

export const formatUserCities = (item) => (
  Array.isArray(item.profile?.cities) && item.profile?.cities.length > 0
    ? item.profile.cities.reduce(formatCities)
    : item.profile.cities
)
