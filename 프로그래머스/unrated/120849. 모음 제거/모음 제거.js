function solution(my_string) {
    let letter = ['a','e','i','o','u']
    letter.map((e)=>{
        my_string = my_string.replaceAll(e,'')
    })
    return my_string;
}