from bs4 import BeautifulSoup
import csv
import requests
import re

import pypyodbc as odbc
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

from datetime import datetime

import requests
chrome_path = r"C:\Projects\hack4Law\chromedriver_win32\chromedriver.exe"
options = Options()
#options.add_argument('--headless')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(service=Service(chrome_path), options=options)

link = "https://orzeczenia.ms.gov.pl/search/advanced/$N/$N/$N/06/$N/$N/$N/$N/$N/$N/$N/$N/$N/$N/$N/$N/$N/"
documentLinks = []



for i in range(50,500):
    url = link+str(i)
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, "html.parser")
    buttons = soup.find_all(class_='readon right')
    while len(buttons) == 0:
        time.sleep(10)
        soup = BeautifulSoup(driver.page_source, "html.parser")
        buttons = soup.find_all(class_='readon right')
    for button in buttons:
        documentLinks.append(button['href'])

data = []

for documentLink in documentLinks:
    driver.get("https://orzeczenia.ms.gov.pl/content" + documentLink[8:])
    soup = BeautifulSoup(driver.page_source, "html.parser")
    textElement = soup.find(class_="single_result")
    while not textElement:
        time.sleep(10)
        soup = BeautifulSoup(driver.page_source, "html.parser")
        textElement = soup.find(class_="single_result")
    data.append({"text": textElement.text.strip('\u200e')})

print(data)

filename = "orzeczenia2.csv"

with open(filename, 'w', newline='', encoding='utf-8') as csv_file:
    fieldnames = data[0].keys()
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

    writer.writeheader()

    for row in data:
        writer.writerow(row)

csv_file.close()
# shortcuts = re.findall(r'\b[a-z]{2,3}\.\s[^A-Z]', longText)
#
# shortcuts = [shortcut[:-2] for shortcut in shortcuts]
# unique_shortcuts = list(set(shortcuts))
#
# print(unique_shortcuts)

#['poz.', 'op.', 'st.', 'wyd.', 'ew.', 'tzw.', 'ref.', 'ind.', 'tj.', 'rep.', 'www.', 'nr.', 'pkt.', 'tw.', 'par.', 'adw.', 'zm.', 'ad.', 'rej.', 'art.', 'mkw.', 'zob.', 'ds.', 'ul.', 'hip.', 'at.', 'etc.', 'cyt.', 'pn.', 'min.', 'dn.', 'ws.', 'gr.', 'itp.', 'kc.', 'ur.', 'ii.', 'str.', 'tys.', 'pt.', 'sp.', 'ust.', 'apl.', 'del.', 'tzn.', 'ks.', 'kpc.', 'zw.', 'el.', 'zb.', 'im.', 'akt.', 'in.', 'ar.', 'ok.', 'kw.', 'red.', 'wg.', 'pow.', 'np.', 'ww.', 'dot.', 'dz.', 'zd.', 'lit.', 'por.', 'mgr.']






