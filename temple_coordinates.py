import requests
import time

# List of temple place names extracted from your URLs
temple_places = [
    "Ulagalantha Perumal Temple Kanchipuram Tamil Nadu",
    "Paramekkavu Bhagavathy Temple Thrissur Kerala",
    "Dhanwanthari Temple Nelluvai Thrissur District Kerala",
    "Payyanur Sri Subramanya Swami Temple Kerala",
    "Mannarasala Nagaraja Temple Alappuzha Kerala",
    "Sri Mridanga Saileswari Temple Muzhakkunnu Kannur Kerala",
    "Sri Appakkudathaan Temple Cauveri River near Trichy",
    "Perur Pateeswarar Temple Coimbatore Tamil Nadu",
    "Triprayar Sri Rama Temple Thrissur Kerala",
    "Vaidhya Veeraraghavar Temple Tiruvallur Tamil Nadu",
    "Srivilliputhur Temple Tamil Nadu",
    "Srisailam Mallikarjuna Temple Kurnool Andhra Pradesh",
    "Thiruvilwamala Vilwadrinatha Temple Thrissur Kerala"
]

def get_lat_lon(place_name):
    """Fetch latitude and longitude for a place using Nominatim API"""
    url = 'https://nominatim.openstreetmap.org/search'
    params = {
        'q': place_name,
        'format': 'json',
        'limit': 1
    }
    try:
        response = requests.get(url, params=params, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        data = response.json()
        if data:
            lat = float(data[0]['lat'])
            lon = float(data[0]['lon'])
            return lat, lon
        else:
            return None, None
    except Exception as e:
        print(f"Error fetching data for {place_name}: {e}")
        return None, None

def main():
    temple_coordinates = []
    for place in temple_places:
        lat, lon = get_lat_lon(place)
        print(f"{place} -> Latitude: {lat}, Longitude: {lon}")
        temple_coordinates.append({
            "temple_name": place,
            "latitude": lat,
            "longitude": lon
        })
        time.sleep(1)  # polite delay to avoid hitting API rate limits

    # Save or return the data as needed
    # For example, write to a JSON file
    import json
    with open("temple_coordinates.json", "w") as f:
        json.dump(temple_coordinates, f, indent=4)
    print("Coordinates saved to temple_coordinates.json")

if __name__ == "__main__":
    main()
