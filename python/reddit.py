import praw
import pandas as pd
import numpy as np
import matplotlib as plt
reddit = praw.Reddit(client_id="VxNJxCLCw8OIfB5PqrUIFg", 
                     client_secret="uRYevllCXluCxz5sqqbudMpZBkjBQw", 
                     user_agent="Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0")

criteria = input("Iveskite paieškos kriterijų: \n ")
all_posts = reddit.subreddit('all')
scraped_data = pd.DataFrame()
raw_list = []
def reddit_scrap(word):
    target = reddit.subreddit("all")

    for i in target.search(word, limit=10000):
        raw_list.append(i.title.split())
        raw_list.append(i.selftext.split())
    
        

#words_list = set(raw_list)
reddit_scrap(criteria)
#print(str(raw_list.__sizeof__()))
#print(len(raw_list))
#print(raw_list)

def freq(raw_list):

    for words in raw_list :
        print('Frequency of ', words , 'is :', raw_list.count(words))
 
print(freq(raw_list))