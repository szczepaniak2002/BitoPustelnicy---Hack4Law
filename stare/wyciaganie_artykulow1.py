
import pandas as pd
import re
def main():

    orzeczenia = pd.read_csv("orzeczenia2.csv")

    pd.set_option('display.max_colwidth', None)
    numery_artykulow = []
    numery_paragrafow = []
    szukany_wzor1 = r"art\. (\d+) § (\d+)"
    szukany_wzor2 = r"art\. (\d+)(?![§\d])"

    for i in range(orzeczenia.size):
        orzeczenie = str(orzeczenia.iloc[i])

        dopasowania1 = re.findall(szukany_wzor1, orzeczenie)
        dopasowania2 = re.findall(szukany_wzor2, orzeczenie)
        for dopasowanie1 in dopasowania1:
            numery_artykulow.append(dopasowanie1[0])
            numery_paragrafow.append(dopasowanie1[1])

        for dopasowanie2 in dopasowania2:
            numery_artykulow.append(dopasowanie2[0])
            numery_paragrafow.append(1)




    spis_artykulow_duplikaty = pd.DataFrame({
        'Artykul': numery_artykulow,
        'Paragraf': numery_paragrafow
    })
    wystepujace_artykuly_bez_duplikatow = spis_artykulow_duplikaty.drop_duplicates()
    wystepujace_artykuly_bez_duplikatow_posortowane= wystepujace_artykuly_bez_duplikatow.sort_values(['Artykul', 'Paragraf'])
    print(wystepujace_artykuly_bez_duplikatow_posortowane.head(100))

    # Tworzenie ramki danych z 4500 wierszami zerowymi
    artykuly_ramka = pd.DataFrame(0, index=range(4500), columns=[])

    # Iteracja przez wiersze z występującymi artykułami i dodawanie odpowiednich kolumn
    for index, row in wystepujace_artykuly_bez_duplikatow_posortowane.iterrows():
        nazwa_kolumny = f'art. {row["Artykul"]} par. {row["Paragraf"]}'
        artykuly_ramka[nazwa_kolumny] = 0










if __name__ =="__main__":
    main()
