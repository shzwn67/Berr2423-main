#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      AERO
#
# Created:     18/03/2024
# Copyright:   (c) AERO 2024
# Licence:     <your licence>
#-------------------------------------------------------------------------------

'''def BMI(Weight, Height):
    print("Your Weight is:",Weight)
    print("Your Height is:",Height)
    print("Your BMI is:",Weight/(Height * Height))

Weight=float(input("Enter your weight:"))
Height=float(input("Enter yout height:"))

BMI(Weight,Height)
'''


'''
def bmical(weight, height):
    #your_bmi = weight/(height * height)
    #print("Your BMI is:", your_bmi)
    print("Your BMI is:", weight/(height * height))

weight=float(input("Enter your weight in kg:"))
height=float(input("Enter your height in m:"))
bmical(weight,height)
'''

'''
def bmi(weight, height):
    print("Your Weight is:",weight)
    print("Your Height is:",height)
    #print("Your BMI is:",Weight/(Height * Height))
    total=weight/(height * height)
    return total

total = bmi
weight=float(input("Enter your weight:"))
height=float(input("Enter yout height:"))

total=bmi(weight,height)
print("Your BMI is:",total)
'''


def area(r,h):
    area=2*3.14*r*h + 2*3.14*r*r
    return area

def volume(r,h):
    volume = 3.14*r*r*h
    return volume

r = float(input("Enter the radius:"))
h = float(input("Enter the height:"))

a = area(r,h)
v = volume(r,h)
print("The radius is:",a)
print("The height is:",v)
