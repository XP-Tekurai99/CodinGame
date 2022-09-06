import sys
import math

associations, files = int(input()), int(input())

assoc = {} # associates to each file extension

for i in range(associations):
    ext, mime = input().split() # file extension and MIME type
    assoc[ext.lower()] = mime 

for i in range(files):
    fname = input().lower().split('.')  # one file name per line
    ext = fname[-1] if len(fname) != 1 else None 
    # displays each of file name on a line with the corresponding MIME type
    print(assoc[ext] if ext in assoc else "UNKNOWN")
