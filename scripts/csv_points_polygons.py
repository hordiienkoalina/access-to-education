import argparse
import pandas as pd

def load_and_clean_data(filepath):
    """
    Load data from a CSV file, convert data types, and remove rows with NaN in 'points'.

    Parameters:
    filepath (str): Path to the CSV file containing the data.

    Returns:
    pd.DataFrame: Cleaned DataFrame with specified transformations applied.
    """
    df = pd.read_csv(filepath)
    df['points'] = df['points'].astype(str)
    df = df[df['points'] != 'nan']
    return df

def filter_and_save_data(df, columns, filename):
    """
    Filter DataFrame to keep only specified columns and save to a new CSV file.

    Parameters:
    df (pd.DataFrame): DataFrame to be filtered.
    columns (list): List of columns to retain.
    filename (str): Path where the CSV file will be saved.

    Returns:
    None
    """
    df_filtered = df[columns]
    df_filtered.to_csv(filename, index=False)

def main(args):
    """
    Main function to process data for geographic points and polygons based on user inputs.

    Parameters:
    args (Namespace): Command line arguments parsed by argparse.
    """
    # Load and clean data
    df = load_and_clean_data(args.input_filepath)

    # Columns to retain
    cols_to_keep = [ 
        'geometry', 'sector_id', 'name_state', 'abbrev_state', 'name_muni', 'neighborhood_name', 'n_people_15to17',
        'pct_black', 'pct_white', 'pct_indigenous', 'pct_pardos', 'pct_asian', 'pct_men',  'majority_race',
        'avg_monthly_earnings', 'avg_monthly_earnings_dollars', 'A', 'Q', 'H',
        'A_percentile', 'Q_percentile', 'H_percentile', 
        'avg_monthly_earnings_percentile', 'pct_men_percentile',
    ]

    # Define output file paths
    output_filepath_polygons = f"{args.output_dir}/access_df_polygons.csv"
    output_filepath_points = f"{args.output_dir}/access_df_points.csv"

    # Process polygon data
    filter_and_save_data(df, cols_to_keep, output_filepath_polygons)

    # Replace 'geometry' with 'points', remove 'points' column, and process point data
    df['geometry'] = df['points']
    df = df.drop(columns=['points'])
    filter_and_save_data(df, cols_to_keep, output_filepath_points)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Process and filter geographic data from CSV to CSV.")
    parser.add_argument('input_filepath', type=str, help='Path to the input CSV file containing geographic data.')
    parser.add_argument('--output_dir', type=str, default='public/data', help='Output directory to save CSV files.')
    args = parser.parse_args()
    main(args)