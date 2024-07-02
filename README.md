# Map: Access to Education in Brazil
### Extension of @felipehlvo's project: An interactive map measuring spatial access to public high schools in Brazil.

- felipehlvo/access_to_education_map: An interactive map measuring spatial access to public high schools in Brazil. (2023). GitHub. https://github.com/felipehlvo/access_to_education_map

### Install

#### Data Preparation

```
python3 scripts/csv_points_polygons.py [full path to access df csv]

python3 scripts/gpd_to_geojson.py [full path to folder containg csv files] 
```

#### Running the App

```
npm install
npm start
```