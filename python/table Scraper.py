# Import libraries
import requests 
from bs4 import BeautifulSoup
import pandas as pd 


#####################################
#Create an URL object
for x in range(1, 10):
    url= 'http://openinsider.com/screener?s=&o=&pl=&ph=&ll=&lh=&fd=0&fdr=&td=0&tdr=&fdlyl=&fdlyh=&daysago=&xp=1&xs=1&vl=&vh=&ocl=&och=&sic1=-1&sicl=100&sich=9999&isceo=1&iscoo=1&iscfo=1&grp=0&nfl=&nfh=&nil=&nih=&nol=&noh=&v2l=&v2h=&oc2l=&oc2h=&sortcol=0&cnt=1000&page='
    url = url + str(x)
    #Create object page
    page = requests.get(url)


    #####################################
    # parser-lxml = Change html to Python friendly format
    #Obtain page's information
    soup = BeautifulSoup(page.text, 'lxml')
    soup


    #####################################
    # Obtain information from tag <table>
    table1 = soup.find('table',{"class": "tinytable" })
    table1


    #####################################
    # Obtain every titlte of columns with tag <th>
    headers = []
    for i in table1.find_all('th'): 
        title = i.text
        headers.append(title)


    #####################################
    # Convert wrapped text in column 13 into one line text
    headers[13] = 'Tests/1M pop'


    #####################################
    #Create a dataframe
    mydata = pd.DataFrame(columns = headers)


    #####################################
    # Create a for loop to fill mydata
    for j in table1.find_all('tr')[1:]:
        row_data = j.find_all('td')
        row = [i.text for i in row_data]
        length = len(mydata)
        mydata.loc[length] = row


    #####################################
    # Export to csv
    mydata.to_csv('sec4trades.csv', mode='a', index=False)

    # Try to read csv
    mydata2 = pd.read_csv('sec4trades.csv')
    mydata = None



    #####################################


    #####################################


    #####################################



    #####################################


    #####################################


    #####################################


    #####################################