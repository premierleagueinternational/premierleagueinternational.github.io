# -*- coding: utf-8 -*-
"""
Created on Fri May 22 10:57:37 2020

@author: olafw
"""

import pandas as pd
import geopandas

###Files import
#import current season teams to select only present teams

seas1 = pd.read_csv("./Season20192020.csv")
#import WGS84 location of stadiums
stadiums = pd.read_csv("./stadiums-with-GPS-coordinates.csv")

#select only stadiums in England (and Wales)
stadEngland = stadiums[stadiums["Country"] == 'England']

hWins = seas1[seas1["FTR"] == 'H'] #select only home wins
hWinsC = hWins["HomeTeam"].value_counts() #count home wins
# convert to dataframe 
hWinsCount = hWinsC.to_frame() #come back to data frame

hWinsCount['key'] = hWinsCount.index

winHomTeamLoc = pd.merge(hWinsCount, stadEngland, how='left', left_on='key', right_on='FDCOUK') #left join

#now, only teams that have match with stadiums should left (so only teams for selected seasons left)
#save as geoDataFrame
gdf = geopandas.GeoDataFrame(winHomTeamLoc, geometry=geopandas.points_from_xy(winHomTeamLoc.Longitude, winHomTeamLoc.Latitude))
gdf.to_file("TeamLocations.geojson", driver='GeoJSON')
