from posixpath import split
import functools

def credit_check(string):
    split_str = list(map(int,str(string)))

    for i in range(0, len(split_str), 2):
        if split_str[i] * 2 > 9:
            split_str[i] = functools.reduce(lambda agg, item : agg + item, list(map(int,str(split_str[i] * 2))))
        else :
            split_str[i] = split_str[i] * 2
    return "The number is valid!" if functools.reduce(lambda agg, item : agg + item, split_str) % 10 == 0 else "The number is invalid!"

