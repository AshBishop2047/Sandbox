function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

    // split turns multiple words in a string into substrings, 
    // map creates new arrays out of the first letter of the substrings which are capitalized by toUpperCase
    // join concatenates the substrings into one string, with the . as a divider

}