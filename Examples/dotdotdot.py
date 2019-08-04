a = [1, 2, 3]
b = [2, 3, 4]
print(a + b) # [1, 2, 3, 2, 3, 4]

a = [1, 2, 3]
b = a
c = [i for i in a]

print(a)
print(b)
print(c)

print('delete')
b.remove(1)

print(a)
print(b)
print(c)
