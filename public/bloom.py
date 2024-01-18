def sum(ip): 
 s=0 
 for i in ip: 
  s = s+int(i) 
 return s 

def h1(ip): 
 s = sum(ip) 
 return (s)%5 

def h2(ip): 
 s = sum(ip) 
 return (2*s+3)%5 

bit_vector = [0, 0, 0, 0, 0] 

while True: 
 ip = input("Enter a Integer ") 
 if(ip == ' '): 
    break 
 print("H1",h1(ip),"H2",h2(ip)) 
 bit_vector[h1(ip)]=1 
 bit_vector[h2(ip)]=1 
 print(bit_vector) 
 ip=input("Enter a string to test the membership ") 
 if(bit_vector[h1(ip)]==1 and bit_vector[h2(ip)]==1): 
     print(ip,"maybe present") 
 else: 
   print(ip,"is not present") 
