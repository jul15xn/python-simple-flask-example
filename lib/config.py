from jproperties import Properties 
configs = Properties() 

with open('config.txt', 'rb') as read_prop: 
    configs.load(read_prop) 
   
print("Loaded config.txt")