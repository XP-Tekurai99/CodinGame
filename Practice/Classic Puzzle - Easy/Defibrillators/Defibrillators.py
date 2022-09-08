import sys
import math

# Trigometric Distance Function
def distance(longa, lata, longb, latb):
    x = (longb - longa) * math.cos((lata + latb) / 2)
    y = latb - lata
    return 6371 * math.sqrt(x * x + y * y)

lon, lat, n = float(input().replace(",",".")), float(input().replace(",",".")), int(input())
min, res = None, None

for i in range(n):
    df = input().replace(",",".").split(";")
    d = distance(lon, lat, float(df[4]), float(df[5]))
    if (min == None) or (d < min):
        min, res = d, df[1]

# Answer
print(res)
