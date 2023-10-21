import re
import warnings

def find_articles(df):
    warnings.filterwarnings("ignore")
    df['text'] = df['text'].str.lower()
    articles = []
    for row in df['text']:
        articles.append(re.findall('art. \d+ § \d|art. \d+', row))
    for i in range(len(articles)):
        articles[i] = set(articles[i])
        articles[i] = list(articles[i])
    print(articles)
    warnings.filterwarnings("default")
