import sys
import math

n = int(input()) # number of horses
l = [] # stores the strength of each horse
m = 10000000 # maximum strength

# Input Parsing
for i in range(n):
    pi = int(input())
    l.append(pi)

l.sort() # improves operation time

for i in range(n):
    result = abs(l[i] - l[i - 1])
    if result < m:
     m = result

# Answer
print(m)
