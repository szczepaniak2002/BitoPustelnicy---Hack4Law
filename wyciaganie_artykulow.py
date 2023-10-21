
import pandas as pd
import re
def main():

    orzeczenia = pd.read_csv("orzeczenia2.csv")

    pd.set_option('display.max_colwidth', None)
    numery_artykulow = []
    numery_paragrafow = []
    szukany_wzor = r"art\. (\d+) § (\d+)"

    for i in range(orzeczenia.size):
        orzeczenie = str(orzeczenia.iloc[i])

        dopasowania = re.findall(szukany_wzor, orzeczenie)

        for dopasowanie in dopasowania:
            numery_artykulow.append(dopasowanie[0])
            numery_paragrafow.append(dopasowanie[1])

    spis_artykulow_duplikaty = pd.DataFrame({
        'Artykul': numery_artykulow,
        'Paragraf': numery_paragrafow
    })
    wystepujace_artykuly_bez_duplikatow = spis_artykulow_duplikaty.drop_duplicates()
    wystepujace_artykuly_i_duplikaty.head()
    #wystepujace_artykuly_i_duplikaty_posortowane= wystepujace_artykuly_i_duplikaty.sort_values(['Fee', 'Discount'])

    print(wystepujace_artykuly_i_duplikaty)




if __name__ =="__main__":
    main()