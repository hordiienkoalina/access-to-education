# Map: Access to Education in Brazil
#### Extension of @felipehlvo's project: An interactive map measuring spatial access to public high schools in Brazil.

Still figuring out how to cite GitHub repos 🤠 but for now:
- felipehlvo/access_to_education_map: An interactive map measuring spatial access to public high schools in Brazil. (2023). GitHub. https://github.com/felipehlvo/access_to_education_map

## Install
macOS:
```
python3 -m venv test-venv
source test-venv/bin/activate
pip3 install -r requirements.txt
python3 scripts/gpd_to_geojson_state.py
python3 scripts/gpd_to_geojson_microregion.py
python3 scripts/gpd_to_geojson_municipality.py
open index.html
```

Keeping it simple for now 🙏🏻
