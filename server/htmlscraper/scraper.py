import json
import requests
from bs4 import BeautifulSoup

def parser(query,steps):
    r = requests.get('https://developer.edamam.com/edamam-docs-recipe-api').text
    soup = BeautifulSoup(r, 'html5lib')
    label = soup.find('h2', text=query).find_next_sibling('p').find_next_sibling('table')
    data = [word.text.strip() for word in label.find_all('td')]
    return data[steps//2::steps]
 


if __name__ == '__main__':
    diet = parser('Diet Labels', 4)
    health = parser('Health Labels', 4)
    mealType = parser('Meal Types', 2)
    dishType = parser('Dish Types', 2)
    cuisineType = parser('Cuisine Types', 2)

    json_data = {
        'diet': diet,
        'health': health,
        'mealType': mealType,
        'dishType': dishType,
        'cuisineType': cuisineType
    }

    with open('params.json', 'w') as jsonFile:
        json.dump(json_data, jsonFile, indent=2)
        print('file created')
