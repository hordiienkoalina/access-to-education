import argparse
import geopandas as gpd
import pandas as pd
from shapely import wkt, ops

def load_and_process_data(file_path, geom_type, output_directory):
    """
    Load geographic data from a CSV, process geometries, and save as GeoJSON.

    Parameters:
    file_path (str): Path to the CSV file containing the data.
    geom_type (str): Description of the geometric data type (e.g., 'state', 'municipality', 'points').
    output_directory (str): Directory where the GeoJSON file will be saved.

    Returns:
    str: Path to the created GeoJSON file, indicating successful operation.
    """
    # Load data
    df = pd.read_csv(file_path)
    print(f"Data loaded for {geom_type}:\n{df}")

    # Convert WKT format to geometry
    df['geometry'] = df['geometry'].apply(wkt.loads)
    print(f"Geometry converted for {geom_type}.")

    # Check if geometry needs reorientation (applicable for polygon types)
    if geom_type in ['state', 'municipality', 'microregion', 'polygons']:
        df['geometry'] = df['geometry'].apply(
            lambda geom: ops.transform(lambda x, y, z=None: (x, y), ops.orient(geom))
        )

    # Convert to GeoDataFrame and set index
    gdf = gpd.GeoDataFrame(df, geometry='geometry')
    gdf['row_id'] = gdf.index + 1
    gdf.set_index('row_id', inplace=True)
    
    # Save to GeoJSON
    output_path = f"{output_directory}/access_data_{geom_type}.geojson"
    try:
        gdf.to_file(output_path, driver='GeoJSON')
        print(f"GeoJSON file has been created successfully at {output_path}!")
        return output_path
    except Exception as e:
        print(f"Failed to write GeoJSON file: {e}")
        return None

def main():
    """
    Main function to process geographic data for various types including points based on user input.
    """
    parser = argparse.ArgumentParser(description="Process geographic data into GeoJSON format.")
    parser.add_argument('base_path', type=str, help='Path to the folder containing the geographic csv files.')
    #parser.add_argument('csv_path', type=str, help='Path to the CSV file containing the geographic data.')
    #parser.add_argument('geom_type', type=str, choices=['state', 'municipality', 'microregion', 'points', 'polygons'], help='Type of geography data to process.')
    parser.add_argument('--output_dir', type=str, default='public/data', help='Output directory to save GeoJSON files.')

    args = parser.parse_args()

    for level in ['state', 'microregion', 'municipality']:
        csv_path = f"{args.base_path}/{level}_access_df.csv"
        output_path = load_and_process_data(csv_path, level, args.output_dir)
        if output_path:
            print(f"Processed {level} data successfully. Output at {output_path}")
        else:
            print(f"Processing failed for {level}.")
    
    for data_type in ['points', 'polygons']:
        csv_path = f"{args.base_path}/access_df_{data_type}.csv"
        output_path = load_and_process_data(csv_path, data_type, args.output_dir)
        if output_path:
            print(f"Processed {data_type} data successfully. Output at {output_path}")
        else:
            print(f"Processing failed for {data_type}.")

if __name__ == "__main__":
    main()